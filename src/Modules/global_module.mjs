function twoDecimalPlacesIfCents(amount) {
  return amount.toFixed(2).replace(/\.00$/, "");
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { twoDecimalPlacesIfCents, numberWithCommas };
