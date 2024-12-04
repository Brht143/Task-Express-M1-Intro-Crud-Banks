const accounts = require("../../accounts");

exports.viewAccounts = (req, res) => {
  res.status(200).json(accounts);
};

exports.convertFundsToUSD = (req, res) => {
  const username = req.params.username;
  const currency = req.query.currency;
  return currency
    ? res.status(200).json({
        messge:
          accounts.find((account) => account.username == username).funds * 3.25,
      })
    : res
        .status(404)
        .json({ messge: `${currency} / ${username} are not available` });
};

exports.createAccount = (req, res) => {
  const newId = accounts.length + 1;
  const newData = req.body;
  const newAccount = Object.assign({ id: newId }, newData, { funds: 0 });
  const newAccounts = [...accounts, newAccount];
  console.log(newAccounts);
  return res.status(201).json(newAccount);
};

exports.updateAccount = (req, res) => {
  const accountId = req.params.accountId;
  const updatedData = req.body;
  filteredAccounts = accounts.find((account) => account.id == accountId);
  const updatedAccount = Object.assign(filteredAccounts, updatedData);
  return filteredAccounts
    ? res.status(200).json(updatedAccount)
    : res.status(200).json({ Message: "Account does not exist" });
};

exports.deleteAccount = (req, res) => {
  const id = req.params.accountId;
  filteredAccounts = accounts.filter((account) => account.id != id);
  console.log(filteredAccounts);
  return filteredAccounts.length != accounts.length
    ? res.status(200).json({ Message: "Account deleted" })
    : res.status(404).json({ Message: "Account does not exist" });
};
