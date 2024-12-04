const express = require("express");
const app = express();
const port = 3000;
const accountsRoutes = require("./apis/accounts/routes");

app.use(express.json());

app.use("/accounts", accountsRoutes);

app.listen(port, () => console.log(`the application is online ${port}`));
