const nodeCron = require("node-cron");
const fs = require("fs");

console.log("---- app started ----" + new Date().toLocaleString());

// Remove the error.log file every twenty-first day of the month.
// seconds, minutes, hours, date(1-31), months(1-12 or Jan-Dec), days(0-6 or Sun-Sat)
nodeCron.schedule("0 * * * * *", function () {
  /* console.log("---------------------");
  console.log("Running Cron Job");
  fs.unlink("./error.log", (err) => {
    if (err) throw err;
    console.log("Error file successfully deleted");
  }); */
  console.log("running every 5 minutes :" + new Date().toLocaleString());
});

/* 

const job = nodeCron.schedule("0 * * * * *", function jobYouNeedToExecute() {
  // Do whatever you want in here. Send email, Make  database backup or download data.
  console.log(new Date().toLocaleString());
});

job.start();

 */
