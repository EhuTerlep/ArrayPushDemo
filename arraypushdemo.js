var firstName = []
var lastName = []
var first = prompt("What is your first name?");
firstName.unshift(first);
var last = prompt("What is your last name?");
lastName.unshift(last);
window.alert(firstName + " " + lastName + " " + firstName.length + " " +lastName.length);