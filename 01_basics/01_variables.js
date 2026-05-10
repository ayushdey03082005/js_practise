const accountId = 123344
let accountEmail = "ayush@google.com"
var accountPassword = "12345"
accountCity = "Bengaluru" // Not a good way to declare 
let accountState; // it will print undefined because nothing is assigned to this variable



// accountId = 12332  const works as a permanent storing therefore cant be changed
console.log(accountId)

/*
where as let and var allow to make changes 
*/
accountEmail = "ay@ay.com"
accountPassword = "443322"

console.table([accountId, accountEmail, accountPassword, accountState])

/*
If both let and var works the same then whats the diff?
var = problem , it was not able to read block scope or function scope ,thus if any changes made in the scope then it change the orignal variable
thats why let was introduced 
*/