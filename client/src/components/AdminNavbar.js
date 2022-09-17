import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "../CSS/Navbar.module.css";

function AdminNavbar() {
  const { adminId } = useParams();
  const [adminName, setAdminName] = useState();
  axios
    .get(`http://localhost:3002/getAdmins/${adminId}`)
    .then((result) => {
      if (result.data != false) {
        setAdminName(result.data);
      } else {
        console.log("Admin not found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className={styles.body}>
      {/* <Link to="/user/Home">Welcome {userName}</Link> */}
      <h1>Welcome {adminName}</h1>
      <br />
      <Link to={`/admin/home/${adminId}`}>
        <i class="fa fa-home fa-2x" aria-hidden="true"></i>
      </Link>
      <Link to={`/admin/login`}>
        <i class="fa fa-sign-out fa-2x" aria-hidden="true"></i>
      </Link>
    </div>
  );
}

export default AdminNavbar;
