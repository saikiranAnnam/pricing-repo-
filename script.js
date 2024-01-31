// script.js

function toggleBillingCycle() {
    const monthlyRadio = document.getElementById('monthly');
    const yearlyRadio = document.getElementById('yearly');
    const basicPrice = document.getElementById('basicPrice');
    const premiumPrice = document.getElementById('premiumPrice');
    const proPrice = document.getElementById('proPrice');
  
    let currencySymbol = '$'; // Placeholder, replace with user customization logic
    let unit = 'month'; // Placeholder, replace with user customization logic
  
    if (yearlyRadio.checked) {
      // Yearly Billing
      basicPrice.innerHTML = `${currencySymbol}90<span>/year</span>`;
      premiumPrice.innerHTML = `${currencySymbol}180<span>/year</span>`;
      proPrice.innerHTML = `${currencySymbol}270<span>/year</span>`;
    } else {
      // Monthly Billing
      basicPrice.innerHTML = `${currencySymbol}10<span>/${unit}</span>`;
      premiumPrice.innerHTML = `${currencySymbol}20<span>/${unit}</span>`;
      proPrice.innerHTML = `${currencySymbol}30<span>/${unit}</span>`;
    }
  }
  