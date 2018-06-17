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
    var firstName = document.getElementById("firstName");
    var pattern = /(.?[A-Z][a-z]*)+/;
    if(pattern.test(firstName.value)){
        return 1;
    } else {
        firstName.class="error-visible";
    }
}

function validateEmail() {
    var email = document.getElementById("email");
    var pattern =/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/;
    if(email.value != ""){
        return 1;
    } else {
        email.class="error-visible";
    }
}

function validateTextArea() {
    if(document.getElementById("message").value != ""){
        return 1;
    } else {
        document.getElementById("message").class="error-visible";
    }
}
