import styles from "../CSS/Home.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function AdminHome() {
  const { adminId } = useParams();
  return (
    <div className={styles.cont}>
      <div className={styles.links}>
        <Link to={`/admin/crops/${adminId}`}>
          <div className={styles.card}>Crops</div>
        </Link>
        <Link to={`/admin/schemes/${adminId}`}>
          <div className={styles.card}>Schemes</div>
        </Link>
        <Link to={`/admin/applications/${adminId}`}>
          <div className={styles.card}>Applications</div>
        </Link>
      </div>
    </div>
  );
}

export default AdminHome;
