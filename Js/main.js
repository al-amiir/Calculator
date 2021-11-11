// From Inputs
let inputs = document.querySelectorAll("input");

// Buttons
let brexButton = document.querySelector(".brexButton");
let stripeButton = document.querySelector(".stripeButton");
let amexButton = document.querySelector(".amexButton");

// Calculation Text
let unlimitedRewards = document.querySelector(".unlimitedRewards");
let lifetimeRewards = document.querySelector(".lifetimeRewards");
let finalClacName = document.querySelector(".finalCalc_name");
let finalClacNumber = document.querySelector(".finalCalc_number");

// Values
let sum;
let check;
let checkList = [false, false, false, false];

// Check Form Validation
function checkValidation() {
  inputs.forEach((inp, i) =>
    inp.addEventListener("input", () => {
      if (inp.value === "") {
        checkList[i] = false;
        calcSum();
      } else {
        checkList[i] = true;
        calcSum();
      }
    })
  );
}
// Sum Calculation
function calcSum() {
  if (!checkList.includes(false)) {
    check = true;
    sum = 0;
    inputs.forEach((inp) => (sum += +inp.value));
    unlimitedRewards.textContent = `$${(sum * 1.1).toFixed(2)}`;
    lifetimeRewards.textContent = `$${(sum * 1.2).toFixed(2)}`;
    finalClacNumber.textContent = "";
  } else {
    check = false;
    unlimitedRewards.textContent = "";
    lifetimeRewards.textContent = "";
    finalClacName.textContent = "";
    finalClacNumber.textContent = "";
  }
}

checkValidation();

// Diff Calculations
let brex = () => {
  finalClacName.textContent = `Brex Business Card`;
  finalClacNumber.textContent = `$${(sum * 0.3).toFixed(2)}`;
};
let stripe = () => {
  finalClacName.textContent = `STRIPE Business Card`;
  finalClacNumber.textContent = `$${(sum * 2.9).toFixed(2)}`;
};
let amex = () => {
  finalClacName.textContent = `AMEX Business Card`;
  finalClacNumber.textContent = `$${(sum * 1.3).toFixed(2)}`;
};

// Diff On Click Events
brexButton.addEventListener("click", () => (check ? brex() : null));
stripeButton.addEventListener("click", () => (check ? stripe() : null));
amexButton.addEventListener("click", () => (check ? amex() : null));
