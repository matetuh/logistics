

window.onload = clearInputs();

function clearInputs() {
    //inputs 
    document.getElementsByClassName("form-person")[0].value = "";
    document.getElementsByClassName("form-email")[0].value = "";
    document.getElementsByClassName("form-phone")[0].value = "";
    document.getElementsByClassName("form-start")[0].value = "";
    document.getElementsByClassName("form-aim")[0].value = "";
    document.getElementsByClassName("form-type")[0].value = "";
    document.getElementsByClassName("form-header")[0].value = ""; 
    document.getElementsByClassName("form-body")[0].value = "";
}

function sendEmail() {
    //inputs 
    var from = document.getElementsByClassName("form-email")[0].value; 
    var subject = document.getElementsByClassName("form-header")[0].value; 
    var body = "OSOBA: " + document.getElementsByClassName("form-person")[0].value + "<br/>" + "<br/>" +
                "TEL.: " + document.getElementsByClassName("form-phone")[0].value + "<br/>" + "<br/>" +
                "START: " + document.getElementsByClassName("form-start")[0].value  + "<br/>" +
                "CEL: " + document.getElementsByClassName("form-aim")[0].value  + "<br/>" + "<br/>" +
                "TYP ŁADUNKU: " + document.getElementsByClassName("form-type")[0].value  + "<br/>" + "<br/>" +
                "WIADOMOŚĆ: " + document.getElementsByClassName("form-body")[0].value  + "<br/>"; 

    
	Email.send({
        SecureToken : "a412476e-c856-4d10-a2a9-79ea1ca46e7e",
        To : 'matetuh@gmail.com',
        From : from,
        Subject : subject,
        Body : body,
	}).then(
    );
    
    swal({
        title: "Dziękuję!",
        text: "Wiadomość została wysłana!",
        icon: "success",
        button: "OK",
      });
    clearInputs();
}