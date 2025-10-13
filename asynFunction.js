function simultaAsyn(callBack) {
  setTimeout(function () {
    callBack("Data form a simul asynro ope");
  }, 3000);
}
console.log("Start of program");
simultaAsyn(function (data) {
  console.log("Data recieved", data);
  console.log("End of program");
});

console.log("Aysn op is in progress");
