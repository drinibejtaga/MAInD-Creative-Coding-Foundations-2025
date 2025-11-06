const school = "SUPSI"

function fullName(name, surname) {
    return "Surname: " + surname + ", Name: " + name;
}

function printInfo(name, surname, course) {
    console.log(school + " " + fullName(name, surname) + ", course: " + course);
}

function printGrades(name, surname, grade) {
    console.log(school + " " + fullName(name, surname) + ", Grade: " + grade);
}

function printCreditsLaser(name, surname, grade) {
    console.log(fullName(name, surname) + ", credit: " + grade);
}

function printCredits3D(name, surname, grade) {
    console.log(fullName(name, surname) + ", credit: " + grade);
}

printInfo("Marco", "Lurati", "Coding Foundations");
printGrades("Marco", "Lurati", 10);
printCreditsLaser("Marco", "Lurati", 1);
printCredits3D("Marco", "Lurati", 2);