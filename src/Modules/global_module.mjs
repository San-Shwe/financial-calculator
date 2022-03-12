function twoDecimalPlacesIfCents(amount){
    return (amount).toFixed(2).replace(/\.00$/, '');
}

export default twoDecimalPlacesIfCents;