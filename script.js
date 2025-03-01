const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if(close){
   close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if(username === 'user' && password === 'password') {
        document.getElementById('message').innerHTML = 'Login successful!';
        // You can redirect the user to another page here
    } else {
        document.getElementById('message').innerHTML = 'Invalid username or password';
    }
});