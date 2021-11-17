//get current date
var currentDate = function() {
     var today = moment().format("MMMM Do YYYY");
     $(".date").text(today);
};

//change color based off time
var backgroundColors = function() {
    var hourId = $(".content").each(function() {
        $(this).removeClass("bg-danger")
        $(this).removeClass("bg-secondary")
        $(this).removeClass("bg-success")

        if ($(this).prop("id") == moment().format("HH")) {
            $(this).addClass("bg-danger")
        }   
        else if ($(this).prop("id") < moment().format("HH")){
            $(this).addClass("bg-secondary")
        }
        else if ($(this).prop("id") > moment().format("HH")){
            $(this).addClass("bg-success")
        }
        
    });

};

//var for saved plans object
var plans = [];

var save = function() {
    var text = $(event.target).siblings("textarea").val()
    var hour = $(event.target).parent().prop("id")
    
    var storage = JSON.parse(localStorage.getItem("eachHour"));

    // if nothing in localStorage, create an object for plans
    if (storage === null) {
        storage = []
    };

    var hourTask = {
        text: text,
        hour: hour
    }

    storage.push(hourTask)
    localStorage.setItem("eachHour", JSON.stringify(storage))
    
    plans.push(storage);

};

// calls save function when save button is clicked
$(".save").on("click", save)

//checks date every 5 hours to ensure it will show the correct date during work hours
setInterval(currentDate, (1000 * 60) * 300);

// runs backgroundColor function every 2 minutes to keep hours background updated
setInterval(backgroundColors, (1000 * 60) * 2);

//set current date
currentDate();

//get background colors
backgroundColors()
