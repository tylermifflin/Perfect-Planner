// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $('#currentDay');
var saveBtnEl = $('saveBtn');
var timeBlockEl = $('time-block');
var textAreaEl = $('description');
var hourEl = $('hour');
var hour9El = $('#hour-9');
var hour10El = $('#hour-10');
var hour11El = $('#hour-11');
var hour12El = $('#hour-12');
var hour13El = $('#hour-13');
var hour14El = $('#hour-14');
var hour15El = $('#hour-15');
var hour16El = $('#hour-16');
var hour17El = $('#hour-17');
var pastEl = $('past');
var presentEl = $('present');
var futureEl = $('future');
// q: how to get the current hour in 24-hour time?
// a: dayjs().format('H')
function displayDate () {
  var currentDate = dayjs().format('MMMM D YYYY');
  currentDayEl.text(currentDate);
}
function changetimeclass () { 
  var currentTime = dayjs().hour();
  console.log(currentTime);
  if (currentTime > 15) {
    hour15El.addClass('past');
  }
}


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

  displayDate();
  changetimeclass();
