//* database collections
const userData = require("./db Schemas/User");
const adminData = require("./db Schemas/Admin");
const schemeData = require("./db Schemas/Scheme");
const cropData = require("./db Schemas/Crop");
const applicationData = require("./db Schemas/Application");

const cors = require("cors");

const express = require("express");
const app = express();
app.use(cors());

app.use(express.json());

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/farmerproject")
  .then((res) => {
    app.listen(3002, () => {
      console.log("server and database are running");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/addUser", async (req, res) => {
  // console.log(req.body);
  const user = new userData(req.body);
  user
    .save()
    .then((result) => {
      res.send(result._id);
    })
    .catch((err) => {
      // console.log(err);
      res.send(false);
    });
});

app.get("/getUsers", async (req, res) => {
  await adminData
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send("error");
    });
});

app.get("/getUsers/:id", async (req, res) => {
  const userId = req.params.id;
  await userData
    .find({ _id: userId })
    .then((data) => {
      res.send(data[0].name);
    })
    .catch((err) => {
      res.send(false);
    });
});

app.post("/userLogin", async (req, res) => {
  // console.log(req.body);
  await userData
    .find({
      $and: [
        {
          aadharNumber: req.body.aadharNumber,
        },
        {
          password: req.body.password,
        },
      ],
    })
    .then((result) => {
      if (result.length == 1) {
        res.send(result[0]._id);
      } else {
        res.send(false);
      }
    });
});

app.get("/crops", async (req, res) => {
  await cropData
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(false);
    });
});

app.post("/crops", async (req, res) => {
  const data = new cropData(req.body);
  data
    .save()
    .then((result) => {
      res.send(true);
    })
    .catch((err) => {
      res.send(false);
    });
});

app.get("/schemes", async (req, res) => {
  schemeData
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(false);
    });
});

app.post("/schemes", async (req, res) => {
  const data = new schemeData(req.body);
  data
    .save()
    .then((result) => {
      res.send(true);
    })
    .catch((err) => {
      res.send(false);
    });
});

app.get("/applications", async (req, res) => {
  await applicationData
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(false);
    });
});
//  ! unfinished
app.get("/applications/:userId", async (req, res) => {
  const userId = req.params.userId;
  userData
    .find({ _id: userId })
    .populate("applications")
    .then(async (result) => {
      // console.log(result[0].applications.length);
      // res.send(result);
      let data = [];
      let size = result[0].applications.length;
      let applData = result[0].applications;
      for (let i = 0; i < size; i++) {
        let schemeName;
        await schemeData
          .find({ _id: applData[i].scheme })
          .then((result) => {
            schemeName = result[0].name;
          })
          .catch((err) => {
            console.log(err);
          });
        let obj = {
          status: applData[i].isApproved,
          appliedOn: applData[i].createdAt,
          schemeName: schemeName,
        };
        data.push(obj);
      }
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      console.log("hii");
      res.send(false);
    });
});
app.get("/:userId/:schemeId/apply", async (req, res) => {
  const userId = req.params.userId;
  const schemeId = req.params.schemeId;
  console.log(userId, schemeId);

  const data = new applicationData({
    scheme: schemeId,
    user: userId,
  });
  data
    .save()
    .then(async (result) => {
      const applicationId = result._id;
      await userData
        .updateOne({ _id: userId }, { $push: { applications: applicationId } })
        .then((result2) => {
          res.send(true);
        })
        .catch((err) => {
          res.send(false);
        });
    })
    .catch((err) => {
      res.send(false);
    });
});

app.post("/adminLogin", async (req, res) => {
  console.log(req.body);
  console.log(adminData);
  await adminData
    .find({
      $and: [
        {
          aadharNumber: req.body.aadharNumber,
        },
        {
          password: req.body.password,
        },
      ],
    })
    .then((result) => {
      console.log(result);
      if (result.length > 0) {
        res.send(result[0]._id);
      } else {
        res.send(false);
      }
    });
});

app.get("/getAdmins/:id", async (req, res) => {
  const adminId = req.params.id;
  adminData
    .find({ _id: adminId })
    .then((result) => {
      console.log(result);
      res.send(result[0].name);
    })
    .catch((err) => {
      res.send(false);
    });
});

app.get("/applicationApprove/:applicationId", async (req, res) => {
  const applicationId = req.params.applicationId;
  await applicationData
    .updateOne({ _id: applicationId }, { isApproved: "approved" })
    .then((result) => {
      res.send(true);
    })
    .catch((err) => {
      res.send(false);
    });
});
