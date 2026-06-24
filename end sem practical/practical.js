function calculateAge() {

  var dobInput = document.getElementById("dob").value;

  var errorMsg  = document.getElementById("error-msg");
  var resultBox = document.getElementById("result-box");
  var yearsBox  = document.getElementById("years");
  var monthsBox = document.getElementById("months");
  var daysBox   = document.getElementById("days");

  if (dobInput === "") {
    errorMsg.textContent    = "Please select your date of birth.";
    resultBox.style.display = "none";
    return;
  }

  errorMsg.textContent = "";

  var dob   = new Date(dobInput);
  var today = new Date();

  if (dob > today) {
    errorMsg.textContent    = "Date of birth cannot be in the future.";
    resultBox.style.display = "none";
    return;
  }

  var ageYears  = today.getFullYear() - dob.getFullYear();
  var ageMonths = today.getMonth()    - dob.getMonth();
  var ageDays   = today.getDate()     - dob.getDate();

  if (ageDays < 0) {
    ageMonths = ageMonths - 1;
    var previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays = ageDays + previousMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears  = ageYears  - 1;
    ageMonths = ageMonths + 12;
  }

  yearsBox.textContent  = "Years  : " + ageYears;
  monthsBox.textContent = "Months : " + ageMonths;
  daysBox.textContent   = "Days   : " + ageDays;

  resultBox.style.display = "block";
}