let apiEndpoint = 'http://localhost:8080/getAllCar';


let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

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


document.querySelector('#signup-btn').onclick = () => {
    document.querySelector('.signup-form-container').classList.toggle('active');
}

document.querySelector('#close-signup-form').onclick = () => {
    document.querySelector('.signup-form-container').classList.remove('active');
}



window.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
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

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:false,
    grabCursor:true,
    centeredSlides:false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });



  //login form submission start (not implemented yet)
//   document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent default form submission

    
//     let email = document.querySelector('.login-form-container input[type="email"]').value;
//     let password = document.querySelector('.login-form-container input[type="password"]').value;

//     let requestBody = {
//         email: email,
//         password: password
//     };

//     fetch('/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(requestBody)
//     })
//     .then(response => response.json())
//     .then(data => {
//             if (data.success) {
//             window.location.href = '/signed-in-page';
//         } else {
//             console.error('Login failed. Check credentials.');
//         }
//     })
//     .catch(error => {
//         console.error('Error during login:', error);
//     });
// });
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












// fetching car specification from the backend api start //

    let swiperWrapper = document.getElementById('swiperWrapper');

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            
            data.forEach(carData => {
                let carSlide = document.createElement('div');
                carSlide.classList.add('swiper-slide', 'box');

                carSlide.innerHTML = `
                    <img src="cars_data/vehicle-${carData.image}.png" alt="">
                    <div class="content">
                        <h3>${carData.carname}</h3>
                        <div class="price"><span>price: </span> ₹${carData.price}/-</div>
                        <p> 
                            new 
                            <span class="fas fa-circle"></span> ${carData.engineCapacity}cc
                            <span class="fas fa-circle"></span> ${carData.fueltype}
                        </p>
                    </div>
                `;

                swiperWrapper.appendChild(carSlide);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
//fetching car specification from the backend api end //



    //add cars dynamically to the auction list 

    // Get the swiperWrapper element
    let swiperWrapper1 = document.getElementById('carList1');
    const countdownElement = document.getElementById('countdown');
    
    // Fetch data from the backend API
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            // Loop through the fetched data and create car slides
            data.slice(0,4).forEach(carData => {
                let carSlide = document.createElement('div');
                
                
                carSlide.classList.add('swiper-slide', 'box');
    
                carSlide.innerHTML = `
                    <img src="cars_data/vehicle-${carData.image}.png" alt="">
                    <h3>${carData.carname}</h3>
                    <div class="price"><span>Current Bid:</span> ₹${carData.price}</div>
                    <span class="dollar">₹</span>
                    <input type="number" class="bid-input" min="${carData.price}" placeholder="place your bid amount" step="1000" value="">
                    <a href="#" class="btn">Bid Now</a>
                `;
                
                swiperWrapper1.appendChild(carSlide);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

        




        // Get the swiperWrapper element
        let swiperWrapper2 = document.getElementById('carList2');
        
        // Fetch data from the backend API
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
                // Loop through the fetched data and create car slides
                data.slice(5,8).forEach(carData => {
                    let carSlide = document.createElement('div');
                    
                    carSlide.classList.add('swiper-slide', 'box');
        
                    carSlide.innerHTML = `
                        <img src="cars_data/vehicle-${carData.image}.png" alt="">
                        <h3>${carData.carname}</h3>
                        <div class="price"><span>Current Bid:</span> ₹${carData.price}</div>
                        <span class="dollar">₹</span>
                        <input type="number" class="bid-input" min="1" placeholder="place your bid amount">
                        <a href="#" class="btn">Bid Now</a>
                    `;
                    
        
                    swiperWrapper2.appendChild(carSlide);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });    






// //to send bid amount on clicking the bid now button (waiting on backend api data to be completed)
// document.addEventListener("DOMContentLoaded", function () {
//     const bidInput = document.querySelector(".bid-input");
//     const bidBtn = document.querySelector(".btn");
//     const startBid = 55000; // Replace with the actual starting bid

//     bidBtn.addEventListener("click", function (event) {
//         event.preventDefault();

//         // Validate bid input
//         const bidAmount = parseFloat(bidInput.value);
//         if (bidAmount >= startBid) {
//             // Send bid amount to the backend (replace this with your backend logic)
//             console.log("Bid amount:", bidAmount);
//             // Here you can make an AJAX or fetch request to send bidAmount to the backend
//         } else {
//             alert("Bid amount must be greater than or equal to the current bid.");
//         }
//     });
// });


//timer countdown
    let countDownDate = new Date("Feb 28, 2024 17:30:00").getTime();

    let x = setInterval(function () {
            
        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                featured.style.display = 'none'; clearInterval(x);

                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);


