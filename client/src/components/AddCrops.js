import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../CSS/UserRegister.module.css";

function AddCrops({ ReRender }) {
  const [name, setName] = useState();
  const [cropType, setCropType] = useState();
  const [suitableSoil, setSuitableSoil] = useState();
  const [suitableClimate, setSuitableClimate] = useState();
  const [suitableSeason, setSuitableSeason] = useState();
  const [addCropDisplay, setAddCropDisplay] = useState(false);

  function formHandle(e) {
    e.preventDefault();
    const data = {
      name: name,
      cropType: cropType,
      suitableSoil: suitableSoil,
      suitableClimate: suitableClimate,
      suitableSeason: suitableSeason,
    };
    console.log(data);
    axios
      .post("http://localhost:3002/crops", data)
      .then((result) => {
        if (result.data == true) {
          ReRender();
          console.log("scheme added");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.body}>
      <button
        className={styles.displayToggle}
        onClick={() => {
          if (addCropDisplay == false) setAddCropDisplay(true);
          else {
            setAddCropDisplay(false);
          }
        }}
      >
        <i class="fa fa-plus" aria-hidden="true">
          Add Crops
        </i>
      </button>
      {addCropDisplay && (
        <form
          id="form"
          action=""
          method="post"
          onSubmit={(e) => {
            formHandle(e);
          }}
          className={`${styles.form}`}
        >
          {/* <label htmlFor="name">Crop name</label> */}
          <h2>Add Crops</h2>
          <input
            required="True"
            type="text"
            name="name"
            id=""
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Crop name"
          />
          <br />
          {/* <label htmlFor="launchedOn">Crop Type</label> */}
          <input
            required="True"
            type="text"
            name="launchedOn"
            id=""
            onChange={(e) => {
              setCropType(e.target.value);
            }}
            placeholder="Crop Type"
          />
          <br />
          {/* <label htmlFor="applyBy">Suitable Soil</label> */}
          <input
            required="True"
            type="text"
            name="applyBy"
            id=""
            onChange={(e) => {
              setSuitableSoil(e.target.value);
            }}
            placeholder="Suitable Soil"
          />
          <br />
          {/* <label htmlFor="beneficiaries">Suitable Climate</label> */}
          <input
            required="True"
            type="text"
            name="beneficiaries"
            id=""
            onChange={(e) => {
              setSuitableClimate(e.target.value);
            }}
            placeholder="Suitable Climate"
          />
          <br />
          {/* <label htmlFor="status">Suitable Season</label> */}
          <input
            required="True"
            type="text"
            name="status"
            id=""
            onChange={(e) => {
              setSuitableSeason(e.target.value);
            }}
            placeholder="Suitable Season"
          />
          <br />
          <button type="submit">Submit</button>
          <button type="reset">Reset Form</button>
        </form>
      )}
    </div>
  );
}

export default AddCrops;
