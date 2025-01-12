function revenueAnalysis() {
  const data = require("./dados.json");

  const validRevenues = data.filter((item) => item.valor > 0);

  const minRevenue = validRevenues.reduce((min, item) =>
    item.valor < min.valor ? item : min
  );

  const maxRevenue = validRevenues.reduce((max, item) =>
    item.valor > max.valor ? item : max
  );

  const average =
    validRevenues.reduce((sum, item) => sum + item.valor, 0) /
    validRevenues.length;

  const daysAboveAverage = validRevenues.filter(
    (item) => item.valor > average
  ).length;

  console.log(`
Revenue Analysis Results:
------------------------
Minimum Revenue: R$ ${minRevenue.valor.toFixed(2)} (Day ${minRevenue.dia})
Maximum Revenue: R$ ${maxRevenue.valor.toFixed(2)} (Day ${maxRevenue.dia})
Average Revenue: R$ ${average.toFixed(2)}
Days Above Average: ${daysAboveAverage}
  `);

  return { minRevenue, maxRevenue, average, daysAboveAverage };
}

if (require.main === module) {
  revenueAnalysis();
} else {
  module.exports = revenueAnalysis;
}
