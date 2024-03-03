const button = document.getElementById('toTopButton');

const handleScrollTop = () => {
    button.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}

export { handleScrollTop };
