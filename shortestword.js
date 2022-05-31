function findShort(s) {
  let strArr1 = s.split(" ").sort((a, b) => a.length - b.length);
  return strArr1[0].length;
}
