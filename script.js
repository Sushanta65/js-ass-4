function calculateTax(income, expenses) {
  const netIncome = income - expenses;

  if (income >= 0 && expenses >= 0 && income >= expenses) {
    tax = netIncome * 0.2;
    return tax;
  } else {
    return "Invalid Input";
  }
}


function sendNotification(email) {
  if (email.indexOf("@") > -1) {
    const emailNameAndDomain = email.split("@");
    const emailName = emailNameAndDomain[0];
    const emailDomain = emailNameAndDomain[1];
    return emailName + " sent you an email from " + emailDomain;
  } else {
    return "Invalid Email";
  }
}


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
    return "Invalid Input";
  }
}



function calculateFinalScore(obj) {
  let finalScore;
  if (typeof obj == "object") {
    if (obj.isFFamily) {
      totalScore = obj.testScore + obj.schoolGrade + 20;
      finalScore = totalScore;
    } else {
      totalScore = obj.testScore + obj.schoolGrade;
      finalScore = totalScore;
    }
  } else {
    return "Invalid Input";
  }

  if (finalScore >= 80) {
    return true;
  } else {
    return false;
  }
}


function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) && typeof serialNumber == "number") {
    let times = 0;
    for (time of waitingTimes) {
      times += time;
    }
    let averageTime = Math.round(times / waitingTimes.length);

    let peopleLeft = serialNumber - 1 - waitingTimes.length;

    let remainingTime = peopleLeft * averageTime;
    return remainingTime;
  } else {
    return "Invalid Input";
  }
}
