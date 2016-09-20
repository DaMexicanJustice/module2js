/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myForm = document.getElementById("form");
myForm.onsubmit = function () {
    for (var i = 0; i <= 6; i++) {
        document.getElementById(i + 1).style.background = "cyan";
    }
    return false;
};

function Person(firstname, lastname, phone, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.phone = phone;
    this.email = email;
}

var yennifer = new Person("Jennifer", "McSulkin", "8x8", "tooswag@for.you");
var alicia = new Person("Alicia", "Keys", "8x4", "test@test.test");
var cassandra = new Person("Cassandra", "SoulCalibur", "2x2", "pretty@lady.ishot");
var fiora = new Person("Fiora", "Xenoblade", "9x9", "awesome@female.character");

var characters = [yennifer, alicia, cassandra, fiora];

var myTable = document.getElementById("sometable");
myTable.innerHTML = "";


characters.forEach(function (entry) {
    var i = 0;
    var row = myTable.insertRow(i);
    var td1 = row.insertCell(0);
    var td2 = row.insertCell(1);
    var td3 = row.insertCell(2);
    var td4 = row.insertCell(3);
    td1.innerHTML = entry.firstname;
    td2.innerHTML = entry.lastname;
    td3.innerHTML = entry.phone;
    td4.innerHTML = entry.email;
});

var king = document.getElementById("king");
king.onclick = function () {
    var message = "So you want to be the king, huh?";
    alert(message);
    console.log(message);
};

var queen = document.getElementById("queen");
queen.onclick = function () {
    var message = "Sexy time with the queen is what you desire, huh?";
    alert(message);
    console.log(message);
};

var joker = document.getElementById("joker");
joker.onclick = function () {
    var message = "Oh, I am not gonna kill ya. I am just gonna hurt you really, really bad.";
    alert(message);
    console.log(message);
};

var sneaky = document.getElementById("sneaky");
sneaky.onmouseenter = function () {
    sneaky.innerHTML = "You sneaky little f..."
};
sneaky.onmouseout = function () {
    sneaky.innerHTML = "Nothing to see here";
};

var castro = document.getElementById("castro");
castro.onmouseenter = function () {
    castro.innerHTML = "UrbanDictionary -> Sneaky Castro"
};
castro.onmouseout = function () {
    castro.innerHTML = "I am insignificant";
};

var spy = document.getElementById("spy");
spy.onmouseenter = function () {
    spy.innerHTML = "Russia salutes you";
};
spy.onmouseout = function () {
    spy.innerHTML = "I spy with my little eye...";
};

function handleForm() {
    var msg = document.getElementById("msg").value + ", ";
    var pwd = document.getElementById("pwd").value + ", ";
    var gender = document.getElementById("gender").value + ", ";
    var wizard = (document.getElementById("wizard").checked === true ? "wizard" : "not a wizard");
    console.log(msg + pwd + gender + wizard);

    var myAwesomeTable = document.getElementById("awesomeTable");
        var i = 0;
        var row = myAwesomeTable.insertRow(i);
        var td1 = row.insertCell(0);
        var td2 = row.insertCell(1);
        var td3 = row.insertCell(2);
        var td4 = row.insertCell(3);
        td1.innerHTML = msg;
        td2.innerHTML = pwd;
        td3.innerHTML = gender;
        td4.innerHTML = wizard;
}
;

function respond(sender) {

    console.log("Starting up... <" + sender.innerHTML + ">");

}

function hover(sender) {

    sender.style.fontSize = "x-large";

}

function restore(sender) {
    sender.style.fontSize = "medium";
}