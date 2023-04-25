const array = [1, 2, 3, 4, 5];

function square_map(numbers: number[]) {
  // 配列の数値を 2 乗する処理を実装する
  return numbers.map((num) => num * num);
}

function square_reduce(numbers: number[]) {
  // 配列の数値を 2 乗する処理を実装する
  return numbers.reduce((accumulator: number[], currentValue: number) => {
    accumulator.push(currentValue * currentValue);
    return accumulator;
  }, []);
}

console.log(square_reduce(array)); // [ 1, 4, 9, 16, 25 ]
