function sumTwoSmallestNumbers(numbers) {
  let res = numbers.sort((a, b) => a - b);
  return res[0] + res[1];
}
