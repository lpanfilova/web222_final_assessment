

/*Validates form input*/
function error_validation(){
    
        var myform = document.querySelector("form");
        var pass1 = myform.querySelector("#password1").value;
        var pass2 = myform.querySelector("#password2").value;
        var aside_elem = document.querySelector("aside");
        var submit_button = myform.querySelector("#submit");
        
        var user_name = myform.querySelector("#user_name").value;
        
        aside_elem.innerHTML = " ";
        
        var validation = true;
    
        if(pass1.length != 6)
        {
            validation = false;
            var error_text = document.createTextNode("Password must be 6 characters in length");
            var error_par = document.createElement("p");
            aside_elem.appendChild(error_par).appendChild(error_text);
        }
        
        if(!pass1.match(/^[A-Za-z]/))
        {
            validation = false;
            var error_text = document.createTextNode("Password must start with a letter");
            var error_par = document.createElement("p");
            aside_elem.appendChild(error_par).appendChild(error_text);
        }
        else if(!pass1.match(/\d/))
        {
            validation = false;
            var error_text = document.createTextNode("Password must have at least one number");
            var error_par = document.createElement("p");
            aside_elem.appendChild(error_par).appendChild(error_text);
        }
        else if(!pass1.match(/[A-Z]/))
        {
            validation = false;
            var error_text = document.createTextNode("Password must have at least one capital letter");
            var error_par = document.createElement("p");
            aside_elem.appendChild(error_par).appendChild(error_text);
        }
        
        if(pass1 != pass2)
        {
            validation = false;
            var error_text = document.createTextNode("Passwords don't match");
            var error_par = document.createElement("p");
            aside_elem.appendChild(error_par).appendChild(error_text);
        }
        
        if(user_name.length != 6)
        {
            validation = false;
            var error_text = document.createTextNode("User name must be 6 characters in length");
            var error_par = document.createElement("p");
            aside_elem.appendChild(error_par).appendChild(error_text);
        }
        else if(!user_name.match(/^[A-Za-z]/))
        {
            validation = false;
            var error_text = document.createTextNode("User name must start with a letter");
            var error_par = document.createElement("p");
            aside_elem.appendChild(error_par).appendChild(error_text);
        }
        
        if(validation)
        {
            var message_text = document.createTextNode("Success. Form submitted");
            var message_par = document.createElement("p");
            aside_elem.appendChild(message_par).appendChild(message_text);
        }
        
        return validation;
    }