import { insertOnView } from "./insertOnView.js";
import { isEmptyField, isValidDate } from "./validate.js";

const form = document.querySelector("[data-form]");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!isEmptyField()) {
    return;
  }

  if (isValidDate(year.value, month.value, day.value)) {
    console.log("passei")
  }

  const newDate = {
    year: year.value,
    month: month.value,
    day: day.value
  }

  insertOnView(newDate);
})