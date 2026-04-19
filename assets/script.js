// Copy promo code to clipboard
const promo = document.getElementById('promo');

if (promo) {
    promo.addEventListener('click', () => {
        navigator.clipboard.writeText(promo.textContent);

        promo.classList.add('copied');
        promo.textContent = 'Copied!';

        setTimeout(() => {
            promo.textContent = 'RIO500';
            promo.classList.remove('copied');
        }, 1500);
    });
}