# Perfect-Planner
Purpose: This app will help the user use their time efficiently to get the things they need done so they can enjoy their weekend! 
Usage: This app shows the current date and displays a planner for the day from the workday hours of 9am to 5pm. The tabs next to each hour are color coordinated based on the current time of day. If the time slot is in the past, the color will be gray, if the time slot is in the present, the color will be red, if the time slot is in the future, the color will be green. The user can type any of the things that they need to get done in any given time slot. There is a save button on the right side of the description tab. Once the user clicks save, their task will be saved into local storage. If the user closes the tab, once they reopen the page, the items that were saved in local storage will still be there.
Noteworthy Features: -This app uses HTML, CSS, Javascript, Bootstrap, Google Fonts API, JQuery and Day JS.
-I used Day Js to update the current date on the header of the calendar.

-I also created a for loop to change the color of my content in each tab next to the time of day depending on the current time. I created a for loop to check the current time, and depending on the time to assign the class past, present or future to each individual tab. 

-I created variables for elements in JQuery that use the certain ids and classes that i wanted to manipulate in my JavaScript.

-I used JQuery for my functions and my for loops.

-I created an event listener for the save button and used a for loop to check each button and assign whatever had been typed into local storage or to retrieve whatever was in local storage once the page is closed and reopened.

-I learned how to use for loops more effectively and efficiently. I originally started writing a lot of if statements to change my classes based on the time for past, present, and future. I realized after a lot of lines of code, that a for loop would do the same thing and be much easier to read and change!

Here is a link to my deployed application and a screenshot to my page: 

![Screenshot 2023-03-24 at 2 36 49 PM](https://user-images.githubusercontent.com/123903709/227639785-d936ccb5-a679-4b47-bc1c-fbd3572e73d6.png)
<img width="979" alt="Screenshot 2023-03-24 at 2 37 21 PM" src="https://user-images.githubusercontent.com/123903709/227639807-57934b2d-0b84-4628-921d-1faa951ad099.png">
