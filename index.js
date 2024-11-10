function SendMail(){
    var params = {
        message: document.getElementById("message").value,
    }
    emailjs.send("service_ykw2qbk","template_rwno42r", params);
}