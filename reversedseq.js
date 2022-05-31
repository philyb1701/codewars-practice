const reverseSeq = (n) => {
  let result = Array.from(Array(n + 1).keys());
  result.shift();
  return result.reverse();
};
