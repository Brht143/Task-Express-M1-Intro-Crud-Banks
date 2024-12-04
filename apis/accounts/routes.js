const express = require("express");
const router = express.Router();

const {
  viewAccounts,
  convertFundsToUSD,
  createAccount,
  updateAccount,
  deleteAccount,
} = require("./controllers");

router.get("/", (req, res) => viewAccounts(res));

router.get("/:username?", (req, res) => convertFundsToUSD(req, res));

router.post("/", (req, res) => createAccount(req, res));

router.put("/:accountId", (req, res) => updateAccount(req, res));

router.delete("/:accountId", (req, res) => deleteAccount(req, res));

module.exports = router;
