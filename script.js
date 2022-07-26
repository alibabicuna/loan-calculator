

document.querySelector('.form').addEventListener("submit", calculateLoan);

function calculateLoan(event) {
  event.preventDefault();
  let principal = document.querySelector('#loan').value;
  let interestRate = document.querySelector('#intrest').value;
  let repaymentPeriod = document.querySelector('#period').value;

  let totalInterest = ((principal * interestRate) / 100);
  let totalLoan = (totalInterest + parseInt(principal));
  let rata = totalLoan / (repaymentPeriod * 12);

  document.querySelector('#calculatedInterest').textContent = totalInterest.toFixed(2);

  document.querySelector('#rateLoan').textContent = rata.toFixed(2);

  document.querySelector('#totalReturn').textContent = totalLoan.toFixed(2);

}
