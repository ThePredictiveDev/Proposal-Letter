let currentPage = 1;
const totalPages = 14;

document.body.addEventListener('click', () => {
    if (currentPage < totalPages) {
        document.getElementById(`page${currentPage}`).style.transform = 'rotateY(-180deg)';
        currentPage++;
    }
});
