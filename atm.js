// let userPin = 4444;
// let accountPin = 4444;
// let atmBalance = 50000;
// let userBalance = 10000;
// if (prompt("Enter your PIN: ") ) {
//     userBalance < atmBalance
// } else {
//     userPin != accountPin 
//     prompt("please enter your ammount")(console.log("Incorrect PIN"))
// }



let balance = 10000;

let pin = prompt("Enter your 4-digit PIN:");

if (pin === "1234") {
  alert("Login successful!");

  while (true) {
    let choice = prompt(
      "Choose an option:\n1 Check Balance\n2 Deposit Money\n3 Withdraw Money\n4 Exit"
    );

    if (choice === "1") {
      alert(`Your current balance is: Rs ${balance}`);
    } 
    else if (choice === "2") {
      let deposit = Number(prompt("Enter amount to deposit:"));
      balance += deposit;
      alert(`Rs ${deposit} deposited. New balance: Rs ${balance}`);
    } 
    else if (choice === "3") {
      let withdraw = Number(prompt("Enter amount to withdraw:"));
      if (withdraw <= balance) {
        balance -= withdraw;
        alert(`Rs ${withdraw} withdrawn. Remaining balance: Rs ${balance}`);
      } else {
        alert("Insufficient balance!");
      }
    } 
    else if (choice === "4") {
      alert(" Thank you for using our ATM!");
      break;
    } 
    else {
      alert(" Invalid choice, please try again.");
    }
  }
} else {
  alert(" Incorrect PIN. Access Denied!");
}