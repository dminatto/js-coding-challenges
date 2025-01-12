# Billing Analysis Challenge

## Description

This challenge analyzes daily billing data to calculate:

- The lowest billing value in a month
- The highest billing value in a month
- Number of days where billing was above the monthly average

## Implementation

```javascript
const faturamentoDiario = require("./data.json");

const diasComFaturamento = faturamentoDiario.filter((valor) => valor > 0);
const menorValor = Math.min(...diasComFaturamento);
const maiorValor = Math.max(...diasComFaturamento);
const media =
  diasComFaturamento.reduce((acc, curr) => acc + curr, 0) /
  diasComFaturamento.length;
const diasAcimaMedia = diasComFaturamento.filter(
  (valor) => valor > media
).length;
```
