// Function to convert CAD to USD
function convertCADtoUSD(amount) {
    const exchangeRate = 0.78; // Hardcoded exchange rate (1 CAD = 0.78 USD)
    return amount * exchangeRate;
}

// Function to convert USD to CAD
function convertUSDtoCAD(amount) {
    const exchangeRate = 1.28; // Hardcoded exchange rate (1 USD = 1.28 CAD)
    return amount * exchangeRate;
}

// Function to handle button click and perform conversion
function convertCurrency() {
    const amountInput = document.getElementById('amount');
    const currencySelect = document.getElementById('currency');
    const resultParagraph = document.getElementById('result');

    // Validate input
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        resultParagraph.textContent = 'Please enter a valid positive number.';
        return;
    }

    // Perform conversion based on selected currency
    if (currencySelect.value === 'CAD') {
        const result = convertCADtoUSD(amount);
        resultParagraph.textContent = `${amount.toFixed(3)} CAD is equal to ${result.toFixed(3)} USD.`;
    } else {
        const result = convertUSDtoCAD(amount);
        resultParagraph.textContent = `${amount.toFixed(3)} USD is equal to ${result.toFixed(3)} CAD.`;
    }
}
