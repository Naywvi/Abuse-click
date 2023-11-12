require("./api.js");
require("./popup.js");

function application() {
  console.log("application is running");
  apif();
  alert(popup());
}
