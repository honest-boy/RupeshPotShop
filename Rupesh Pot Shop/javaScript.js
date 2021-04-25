function proImage() {
    document.getElementById("imag").style.backgroundImage = "url('photos/matki shape.png')";
}

function redImage() {
    document.getElementById("imag").style.backgroundImage = "url('photos/matki shape red.png')";
}

function yellowImage() {
    document.getElementById("imag").style.backgroundImage = "url('photos/matki shape yellow.png')";
}

function greenImage() {
    document.getElementById("imag").style.backgroundImage = "url('photos/matki shape green.png')";
}

function blueImage() {
    document.getElementById("imag").style.backgroundImage = "url('photos/matki shape blue.png')";
}

function checkAdd() {
    alert("10");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mob = document.getElementById("mob").value;
    var add = document.getElementById("add").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value; 
    var pin = document.getElementById("pin").value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //var name= document.getElementById("name").value;
    if (name == "" || email == "" || mob == "" || add == "" || city == "" || state == "" || pin == "") {
        alert("Please fill All the fields");
    } else if (pin.length != 6) {
        alert("pin number should be of 6 digits");
    } else if (!email.match(mailFormat)) {
        alert("Invalid email ID");
    } else if (mob.length < 8 || mob.length > 10) {
        alert("mobile number should be 8to 10 digit number");
    } else {
        alert("Now you can fill the payment details.");
        document.getElementById("nameOnCard").readOnly = false;
        document.getElementById("cardNo").readOnly = false;
        document.getElementById("exMon").disabled = false;
        document.getElementById("exYear").disabled = false;
        document.getElementById("CVV").readOnly = false;
        document.getElementById("subPay").disabled = false;
        document.getElementById("resPay").disabled = false;
        document.getElementById("nameOnCard").style.background = "rgb(255, 239, 209)";
        document.getElementById("cardNo").style.background = "rgb(255, 239, 209)";
        document.getElementById("exMon").style.background = "rgb(255, 239, 209)";
        document.getElementById("exYear").style.background = "rgb(255, 239, 209)";
        document.getElementById("CVV").style.background = "rgb(255, 239, 209)";
    }
}