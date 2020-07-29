// Variables and DOM Elements
var dropdown = document.getElementById("locationButton1")
var addComment = document.getElementById("addComment")
var userModal = document.getElementById("userModal")
var userLocationSelection = document.getElementById("locationFormSelect")
var userRadFactorSelection = document.getElementById("radFactorFormSelect")
var imagePath = document.getElementById("image");
var comment = document.getElementById('input-comment')
var formSubmit = document.getElementById('submit')
var form = document.getElementById('userInputForm')
var radAvg = [];
// var wisconsin = window.location.$('/wisconsin')
//Dynamically display locations
// console.log(imagePath);
const arrAvg = arr => {
return arr.reduce((a,b) => a + b, 0) / arr.length;

}

// function getLocation() {
//     console.log(userLocationSelection.options[userLocationSelection.selectedIndex].value);
// }
// function getRadFactor() {
//     console.log(userRadFactorSelection.options[userRadFactorSelection.selectedIndex].value)
// }



function toggleLocation() {
    var x = document.querySelector("#location-1");
       if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleLocation() {
    var x = document.querySelector("#location-2");
       if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleLocation() {
    var x = document.querySelector("#location-3");
       if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleLocation() {
    var x = document.querySelector("#location-4");
       if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleLocation() {
    var x = document.querySelector("#location-5");
       if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleLocation() {
    var x = document.querySelector("#location-6");
       if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleLocation() {
    var x = document.querySelector("#location-7");
       if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleLocation() {
    var x = document.querySelector("#location-9");
       if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function displayModal() {
    var userForm = document.querySelector('#userModal')
      if (userForm.style.display === 'none') {
        userForm.style.display = 'block';
    } else {
        userForm.style.display = 'none'
    }
}

//FORM HANDLING
/*
1.)

*/

//LOGIN FORM 


form.addEventListener("submit", function (event) {
    event.preventDefault();
    var form = new FormData();
    form.append("photo", imagePath.files[0], imagePath.value);




    var settings = {
        "url": "/upload",
        "method": "POST",
        "timeout": 0,
        // "headers": {
        //     "Cookie": "connect.sid=s%3AciETEpyz_UwOq2kTlhpL5UVwLFXG5eTL.ZD10fQ2OlHWU4BdfPcTOJuNrWB1p%2BlqD%2BrQ%2B3b7Vfh8"
        // },
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
    };

    $.ajax(settings).done(function (response) {
        var responseData = JSON.parse(response)




        var userInput = {
            LocationId: userLocationSelection.options[userLocationSelection.selectedIndex].value,

            radFactor: userRadFactorSelection.options[userRadFactorSelection.selectedIndex].value,

            image: responseData.result.secure_url,

            comment: comment.value
        };
        console.log(userInput);
        console.log('Recieving feedback')
        $.post('/api/userInput', userInput)
            // .then(response => console.log(response))
            // .catch(err => console.log(err))
    })

})

$(document).ready(function () {

    $(userLocationSelection).on('change')
    $(userRadFactorSelection).on('change')



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
            //   for (let i = 0; i < data.length; i++) {

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
            
            for (i = 0; i < data.length; i++) {
                
                if (data[i].LocationId === 1) {
                    // var commentSection = $('<div>').addClass('comment-wrapper').html(data[i].comment)
                    
                    // PUSH RADFACTOR INTO ARRAY
                    var radScore = data[i].radFactor
                    

                    radAvg.push(radScore)

                    //I FINISHED THE COMMENTS
                    var comment = data[i].comment
                    var commentBody = $('<div>').addClass('comments');
                    commentBody.append('<p>').text(comment);
                    $('#comment').append(commentBody)
                    // $('#comment').append(data[i].commentBody)

                    //IMAGE GRID TIMEE!!!!!!!!!!!!!
                    // var image = function renderImage() {
                        
                    // }
                    //grabing image source
                    var imgSrc = data[i].image;

                    
                    var surfImage = $('<img>').attr('src', imgSrc).addClass('surf-img')
                    
                    var imgGrid = $('<div>').addClass('img-grid')

                    imgGrid.append(surfImage)

                    $('#images-container').append(imgGrid)
                    
                    //RAD FACTOR
                    var radScoreAverage = Math.round(arrAvg(radAvg));
                    console.log(radScoreAverage)
                    $('#rad-factor').append(radScoreAverage)
                }

            }
           


            
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
        // getUserInput();
        // getLocations();
        // getUserData();
        // getForecast();
        // postUserInput();
        getUserInput();
    }
    init();


    //window.location.pathname gets the specific path of the file

});


//Route name

// /minnesota
//utilize location object window api will allow us to reference the route name which would be /minnesota

