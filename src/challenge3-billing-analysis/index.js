const calculateRevenueMetrics = (data) => {
  const validRevenues = data.filter((item) => item.valor > 0);

  const minRevenue = validRevenues.reduce((min, item) =>
    item.valor < min.valor ? item : min
  );

  const maxRevenue = validRevenues.reduce((max, item) =>
    item.valor > max.valor ? item : max
  );

  const averageRevenue =
    validRevenues.reduce((sum, item) => sum + item.valor, 0) /
    validRevenues.length;

  const daysAboveAverage = validRevenues.filter(
    (item) => item.valor > averageRevenue
  ).length;

  return {
    minRevenue,
    maxRevenue,
    averageRevenue,
    daysAboveAverage,
  };
};

const revenueData = require("./dados.json");

const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const results = calculateRevenueMetrics(revenueData);

console.log(`
Revenue Analysis Results:
------------------------
Minimum Revenue: ${formatCurrency(results.minRevenue.valor)} (Day ${
  results.minRevenue.dia
})
Maximum Revenue: ${formatCurrency(results.maxRevenue.valor)} (Day ${
  results.maxRevenue.dia
})
Average Revenue: ${formatCurrency(results.averageRevenue)}
Days Above Average: ${results.daysAboveAverage}
`);
