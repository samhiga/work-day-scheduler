// this function displays the current time and date
  $(document).ready(function (){
setInterval(function(){
$("#currentDay").text(dayjs().format("dddd, MMMM D YYYY, h:mm:ss a"));
}, )
// this function allows me to save to local storage whatever is written in the rows by clicking the button
$(".saveBtn").on("click", function(){
  var userInput = $(this).siblings('.description').val()
  var timeBlock = $(this).parent().attr('id')
  localStorage.setItem(timeBlock, userInput)
})
// allows for anything written down to stay on the page after being refreshed  
$('#hour-09 .description').val(localStorage.getItem("hour-09"))
$('#hour-10 .description').val(localStorage.getItem("hour-10"))
$('#hour-11 .description').val(localStorage.getItem("hour-11"))
$('#hour-12 .description').val(localStorage.getItem("hour-12"))
$('#hour-13 .description').val(localStorage.getItem("hour-13"))
$('#hour-14 .description').val(localStorage.getItem("hour-14"))
$('#hour-15 .description').val(localStorage.getItem("hour-15"))
$('#hour-16 .description').val(localStorage.getItem("hour-16"))
$('#hour-17 .description').val(localStorage.getItem("hour-17"))

// function that allows the color of the rows to change according to the time of day, -2 allows me to target only the last 2 characters of the hour id(the numbers in this case)
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

currentColor()

});

