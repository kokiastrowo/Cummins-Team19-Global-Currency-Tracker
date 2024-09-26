document.getElementById('currency-select').addEventListener('change', function() {
    const selectedCurrency = this.value;
    const detailsDisplay = document.getElementById('currency-details');


    // Define currency data
    const currencyData = {
        'DZD': { code: 'DZD', rate: '0.0075 USD', description: 'Algerian Dinar' },
        'AUD': { code: 'AUD', rate: '0.64 USD', description: 'Australian Dollar' },
        'BHD': { code: 'BHD', rate: '2.65 USD', description: 'Bahrain Dinar' },
        'VEF': { code: 'VEF', rate: '0.000041 USD', description: 'Bolivar Fuerte' },
        'BWP': { code: 'BWP', rate: '0.092 USD', description: 'Botswana Pula' },
        'BRL': { code: 'BRL', rate: '0.19 USD', description: 'Brazilian Real' },
        'BND': { code: 'BND', rate: '0.73 USD', description: 'Brunei Dollar' },
        'CAD': { code: 'CAD', rate: '0.75 USD', description: 'Canadian Dollar' },
        'CLP': { code: 'CLP', rate: '0.0012 USD', description: 'Chilean Peso' },
        'CNY': { code: 'CNY', rate: '0.14 USD', description: 'Chinese Yuan' },
        'COP': { code: 'COP', rate: '0.00024 USD', description: 'Colombian Peso' },
        'CZK': { code: 'CZK', rate: '0.045 USD', description: 'Czech Koruna' },
        'DKK': { code: 'DKK', rate: '0.14 USD', description: 'Danish Krone' },
        'EUR': { code: 'EUR', rate: '1.05 USD', description: 'Euro' },
        'HUF': { code: 'HUF', rate: '0.0029 USD', description: 'Hungarian Forint' },
        'ISK': { code: 'ISK', rate: '0.0073 USD', description: 'Icelandic Krona' },
        'INR': { code: 'INR', rate: '0.012 USD', description: 'Indian Rupee' },
        'IDR': { code: 'IDR', rate: '0.000065 USD', description: 'Indonesian Rupiah' },
        'IRR': { code: 'IRR', rate: '0.000024 USD', description: 'Iranian Rial' },
        'ILS': { code: 'ILS', rate: '0.28 USD', description: 'Israeli New Shekel' },
        'JPY': { code: 'JPY', rate: '0.0068 USD', description: 'Japanese Yen' },
        'KZT': { code: 'KZT', rate: '0.0021 USD', description: 'Kazakhstani Tenge' },
        'KRW': { code: 'KRW', rate: '0.00075 USD', description: 'Korean Won' },
        'KWD': { code: 'KWD', rate: '3.25 USD', description: 'Kuwaiti Dinar' },
        'LYD': { code: 'LYD', rate: '0.21 USD', description: 'Libyan Dinar' },
        'MYR': { code: 'MYR', rate: '0.23 USD', description: 'Malaysian Ringgit' },
        'MUR': { code: 'MUR', rate: '0.024 USD', description: 'Mauritian Rupee' },
        'MXN': { code: 'MXN', rate: '0.055 USD', description: 'Mexican Peso' },
        'NPR': { code: 'NPR', rate: '0.0075 USD', description: 'Nepalese Rupee' },
        'NZD': { code: 'NZD', rate: '0.60 USD', description: 'New Zealand Dollar' },
        'NOK': { code: 'NOK', rate: '0.096 USD', description: 'Norwegian Krone' },
        'OMR': { code: 'OMR', rate: '2.60 USD', description: 'Omani Rial' },
        'PKR': { code: 'PKR', rate: '0.0035 USD', description: 'Pakistani Rupee' },
        'PEN': { code: 'PEN', rate: '0.27 USD', description: 'Peruvian Sol' },
        'PHP': { code: 'PHP', rate: '0.018 USD', description: 'Philippine Peso' },
        'PLN': { code: 'PLN', rate: '0.24 USD', description: 'Polish Zloty' },
        'QAR': { code: 'QAR', rate: '0.27 USD', description: 'Qatari Riyal' },
        'RUB': { code: 'RUB', rate: '0.011 USD', description: 'Russian Ruble' },
        'SAR': { code: 'SAR', rate: '0.27 USD', description: 'Saudi Arabian Riyal' },
        'SGD': { code: 'SGD', rate: '0.73 USD', description: 'Singapore Dollar' },
        'ZAR': { code: 'ZAR', rate: '0.052 USD', description: 'South African Rand' },
        'LKR': { code: 'LKR', rate: '0.032 USD', description: 'Sri Lankan Rupee' },
        'SEK': { code: 'SEK', rate: '0.096 USD', description: 'Swedish Krona' },
        'CHF': { code: 'CHF', rate: '1.10 USD', description: 'Swiss Franc' },
        'THB': { code: 'THB', rate: '0.028 USD', description: 'Thai Baht' },
        'TTD': { code: 'TTD', rate: '0.15 USD', description: 'Trinidadian Dollar' },
        'TND': { code: 'TND', rate: '0.31 USD', description: 'Tunisian Dinar' },
        'AED': { code: 'AED', rate: '0.27 USD', description: 'U.A.E. Dirham' },
        'GBP': { code: 'GBP', rate: '1.25 USD', description: 'U.K. Pound' },
        'USD': { code: 'USD', rate: '1.00 USD', description: 'U.S. Dollar' },
        'UYU': { code: 'UYU', rate: '0.024 USD', description: 'Uruguayan Peso' }
    };


    // Display the selected currency details
    if (selectedCurrency) {
        const currency = currencyData[selectedCurrency];
        detailsDisplay.innerHTML = `
            <h3>${currency.description} (${currency.code})</h3>
            <p>Exchange Rate: ${currency.rate}</p>
        `;
    } else {
        detailsDisplay.innerHTML = '';
    }
});


