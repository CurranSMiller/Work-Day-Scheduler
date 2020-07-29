$(document).ready(function() {
  // listen for save button clicks

  $(".saveBtn").on("click", function() {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    console.log('value:', value);
    console.log('time:', time);

    function getData () {
      $("textarea").text(localStorage.getItem(value));
    };

    // save the value in localStorage as time
    localStorage.setItem(value, time);
  });

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();
    console.log('current hour:', currentHour);

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      var textArea = $("textarea");

      console.log("block hour:", blockHour);

   
      if (currentHour > blockHour) {
        $("this").addClass('past');
      } else if (currentHour === blockHour) {
        $("this").addClass('present');
      } else {
        $(".this").addClass('future');
      }

      
    });
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated
  // which means execute hourUpdater function every 15 seconds
  setInterval(hourUpdater(), 15000);

  // load any saved data from localStorage
  

  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
