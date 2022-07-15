require("dotenv").config();
const app = require("./app.js");
const dbConnection = require("./database.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  dbConnection();
  console.log(`listen on port ${PORT}`);
});
