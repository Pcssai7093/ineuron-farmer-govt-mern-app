import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../CSS/Crops.module.css";
import { useEffect, useState } from "react";
function ApplicationUserUI() {
  const { userId } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(`http://localhost:3002/applications/${userId}`).then((result) => {
      if (result.data != false) {
        setData(result.data);
      } else {
        console.log("error in finding application");
      }
    });
  }, []);
  // console.log(data);
  return (
    <div className={styles.cont}>
      <h1>My applications</h1>
      {data && (
        <div>
          {data.map((x) => (
            <table className={styles.table} key={x.appliedOn}>
              <tbody>
                <tr>
                  <td>Scheme Name</td>
                  <td>{x.schemeName}</td>
                </tr>
                <tr>
                  <td>Applied On</td>
                  <td>{x.appliedOn}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{x.status}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      )}
    </div>
  );
}

export default ApplicationUserUI;
