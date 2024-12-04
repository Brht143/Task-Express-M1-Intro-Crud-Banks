const express = require("express");
const router = express.Router();

const {
  viewAccounts,
  convertFundsToUSD,
  createAccount,
  updateAccount,
  deleteAccount,
} = require("./controllers");

router.get("/", viewAccounts);
router.get("/:username?", convertFundsToUSD);
router.post("/", createAccount);
router.put("/:accountId", updateAccount);
router.delete("/:accountId", deleteAccount);

module.exports = router;
