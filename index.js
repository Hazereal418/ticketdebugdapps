function SendMail(){
    var params = {
        message: document.getElementById("message").value,
    }
    emailjs.send("service_986o5uv","template_xkbjo44", params);
}