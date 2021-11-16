//get current date
var currentDate = function() {
     var today = moment().format("MMMM Do YYYY");
     $(".date").text(today);
};

//set current date
currentDate();

setInterval(currentDate, (1000 * 60) * 300);

//change color based off time
var backgroundColors = function() {
    var hourId = $(".content").each(function() {

        if ($(this).prop("id") == moment().format("HH")) {
            $(this).addClass("bg-danger")
            console.log($(this))
        }   
        else if ($(this).prop("id") < moment().format("HH")){
            $(this).addClass("bg-secondary")
            console.log($(this))
        }
        else if ($(this).prop("id") > moment().format("HH")){
            $(this).addClass("bg-success")
            console.log($(this))
        }
    });

};

setInterval(backgroundColors, (1000 * 60) * 5);

//var for saved plans object
var plans = [];

// save plans
// var save = function() {
//     var plan = $(event.target).siblings("textarea").val()

//     var storage = JSON.parse(localStorage.getItem("plans"));

//     // if nothing in localStorage, create an object for plans
//     if (!storage) {
//         storage = [];
//     }

//     var hourTask = [{
//         task: plan
//     }]

//     storage.push(hourTask)
//     localStorage.setItem("hour", JSON.stringify(storage))
//     plans.push(storage)


//     console.log(plans)
// };

$(".save").on("click", function() {
    save();
    
}) 

backgroundColors()