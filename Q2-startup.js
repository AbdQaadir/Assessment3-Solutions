const noOfUsers = 100;
let evenUsers = [];
let oddUsers = [];

 for (let i = 0; i < noOfUsers; i++) {
   if (i % 2 === 0) {
     evenUsers.push(i);
   } else {
     oddUsers.push(i);
  }
}
console.log("Users with Even ID : " + evenUsers);
console.log("Users with Odd ID : " + oddUsers);
