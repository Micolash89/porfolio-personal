(() => {

    const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message'),
        scriptURL = 'https://script.google.com/macros/s/AKfycbwhyLbpfAzy5j_Ki5tEA-Wneu2pr8VhSqOd2QiL40UXGL1fKo3a3ZouZ4XeU32Wkfe8/exec';

    const sendEmail = (e) => {

        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(contactForm) })
            .then(response => {
                contactMessage.textContent = 'mensaje enviado ✅';
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
            })
            .catch(error => contactMessage.textContent = 'Error al enviar el mensaje ❌')



        contactForm.reset();
    }

    contactForm.addEventListener('submit', sendEmail);


})();
