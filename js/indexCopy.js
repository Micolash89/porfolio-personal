(() => {
    const copyButton = document.getElementById('copyButton');

    const copyButtonOk = document.getElementById('copyButtonOk');

    const email = document.querySelector('.home__data span').textContent;

    copyButton.addEventListener('click', () => {
        copyButton.style.display = 'none';
        copyButtonOk.style.display = 'inline-flex';

        navigator.clipboard.writeText(email.trim());

        setTimeout(() => {
            copyButton.style.display = 'inline-flex';
            copyButtonOk.style.display = 'none';
        }, 1500);

    })

})();