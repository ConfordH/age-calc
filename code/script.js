function getage() {
  let d1 = parseInt(document.getElementById("date").value);
  let m1 = parseInt(document.getElementById("month").value);
  let y1 = parseInt(document.getElementById("year").value);

  // Check for non-numerical input
  if (isNaN(d1) || isNaN(m1) || isNaN(y1)) {
    showInvalidInputPopup();
    return;
  }

  let date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();
  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Check for leap year
  if ((y1 % 4 == 0 && y1 % 100 != 0) || y1 % 400 == 0) {
    monthDays[1] = 29; // Leap year, February has 29 days
  }

  // Validate input
  if (
    m1 < 1 ||
    m1 > 12 ||
    d1 < 1 ||
    d1 > monthDays[m1 - 1] ||
    y1 < 0 ||
    y1 > y2
  ) {
    showInvalidInputPopup();
    return;
  }

  if (d1 > d2) {
    d2 += monthDays[m2 - 1];
    m2 -= 1;
  }

  if (m1 > m2) {
    m2 += 12;
    y2 -= 1;
  }

  let days = d2 - d1;
  let months = m2 - m1;
  let years = y2 - y1;

  document.getElementById("age").innerHTML =
    "Your Age is " + years + " Years " + months + " Months " + days + " Days";
}

function showInvalidInputPopup() {
  // Display popup for invalid input
  let popup = document.getElementById("error-popup");
  popup.classList.add("show");

  // Hide the popup after 3 seconds
  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);
}
