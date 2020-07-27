// Variables and DOM Elements
var dropdown = document.getElementById("#locationButton1")
var addComment = document.getElementById("#addComment")
var userModal = document.getElementById("#userModal")
var addComment = document.getElementById("#addComment")
//Dynamically display locations 



function myFunction() {
    var x = document.querySelector("#location1");
    console.log(x);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  console.log(addComment)

//USER INPUT MODAL
// addComment.addEventListener('click', displayModal());

function displayModal() {
    userModal.style.display = 'block';
}
  
// $(document).on("click", ".solar-button", function(e){
//     //my function
//  });
//when when Button is pressed change display from none to block. when button is clicked again display block to none




//AJAX calls
//grab all the locations

// get these to show in our console locally
$(document).ready(function () {


    const getLocations = () => {
        $.ajax({
            url: '/api/locations',
            method: 'GET',
        }).then(data => {
            console.log(data)
        })
    }
    // grab all user data 
    const getUserData = () => {
        return $.ajax({
            url: 'api/user_data',
            method: 'GET'
        }).then(data => {
            console.log(data)
        })
    }
    // grab forecast data
    const getForecast = () => {
        $.ajax({
            url: '/api/data',
            method: 'GET'
        }).then(data => {
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].swell)

            }
            console.log(data)
        })
    }

    const getUserInput = () => {
        $.ajax({
            url: 'api/UserInput',
            method: 'GET'
        }).then(data => {
            var parsedData = JSON.parse(data);
            console.log(parsedData);
        })
    }


    //POST ROUTES

    /*
    if (location == 'michigan') {
        const locationId = 1
    } else if (location == 'wisconsin') {
        const location = 2
    } else if (location == 'minnesota') {
        const location = 3
    }else{
        return error;
    } return location
    
    location = ;
    locationId = location
    
    **OFFICE HOURS QUESTION
    */

    function postUserInput(radFactor, image, comment, LocationId, UserId) {
        $.post("/api/signup", {
            radFactor: radFactor,
            image: image,
            comment: comment,
            location: LocationId,
            userId: UserId
        }).then(results => {
            //append elements to page/writefile
            //copy the brewery app
        })
    };


    // we want to grab the information that is to be deleted in the object
    // ex: (if we want to delete an image) response.image[0] (something like this)
    function deleteUserInput() {

    }
    function init() {
        getUserInput();
        getLocations();
        getUserData();
        getForecast();
        postUserInput();
    }
    init();
});

