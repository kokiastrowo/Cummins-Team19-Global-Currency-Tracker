import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import zipfile
import os

# Function to calculate daily returns and volatility
def calculate_volatility(data, currency_column):
    # Calculate daily returns as percentage change
    data['Returns'] = data[currency_column].pct_change() * 100
    # Calculate the standard deviation of returns (volatility)
    volatility = data['Returns'].std()
    return volatility

# Function to classify risk level based on volatility
def classify_risk(volatility):
    if volatility < 0.5:
        return "Low"
    elif 0.5 <= volatility <= 1.0:
        return "Medium"
    else:
        return "High"

# Load data from a zip file for the selected year and currency
def load_currency_data(year):
    zip_file_path = '/content/Currency Conversion Rate Data - USD Base.zip'
    csv_file_name = f'Currency Conversion Rate Data From 2012/Exchange_Rate_Report_{year}.csv'
    
    # Open the ZIP file and load the CSV
    with zipfile.ZipFile(zip_file_path, 'r') as z:
        with z.open(csv_file_name) as file:
            data = pd.read_csv(file)
    
    # Clean column names
    data.columns = data.columns.str.strip()
    
    # Convert 'Date' column to datetime
    data['Date'] = pd.to_datetime(data['Date'], errors='coerce')
    
    return data

# Main function to generate the risk graph
def plot_risk_graph(data, currency1, currency2, start_date, end_date):
    # Filter the data for the selected period
    data = data[(data['Date'] >= start_date) & (data['Date'] <= end_date)]

    # Ensure valid numeric data for currencies
    data[currency1] = pd.to_numeric(data[currency1], errors='coerce')
    data[currency2] = pd.to_numeric(data[currency2], errors='coerce')

    # Calculate volatility (risk) for both currencies
    volatility1 = calculate_volatility(data, currency1)
    volatility2 = calculate_volatility(data, currency2)

    # Classify risk based on volatility
    risk1 = classify_risk(volatility1)
    risk2 = classify_risk(volatility2)

    # Plot the exchange rates over time
    plt.figure(figsize=(12, 6))
    plt.plot(data['Date'], data[currency1], label=f"{currency1} (Risk: {risk1})")
    plt.plot(data['Date'], data[currency2], label=f"{currency2} (Risk: {risk2})")
    
    # Customize plot
    plt.title(f'Exchange Rate and Risk Indicator ({start_date} to {end_date})')
    plt.xlabel('Date')
    plt.ylabel('Exchange Rate')
    plt.xticks(rotation=45)
    plt.legend()
    plt.grid(True)
    
    # Show the plot
    plt.tight_layout()
    plt.show()

    # Print risk levels
    print(f"{currency1} Volatility: {volatility1:.2f}% - Risk: {risk1}")
    print(f"{currency2} Volatility: {volatility2:.2f}% - Risk: {risk2}")

# Input year, start date, end date, and currencies from user
year = int(input("Enter the year (between 2012 and 2022): "))
start_date = input("Enter the start date (YYYY-MM-DD): ")
end_date = input("Enter the end date (YYYY-MM-DD): ")
currency1 = input("Enter the first currency (e.g., 'Indian rupee   (INR)'): ")
currency2 = input("Enter the second currency (e.g., 'U.S. dollar   (USD)'): ")

# Load data for the selected year
data = load_currency_data(year)

# Convert input start and end dates to datetime
start_date = pd.to_datetime(start_date)
end_date = pd.to_datetime(end_date)

# Plot the risk graph
plot_risk_graph(data, currency1, currency2, start_date, end_date)
