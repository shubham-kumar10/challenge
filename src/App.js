import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data] = useState([
    { id: 0, value: "one" },
    { id: 1, value: "two" },
    { id: 2, value: "three" },
  ]);
  const [tempData, setTempData] = useState([]);
  const [selected, setSelected] = useState([]);

  console.log("Component lebel", tempData);
  function handleAdd() {
    console.log(selected);
    console.log(tempData);
    setTempData([...tempData, selected]);
  }
  function handleDelete() {
    console.log("select", selected);
    setTempData(tempData.filter((e) => e.id !== selected.id));
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
