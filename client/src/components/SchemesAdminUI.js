import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../CSS/Crops.module.css";
import AddScheme from "./AddScheme";

function Schemes() {
  const [data, setData] = useState();
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

  return (
    <div className={styles.cont}>
      <AddScheme ReRender={reRender} />
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
              </tbody>
            </table>
          ))}
        </div>
      )}
    </div>
  );
}

export default Schemes;
