const sections = document.querySelectorAll("main section")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting;

        if (intersecting == true) {
            entry.target.classList.add("inBeeld");
        }
        else if (intersecting == false) {
            entry.target.classList.remove("inBeeld");
        }
    })

}, { threshold: .15 })

sections.forEach(section => {
    observer.observe(section)
})

const slider_section_3 = document.querySelector('section:nth-of-type(3) ul');
const prevBtn_section_3 = document.querySelector('section:nth-of-type(3) button:nth-of-type(1)');
const nextBtn_section_3 = document.querySelector('section:nth-of-type(3) button:nth-of-type(2)');
const counter_section_3 = document.querySelector('.counter');
const progressBar_section_3 = document.querySelector('progress');

let currentIndex_section_3 = 0;
const sliderGap_section_3 = 35;

const updateSlider_section_3 = () => {
    const itemWidth = slider_section_3.children[0].offsetWidth + sliderGap_section_3;
    const newPosition = -currentIndex_section_3 * itemWidth;
    slider_section_3.style.transform = `translateX(${newPosition}px)`;

    // // Update the counter
    // counter.innerText = `${currentIndex + 1} /${slider.children.length}`;

    // Update the progress bar
    progressBar_section_3.value = ((currentIndex_section_3 + 1) / slider_section_3.children.length) * 100;
};

const showPrev_section_3 = () => {
    currentIndex_section_3 = (currentIndex_section_3 - 1 + slider_section_3.children.length) % slider.children.length;
    updateSlider_section_3();
};

const showNext_section_3 = () => {
    currentIndex_section_3 = (currentIndex_section_3 + 1) % slider_section_3.children.length;
    updateSlider_section_3();
};

// Initial update
updateSlider_section_3();

prevBtn_section_3.addEventListener('click', showPrev_section_3);
nextBtn_section_3.addEventListener('click', showNext_section_3);










const slider = document.querySelector('section:nth-of-type(5) ul');
const prevBtn = document.querySelector('section:nth-of-type(5) button:nth-of-type(1)');
const nextBtn = document.querySelector('section:nth-of-type(5) button:nth-of-type(2)');
const counter = document.querySelector('.counter');
const progressBar = document.querySelector('progress');

let currentIndex = 0;
const sliderGap = 35;

const updateSlider = () => {
    const itemWidth = slider.children[0].offsetWidth + sliderGap;
    const newPosition = -currentIndex * itemWidth;
    slider.style.transform = `translateX(${newPosition}px)`;

    // // Update the counter
    // counter.innerText = `${currentIndex + 1} /${slider.children.length}`;

    // Update the progress bar
    progressBar.value = ((currentIndex + 1) / slider.children.length) * 100;
};

const showPrev = () => {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    updateSlider();
};

const showNext = () => {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
};

// Initial update
updateSlider();

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);



// % = modulo

// deelt het aantal mogelijke kinderen door wat er in parseInt

// kijkt hoevaal het getal in het hele past, dat wat over blijft is de modulo

// => moderne manier voor fuction  

