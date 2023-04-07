# password-generator

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     | 
| Javascript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)   |
| jQuery | [https://jquery.com/](https://jquery.com/)   |
| Bootstrap | [https://getbootstrap.com/](https://getbootstrap.com/)   |
| Day.js | [https://day.js.org/](https://day.js.org/)   |


## Description 

[Visit the Deployed Site](https://samhiga.github.io/work-day-scheduler/)

This site has the ability to tell the users the current time and date as well as write down their notes or tasks for each hour of their workday (9am - 5pm). They can then save anything written down for later time using the save button for each row.




## Table of Contents 

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Javascript Example](#javascript-example)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)



## Javascript Example

To get a hold of this project, simply navigate to my Github profile and select the repo "work-day-schedule". From there copy the SSH link into your terminal, Gitbash, or whatever application you prefer and use git copy and then paste link. You can then open it using VS Code.


```javascript
  $(document).ready(function (){
setInterval(function(){
$("#currentDay").text(dayjs().format("dddd, MMMM D YYYY, h:mm:ss a"));
}, )
  })
```

In the above code, I used a function that utilized jQuery and Day.js to be able to display the current date and time.

```javascript
function currentColor(){
  var currentHour = dayjs().hour()
  $('.time-block').each(function() {
    var currentId = $(this).attr('id')
    var numberHour = currentId.slice(-2)
    if (numberHour < currentHour) {
      $(this).removeClass('present')
      $(this).removeClass('future')
      $(this).addClass('past')
    } else if(currentHour == numberHour){
      $(this).removeClass('past')
      $(this).removeClass('future')
      $(this).addClass('present')
    }else if (numberHour > currentHour){
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')
    }
  })
}

```

In order to get the rows for each hour to change color, I again utilized jQeury and Day.js by creating a function that contained an if else statement. The past hours would show up as grey, while the current hour would be red, and future hour be displayed as green.


## Usage 

In order to use the work day scheduler write down any tasks or notes in the rows for each hour. After that you may click the save button on the right of each row. You could then return at a later time and you notes will still be there 


The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)



## Learning Points 


Through this project, I got a better understanding of jQuery, Bootstrap, and Day.js. There is still a lot to learn from these tools, but I have better baseline understanding while also continuing to get better at creating functions and if else statements.


## Author Info


### Sam Higa 


* [Portfolio](https://samhiga.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/sam-higa-b887b9209/)
* [Github](https://github.com/samhiga)



## Credits

Tutor: Brandon Rose