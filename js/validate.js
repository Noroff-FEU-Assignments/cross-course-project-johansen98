const fullName = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('message');
const forms = document.getElementById('form')
const checkOutForm = document.getElementById('checkOutForm');
const msg = document.getElementById('msg');


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
    }

    forms.addEventListener('submit', (a) => {
        let message = []
    
        if(!validateEmail(email.value)){
            message.push('E-mail must have a value and be formatted like an email address');
           
        }
        if(subject.value.length < 10){
            message.push('Message must have a minimum length of 10 characters')
            
        }
    
        
        if(message.length > 0){
            msg.innerHTML = message.join(' </br> ')
            msg.style.color = 'red';
            
        }

        else {
            msg.innerText = "Thank you for cotacting us. You will hear from us soon. Have a great day.";
            msg.style.color = 'green';
            
            email.value = "";
            subject.value = "";
            fullName.value = "";
            
        }
        a.preventDefault()
    
    })



 