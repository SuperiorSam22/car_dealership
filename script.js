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



  //login form submission start 
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Gather user input
    let email = document.querySelector('.login-form-container input[type="email"]').value;
    let password = document.querySelector('.login-form-container input[type="password"]').value;

    // Construct the request body
    let requestBody = {
        email: email,
        password: password
    };

    // Make a fetch request to your backend
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        // Assuming the backend returns a response with a success flag
        if (data.success) {
            // Redirect to the signed-in page or perform any necessary actions
            window.location.href = '/signed-in-page';
        } else {
            // Handle unsuccessful login (show an error message, etc.)
            console.error('Login failed. Check credentials.');
        }
    })
    .catch(error => {
        console.error('Error during login:', error);
    });
});
//login form submission end 













//signup form submission start 
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Gather user input
    let firstName = document.querySelector('.signup-form-container input[placeholder="Firstname"]').value;
    let lastName = document.querySelector('.signup-form-container input[placeholder="Lastname"]').value;
    let email = document.querySelector('.signup-form-container input[type="email"]').value;
    let password = document.querySelector('.signup-form-container input[type="password"]').value;

    // Construct the request body
    let requestBody = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    // Make a fetch request to your backend
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
        // Assuming the backend returns a response with a success flag
        if (data.success) {
            // Redirect to the signed-in page or perform any necessary actions
            window.location.href = '/signed-in-page';
        } else {
            // Handle unsuccessful signup (show an error message, etc.)
            console.error('Signup failed. Check input and try again.');
        }
    })
    .catch(error => {
        console.error('Error during signup:', error);
    });
});

//signup form submission end












// fetching car specification from the backend api start //
let apiEndpoint = 'http://localhost:8080/getAllCar';

    // Get the swiperWrapper element
    let swiperWrapper = document.getElementById('swiperWrapper');

    // Fetch data from the backend API
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            // Loop through the fetched data and create car slides
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



//price slider 
// let priceSlider = document.getElementById('price');
// let selectedPriceSpan = document.getElementById('selectedPrice');

// // Update the displayed price when the slider value changes
// priceSlider.addEventListener('input', function() {
//     var selectedPrice = this.value;
//     selectedPriceSpan.textContent = selectedPrice;
// });



// //add cars dynamically to the auction list 
// let apiEnd = 'http://localhost:8080/getAllCar';

// // Get the swiperWrapper element
// let swiperWrapper1 = document.getElementById('carList1');
// let swiperWrapper2 = document.getElementById('carList2');

// // Fetch data from the backend API
// fetch(apiEnd)
//     .then(response => response.json())
//     .then(data => {
//         // Loop through the fetched data and create car slides
//         data.forEach(carData => {
//             let carSlide = document.createElement('div');
//             let carSlide2 = document.createElement('div');
//             carSlide.classList.add('swiper-slide', 'box');
//             carSlide2.classList.add('swiper-slide', 'box');

//             carSlide.innerHTML = `
//                 <img src="cars_data/vehicle-${carData.image}.png" alt="">
//                 <h3>${carData.carname}</h3>
//                 <div class="price"><span>Start Bid:</span> $${carData.price}</div>
//                 <span class="dollar">$</span>
//                 <input type="number" class="bid-input" min="1" placeholder="place your bid amount">
//                 <a href="#" class="btn">Bid Now</a>
//             `;
//             carSlide2.innerHTML = `
//                 <img src="cars_data/vehicle-${carData.image}.png" alt="">
//                 <h3>${carData.carname}</h3>
//                 <div class="price"><span>Start Bid:</span> $${carData.price}</div>
//                 <span class="dollar">$</span>
//                 <input type="number" class="bid-input" min="1" placeholder="place your bid amount">
//                 <a href="#" class="btn">Bid Now</a>
//             `;

//             swiperWrapper1.appendChild(carSlide);
//             swiperWrapper2.appendChild(carSlide2);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });
    //add cars dynamically to the auction list 

    let apiEnd = 'http://localhost:8080/getAllCar';

    // Get the swiperWrapper element
    let swiperWrapper1 = document.getElementById('carList1');
    
    // Fetch data from the backend API
    fetch(apiEnd)
        .then(response => response.json())
        .then(data => {
            // Loop through the fetched data and create car slides
            data.slice(0,4).forEach(carData => {
                let carSlide = document.createElement('div');
                
                carSlide.classList.add('swiper-slide', 'box');
    
                carSlide.innerHTML = `
                    <img src="cars_data/vehicle-${carData.image}.png" alt="">
                    <h3>${carData.carname}</h3>
                    <div class="price"><span>Start Bid:</span> $${carData.price}</div>
                    <span class="dollar">$</span>
                    <input type="number" class="bid-input" min="1" placeholder="place your bid amount">
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
        fetch(apiEnd)
            .then(response => response.json())
            .then(data => {
                // Loop through the fetched data and create car slides
                data.slice(5,8).forEach(carData => {
                    let carSlide = document.createElement('div');
                    
                    carSlide.classList.add('swiper-slide', 'box');
        
                    carSlide.innerHTML = `
                        <img src="cars_data/vehicle-${carData.image}.png" alt="">
                        <h3>${carData.carname}</h3>
                        <div class="price"><span>Start Bid:</span> $${carData.price}</div>
                        <span class="dollar">$</span>
                        <input type="number" class="bid-input" min="1" placeholder="place your bid amount">
                        <a href="#" class="btn">Bid Now</a>
                    `;
                    
        
                    swiperWrapper2.appendChild(carSlide);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });    






// Get the swiperWrapper element
// let swiperWrapper2 = document.getElementById('carList2');

// // Fetch data from the backend API
// fetch(apiEnd)
//     .then(response => response.json())
//     .then(data => {
//         // Loop through the fetched data and create car slides
//         data.forEach(carData => {
//             let carSlide = document.createElement('div');
//             carSlide.classList.add('swiper-slide', 'box');

//             carSlide.innerHTML = `
//                 <img src="cars_data/vehicle-${carData.image}.png" alt="">
//                 <h3>${carData.carname}</h3>
//                 <div class="price"><span>Start Bid:</span> $${carData.price}</div>
//                 <span class="dollar">$</span>
//                 <input type="number" class="bid-input" min="1" placeholder="place your bid amount">
//                 <a href="#" class="btn">Bid Now</a>
//             `;

//             swiperWrapper2.appendChild(carSlide);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

