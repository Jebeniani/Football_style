const previousButton = document.querySelector('[aria-label="Previous"]');
const nextButton = document.querySelector('[aria-label="Next"]');
const pageLinks = document.querySelectorAll('.page-link');

let currentPage = 1;
const totalPages = pageLinks.length - 2;

function updateContent() {
    console.log(`Displaying content for page ${currentPage}`);
}

// Event listener for the "Previous" button
previousButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateContent();
    }
});

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updateContent();
    }
});

// Event listener for page number links
pageLinks.forEach((link, index) => {
    if (index > 0 && index < pageLinks.length - 1) {
        link.addEventListener('click', () => {
            currentPage = index;
            updateContent();
        });
    }
});

updateContent();
