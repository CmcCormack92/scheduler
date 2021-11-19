//get current date
var currentDate = function () {
    var today = moment().format("MMMM Do YYYY");
    $(".date").text(today);
};

//change color based off time
var backgroundColors = function () {
    var hourId = $(".content").each(function () {
        $(this).removeClass("bg-danger")
        $(this).removeClass("bg-secondary")
        $(this).removeClass("bg-success")

        if ($(this).prop("id") == moment().format("HH")) {
            $(this).addClass("bg-danger")
        }
        else if ($(this).prop("id") < moment().format("HH")) {
            $(this).addClass("bg-secondary")
        }
        else if ($(this).prop("id") > moment().format("HH")) {
            $(this).addClass("bg-success")
        }

    });

};

// gets items from local storage
var storage = JSON.parse(localStorage.getItem("eachHour"));


var save = function () {

    localStorage.setItem("eachHour", JSON.stringify(storage))
};

var getItems = function () {

    // if nothing in localStorage, create an object for plans
    if (storage === null) {
        storage = []
    };

    // sets values for text and hour in local storage
    $("input").each(function () {
        var hourTask = {
            text: $(this).val(),
            hour: $(this).prop("id")
        };
        storage.push(hourTask)
    });

    // pushes hour task object into storage array
    storage.sort();

    save();
    console.log(storage)

    for (var i = 0; i < storage.length; i++) {
        $("input").text(storage[0].text)
    };
};


// calls save function when save button is clicked
$(".save").on("click", getItems);

//checks date every 5 hours to ensure it will show the correct date during work hours
setInterval(currentDate, (1000 * 60) * 300);

// runs backgroundColor function every 2 minutes to keep hours background updated
setInterval(backgroundColors, (1000 * 60) * 2);

//set current date
currentDate();

//get background colors
backgroundColors();

getItems();