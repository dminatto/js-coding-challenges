const revenue = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Others: 19849.53,
};

const total = Object.values(revenue).reduce((acc, curr) => acc + curr, 0);

Object.entries(revenue).forEach(([state, value]) => {
  const percentage = (value / total) * 100;
  console.log(`${state}: ${percentage.toFixed(2)}%`);
});
