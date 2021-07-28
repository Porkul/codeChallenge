// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
  //using a for loop through the elements in our "contacts" array
  for (var i =0; i<contacts.length; i++){
  //use for-in loop through objects if the given firstname exist 
    if (contacts[i].firstName === firstName){
        for (var keys in contacts[i]){
          if (keys === prop){
            return contacts[i][prop];
          } 
        } 
        //if (keys === prop) is false return:
        return "No such property";
      }
    }  
// if(contacts[i].firstName === firstName) is false return:
return "No such contact";
}
