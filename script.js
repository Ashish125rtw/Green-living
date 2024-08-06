document.getElementById('calculatorForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const electricity = parseFloat(document.getElementById('electricity').value);
  const gas = parseFloat(document.getElementById('gas').value);
  const fuel = parseFloat(document.getElementById('fuel').value);
  const miles = parseFloat(document.getElementById('miles').value);

  const electricityFootprint = electricity * 0.92; 
  const gasFootprint = gas * 5.3; 
  const fuelFootprint = fuel * 19.6; 
  const milesFootprint = miles * 0.79; 

  const totalFootprint = electricityFootprint + gasFootprint + fuelFootprint + milesFootprint;
  
  document.getElementById('result').innerHTML = `<h3>Your estimated monthly carbon footprint is ${totalFootprint.toFixed(2)} kg CO2e</h3>`;
});
