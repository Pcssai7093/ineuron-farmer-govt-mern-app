import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../CSS/UserRegister.module.css";

function AddScheme({ ReRender }) {
  const [name, setName] = useState();
  const [launchedOn, setLaunchedOn] = useState();
  const [applyBy, setApplyBy] = useState();
  const [beneficiaries, setBeneficiaries] = useState();
  const [addSchemeDisplay, setAddSchemeDisplay] = useState(false);
  // const [status, setStatus] = useState();

  function formHandle(e) {
    e.preventDefault();
    const data = {
      name: name,
      launchedOn: launchedOn,
      applyBy: applyBy,
      beneficiaries: beneficiaries,
      status: "Not Applied",
    };
    console.log(data);
    axios
      .post("http://localhost:3002/schemes", data)
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
          if (addSchemeDisplay == false) setAddSchemeDisplay(true);
          else {
            setAddSchemeDisplay(false);
          }
        }}
      >
        <i class="fa fa-plus" aria-hidden="true">
          Add Schemes
        </i>
      </button>
      {addSchemeDisplay && (
        <form
          id="form"
          action=""
          method="post"
          onSubmit={(e) => {
            formHandle(e);
          }}
          className={`${styles.form}`}
        >
          {/* <label htmlFor="name">Scheme name</label> */}
          <input
            required="True"
            type="text"
            name="name"
            id=""
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Scheme name"
          />
          <br />
          {/* <label htmlFor="launchedOn">Launched On</label> */}
          <input
            required="True"
            type="date"
            name="launchedOn"
            id=""
            onChange={(e) => {
              setLaunchedOn(e.target.value);
            }}
            placeholder="Launched On"
          />
          <br />
          {/* <label htmlFor="applyBy">Apply By</label> */}
          <input
            required="True"
            type="date"
            name="applyBy"
            id=""
            onChange={(e) => {
              setApplyBy(e.target.value);
            }}
            placeholder="Apply By"
          />
          <br />
          {/* <label htmlFor="beneficiaries">Beneficiaries</label> */}
          <input
            required="True"
            type="text"
            name="beneficiaries"
            id=""
            onChange={(e) => {
              setBeneficiaries(e.target.value);
            }}
            placeholder="Beneficiaries"
          />
          <br />

          <button type="submit">Submit</button>
          <button type="reset">Reset Form</button>
        </form>
      )}
    </div>
  );
}

export default AddScheme;
