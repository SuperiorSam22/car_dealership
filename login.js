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
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
    })
    .then(data => {
            console.log(data);
        if (data !== null) {
            // console.log("data received", data);
            window.location.href="index.html"
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




