function BankAccount(accountNumber, accountHolderName, balance) {
    let account_Number = accountNumber;
    let account_HolderName = accountHolderName;
    let _balance = balance;

    function showAccountDetails() {
        console.log(`Account Number: ${account_Number}`);
        console.log(`Account Holder Name: ${account_HolderName}`);
        console.log(`Balance: ${_balance}`);
    }

//     function deposit(amount) {
//         _balance += amount;
//         showAccountDetails();
//     }

//     function withdraw(amount) {
//         if (_balance >= amount) {
//             _balance -= amount;
//             showAccountDetails();
//         } else {
//             console.log("Insufficient Balance");
//         }
//     }

//     return {
//         deposit: deposit,
//         withdraw: withdraw
//     };
// }

// let myBankAccount = BankAccount("123456", "Fazle Rabbi", 1000);

// myBankAccount.deposit(500); 

// myBankAccount.withdraw(2000);