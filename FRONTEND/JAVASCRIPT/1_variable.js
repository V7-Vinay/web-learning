const accountId = 123456789012;
let accountEmail = "vinyvini718@gmail.com";
var accountPassword = "12345";
accountCity = "New York";

// accountId=99; can't be changed beacuse declared as const

accountEmail = " abcd@gooogle.com";
accountPassword = "abcd1234";
accountCity = "Los Angeles";

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity]);
// console.table([val1,val2,...]); is used to print in table format

/*/ 
    let , const cannot be redeclared and they are block/scope variables
    var can be redeclared and it is function scoped variable
    var and let can be updated but const cannot be updated
*/