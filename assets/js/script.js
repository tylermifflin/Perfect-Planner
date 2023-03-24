// created variables for each id and class that i needed to use in my code, I decided to use separate ids for each hour to set up my for loop for the changetimeclass function
var currentDayEl = $('#currentDay');
var saveBtns = $('.saveBtn');
var timeBlockEl = $('time-block');
var textAreaEl = $('description');
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
// created function displayDate to display the current date in the header of the page
function displayDate () {
  var currentDate = dayjs().format('MMMM D YYYY');
  currentDayEl.text(currentDate);
}
// created function changetimeclass to apply the past, present, or future class to each time block by comparing the id to the current hour, used a for loop to make it more simple
function changetimeclass () { 
  var currentTime = dayjs().hour();
  console.log(currentTime);
  for (var i = 9; i <= 17; i++) {
    if (currentTime > i) {
      $('#hour-' + i).addClass('past');
    } else if (currentTime < i) {
      $('#hour-' + i).addClass('future');
    } else {
      $('#hour-' + i).addClass('present');
    }
  }
}
// used a query slector above to get all the savebtn classes, used a for loop to add an event listener to each button
for (var i = 0; i < saveBtns.length; i++) {
  saveBtns[i].addEventListener('click', saveText);
}

// created function to save the user input in local storage, used this, siblings to get the right box that the user types in, and description to get what the user types in the textarea, used parent and attr to get the id of the time-block containing the button that was clicked, and used setItem to save the user input in local storage
function saveText () {
  var text = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  localStorage.setItem(time, text);
}
// created function to get any user input that was saved in localStorage and set the values of the corresponding textarea elements
function getSavedText () {
  for (var i = 9; i <= 17; i++) {
    $('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i));
  }
}
// called all the functions
  displayDate();
  changetimeclass();
  getSavedText();


