function getCount(str) {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    vowels.includes(char) ? vowelsCount++ : vowelsCount;
  }
  return vowelsCount;
}
