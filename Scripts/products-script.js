const swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 1.99,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 50,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 1.99,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  lazyLoading: true,
});

const toggleBtn = document.querySelector(".menu-icon");
const toggleBtnIcon = document.querySelector(".menu-icon i");
const dropDowm = document.querySelector(".dropDown-right");
toggleBtn.onclick = function () {
  dropDowm.classList.toggle("open");
  const isOpen = dropDowm.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

document.getElementById("btn").addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const mail = document.querySelector("#mail").value;
  const subject = document.querySelector("#subject").value;
  const msg = document.querySelector("#msg").value;

  const finalMsg = `Name : ${name}, Email ${mail} and msg ${msg}`;
  console.log(name);
  console.log(mail);
  console.log(subject);
  console.log(msg);
  if (!name) {
    alert("Enter your Name!");
  } else if (!mail) {
    alert("Enter your Email!");
  } else if (!subject) {
    alert("Enter the Subject!");
  } else if (!msg) {
    alert("Enter your msg");
  } else {
    Email.send({
      SecureToken: "bd14f7e4-1f2d-45d5-b71d-ba224ebbf30d",
      To: "bestenfabrication@gmail.com",
      From: "bestenfabrication@gmail.com",
      Subject: subject,
      Body: finalMsg,
    }).then((message) => alert("Done"));
    //  .catch(() =>
    //    alert(
    //      "Sorry the Quote System is not working at this moment, You can contact us through the Contact number mentioned below "
    //    )
    //  );
  }
});
