var Person = function(firstName, lastName, dateOfBirth, masa){
    this.firstName =firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.masa = masa;
}
person = new Person ('Jim',"Perice",new Date(2013,2,12), {weight:'70kg'});
personClone = JSON.parse(JSON.stringify(person));

//console.log(person === personClone); false

console.log(person.firstName === personClone.firstName)
//true


//console.log(person.masa['weight']===personClone['weight'])
//false

//console.log(person.dateOfBirth.toDateString() === personClone.dateOfBirth.toDateString())
//error