function validate() {
    var isValid=0;
    isValid+=validateFirstName();
    isValid+=validateEmail();
    isValid+=validateTextArea();
    
    if(isValid==3) {
        document.getElementById("submit").disabled=false;
    } else {
        document.getElementById("submit").disabled=true;
    }
}

function validateFirstName() {
    if(document.getElementById("firstName").value != ""){
        return 1;
    } else {
        document.getElementById("firstName").class="error-visible";
    }
}

function validateEmail() {
    if(document.getElementById("email").value != ""){
        return 1;
    } else {
        document.getElementById("email").class="error-visible";
    }
}

function validateTextArea() {
    if(document.getElementById("message").value != ""){
        return 1;
    } else {
        document.getElementById("message").class="error-visible";
    }
}
