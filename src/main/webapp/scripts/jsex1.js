/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var myBoolean = true;
var myString = "String";
var myNumber = 10;
var myArray = ["en", "af", "dem", "der", "red", "med", "fane"];
var object = {studentId: 5, studentName: "Den Bedste", studentAge: 25};

console.log(myBoolean + " " + myString + " " + myNumber);
myArray.forEach(function (entry) {
    console.log(entry);
});
console.log(object.studentId + " " + object.studentName + " " + object.studentAge);
console.log("--------------------------");

var myCoolerArray = ["This is", 1337, {whatAmI: "cool", howCool: 9000}, true];
myCoolerArray.forEach(function (entry) {
    console.log(entry);
});
console.log("--------------------------");

var student1 = {studentId: 1, studentName: "Ruby", studentAge: 20, isFemale: true, toString: function () {
        return student1.studentId + " " + student1.studentName;
    }};
var student2 = {studentId: 2, studentName: "Emerald", studentAge: 10, isFemale: true, toString: function () {
        return student2.studentId + " " + student2.studentName;
    }};
var student3 = {studentId: 3, studentName: "Amethyst", studentAge: 25, isFemale: false, toString: function () {
        return student3.studentId + " " + student3.studentName;
    }};


var students = [student1, student2, student3];
students.forEach(function (entry) {
    console.log(entry.toString());
});

console.log("---------------------")

var listOfStudents = {
    students: [student1, student2, student3],
    getAllStudents: function () {
        students.forEach(function (entry) {
            if (entry.isFemale) {
                console.log("This one is hella cute: " + entry);
            }
        });
    },
    getEldestStudent: function () {
        var temp = 100;
        students.forEach(function (entry) {
            if (entry.studentAge < temp) {
                temp = entry.studentAge;
            }
        });
        return temp;
    }
};

listOfStudents.getAllStudents();
console.log("Don't stick your... in: " + listOfStudents.getEldestStudent());

console.log("--------------------------");

var list = ["Alfred", "Beatrice", "Charlotte", "Duckling Duck", "Fanny"];
var p = "Beatrice";
function removeFromListAndGetList(list, p) {
    return list.splice(list.indexOf(p));
}
console.log(removeFromListAndGetList(list, p));

console.log("---------------------------");

students.forEach(function (entry) {
    if (entry.studentAge >= 30)
        return entry;
});

console.log("----------------------------");

function max() {
    var KingOfTheHill = new Object();
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i].penisSize > KingOfTheHill.penisSize)
            KingOfTheHill = arguments[i];
    }
    return KingOfTheHill;
}
console.log(max(new Object(), new Object(), new Object()));
console.log("-----------------------------");

function tellMeWhatDayItIs() {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    return today = mm + '/' + dd + '/' + yyyy;

}
console.log(tellMeWhatDayItIs());

console.log("-----------------------------");

function indigen(name, biome, size, isMammal) {
    this.name = name;
    this.biome = biome;
    this.size = size;
    this.isMammal = isMammal;
    this.toString = function (filter) {
        if (this.isMammal === filter) {
            return "Name: " + this.name + ", Biome: " + this.biome + ", Size: " + this.size + ", isMammal: " + this.isMammal;
        } else {
            return "not a mammal";
        }
        ;
    };
}
var bunnit = new indigen("Bunnit", "Plains", "Small", true);
var dinobeast = new indigen("Telethia", "Jungle", "Large", false);
var tectensula = new indigen("Tectensula", "Plains", "Huge", false);
var indigens = [bunnit, dinobeast, tectensula];

indigens.forEach(function (entry) {
    console.log(entry.toString(true));
});
console.log("----------------------------");

    indigens.map(function(entry) {
        console.log(entry.name);
    });
    
console.log("----------------------------");