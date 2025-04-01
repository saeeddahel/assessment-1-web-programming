//<script>
        // Wait for the DOM to be fully loaded before executing JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            // Get references to the DOM elements we need
            const priceInput = document.getElementById('price');
            const litersInput = document.getElementById('liters');
            const calculateBtn = document.getElementById('calculate');
            const resultDisplay = document.querySelector('.total-cost');
            
            // Add click event listener to the calculate button
            calculateBtn.addEventListener('click', function() {
                // Get the values from the input fields and convert to numbers
                const pricePerLiter = parseFloat(priceInput.value);
                const liters = parseFloat(litersInput.value);
                
                // Calculate the total cost (price * liters)
                const totalCost = pricePerLiter * liters;
                
                // Display the result with 2 decimal places and € symbol
                resultDisplay.textContent = `€${totalCost.toFixed(2)}`;
            });
            
            // Optional: Add event listener for Enter key press
            document.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    calculateBtn.click();
                }
            });
        });
    </script> JavaScript Document