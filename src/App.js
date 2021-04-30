import { useEffect, useState } from "react";
import { getDataList } from "./data";
import ListBox from "./ListBox";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([
    { id: 0, value: "one" },
    { id: 1, value: "sodn" },
    { id: 2, value: "two" },
  ]);
  const [tempData, setTempData] = useState([]);
  const [selected, setSelected] = useState([]);
  // const [tempData, setTempData] = useState([]);

  // useEffect(
  //   const x = getDataList();
  //   setData(x),[]);
  function handleAdd() {
    console.log(selected);
    console.log(tempData);
    setTempData([...tempData, selected]);
  }
  function handleDelete() {
    console.log(selected);
    console.log(tempData);
    if (tempData) {
      setTempData((prev) => {
        prev.splice();
      });
    }
  }
  return (
    <div className="App">
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id} onClick={() => setSelected(item)}>
              {item.value}
            </li>
          ))}
      </ul>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleDelete}>-</button>
      <div>
        <ul>
          {tempData &&
            tempData.map((item) => (
              <li key={item.id} onClick={() => setSelected(item)}>
                {item.value}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
