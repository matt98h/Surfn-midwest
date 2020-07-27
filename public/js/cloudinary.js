var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dfjy06y9i/upload'
var CLOUDINARY_UPLOAD_PRESET = 'g1mrailm'

var imgPreview = document.getElementById("");
var fileUpload = document.getElementById('')

// have to find a way to just add this to db
fileUpload.addEventListener('change', function(event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file',file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    
})