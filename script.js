let apiEndpoint = 'http://localhost:8090/Auction/getAllCar';


//=============== store user login data start ===================================
const loginData = sessionStorage.getItem("loginData");
const pasredResponse=JSON.parse(loginData);
console.log(pasredResponse.email);
//========================= store user login data end ===========================

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");


window.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
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


//==================================== swiper class controls  for car specification slider starts here ===================================
var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:false,
    grabCursor:true,
    centeredSlides:true,
    // autoplay: {
    //     delay: 9500,
    //     disableOnInteraction: false,
    //   },
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

//==================================== swiper class controls  for car specification slider starts here ===================================


//==================================== swiper class controls  for car Auction slider starts here ===================================
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
//================================ swiper class controls ends here =========================================


//======================== car specification swiper starts here =============================================
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
                        <button class="view-specs" id="viewBtn${carData.id}">More Specs</button>
                    </div>
                `;
            
                swiperWrapper.appendChild(carSlide);
            

                document.querySelector(`#viewBtn${carData.id}`).onclick = () => {

                    document.querySelector('#carName').textContent = carData.carname;
                    document.querySelector('#modelYear').textContent = `Model Year: ${carData.modelYear}`;
                    document.querySelector('#kmsDriven').textContent = `KMs Driven: ${carData.kmsDriven}`;
                    document.querySelector('#mileage').textContent = `Mileage: ${carData.mileage}`;
                    document.querySelector('#engineCapacity').textContent = `Engine Capacity: ${carData.engineCapacity}cc`;
                    document.querySelector('#torque').textContent = `Torque: ${carData.torque}`;
                    document.querySelector('#transmission').textContent = `Transmission: ${carData.transmission}`;
                    document.querySelector('#power').textContent = `Power: ${carData.power}`;
                    document.querySelector('#fuelType').textContent = `Fuel Type: ${carData.fueltype}`;
                    
                    document.querySelector('.specifications').classList.toggle('active');
                    
                }
                
                document.querySelector('#close-specs-form').onclick = () => {
                    document.querySelector('.specifications').classList.remove('active');
                }
            })
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
//======================== car specification swiper ends here =============================================


//================== Auction list swiper class 1 starts here ================================================================
    const swiperWrapper1 = document.getElementById('carList1');
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
                    <input type="number" class="bid-input" id="toggle" min="${carData.price}" placeholder="place your bid amount" step="1000" value="">
                    <a href="#featured" class="btn">Bid Now</a>
                `;
               
                const bidButton = carSlide.querySelector('.btn');
               
                bidButton.addEventListener('click', function () {
                    
                    const carId = carData.id;
                    const bidAmountInput = carSlide.querySelector('.bid-input');
                    const bidAmount = bidAmountInput.value;
                    console.log(carId, bidAmountInput, bidAmount);
                    if (!bidAmount || bidAmount < parseInt(bidAmountInput.min)) {
                        openModal('Bid must exceed current bid');
                        return;
                    }
                    let requestBody={
                        carId:carId,
                        maxbid: bidAmount,
                        customerName:carData.carname,
                        email: pasredResponse.email
                    };
                    console.log(requestBody);
                    fetch('http://localhost:8090/Bid/bid', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestBody),
                    })
                    .then(data => {
                
                            openModal(`Bid Placed successfully on ${carData.carname}`);
                            // window.location.href="index.html";
                         
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            openModal('Failed to update bid. Please try again.');
                        });
                });
                swiperWrapper1.appendChild(carSlide);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
//============================= swiper class 1 ends here ==============================



//============================== swiper class 2 starts here ================================================
const swiperWrapper2 = document.getElementById('carList2');

fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        data.slice(4, 8).forEach(carData => {
            let carSlide = document.createElement('div');
            carSlide.classList.add('swiper-slide', 'box');
            carSlide.innerHTML = `
                <img src="cars_data/vehicle-${carData.image}.png" alt="">
                <h3>${carData.carname}</h3>
                <div class="price"><span>Current Bid:</span> ₹${carData.price}</div>
                <span class="dollar">₹</span>
                <input type="number" class="bid-input" id="toggle" min="${carData.price}" placeholder="place your bid amount" step="1000" value="">
                <a href="#featured" class="btn">Bid Now</a>
            `;

            const bidButton = carSlide.querySelector('.btn');

            bidButton.addEventListener('click', function () {
                const carId = carData.id;
                const bidAmountInput = carSlide.querySelector('.bid-input');
                const bidAmount = bidAmountInput.value;

                if (!bidAmount || bidAmount < parseInt(bidAmountInput.min)) {
                    openModal('Bid must exceed current bid');
                    return;
                }

                let requestBody = {
                    carId: carId,
                    maxbid: bidAmount,
                    customerName: carData.carname,
                    email: pasredResponse.email
                };

                fetch('http://localhost:8090/Bid/bid', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                })
                .then(data => {
                    openModal(`Bid Placed successfully on ${carData.carname}`);
                    // window.location.href = "index.html";
                })
                .catch(error => {
                    console.error('Error:', error);
                    openModal('Failed to update bid. Please try again.');
                });
            });
            swiperWrapper2.appendChild(carSlide);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
//========================swiper class 2 ends here =================================



//====================message modal function  =======================================
function openModal(message) {
    const modal = document.getElementById('customModal');
    const modalMessage = document.getElementById('modalMessage');

    modalMessage.textContent = message;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('customModal');
    modal.style.display = 'none';
    window.location.href = "index.html";
}
// ====================== message modal function ends here ================================


//===================== generate receipt button ===================================================
document.querySelector('#receipt').onclick = () => {
    document.querySelector('.receipt-form-container').classList.toggle('active');
}

document.querySelector('#close-receipt-form').onclick = () => {
    document.querySelector('.receipt-form-container').classList.remove('active');
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('close-receipt-form').addEventListener('click', function () {
        document.querySelector('.receipt-form-container').style.display = 'none';
    });
});
//====================== generate receipt button ends here ===========================================


//================================= receipt generation start here =================================================
    const apiUrl = 'http://localhost:8090/Receipt/getAllReceipt';
    const email = pasredResponse.email;
    
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
        .then(response => response.json())
        .then(data => {
          
            const receiptDataContainer = document.getElementById('receiptData');
    
            if (data.length > 0) {
                const keys = Object.keys(data[0]);
    
                keys.slice(0, 3).forEach(key => {
                    const spanElement = document.createElement('span');
                    spanElement.classList.add('name-span')
                    spanElement.innerHTML = `<p>${key} : ${data[0][key]}</p>`;
                    receiptDataContainer.appendChild(spanElement);
                });
    
                data.forEach(receipt => {
                    const divElement = document.createElement('div');
    
                    keys.slice(3,5).forEach(key => {
                        const spanElement = document.createElement('span');
                        spanElement.innerHTML = `<p>${key}: ${receipt[key]}</p>`;
                        divElement.appendChild(spanElement);
                    });
    
                    receiptDataContainer.appendChild(divElement);
                });
            } else {
                receiptDataContainer.textContent = 'No receipt data found for the given email.';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

//================================= receipt generation ends here =================================================



//=============================================signout function start =========================================
function logout(){
    sessionStorage.removeItem('loginData');
    window.location.href= "login.html";
}
//===============================================signout function ends ======================================



//=========================countdown timer starts here =================================================
let countDownDate = new Date("Mar 10, 2024 12:48:00").getTime();

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
                receipt.style.display = 'flex';
            }
        }, 1000);

//==============================//countdown timer starts here =======================================        


