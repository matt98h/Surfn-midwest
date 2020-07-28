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
var averageArray = [];
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

  function displayModal() {
      var userForm = document.querySelector('#userModal')
      console.log(userForm);
      if(userForm.style.display === 'none') {
          userForm.style.display = 'block';
      } else {
          userForm.style.display = 'none'
      }
  }

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var userInput = {
        LocationId: userLocationSelection.options[userLocationSelection.selectedIndex].value,

        radFactor: userRadFactorSelection.options[userRadFactorSelection.selectedIndex].value,

        image: imagePath.value,

        comment: comment.value
    };
    console.log(comment.value);
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
            console.log(data);
            
            
        //    var parsedData = JSON.parse(data);
        //    console.log(parsedData);
            for (let i = 0; i < data.length; i++) {
                var radTotal = 0;
                
                if (data[i].LocationId === 1) {
                    //append comment to the comment id
                    console.log(data[i].comment)
                    console.log(data[i].radFactor)
                    $('#comment').append(data[i].comment)
                    
                    //(data[i].comment)
                    
                   
                    //RadFactor Math time
                    
                    
                   
                    // add all radscores, divide by totalInputs
                    
                }
                
            }
            radAvg = Math.ceil((data[1].radFactor+data[2].radFactor+data[3].radFactor)/3)
            $('#radFactor').append(radAvg)
        })
    }

    //COMMENT APPEND

    /*
    1)Iterate through the array of userInputs and return all the values equal
    1) reference the location id of the userInput
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

    }
    init();


//window.location.pathname gets the specific path of the file

});


//Route name

// /minnesota
//utilize location object window api will allow us to reference the route name which would be /minnesota

