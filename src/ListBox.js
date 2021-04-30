import "./styles.css";

export default function ListBox({ list }) {
  return (
    <div className="box">
      <ul>{list && list.map((item) => <li>{item}</li>)}</ul>
    </div>
  );
}
