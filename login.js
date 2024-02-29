let menu = document.querySelector("#menu-btn");

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}


document.querySelector('.home').onmousemove = (e) => {
    document.querySelectorAll('.home-parallax').forEach(elm =>{
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`
    })
};

  //login form submission start (not implemented yet)
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    
    let email = document.querySelector('.login-form-container input[type="email"]').value;
    let password = document.querySelector('.login-form-container input[type="password"]').value;

    let requestBody = {
        email: email,
        password: password
    };

    fetch('http://localhost:8090/view/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => {
        // Check the status code
        if (response.ok) {
            console.log('Success! Status Code:', response.status);
        } 
        else {
            console.error('Error! Status Code:', response.status);
        }

        // You can also access the response text or JSON if needed
    })
    .then(response=>response.json())
    .then(data => {
            console.log(data);
        if (data!== null) {
            console.log("data received", data);
            // window.location.href="/index.html"
        } else {
            console.error('Login failed. Check credentials.');
        }
    }) // or response.json() for JSON data
    .catch(error => {
        console.error('not here', error);
        alert('error', error);
    });
});
//login form submission end 









//signup form submission start (not implemented yet)
// document.getElementById('signupForm').addEventListener('submit', function (event) {
//     event.preventDefault(); 

//     let firstName = document.querySelector('.signup-form-container input[placeholder="Firstname"]').value;
//     let lastName = document.querySelector('.signup-form-container input[placeholder="Lastname"]').value;
//     let email = document.querySelector('.signup-form-container input[type="email"]').value;
//     let password = document.querySelector('.signup-form-container input[type="password"]').value;

//     let requestBody = {
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         password: password
//     };

    
//     fetch('/signup', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestBody)
//     })
//     .then(response => response.json())
//     .then(data => {
        
//         if (data.success) {
            
//             window.location.href = '/signed-in-page';
//         } else {
            
//             console.error('Signup failed. Check input and try again.');
//         }
//     })
//     .catch(error => {
//         console.error('Error during signup:', error);
//     });
// });

//signup form submission end
