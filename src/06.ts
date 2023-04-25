type Shape = {
  type: "square" | "triangle";
  width: number;
  height: number;
};

function area(shape: Shape): number {
  if (shape.type === "triangle") {
    return (shape.width * shape.height) / 2;
  } else {
    return shape.width * shape.height;
  }
}

const square: Shape = {
  type: "square",
  width: 10,
  height: 10,
};

const triangle: Shape = {
  type: "triangle",
  width: 10,
  height: 10,
};

console.log(area(square)); // 100
console.log(area(triangle)); // 50
