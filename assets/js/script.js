// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $("#currentDay");
var saveBtnEl = $(".saveBtn");
var timeBlockEl = $(".time-block");
var textAreaEl = $(".description");
var hourEl = $(".hour");
var hour9El = $("#hour-9");
var hour10El = $("#hour-10");
var hour11El = $("#hour-11");
var hour12El = $("#hour-12");
var hour1El = $("#hour-1");
var hour2El = $("#hour-2");
var hour3El = $("#hour-3");
var hour4El = $("#hour-4");
var hour5El = $("#hour-5");
var pastEl = $(".past");
var presentEl = $(".present");
var futureEl = $(".future");
var currentHour = dayjs().hour();
var currentDay = dayjs().format('MMMM D YYYY, h:mm a');


function displayTime () {
  var currentTime = dayjs().format('MMMM D YYYY, h:mm a');
  currentDayEl.text(currentTime);
}
$(function () { 
if (currentHour > 9) {
  hour9El.addClass("past");
} else if (currentHour < 9) {
  hour9El.addClass("future");
} else {
  hour9El.addClass("present");
}
if (currentHour > 10) {
  hour10El.addClass("past");
} else if (currentHour < 10) {
  hour10El.addClass("future");
} else {
  hour10El.addClass("present");
}
if (currentHour > 11) {
  hour11El.addClass("past");
} else if (currentHour < 11) {
  hour11El.addClass("future");
} else {
  hour11El.addClass("present");
}
if (currentHour > 12) {
  hour12El.addClass("past");
} else if (currentHour < 12) {
  hour12El.addClass("future");
} else {
  hour12El.addClass("present");
}
if (currentHour > 1) {
  hour1El.addClass("past");
} else if (currentHour < 1) {
  hour1El.addClass("future");
} else {
  hour1El.addClass("present");
}
if (currentHour > 2) {
  hour2El.addClass("past");
} else if (currentHour < 2) {
  hour2El.addClass("future");
} else {
  hour2El.addClass("present");
}
if (currentHour > 3) {
  hour3El.addClass("past");
} else if (currentHour < 3) {
  hour3El.addClass("future");
} else {
  hour3El.addClass("present");
}
if (currentHour > 4) {
  hour4El.addClass("past");
} else if (currentHour < 4) {
  hour4El.addClass("future");
} else {
  hour4El.addClass("present");
}
if (currentHour > 5) {
  hour5El.addClass("past");
} else if (currentHour < 5) {
  hour5El.addClass("future");
} else {
  hour5El.addClass("present");
}
});
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  displayTime();
