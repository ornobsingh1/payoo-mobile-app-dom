document.getElementById("add-money").addEventListener("click", function (e) {
  e.preventDefault();

  const bank = document.getElementById("bank").value;
  const accountNumber = document.getElementById("account-number").value;
  const amount = parseInt(document.getElementById("add-amount").value);
  const pin = document.getElementById("add-pin").value;

  const avaliableBalance = parseInt(
    document.getElementById("avaliable-balance").innerText
  );

  const totalNewAvailableBalance = amount + avaliableBalance;
  document.getElementById("avaliable-balance").innerText =
    totalNewAvailableBalance;
});
