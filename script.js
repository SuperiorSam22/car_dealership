let apiEndpoint = 'http://localhost:8090/Auction/getAllCar';

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
    loop:false,
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





        //=====================bid function===========
//================================end of bid function=====================
        
//==============================================working swpier class===============================================

    document.addEventListener('DOMContentLoaded', function () {
        let swiperWrapper1 = document.getElementById('carList1');
    
  
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
                
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




        // Get the swiperWrapper 2 element
        let swiperWrapper2 = document.getElementById('carList2');
        
  
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
          
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
//======================================================================================



//=============================update bid and show cars at the same time// not working  
// async function fetchMaxBid() {
//     try {
//         const response = await fetch(`http://localhost:8090/Bid/getbid?carId=1`);
//         const data = await response.json();
//         return data.maxbid;
//     } catch (error) {
//         console.error('Error fetching max bid:', error);
//         throw error;
//     }
// }

// async function fetchCarList() {
//     try {
//         const response = await fetch(apiEndpoint);
//         const data = await response.json();
//         return data.slice(0, 4);
//     } catch (error) {
//         console.error('Error fetching car list:', error);
//         throw error;
//     }
// }

// async function updateMaxBid() {
//     try {
//         const maxBid = await fetchMaxBid();
//         const priceElement = document.querySelector('.price');
//         priceElement.innerHTML = `<span>Current Bid:</span> ₹${maxBid}`;
//     } catch (error) {
//         console.error('Error updating max bid:', error);
//     }
// }

// async function updateCarList() {
//     try {
//         const maxBid = await fetchMaxBid(); // Fetch the max bid

//         const carList = await fetchCarList();
//         let swiperWrapper1 = document.getElementById('carList1');

//         carList.forEach(carData => {
//             let carSlide = document.createElement('div');
//             carSlide.classList.add('swiper-slide', 'box');

//             carSlide.innerHTML = `
//                 <img src="cars_data/vehicle-${carData.image}.png" alt="">
//                 <h3>${carData.carname}</h3>
//                 <div class="price"><span>Current Bid:</span> ₹${maxBid}</div>
//                 <span class="dollar">₹</span>
//                 <input type="number" class="bid-input" min="${carData.price}" placeholder="place your bid amount" step="1000" value="">
//                 <a href="#" class="btn" data-carname="${carData.carname}" data-carid="${carData.image}">Bid Now</a>
//             `;
//             swiperWrapper1.appendChild(carSlide);

//             // Add event listener for the "Bid Now" button
//             const bidButton = carSlide.querySelector('.btn');
//             bidButton.addEventListener('click', async () => {
//                 const bidInput = carSlide.querySelector('.bid-input');
//                 const bidAmount = parseInt(bidInput.value);

//                 // Make a POST request to update the max bid on the backend
//                 try {
//                     const response = await fetch('http://localhost:8090/Bid/bid', {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                         },
//                         body: JSON.stringify({
//                             name: carData.carname,
//                             id: carData.image,
//                             price: bidAmount,
//                         }),
//                     });
//                     const result = await response.json();
//                     console.log(result);
//                 } catch (error) {
//                     console.error('Error updating max bid on the backend:', error);
//                 }
//             });
//         });
//     } catch (error) {
//         console.error('Error updating car list:', error);
//     }
// }

// Fetch initial data
// document.addEventListener('DOMContentLoaded', async function () {
//     await updateMaxBid();
//     await updateCarList();
// });
//===========================================================












//timer countdown
    let countDownDate = new Date("Mar 10, 2024 11:13:00").getTime();

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



            

          