import { useState } from "react";
// import styles from "../CSS/UserLogin.module.css";
import styles from "../CSS/UserRegister.module.css";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [aadharNumber, setAadharNumber] = useState();
  const [password, setPassword] = useState();
  const [loginError, setLoginError] = useState(false);
  const history = useHistory();

  function handleForm(e) {
    e.preventDefault();
    const data = {
      aadharNumber: aadharNumber,
      password: password,
    };
    axios
      .post("http://localhost:3002/userLogin", data)
      .then((res) => {
        if (res.data != false) {
          console.log(res.data);
          history.push(`/user/home/${res.data}`);
        } else {
          setLoginError(true);
          // console.log("user not found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={`${styles.comp}`}>
      <Link to="/">
        <i className="fa fa-home fa-2x" aria-hidden="true"></i>
      </Link>

      <form
        className={`${styles.form}`}
        action=""
        method="post"
        onSubmit={(e) => {
          handleForm(e);
        }}
      >
        <h1>Login</h1>
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
        {loginError && <div>Entered credentials doesn't exists</div>}
      </form>
    </div>
  );
}

export default UserLogin;
