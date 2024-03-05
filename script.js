let apiEndpoint = 'http://localhost:8090/Auction/getAllCar';
const loginData = sessionStorage.getItem("loginData");
const pasredResponse=JSON.parse(loginData);
console.log(pasredResponse.email);

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
                    </div>
                `;

                swiperWrapper.appendChild(carSlide);
            });
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
                    <a href="#" class="btn">Bid Now</a>
                `;
               
                const bidButton = carSlide.querySelector('.btn');
               
                bidButton.addEventListener('click', function () {
                    
                    const carId = carData.id;
                    const bidAmountInput = carSlide.querySelector('.bid-input');
                    const bidAmount = bidAmountInput.value;
                    console.log(carId, bidAmountInput, bidAmount);
                    if (!bidAmount || bidAmount < parseInt(bidAmountInput.min)) {
                        alert('Bid amount should be greater than the current bid');
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
                            
                            alert('Bid Placed successfully');
                        
                            window.location.href="index.html";
                        
                        
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            alert('Failed to update bid. Please try again.');
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
                <a href="#" class="btn">Bid Now</a>
            `;
           
            const bidButton = carSlide.querySelector('.btn');
           
            bidButton.addEventListener('click', function () {
                
                const carId = carData.id;
                const bidAmountInput = carSlide.querySelector('.bid-input');
                const bidAmount = bidAmountInput.value;
                console.log(carId, bidAmountInput, bidAmount);
                if (!bidAmount || bidAmount < parseInt(bidAmountInput.min)) {
                    alert('Please enter a valid bid amount.');
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
                        alert('Bid Placed successfully');                   
                        window.location.href="index.html";
                    
                    
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('Failed to update bid. Please try again.');
                    });
            });
            swiperWrapper2.appendChild(carSlide);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
//========================swiper class 2 ends here =================================





//=========================countdown timer starts here =================================================
let countDownDate = new Date("Mar 5, 2024 13:00:00").getTime();

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






//=====================generate receipt button============================
document.querySelector('#receipt').onclick = () => {
    document.querySelector('.receipt-form-container').classList.toggle('active');
}

document.querySelector('#close-receipt-form').onclick = () => {
    document.querySelector('.receipt-form-container').classList.remove('active');
    // window.location.reload();
}


document.addEventListener('DOMContentLoaded', function () {
    // Close form event
    document.getElementById('close-receipt-form').addEventListener('click', function () {
        document.querySelector('.receipt-form-container').style.display = 'none';
    });



});


//receipt generation from api call ======================================================================
    // Fetch data from API
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



//=============================================signout function start =========================================
function logout(){
    sessionStorage.removeItem('loginData');
    window.location.href= "login.html";
}
//===============================================signout function ends ======================================
