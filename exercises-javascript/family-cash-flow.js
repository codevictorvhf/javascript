// family cash flow. Check if the balance is positive or negative and show the balance amount.

let family = {
  revenues: [500, 100, 430.5, 3500],
  expenses: [450, 300, 110.15, 2200],
};

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

function calculateBalance() {
  const calculateRevenues = sum(family.revenues);
  const calculateExpenses = sum(family.expenses);

  const total = calculateRevenues - calculateExpenses;

  const positive = total >= 0;

  let balanceText = "Negative";

  if (positive) {
    balanceText = "Positive";
  }

  console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`);
}

calculateBalance();
