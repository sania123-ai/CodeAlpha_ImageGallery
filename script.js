const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Open image
function showImage(index) {
    lightbox.style.display = 'flex';
    lightboxImg.src = images[index].src;
}

// Click image
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Next image
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Previous image
prevBtn.addEventListener('click', () => {
    currentIndex =
        (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

// Filter images
function filterImages(category) {
    const allImages =
        document.querySelectorAll('.gallery img');

    allImages.forEach(img => {
        if (
            category === 'all' ||
            img.classList.contains(category)
        ) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}