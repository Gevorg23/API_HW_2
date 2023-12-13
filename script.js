const slider = document.getElementById('slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const navDots = document.getElementById('navDots');

let currentIndex = 0;

// Ваши изображения
const images = [
    {
        id: 1,
        src: "https://wallpapers.com/images/file/mount-everest-himalayas-mountain-landscape-fvzvr2lxst081ois.jpg"
    },
    {
        id: 2,
        src: "https://w.forfun.com/fetch/5d/5d5b44a8b6ad5a309b7ec2ab8d582c90.jpeg"
    },
    {
        id: 3, 
        src: "https://w.forfun.com/fetch/4f/4fe850574d353d4a18e378891be8fff0.jpeg"
    }
];

// Создание слайдов и навигационных точек
images.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.style.backgroundImage = `url('${image.src}')`;
    slider.appendChild(slide);

    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.onclick = () => goToSlide(index);
    navDots.appendChild(dot);
});

// Начальное отображение
updateSlider();

function updateSlider() {
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
    updateNavDots();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}

function updateNavDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.style.backgroundColor = '#333';
        } else {
            dot.style.backgroundColor = '#bbb';
        }
    });
}
