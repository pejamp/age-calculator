const inputElements = document.querySelectorAll("input");

export function isEmptyField() {
  
  inputElements.forEach((input) => {
    if (input.value.trim() === '') {
      const errorMessage = document.createElement('span');
      errorMessage.classList.add("error__message");
      errorMessage.innerText = "This field is required";
      input.parentNode.appendChild(errorMessage);
      input.parentNode.classList.add("error");
      return false;
    } else {
      return true;
    }
  })
}

export function isValidDate(year, month, day) {
  const date = new Date(year, month - 1, day);

  console.log(year, month, day)

 

  return date.getDate() === day;
}