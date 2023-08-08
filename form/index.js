function changeBackground(id) {
  document.getElementById(id).style.backgroundColor = "#FFF7C0";
}
function changeBack(id) {
  document.getElementById(id).style.backgroundColor = "#FFFFFF";
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    return false;
  }
  return true;
}

function onlyNumbers(inputElement) {
  inputElement.value = inputElement.value.replace(/[^0-9]/, "");
}

function moveToNextField(inputElement, nextFieldId) {
  const inputValue = inputElement.value;
  const maxLength = inputElement.maxLength;

  if (inputValue.length === maxLength) {
    document.getElementById(nextFieldId).focus();
  }
}

function validateForm() {
  var first = document.getElementById("firstOne").value;
  var last = document.getElementById("lastOne").value;
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var schoolName = document.getElementById("schoolName").value;
  var lastTwo = document.getElementById("lastTwo").value;
  var firstTwo = document.getElementById("firstTwo").value;
  var address01 = document.getElementById("address01").value;
  var address02 = document.getElementById("address02").value;
  var address03 = document.getElementById("address03").value;
  var address04 = document.getElementById("address04").value;
  var address05 = document.getElementById("address05").value;
  var phone01 = document.getElementById("dob111").value;
  var phone02 = document.getElementById("dob222").value;
  var phone03 = document.getElementById("dob333").value;
  var email = document.getElementById("email").value;
  var firstThree = document.getElementById("firstThree").value;
  var lastThree = document.getElementById("lastThree").value;
  var phone04 = document.getElementById("dob1").value;
  var phone05 = document.getElementById("dob2").value;
  var phone06 = document.getElementById("dob3").value;
  var textBox = document.getElementById("textBox").value;
  if (first.trim() == "") {
    alert("First Name is empty!");
    document.getElementById("firstOne").focus();
    return false;
  }
  if (last.trim() == "") {
    alert("Last Name is empty!");
    document.getElementById("lastOne").focus();
    return false;
  }
  if (day.trim() === "") {
    alert("Day is not picked!");
    document.getElementById("day").focus();
    return false;
  }
  if (month.trim() === "") {
    alert("Day is not picked!");
    document.getElementById("month").focus();
    return false;
  }
  if (year.trim() === "") {
    alert("Day is not picked!");
    document.getElementById("year").focus();
    return false;
  }
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value) - 1;
  var year = parseInt(document.getElementById("year").value);

  var birthDate = new Date(year, month, day);
  var currentDate = new Date();

  var age = currentDate.getFullYear() - birthDate.getFullYear();
  var monthDiff = currentDate.getMonth() - birthDate.getMonth();

  if ( monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate()))
    age--;

    if (birthDate > currentDate) {
      alert("Don't enter future date!");
      document.getElementById("year").focus();
      return false;
    }
  if (month < 0 || month > 11) {
    alert("Month must be between 1 and 12.");
    document.getElementById("month").focus();
    return false;
  }
  if (day < 1 || day > new Date(year, month + 1, 0).getDate()) {
    alert("Enter a valid day for the selected month.");
    document.getElementById("day").focus();
    return false;
  }
  
  if (age < 18) {
    alert("You must be at least 18 years old.");
    document.getElementById("day").focus();
    return false;
  }
  if (schoolName.trim() === "") {
    alert("Enter school Name!");
    document.getElementById("schoolName").focus();
    return false;
  }
  if (firstTwo.trim() === "") {
    alert("Enter First Name!");
    document.getElementById("firstTwo").focus();
    return false;
  }
  if (lastTwo.trim() === "") {
    alert("Enter last Name!");
    document.getElementById("lastTwo").focus();
    return false;
  }
  if (address01.trim() === "") {
    alert("Enter Street Address!");
    document.getElementById("address01").focus();
    return false;
  }
  if (address02.trim() === "") {
    alert("Enter Address line 2!");
    document.getElementById("address02").focus();
    return false;
  }
  if (address03.trim() === "") {
    alert("Enter City Name!");
    document.getElementById("address03").focus();
    return false;
  }
  if (address04.trim() === "") {
    alert("Enter State Name!");
    document.getElementById("address04").focus();
    return false;
  }
  if (address05.trim() === "") {
    alert("Enter Postal Code!");
    document.getElementById("address05").focus();
    return false;
  }
  if (phone01.trim() === "") {
    alert("Enter Phone Number!");
    document.getElementById("dob111").focus();
    return false;
  }
  if (phone02.trim() === "") {
    alert("Complete Phone Number!");
    document.getElementById("dob222").focus();
    return false;
  }
  if (phone03.trim() === "") {
    alert("Complete phone number!");
    document.getElementById("dob333").focus();
    return false;
  }
  var mobileNoCheck1 = document.getElementById("dob111");

  if (mobileNoCheck1.value.charAt(0) <= "5") {
    alert("Starting number must be greater than 5.");
    document.getElementById("dob111").focus();
    return false;
  }

  if (email.trim() === "") {
    alert("Enter email address!");
    document.getElementById("email").focus();
    return false;
  }

  const isUnique = str => new Set(str).size === str.length;

  const emailPattern = /^[a-zA-Z0-9._-]{2,10}@(gmail|farmwiseai)\.com$/;
 
  const emailParts = email.split('@');

    if (!isUnique(emailParts[0].trim())) {
      alert("Dont repeat the character!");
      document.getElementById("email").focus();
      return false;
    }
  
    if (!emailPattern.test(email.trim())) {
      alert("Enter Valid Email!");
      document.getElementById("email").focus();
      return false;
    } 
  
  if (firstThree.trim() === "") {
    alert("Enter First Name!");
    document.getElementById("firstThree").focus();
    return false;
  }
  if (lastThree.trim() === "") {
    alert("Enter Last Name!");
    document.getElementById("lastThree").focus();
    return false;
  }
  if (phone04.trim() === "") {
    alert("Complete phone number!");
    document.getElementById("dob1").focus();
    return false;
  }
  if (phone05.trim() === "") {
    alert("Complete phone number!");
    document.getElementById("dob2").focus();
    return false;
  }
  if (phone06.trim() === "") {
    alert("Complete phone number!");
    document.getElementById("dob3").focus();
    return false;
  } 

  var mobileNoCheck2 = document.getElementById("dob1");
  if (mobileNoCheck2.value.charAt(0) <= "5") {
    alert("Starting number must be greater than 5.");
    document.getElementById("dob1").focus();
    return false;
  }
  if (textBox.trim() === "") {
    alert("Enter Medical Concern!");
    document.getElementById("textBox").focus();
    return false;
  }
 
  return true;
}
