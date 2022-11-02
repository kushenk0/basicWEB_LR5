function FormData(){
    //FullName
    const fieldFullName = document.getElementById("FullName").value;
    const checkFullName = /\w+\s+[A-Z]\.+[A-Z]\./;
    const caseFullName = checkFullName.test(fieldFullName);
    if(caseFullName) {
        document.getElementById('ValidFullName').innerHTML =`ПІБ: ${fieldFullName}`;
        document.getElementById('ValidFullName').style.color = "black";
    } else {
        document.getElementById('ValidFullName').innerHTML = "Невірно введено ПІБ";
        document.getElementById('ValidFullName').style.color = "red";
    }
    //Group
    const fieldGroup = document.getElementById("Group").value;
    const checkGroup = /[A-Z][A-Z]+\-+[0-9][0-9]/;
    const caseGroup = checkGroup.test(fieldGroup);
    if(caseGroup) {
        document.getElementById('ValidGroup').innerHTML = `Група: ${fieldGroup}`;
        document.getElementById('ValidGroup').style.color = "black";
    } else {
        document.getElementById('ValidGroup').innerHTML = "Невірно введено групу";
        document.getElementById('ValidGroup').style.color = "red";
    }
    //Phone Number
    const fieldPhoneNumber = document.getElementById("PhoneNumber").value;
    const checkPhoneNumber = /((\(\d{3}\) ?)|(\d{3}-))?\-\d{3}-\d{2}-\d{2}/;
    const casePhoneNumber = checkPhoneNumber.test(fieldPhoneNumber);
    if(casePhoneNumber) {
        document.getElementById('ValidPhoneNumber').innerHTML =`Номер телефону: ${fieldPhoneNumber}`;
        document.getElementById('ValidPhoneNumber').style.color = "black";
    } else {
        document.getElementById('ValidPhoneNumber').innerHTML = "Невірно введено номер телефону";
        document.getElementById('ValidPhoneNumber').style.color = "red";
    }
    //Id card
    const fieldIdCard = document.getElementById("IdCard").value;
    const checkIdCard = /[A-Z][A-Z]\ \d{3}/;
    const caseIdCard = checkIdCard.test(fieldIdCard);
    if(caseIdCard) {
        document.getElementById('ValidIdCard').innerHTML =`ID карта: ${fieldIdCard}`;
        document.getElementById('ValidIdCard').style.color = "black";
    } else {
        document.getElementById('ValidIdCard').innerHTML = "Невірно введено ID карту";
        document.getElementById('ValidIdCard').style.color = "red";
    }
    //Faculty
    const fieldFaculty = document.getElementById("Faculty").value;
    const checkFaculty = /[A-Z][A-Z][A-Z][A-Z]/;
    const caseFaculty = checkFaculty.test(fieldFaculty);
    if(caseFaculty) {
        document.getElementById('ValidFaculty').innerHTML =`Факультет: ${fieldFaculty}`;
        document.getElementById('ValidFaculty').style.color = "black";
    } else {
        document.getElementById('ValidFaculty').innerHTML = "Невірно введено факультет";
        document.getElementById('ValidFaculty').style.color = "red";
    }
}
function FullNameCase(){
    const fieldFullName = document.getElementById("FullName").value;
    const checkFullName = /\w+\s+[A-Z]\.+[A-Z]\./;
    const caseFullName = checkFullName.test(fieldFullName);
    let p = document.querySelector(".info1");
    if(caseFullName) {
        document.getElementById("FullName").style.border='solid green';
        p.innerHTML = "";
    } else {
        document.getElementById("FullName").style.border='solid red';
        p.innerHTML = "";
        p.style.color = "red";
        p.innerHTML += "Введення у форматі: TTTT T.T.";
    }
}
function GroupCase(){
    const fieldGroup = document.getElementById("Group").value;
    const checkGroup = /[A-Z][A-Z]+\-+[0-9][0-9]/;
    const caseGroup = checkGroup.test(fieldGroup);
    let p = document.querySelector(".info2");
    if(caseGroup) {
        document.getElementById("Group").style.border='solid green';
        p.innerHTML = "";
    } else {
        document.getElementById("Group").style.border='solid red';
        p.innerHTML = "";
        p.style.color = "red";
        p.innerHTML = "Введення у форматі: TT-ЧЧ";
    }
}
function PhoneNumberCase(){
    const fieldPhoneNumber = document.getElementById("PhoneNumber").value;
    const checkPhoneNumber = /((\(\d{3}\) ?)|(\d{3}-))?\-\d{3}-\d{2}-\d{2}/;
    const casePhoneNumber = checkPhoneNumber.test(fieldPhoneNumber);
    let p = document.querySelector(".info3");
    if(casePhoneNumber) {
        document.getElementById("PhoneNumber").style.border='solid green';
        p.innerHTML = "";
    } else {
        document.getElementById("PhoneNumber").style.border='solid red';
        p.innerHTML = "";
        p.style.color = "red";
        p.innerHTML = "Введення у форматі: (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ";
    }
}
function IdCardCase(){
    const fieldIdCard = document.getElementById("IdCard").value;
    const checkIdCard = /[A-Z][A-Z]\ \d{3}/;
    const caseIdCard = checkIdCard.test(fieldIdCard);
    let p = document.querySelector(".info4");
    if(caseIdCard) {
        document.getElementById("IdCard").style.border='solid green';
        p.innerHTML = "";
    } else {
        document.getElementById("IdCard").style.border='solid red';
        p.innerHTML = "";
        p.style.color = "red";
        p.innerHTML = "Введення у форматі: TT ЧЧЧЧЧЧ";
    }
}
function FacultyCase(){
    const fieldFaculty = document.getElementById("Faculty").value;
    const checkFaculty = /[A-Z][A-Z][A-Z][A-Z]/;
    const caseFaculty = checkFaculty.test(fieldFaculty);
    let p = document.querySelector(".info5");
    if(caseFaculty) {
        document.getElementById("Faculty").style.border='solid green';
        p.innerHTML = "";
    } else {
        document.getElementById("Faculty").style.border='solid red';
        p.innerHTML = "";
        p.style.color = "red";
        p.innerHTML = "Введення у форматі: ТТТТ";
    }
}
const cell2 = document.getElementById("cell2");
const colorSelected = document.getElementById('colorSelected');
function randomColor(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
}
cell2.addEventListener("mouseover", function() {
    cell2.style.backgroundColor = `rgb(${randomColor(0, 255)}, ${randomColor(0, 255)},
${randomColor(0, 255)})`;
});
cell2.addEventListener("click", function() {
    cell2.style.backgroundColor= colorSelected.value;
});
cell2.addEventListener("dblclick", function() {
    document.querySelector(".col").style.backgroundColor = colorSelected.value
})
