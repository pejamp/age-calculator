const inputElements = document.querySelectorAll("input");

export function isEmptyField() {
  let isValid = true;

  inputElements.forEach((input) => {
    const inputValue = input.value.trim() === "";

    if (inputValue) {
      let errorMessage = input.parentNode.querySelector(".error__message");

      if (!errorMessage) {
        errorMessage = document.createElement("span");
        errorMessage.classList.add("error__message");
        input.parentNode.appendChild(errorMessage);
      }

      errorMessage.innerHTML = "This field is required";
      input.parentNode.classList.add("error");
      isValid = false;
    } else {
      const errorMessage = input.parentNode.querySelector(".error__message");

      if (errorMessage) {
        errorMessage.remove();
      }

      input.parentNode.classList.remove("error");
    }
  });

  return isValid;
}

export function isValidDateInput(year, month, day) {
  const date = new Date(year, month, 0);
  const currentDate = new Date();
  let isValid = true;

  inputElements.forEach((input) => {
    let message;
    const dayValidation = day <= 31 && day > 0;
    const monthValidation = date.getMonth() + 1 === Number(month);
    const yearValidation = year <= currentDate.getFullYear() && year >= 1000;

    switch (input.name) {
      case "day":
        message = "Must be a valid day";
        isValid = handleError(dayValidation, message);
        break;
      case "month":
        message = "Must be a valid month";
        isValid = handleError(monthValidation, message);
        break;
      case "year":
        message = "Must be in the past";
        isValid = handleError(yearValidation, message);
        break;
      default:
        message = "";
    }

    function handleError(dateValidation, message) {
      if (!dateValidation) {
        let errorMessage = input.parentNode.querySelector(".error__message");

        if (!errorMessage) {
          errorMessage = document.createElement("span");
          errorMessage.classList.add("error__message");
          input.parentNode.appendChild(errorMessage);
        }

        errorMessage.innerHTML = message;
        input.parentNode.classList.add("error");
        return false;
      } else {
        const errorMessage = input.parentNode.querySelector(".error__message");

        if (errorMessage) {
          errorMessage.remove();
        }

        input.parentNode.classList.remove("error");
      }

      return true;
    }
  });

  return isValid;
}

export function isValidDate(year, month, day) {
  const date = new Date(year, month - 1, day);

  const isDateValid =
    date.getFullYear() === Number(year) &&
    date.getMonth() === Number(month) - 1 &&
    date.getDate() === Number(day);

  inputElements.forEach((input) => {
    if (!isDateValid) {
      let errorMessage = input.parentNode.querySelector(".error__message");

      if (!errorMessage && input.name === "day") {
        errorMessage = document.createElement("span");
        errorMessage.classList.add("error__message");
        errorMessage.innerHTML = "Must be a valid date";
        input.parentNode.appendChild(errorMessage);
      }

      input.parentNode.classList.add("error");
    } else {
      const errorMessage = input.parentNode.querySelector(".error__message");

      if (errorMessage) {
        errorMessage.remove();
      }

      input.parentNode.classList.remove("error");
    }
  });

  return isDateValid;
}
