//get current date
var currentDate = moment().format("MMMM Do YYYY");

$(".date").text(currentDate);

//var for saved plans object
var plans = {};

// load plans from local storage
var loadPlans = function () {
    plans = JSON.parse(localStorage.getItem("plans"));

    // if nothing in localStorage, create an object for plans
    if (!plans) {
        plans = {
           nine: [],
           ten: [],
           eleven: [],
           twelve: [],
           one: [],
           two: [],
           three: [],
           four: [],
           five: [] 
        };
    };
};

// save plans
var save = function() {
    $(event.target).siblings("textarea").val.push(plans)
    localStorage.setItem("plans", JSON.stringify(plans));
}

$(".save").on("click", function() {
    ($(event.target).siblings("textarea"))
    
}) 

loadPlans();