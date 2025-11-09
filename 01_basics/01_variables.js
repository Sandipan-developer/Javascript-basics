const accountId=777777
let accountEmail="fred@google.com"
var accountPasswd="sfkbdgd"
accountCity="Faridabad"//don't assign variables like this

//accountId=2 //constants can't be changed

console.log(accountId)
accountEmail="dfghjk@google.com"
accountCity="Jammu"
accountPasswd="jkl;fg"

//don't use var for scope related problems

console.table([accountId,accountEmail,accountPasswd,accountCity])