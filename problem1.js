function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Please Provide Valid Number."
    }
    const result = (ticketSale * 120) - (500 + (8 * 50));
    return result;
}
console.log(calculateMoney(2));