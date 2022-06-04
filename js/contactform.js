/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // selecciona los elementos aquí

    var boton = document.getElementById('envio');
    boton.onclick = function () {
        sendMail();
    }

});

function sendMail() {
    var tempParams = {
        from_name: document.getElementById('user_email').value,
        to_name: "Agencia Marketing",
        message: document.getElementById('message').value,
        tel: document.getElementById('tel').value
    };

    emailjs.send('service_ik3z0lm', 'template_co1yp9o', tempParams)
        .then(function (res) {
            console.log("success", res.status);
            window.alert("¡Mensaje enviado!");
        })

}

