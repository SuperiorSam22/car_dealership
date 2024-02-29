let apiEndpoint = 'http://localhost:8090/Auction/getAllCar';
let apiEndpoint2 = 'http://localhost:8090/Bid/bid';


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

// document.querySelector('#login-btn').onclick = () => {
//     document.querySelector('.login-form-container').classList.toggle('active');
// }

// document.querySelector('#close-login-form').onclick = () => {
//     document.querySelector('.login-form-container').classList.remove('active');
// }


// document.querySelector('#signup-btn').onclick = () => {
//     document.querySelector('.signup-form-container').classList.toggle('active');
// }

// document.querySelector('#close-signup-form').onclick = () => {
//     document.querySelector('.signup-form-container').classList.remove('active');
// }



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
    // let swiperWrapper1 = document.getElementById('carList1');
    // const countdownElement = document.getElementById('countdown');
    
    // // Fetch data from the backend API
    // fetch(apiEndpoint)
    //     .then(response => response.json())
    //     .then(data => {
    //         // Loop through the fetched data and create car slides
    //         data.slice(0,4).forEach(carData => {
    //             let carSlide = document.createElement('div');
                
                
    //             carSlide.classList.add('swiper-slide', 'box');
    
    //             carSlide.innerHTML = `
    //                 <img src="cars_data/vehicle-${carData.image}.png" alt="">
    //                 <h3>${carData.carname}</h3>
    //                 <div class="price"><span>Current Bid:</span> ₹${carData.price}</div>
    //                 <span class="dollar">₹</span>
    //                 <input type="number" class="bid-input" min="${carData.price}" placeholder="place your bid amount" step="1000" value="">
    //                 <a href="#" class="btn">Bid Now</a>
    //             `;
                
    //             swiperWrapper1.appendChild(carSlide);
    //         });
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });

    document.addEventListener('DOMContentLoaded', function () {
        let swiperWrapper1 = document.getElementById('carList1');
        const countdownElement = document.getElementById('countdown');
    
        // Fetch data from the backend API
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
                // Loop through the fetched data and create car slides
                data.slice(0, 4).forEach(carData => {
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
    });

        
    













        // Get the swiperWrapper element
        let swiperWrapper2 = document.getElementById('carList2');
        
        // Fetch data from the backend API
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
                // Loop through the fetched data and create car slides
                data.slice(4,8).forEach(carData => {
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


//timer countdown
    let countDownDate = new Date("Feb 30, 2024 17:30:00").getTime();

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




