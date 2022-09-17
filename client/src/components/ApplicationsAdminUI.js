import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../CSS/Crops.module.css";

function ApplicationsAdminUI() {
  const [data, setData] = useState();
  const [render, setRender] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3002/applications").then((res) => {
      if (res.data != false) {
        setData(res.data);
      } else console.log("applications fetch fail");
    });
  }, [render]);

  function handleButton(applicationId) {
    axios
      .get(`http://localhost:3002/applicationApprove/${applicationId}`)
      .then((res) => {
        if (res.data == true) {
          if (render == 0) setRender(1);
          else setRender(0);
        }
      });
  }
  return (
    <div className={styles.cont}>
      {data && (
        <div>
          {data.map((x) => (
            <table key={x._id} className={styles.table}>
              <tbody>
                <tr>
                  <td>User Id</td>
                  <td>{x.user}</td>
                </tr>
                <tr>
                  <td>Scheme Id</td>
                  <td>{x.scheme}</td>
                </tr>
                <tr>
                  <td>Applied On</td>
                  <td>{x.createdAt}</td>
                </tr>
                <tr>
                  <td>Application Status</td>
                  <td>{x.isApproved}</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <button
                      onClick={() => {
                        handleButton(x._id);
                      }}
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      )}
    </div>
  );
}

export default ApplicationsAdminUI;
