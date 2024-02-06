const modal = document.querySelectorAll(".services__modal"),
    modalButton = document.querySelectorAll(".services__button"),
    modalClose = document.querySelectorAll(".services__modal-close");

let activate = (modalClick) => {
    modal[modalClick].classList.add("active-modal");
}

modalButton.forEach((modalButton, i) => {

    modalButton.addEventListener("click", () => {
        activate(i)
    })
})

modalClose.forEach((modalClose) => {

    modalClose.addEventListener("click", () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove("active-modal");
        })
    })
})


/* paginación*/

const swiperTestimonial = new Swiper('.testimonial__swiper', {

    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },

});