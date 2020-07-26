// Variables and DOM Elements

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