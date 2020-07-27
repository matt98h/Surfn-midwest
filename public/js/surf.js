// Variables and DOM Elements
var dropdown = document.getElementById("locationButton1")
var addComment = document.getElementById("addComment")
var userModal = document.getElementById("userModal")
var userLocationSelection = document.getElementById("locationFormSelect")
var userRadFactorSelection = document.getElementById("radFactorFormSelect")
var imagePath = document.getElementById('image')
var comment = document.getElementById('comment')
var formSubmit = document.getElementById('submit')
var form = document.getElementById('userInputForm')
// var wisconsin = window.location.$('/wisconsin')
//Dynamically display locations 

console.log(imagePath);
console.log(userRadFactorSelection);
function getLocation() {
    console.log(userLocationSelection.options[userLocationSelection.selectedIndex].value);
}
function getRadFactor(){
    console.log(userRadFactorSelection.options[userRadFactorSelection.selectedIndex].value)
}

// function getComment () {
//     console.log(comment.value)
    


function toggleLocation() {
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

// userData = {};
// $.each($('#userInputForm').serializeArray(), function(_, kv) {
//   if (userData.hasOwnProperty(kv.name)) {
//     userData[kv.name] = $.makeArray(userData[kv.name]);
//     userData[kv.name].push(kv.value);
//   }
//   else {
//     userData[kv.name] = kv.value;
//   }
// });


//FORM HANDLING
/*
1.)

*/

//LOGIN FORM 
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var userInput = {
        locationId: userLocationSelection.options[userLocationSelection.selectedIndex].value,

        radFactor: userRadFactorSelection.options[userRadFactorSelection.selectedIndex].value,

        image: imagePath.value,

        comment: comment.value
    };
    console.log(userInput);
    console.log('Recieving feedback')
    $.post('/api/userInput', userInput)
    .then(response => console.log(response))
    .catch(err => console.log(err))
})


// function userInputFormSubmit (event) {
//     event.preventDefault();
//     userData = {
//         location : userLocationSelection.options[userLocationSelection.selectedIndex].value,
//         radFactor : userRadFactorSelection.options[userRadFactorSelection.selectedIndex].value,
//         comment : comment.value
//     }
//     console.log(userData);
// }

// const sendUserInput = (userData) => {
//     $.ajax({
//         url: '/api/userInput',
//         method: 'POST'
//     }).then()
// }




//AJAX calls
//grab all the locations

// get these to show in our console locally
$(document).ready(function () {
  
    $(userLocationSelection).on('change', getLocation)
    $(userRadFactorSelection).on('change', getRadFactor)

    

    const getLocations = () => {
        $.ajax({
            url: '/api/locations',
            method: 'GET',
        }).then(data => {
         //   console.log(data)
        })
    }
    // grab all user data 
    const getUserData = () => {
        return $.ajax({
            url: 'api/user_data',
            method: 'GET'
        }).then(data => {
          //  console.log(data)
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
           // console.log(data)
        })
    }

    const getUserInput = () => {
        $.ajax({
            url: 'api/UserInput',
            method: 'GET'
        }).then(data => {
           // var parsedData = JSON.parse(data);
           // console.log(parsedData);

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



    // we want to grab the information that is to be deleted in the object
    // ex: (if we want to delete an image) response.image[0] (something like this)
    function deleteUserInput() {

    }
    function init() {
        getUserInput();
        getLocations();
        getUserData();
        // getForecast();
        postUserInput();
        
    }
    init();


//window.location.pathname gets the specific path of the file

});


//Route name

// /minnesota
//utilize location object window api will allow us to reference the route name which would be /minnesota

