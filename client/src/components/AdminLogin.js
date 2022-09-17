import { useState } from "react";
// import styles from "../CSS/UserLogin.module.css";
import styles from "../CSS/UserRegister.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AdminLogin() {
  const [aadharNumber, setAadharNumber] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  function handleForm(e) {
    e.preventDefault();
    const data = {
      aadharNumber: aadharNumber,
      password: password,
    };
    axios
      .post("http://localhost:3002/adminLogin", data)
      .then((res) => {
        // console.log(res.data);
        if (res.data != false) {
          history.push(`/admin/home/${res.data}`);
        } else {
          console.log("admin not found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={`${styles.comp}`}>
      <form
        className={`${styles.form}`}
        action=""
        method="post"
        onSubmit={(e) => {
          handleForm(e);
        }}
      >
        <input
          type="number"
          name="aadharNumber"
          id=""
          onChange={(e) => setAadharNumber(e.target.value)}
          placeholder="Aadhar Number"
        />
        <br />
        <input
          type="text"
          name="password"
          id=""
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdminLogin;
