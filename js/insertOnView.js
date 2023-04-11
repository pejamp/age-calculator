const dateView = document.querySelectorAll("[data-number]")

export function insertOnView(initialDate) {
  dateView.forEach((date) => {
    let dateAttribute = date.dataset.number;
    
    if (dateAttribute === 'years') {
      date.innerHTML = initialDate.year
    }
    if (dateAttribute === 'months') {
      date.innerHTML = initialDate.month
    }
    if (dateAttribute === 'days') {
      date.innerHTML = initialDate.day
    }
  })
}