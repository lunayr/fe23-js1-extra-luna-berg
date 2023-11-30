document.body.innerHTML = "";

Object.assign(document.body.style, {
  backgroundColor: "black",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

let container = document.createElement("div");
Object.assign(container.style, {
  width: "800px",
  height: "800px",
  backgroundColor: "white",
});
document.body.appendChild(container);

let colors = [
  "F0A8D3",
  "CEA8F0",
  "B7A8F0",
  "A8C5F0",
  "A8F0F0",
  "A8F0C5",
  "B7F0A8",
  "E1F0A8",
  "F0D3A8",
  "F0A8A8",
];

let colorOrder = [0, 3, 5, 9];

//up right down left
let paddingOrder = [
  "0px 40px 40px 0px",
  "0px 0px 40px 40px",
  "0px 0px 40px 40px",
  "0px 40px 40px 0px",
];

for (let index of [0, 1, 2, 3]) {
  i = 0;
  let parent = container;
  while (i < 10) {
    let box = document.createElement("div");
    Object.assign(box.style, {
      padding: paddingOrder[index],
      boxSizing: "border-box",
      width: i === 0 ? "50%" : "auto",
      float: "left",
    });
    box.style.backgroundColor =
      "#" + colors[9 - ((i + colorOrder[index]) % 10)];
    parent.appendChild(box);
    console.log("ekledim");
    parent = box;
    i++;
  }
}

// let box = document.createElement("div");
// Object.assign(box.style, {
//   padding: paddingOrder[index],
//   boxSizing: "border-box",
//   width: i === 0 ? "50%" : "auto",
//   float: "left",
// });

// box.style.padding = paddingOrder[index];
// box.style.boxSizing = "border-box";
// box.style.width = i === 0 ? "50%" : "auto";
// box.style.float = "left";
