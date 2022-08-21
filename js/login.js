
// step 1.add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {

    // step 2.get the email addres inside the email input field
    // step 2.always remeber to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3.get password 
    // 3.a aset id on the html element
    // 3.b:get the element 
    // 3.c : get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    // do not verify email password on the clint site

    // step 4. verify email and password and check whether valid user or not
    if (email === 'sontan@bap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('wrong password')
    }
})
