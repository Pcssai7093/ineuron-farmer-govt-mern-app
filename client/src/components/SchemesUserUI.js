import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../CSS/Crops.module.css";
import AddScheme from "./AddScheme";
import { useParams, useHistory } from "react-router-dom";

function SchemesUserUI() {
  const { userId } = useParams();
  const [data, setData] = useState();
  const history = useHistory();
  let [toRender, setToRender] = useState(0);
  function reRender() {
    console.log("re Render fun called");
    if (toRender == 0) setToRender(1);
    else setToRender(0);
  }
  useEffect(() => {
    axios
      .get("http://localhost:3002/schemes")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("error in axios scheme get");
      });
  }, [toRender]);

  async function buttonHandler(id) {
    await axios
      .get(`http://localhost:3002/${userId}/${id}/apply`)
      .then((result) => {
        if (result.data == true) history.push(`/user/application/${userId}`);
      });
  }
  return (
    <div className={styles.cont}>
      {/* <AddScheme ReRender={reRender} /> */}
      <h1>Schemes</h1>
      {data && (
        <div>
          {data.map((x) => (
            <table key={x._id} className={styles.table}>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{x.name}</td>
                </tr>
                <tr>
                  <td>Launched On:</td>
                  <td>{x.launchedOn}</td>
                </tr>
                <tr>
                  <td>Apply By</td>
                  <td>{x.applyBy}</td>
                </tr>
                <tr>
                  <td>Beneficiaries:</td>
                  <td>{x.beneficiaries}</td>
                </tr>
                {/* <tr>
                  <td>Status:</td>
                  <td>{x.status}</td>
                </tr> */}
                <tr>
                  <td colSpan={2}>
                    <button
                      onClick={() => {
                        buttonHandler(x._id);
                      }}
                    >
                      Apply
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

export default SchemesUserUI;
