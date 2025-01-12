function sumCalculator() {
  let INDEX = 13;
  let SUM = 0;
  let K = 0;

  while (K < INDEX) {
    K = K + 1;
    SUM = SUM + K;
  }

  console.log(`Sum Result: ${SUM}`);
  return SUM;
}

if (require.main === module) {
  sumCalculator();
} else {
  module.exports = sumCalculator;
}
