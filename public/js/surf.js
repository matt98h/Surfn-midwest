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
addComment.addEventListener('click', displayModal());

function displayModal() {
    userModal.style.display = 'block';
}
  
// $(document).on("click", ".solar-button", function(e){
//     //my function
//  });
//when when Button is pressed change display from none to block. when button is clicked again display block to none




//AJAX calls
//grab all the locations
const getLocations = () => {
    $.ajax({
        url: '/api/locations',
        method: 'GET',
    }).then()
}
// grab all user data 
const getUserData = () => {
    return $.ajax({
        url: 'api/UserData',
        method: 'GET'
    })
}
// grab forecast data
const getForecast = () => {
    $.ajax({
        url: 'api/data',
        method: 'GET'
    }).then(data => {
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i].swell)
            
        }
        console.log(data)
    })
}



const data = getForecast()