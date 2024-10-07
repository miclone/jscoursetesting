let grocery1Amount;
let grocery2Amount;
let grocery3Amount;

function calculateTotalAmount() {
    grocery1Amount = parseFloat(document.getElementById('Grocery-1').value);
    grocery2Amount = parseFloat(document.getElementById('Grocery-2').value);
    grocery3Amount = parseFloat(document.getElementById('Grocery-3').value);
    let totalAmount = grocery1Amount + grocery2Amount + grocery3Amount;
 document.getElementById('result').innerText = `The total amount is: ${totalAmount}`;
}

