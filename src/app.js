import "./css/style.scss";
import { getData, numbers } from "./request";

let API = `https://6715fa1733bc2bfe40bbca78.mockapi.io/Azizakam`;
let outputUser = document.querySelector(".live");
const modalMain = document.querySelector(".main-modal");
fetch(API)
  .then((data) => data.json())
  .then((data) => {
    showUser(data);
    openModal();
  })

  .catch((error) => console.log(error));

function showUser(data) {
  data.forEach((element) => {
    outputUser.innerHTML += `
                        <div class="live-items">
                            <h5>${element.id}</h5>
                            <button>${element.car__Nomer}</button>
                            <div class="human">
                                <img src="human1.svg" alt="img">
                                <h6>${element.Name}</h6>
                            </div>

                            <div class="completed">
                                <img src="complet1.svg" alt="img">
                                <h6>${element.status}</h6>
                            </div>

                            <div class="price">
                                <h5>${element.earn}</h5>
                            </div>
                            <button data-id="${element.id}" id="detaliss" class="detalis">Details</button>
                        </div>   
        `;
  });
}

// modalni ochish va datani modalga chiqazish
function openModal() {
    let modalContent = document.querySelector(".modal-user-data");
  
    const detalisBtns = document.querySelectorAll(".detalis");
    detalisBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        
        
        modalMain.style.display = "block";
        const dataId = btn.getAttribute("data-id");
        fetch(`${API}/${dataId}`)
          .then((data) => data.json())
          .then((e) => {    
            // Faqat kerakli foydalanuvchi ma'lumotini olish va ko'rsatish
            modalContent.innerHTML = `
              <button id="close-modal"><i class="fa-solid fa-xmark"></i></button>
              <h5>No: <span>${e.id}</span></h5>
              <h4>Car no: <span>${e.car__Nomer}</span></h4>
              <div class="user">
                <img src="human1.svg" alt="">
                <h5>${e.Name}</h5>
              </div>
              <div class="status">
                <img src="dumaloq.svg" alt="">
                <h5>${e.status}</h5>
              </div>
              <h3>Earning : $ ${e.earn}</h3>
              <div class="descrip">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci minima nihil repellat iste odio non, saepe voluptas omnis cum!</p>
              </div>
            `;
  
            const closeModal = document.querySelector("#close-modal");
            closeModal.addEventListener("click", function () {
              modalMain.style.display = "none";
            });
          })
          .catch((error) => console.log(error));
      });
    });
  }
  