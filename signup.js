document.querySelector('#reg-btn').onclick = () => {
    document.querySelector('.reg-form-container').classList.toggle('active');
}

document.querySelector('#close-reg-form').onclick = () => {
    document.querySelector('.reg-form-container').classList.remove('active');
}

document.querySelector('.home').onmousemove = (e) => {
    document.querySelectorAll('.home-parallax').forEach(elm =>{
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`
    })
};

document.querySelector('.home').onmouseleave = () => {
    document.querySelectorAll('.home-parallax').forEach(elm =>{
        elm.style.transform = `translateX(0px) translateY(0px)`
    })
};


//signup form submission start (not implemented yet)
document.getElementById('signup').addEventListener('submit', function (event) {
    event.preventDefault(); 
    let firstName = document.querySelector('.reg-form-container input[placeholder="Firstname"]').value;
    let lastName = document.querySelector('.reg-form-container input[placeholder="Lastname"]').value;
    let email = document.querySelector('.reg-form-container input[type="email"]').value;
    let password = document.querySelector('.reg-form-container input[type="password"]').value;
    
    let requestBody = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };
     console.log(requestBody);
    
    fetch('http://localhost:8090/api/register', {
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
    // .then(response => response.json())
    .then(data => {
            
        if (data !=null) {
            window.location.href="login.html"
            
        } else {
            console.error('Login failed. Check credentials.');
        }
    })
    .catch(error => {
        alert("User already registered. Please sign in");
        console.error('Error during Signup:', error);
    });
});

//signup form submission end


