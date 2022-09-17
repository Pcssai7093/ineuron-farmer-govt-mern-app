import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../CSS/Crops.module.css";
import AddCrops from "./AddCrops";

function CropsUserUI() {
  const [data, setData] = useState();
  let [toRender, setToRender] = useState(0);
  function reRender() {
    if (toRender == 0) setToRender(1);
    else setToRender(0);
  }
  useEffect(() => {
    axios
      .get("http://localhost:3002/crops")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("error in axios crop get");
      });
  }, [toRender]);

  return (
    <div className={styles.cont}>
      {/* <AddCrops ReRender={reRender} /> */}
      <h1>Crop Details</h1>
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
                  <td>Type:</td>
                  <td>{x.cropType}</td>
                </tr>
                <tr>
                  <td>Suitable Soil:</td>
                  <td>{x.suitableSoil}</td>
                </tr>
                <tr>
                  <td>Suitable Climate:</td>
                  <td>{x.suitableClimate}</td>
                </tr>
                <tr>
                  <td>Suitable Season:</td>
                  <td>{x.suitableSeason}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      )}
    </div>
  );
}

export default CropsUserUI;
