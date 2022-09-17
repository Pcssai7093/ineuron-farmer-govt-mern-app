import styles from "../CSS/LandingPage.module.css";
import { Link } from "react-router-dom";
function UserLandingPage() {
  return (
    <div className={styles.body}>
      <h1>Welcome to DeshBhoomi</h1>

      <div className={styles.links}>
        <Link to="/user/login">
          <button>Login</button>
        </Link>

        <Link to="/user/reg">
          <button>Register</button>
        </Link>

        <Link to="/admin/login">
          <button>Admin Login</button>
        </Link>
      </div>
    </div>
  );
}

export default UserLandingPage;
