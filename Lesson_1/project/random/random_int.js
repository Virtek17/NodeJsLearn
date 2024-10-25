module.exports = function (min = 10, max = 100) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}