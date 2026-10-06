const app = require("./app");

const port = Number(process.env.PORT) || 5000;

app.listen(port, () => {
  console.log("vulnerable-backend listening on port " + port);
});
