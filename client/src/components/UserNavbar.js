import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "../CSS/Navbar.module.css";
function UserNavbar() {
  const { userId } = useParams();
  const [userName, setUserName] = useState();
  axios
    .get(`http://localhost:3002/getUsers/${userId}`)
    .then((result) => {
      if (result.data != false) setUserName(result.data);
      else {
        console.log("user not found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className={styles.body}>
      <h1>Welcome {userName}</h1>
      <br />
      <Link to={`/user/home/${userId}`}>
        <i class="fa fa-home fa-2x" aria-hidden="true"></i>
      </Link>
      <Link to={`/`}>
        <i class="fa fa-sign-out fa-2x" aria-hidden="true"></i>
      </Link>
    </div>
  );
}

export default UserNavbar;
