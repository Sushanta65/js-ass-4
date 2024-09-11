// Problem - 1 : Tax Calculator Funcation Starts Here

function calculateTax(income, expenses) {
  const netIncome = income - expenses;

  if (income >= 0 && expenses >= 0 && income >= expenses) {
    tax = netIncome * 0.2;
    return tax;
  } else {
    return '"Invalid Input"';
  }
}
// Tax Calculator Function Ends Here.

// Problem - 02 : Send Notification Function Starts Here

function sendNotification(email) {
  if (email.indexOf("@") > -1) {
    const emailNameAndDomain = email.split("@"); // Sepatate The String by @ and put into an array.
    const emailName = emailNameAndDomain[0]; // texts bofore @;
    const emailDomain = emailNameAndDomain[1]; // texts after @,
    return emailName + " sent you an email from " + emailDomain; // Return the full text.
  } else {
    return '"Invalid Input"';
  }
}
// Send Notification Function Ends Here

// Problem - 03 : Check Digits In Name Funcation Stars Here

function checkDigitsInName(name) {
  let isDigits;
  if (typeof name == "string") {
    for (digit of name) {
      if (!isNaN(digit)) {
        isDigits = true;
        break;
      } else {
        isDigits = false;
      }
    }
    return isDigits;
  } else {
    return '"Invalid Input"';
  }
}

//Check Digits In Name Function Ends Here

// Problem - 04 : Calculate Final Score Function Starts Here

function calculateFinalScore(obj) {
  let finalScore; //final score container. true or false.
  if (typeof obj == "object") {
    if (obj.isFFamily) {
      totalScore = obj.testScore + obj.schoolGrade + 20; //parent proffesion farmer score +20;
      finalScore = totalScore;
    } else {
      totalScore = obj.testScore + obj.schoolGrade;
      finalScore = totalScore;
    }
  } else {
    return '"Invalid Input"';
  }

  if (finalScore >= 80) {
    return true;
  } else {
    return false;
  }
}

// Calculate Final Score Funcation Ends Here

// Problem - 05 : Waiting Time Function Starts Here

function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) && typeof serialNumber == "number") {
    let times = 0;
    for (time of waitingTimes) {
      times += time;
    }
    let averageTime = Math.round(times / waitingTimes.length);

    let peopleLeft = serialNumber - 1 - waitingTimes.length;

    let needTime = peopleLeft * averageTime;
    return needTime;
  } else {
    return '"Invalid Input"';
  }
}

// Waitaing Time Function Ends Here
