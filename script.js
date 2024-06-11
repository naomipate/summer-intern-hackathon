document.getElementById('withdrawalForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const accountNumber = document.getElementById('accountNumber').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('message').textContent = 'Please enter a valid amount.';
        document.getElementById('message').style.color = 'red';
        return;
    }

    // Here we would typically send the data to the server and handle the response
    // For this example, I am just displaying a success message
    document.getElementById('message').textContent = `Withdrawal of $${amount.toFixed(2)} from account ${accountNumber} was successful.`;
    document.getElementById('message').style.color = 'green';
});
