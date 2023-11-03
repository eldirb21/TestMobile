const Func = {
  formatCurrent(number) {
    const roundedNumber = Math.round(number * 100) / 100;
    const formattedNumber = roundedNumber.toFixed(2);
    const parts = formattedNumber.split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return parts.join('.');
  },
  formatDecimal(number) {
    const roundedNumber = Math.round(number * 100) / 100;
    const formattedNumber = roundedNumber.toFixed(2);

    return formattedNumber;
  },
};
export default Func;
