let x = document.getElementById('login');
let y = document.getElementById('register');
let z = document.getElementById('btn');
let icon = document.getElementById('icon');
let content = document.querySelector('.form-box');
let btn = document.querySelectorAll('.toggle-btn');
let submit = document.querySelector('.submit-btn');



function register(){
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px';
}
function login(){
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0';
}

x.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Successfully Submitted');
});

y.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Successfully Submitted');
});

icon.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = './lm.png';   
        content.style.backgroundColor = 'white'; 
        
        
    }
    else{
        icon.src = './dark.png';
        content.style.backgroundColor = 'white'; 
       
        

    
       
    }
}
