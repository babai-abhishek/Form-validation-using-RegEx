document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('phonenumber').addEventListener('blur', validatePhoneNumber);


function validateName(){
    const name = document.getElementById('name');
    const regex = /^[a-zA-Z]{2,10}$/;

    if(regex.test(name.value)){
        name.classList.remove('is-invalid');
    }else{
        name.classList.add('is-invalid');
    }
}

function validateZip(){
    const zip = document.getElementById('zip');
    const regex = /^[0-9]{6}$/;

    if(regex.test(zip.value)){
        zip.classList.remove('is-invalid');
    }else{
        zip.classList.add('is-invalid');
    }
}

function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
    if(!re.test(email.value)){
      email.classList.add('is-invalid');
    } else {
      email.classList.remove('is-invalid');
    }
}

function validatePhoneNumber(){
    const phonenumber = document.getElementById('phonenumber');
    const regex = /^(\+91)?\-?[0-9]{10}$/;

    if(regex.test(phonenumber.value)){
        phonenumber.classList.remove('is-invalid');
    }else{
        phonenumber.classList.add('is-invalid');
    }

}