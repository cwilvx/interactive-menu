/**
 * Returns a number based calculated from the string passed.
 * @param name the name to calculate price for
 * @param multiplier a number to multiply the number with. default 5
 */
export default (name: string, multiplier = 5) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const map = [];

  for (let index = 0; index < name.length; index++) {
    const element = name[index].toLowerCase();
    map.push(letters.indexOf(element) + 1);
  }

  return (
    Math.round(map.reduce((prev, curr) => prev + curr, 0) / 5) * multiplier
  );
};
