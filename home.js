const validPin = 1234;

document.getElementById("add-money").addEventListener("click", function (e) {
  e.preventDefault();

  const bank = document.getElementById("bank").value;
  const accountNumber = document.getElementById("account-number").value;
  const amount = parseInt(document.getElementById("add-amount").value);
  const pin = parseInt(document.getElementById("add-pin").value);

  const avaliableBalance = parseInt(
    document.getElementById("avaliable-balance").innerText
  );

  if (accountNumber.length < 11) {
    return alert("Please Provide Valid Account Number");
  }
  if (pin !== validPin) {
    return alert("Please Provide Valid Pin Number");
  }

  const totalNewAvailableBalance = amount + avaliableBalance;
  document.getElementById("avaliable-balance").innerText =
    totalNewAvailableBalance;
});
