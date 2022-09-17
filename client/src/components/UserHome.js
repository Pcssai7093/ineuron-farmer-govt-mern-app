import styles from "../CSS/Home.module.css";
import { Link, useParams } from "react-router-dom";

function UserHome() {
  const { userId } = useParams();
  return (
    <div className={styles.cont}>
      <div className={styles.links}>
        <Link to={`/user/crops/${userId}`}>
          <div className={styles.card}>Crops</div>
        </Link>
        <Link to={`/user/schemes/${userId}`}>
          <div className={styles.card}>Schemes</div>
        </Link>
        <Link to={`/user/application/${userId}`}>
          <div className={styles.card}>Applications</div>
        </Link>
      </div>
    </div>
  );
}

export default UserHome;
