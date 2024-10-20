let currentPage = 1;
const totalPages = 14;

document.body.addEventListener('click', () => {
    if (currentPage <= totalPages) {
        document.getElementById(`page${currentPage}`).classList.add('flipped');
        currentPage++;
    }
});
