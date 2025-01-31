// variables
const copyrightDate = document.querySelector(".copyrightDate");

function getCopyrightCurrentYear() {
  const date = new Date();
  copyrightDate.textContent = date.getFullYear();
}

export {getCopyrightCurrentYear};
