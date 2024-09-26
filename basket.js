document.getElementById('generate-currencies-btn').addEventListener('click', () => {
    const numCurrencies = document.getElementById('number-of-currencies').value;
    const container = document.getElementById('currency-inputs-container');


    // Clear the container first
    container.innerHTML = '';


    if (numCurrencies > 0 && numCurrencies <= 10) {
        for (let i = 1; i <= numCurrencies; i++) {
            const currencyItem = document.createElement('div');
            currencyItem.classList.add('basket-item');
           
            // Currency selection
            const currencyLabel = document.createElement('label');
            currencyLabel.textContent = `Currency ${i}:`;
            const currencySelect = document.createElement('select');
            currencySelect.classList.add('currency-select');
            currencySelect.innerHTML = `
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="AUD">AUD - Australian Dollar</option>
            `;


            // Weight input
            const weightLabel = document.createElement('label');
            weightLabel.textContent = `Weight %:`;
            const weightInput = document.createElement('input');
            weightInput.type = 'number';
            weightInput.classList.add('weight-input');
            weightInput.min = '0';
            weightInput.max = '100';
            weightInput.value = '0';


            // Append elements
            currencyItem.appendChild(currencyLabel);
            currencyItem.appendChild(currencySelect);
            currencyItem.appendChild(weightLabel);
            currencyItem.appendChild(weightInput);
            container.appendChild(currencyItem);
        }


        // Show the calculate button
        document.getElementById('calculate-basket').style.display = 'block';
    } else {
        alert('Please enter a valid number between 1 and 10.');
    }
});


document.getElementById('calculate-basket').addEventListener('click', () => {
    const baseCurrency = document.getElementById('base-currency').value;
    const currencyItems = document.querySelectorAll('.basket-item');
    let totalWeight = 0;
    let basketValue = 0;


    currencyItems.forEach(item => {
        const currency = item.querySelector('.currency-select').value;
        const weight = parseFloat(item.querySelector('.weight-input').value);


        // Example calculation logic: assume each currency has a mock exchange rate
        const mockRates = {
            USD: 1.0,
            EUR: 1.1,
            JPY: 0.009,
            GBP: 1.3,
            AUD: 0.7
        };


        totalWeight += weight;
        basketValue += weight * mockRates[currency];
    });


    if (totalWeight === 100) {
        document.getElementById('basket-value').innerHTML = `<h3>Basket Value:</h3> The total value of your basket in ${baseCurrency} is ${basketValue.toFixed(2)}.`;
    } else {
        alert('Total weight of all currencies must equal 100%.');
    }
});
