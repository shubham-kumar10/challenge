const data = [
  { id: 0, value: "one" },
  { id: 1, value: "sodn" },
  { id: 2, value: "two" }
];

const tempData = [];

function addItem(item) {
  tempData.push(item);
}

function deleteItem(item) {
  let i = tempData.indexOf(item);
  tempData.splice(i, 1);
}

function getDataList() {
  return data;
}

function getTempData() {
  return tempData;
}
export { addItem, deleteItem, getDataList, getTempData };
