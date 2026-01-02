function SendMail(){
    var params = {
        message: document.getElementById("message").value,
    }
    emailjs.send("service_4noo4g8","template_rwno42r", params);
}
