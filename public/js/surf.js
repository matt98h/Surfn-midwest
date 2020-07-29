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
    var location = document.querySelector("#location-1");
       if (location.style.display === "none") {
        location.style.display = "block";
    } else {
        location.style.display = "none";
    }
}

function toggleLocation2() {
    var location = document.querySelector("#location-2");
       if (location.style.display === "none") {
        location.style.display = "block";
    } else {
        location.style.display = "none";
    }
}

function toggleLocation3() {
    var location = document.querySelector("#location-3");
       if (location.style.display === "none") {
        location.style.display = "block";
    } else {
        location.style.display = "none";
    }
}

function toggleLocation4() {
    var location = document.querySelector("#location-4");
       if (location.style.display === "none") {
        location.style.display = "block";
    } else {
        location.style.display = "none";
    }
}

function toggleLocation5() {
    var location = document.querySelector("#location-5");
       if (location.style.display === "none") {
        location.style.display = "block";
    } else {
        location.style.display = "none";
    }
}

function toggleLocation6() {
    var location = document.querySelector("#location-6");
       if (location.style.display === "none") {
        location.style.display = "block";
    } else {
        location.style.display = "none";
    }
}

function toggleLocation7() {
    var location = document.querySelector("#location-7");
       if (location.style.display === "none") {
        location.style.display = "block";
    } else {
        location.style.display = "none";
    }
}

function toggleLocation8() {
    var location = document.querySelector("#location-9");
       if (location.style.display === "none") {
        location.style.display = "block";
    } else {
        location.style.display = "none";
    }
}


function displayModal9() {
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
                } if (data[i] === 2) {
                    
                }

            }
           
        })
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
});
