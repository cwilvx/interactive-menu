export default (list: string[]) => {
  return list.reduce((prev, curr, index) => {
    if (index === list.length - 1) {
      return list.length !== 1 ? prev + " and " + curr : prev + curr;
    }

    return prev + curr + ", ";
  }, "");
};
