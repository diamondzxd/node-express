const EventEmitter = require("events");

setTimeout(() => {
  console.log("5 seconds have passed");
}, 5000);

setImmediate(() => {
  console.log("hello world");
});

process.on("exit", (code) => {
  console.log("Process exited Succesfully with code : ", code);
});
