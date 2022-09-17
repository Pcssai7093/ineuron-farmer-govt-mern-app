import { useEffect, useState } from "react";
import styles from "../CSS/UserRegister.module.css";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
function UserRegister() {
  let history = useHistory();
  const [userData, setUserData] = useState({});
  const [name, setName] = useState();
  const [aadharNumber, setAadharNumber] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const [registrationError, setRegistrationError] = useState(false);

  //   useEffect(() => {
  //     if (name) console.log(name);
  //   }, [name]);

  async function handleForm(e) {
    e.preventDefault();
    const data = {
      name: name,
      aadharNumber: aadharNumber,
      password: password,
      // cpassword: cpassword,
    };
    setUserData(data);

    await axios
      .post("http://localhost:3002/addUser", data)
      .then((res) => {
        const userId = res.data;
        if (userId != false) history.push(`/user/home/${userId}`);
        else {
          setRegistrationError(true);
        }
      })
      .catch((err) => {
        // console.log(res.data);
        // console.log(err);
      });
  }
  return (
    <div className={`${styles.comp}`}>
      <Link to="/">
        <i className="fa fa-home fa-2x" aria-hidden="true"></i>
      </Link>
      <div className={`${styles.form}`}>
        <form
          action=""
          method="post"
          onSubmit={(e) => {
            handleForm(e);
          }}
        >
          <h1>Register</h1>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <br />

          <input
            type="number"
            name="aadharNumber"
            id="aadharNumber"
            onChange={(e) => setAadharNumber(e.target.value)}
            placeholder="Aadhar Number"
          />
          <br />

          <input
            type="text"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <br />

          <input
            type="text"
            name="cpassword"
            id="cpassword"
            onChange={(e) => setCpassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <br />

          <button type="submit">Submit</button>
          {registrationError && <div>Entered Adhaar already exists</div>}
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
