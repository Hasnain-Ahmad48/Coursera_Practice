let person = "Employee";
let authorized;

switch (person) {
  case "Employee":
    authorized = "Dietary Services";
    break;
  case "Member":
    authorized = "one-on-one interaction with a dietician";
    break;
  case "Subscriber":
    authorized = "partial access to facilitate";
    break;
  default:
    authorized = "subscribe first";
}

console.log("Authurisition level:",authorized)