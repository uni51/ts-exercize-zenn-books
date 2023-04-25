function sum(numbers: number[]) {
  // 配列内の数値を加算して返す処理を実装する
  const initialValue = 0;
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
}

console.log(sum([1, 2, 3, 4, 5])); // 15
