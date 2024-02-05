const userInput = document.getElementById("date");
const buttonCalculate = document.querySelector("button");
const resultItem = document.getElementById("result");
const reslutText = document.querySelector("#result span");

// disable selection of future date
userInput.max = new Date().toISOString().split("T")[0];

// calculate age
const calculateAge = () => {
  // user birth date
  let birthDate = new Date(userInput.value);

  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let birthYear = birthDate.getFullYear();

  //   current date
  let today = new Date();

  let todayDay = today.getDate();
  let todayMonth = today.getMonth() + 1;
  let todayYear = today.getFullYear();

  //   calculate age difference
  let gapDay, gapMonth, gapYear;
  let yText, dText, mText;
  gapYear = todayYear - birthYear;

  if (todayMonth >= birthMonth) {
    gapMonth = todayMonth - birthMonth;
  } else {
    gapYear--;
    gapMonth = 12 + todayMonth - birthMonth;
  }

  if (todayDay >= birthDay) {
    gapDay = todayDay - birthDay;
  } else {
    gapMonth--;
    gapDay = getDaysInMonth(birthYear, birthMonth) + todayDay - birthDay;
  }

  if (gapMonth < 0) {
    gapMonth = 11;
    gapYear--;
  }

  if (gapYear > 1) {
    yText = "Years";
  } else {
    yText = "Year";
  }

  if (gapMonth > 1) {
    mText = "Months";
  } else {
    mText = "Month";
  }

  if (gapDay > 1) {
    dText = "Days";
  } else {
    dText = "Day";
  }

  //   console.log(gapYear, gapMonth, gapDay);
  reslutText.innerHTML = `${gapYear} ${yText} ${gapMonth} ${mText} ${gapDay} ${dText}`;
  resultItem.style.display = "block";
};

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

// calculate button event
buttonCalculate.addEventListener("click", calculateAge);
