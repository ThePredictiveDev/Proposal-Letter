let currentPage = 1;
const totalPages = 14;

document.body.addEventListener('click', (e) => {
    const pageWidth = document.body.clientWidth;
    const clickX = e.clientX;

    // Determine if the click is on the left or right half
    if (clickX > pageWidth / 2) {
        // Clicked on the right half (next page)
        if (currentPage <= totalPages) {
            document.getElementById(`page${currentPage}`).classList.add('flipped');
            currentPage++;
        }
    } else {
        // Clicked on the left half (previous page)
        if (currentPage > 1) {
            currentPage--;
            document.getElementById(`page${currentPage}`).classList.remove('flipped');
        }
    }
});
