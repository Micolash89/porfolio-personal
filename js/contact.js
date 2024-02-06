const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    //emailJS.sendForm('','','','');

    contactMessage.textContent = 'Message sent successfully ✅';

    setTimeout(() => {
        contactMessage.textContent = '';
    }, 5000);

    contactForm.reset();
}

contactForm.addEventListener('submit', sendEmail);

