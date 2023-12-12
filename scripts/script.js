// hier staan alle js codes voor de nav

const menuBtn = document.querySelector('header > button');
const navBtn = document.querySelector('header nav button');
const nav = document.querySelector('header nav');

menuBtn.addEventListener('click', () => {
    // menuBtn.classList.toggle('menuOpen');
    nav.classList.toggle('navOpen');
});

navBtn.addEventListener('click', () => {
    nav.classList.toggle('navOpen');
});
// hier eindigen alle js codes voor de nav


// hier staan alle js codes voor het veranderen van de achtergrond kleur per section
// code geschreven door Hooft, M.S. t
const sections = document.querySelectorAll('main section')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting;

        if (intersecting == true) {
            entry.target.classList.add('inBeeld');
        }
        else if (intersecting == false) {
            entry.target.classList.remove('inBeeld');
        }
    })

    // als de section .15 in beeld is dan wordt de code uitgevoerd
}, { threshold: .15 })

sections.forEach(section => {
    observer.observe(section)
})
// hier eindigen alle js codes voor het veranderen van de achtergrond kleur per section



// hier staan alle js codes voor de slider in section 3 van home page
// code geschreven met behulp van CHATGPT
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

prevBtn_section_3.addEventListener('click', prevBtn_section_3);
nextBtn_section_3.addEventListener('click', prevBtn_section_3);
// hier eindigen alle js codes voor de slider in section 3 van home page


// hier staan alle js codes voor de slider van slider-section
// code geschreven met behulp van CHATGPT
const slider_section = document.querySelector('.slider-section ul');
const prevBtn_slider_section = document.querySelector('.slider-section button:nth-of-type(1)');
const nextBtn_slider_section = document.querySelector('.slider-section button:nth-of-type(2)');
const counter_slider_section = document.querySelector('.counter');
const progressBar_slider_section = document.querySelector('progress');

let currentIndex_slider_section = 0;
const sliderGap_slider_section = 35;


const updateSlider_section = () => {
    const itemWidth = slider_section.children[0].offsetWidth + sliderGap_slider_section;
    const newPosition = -currentIndex_slider_section * itemWidth;
    slider_section.style.transform = `translateX(${newPosition}px)`;

    // Update the progress bar
    progressBar_slider_section.value = ((currentIndex_slider_section + 1) / slider_section.children.length) * 100;
};

const showPrev_slider_section = () => {
    currentIndex_slider_section = (currentIndex_slider_section - 1 + slider_section.children.length) % slider_section.children.length;
    updateSlider_section();
};

const showNext_slider_section = () => {
    currentIndex_slider_section = (currentIndex_slider_section + 1) % slider_section.children.length;
    updateSlider_section();
};

// Initial update
updateSlider_section();

prevBtn_slider_section.addEventListener('click', showPrev_slider_section);
nextBtn_slider_section.addEventListener('click', showNext_slider_section);
// hier eindigen alle js codes voor de slider van slider-section



// hier staan alle js codes voor de slider in section 5 van home page
// code geschreven met behulp van CHATGPT
const slider = document.querySelector('section:nth-of-type(5) ul');
const prevBtn = document.querySelector('section:nth-of-type(5) button:nth-of-type(1)');
const nextBtn = document.querySelector('section:nth-of-type(5) button:nth-of-type(2)');
const counter = document.querySelector('.counter');
const progressBar = document.querySelector('progress');

let currentIndex = 0;
const sliderGap = 35;


if (slider) {
    const updateSlider = () => {
        const itemWidth = slider.children[0].offsetWidth + sliderGap;
        const newPosition = -currentIndex * itemWidth;
        slider.style.transform = `translateX(${newPosition}px)`;

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
    // hier eindigen alle js codes voor de slider in section 5 van home page
}



// hier staan alle js codes voor de slider in section 7 van home page
// code geschreven met behulp van CHATGPT
const slider_section_7 = document.querySelector('section:nth-of-type(7) ul');
const prevBtn_section_7 = document.querySelector('section:nth-of-type(7) button:nth-of-type(1)');
const nextBtn_section_7 = document.querySelector('section:nth-of-type(7) button:nth-of-type(2)');
const counter_section_7 = document.querySelector('.counter');
const progressBar_section_7 = document.querySelector('progress');

let currentIndex_section_7 = 0;
const sliderGap_section_7 = 35;

if (slider) {
    const updateSlider_section_7 = () => {
        const itemWidth = slider_section_7.children[0].offsetWidth + sliderGap_section_7;
        const newPosition = -currentIndex_section_7 * itemWidth;
        slider_section_7.style.transform = `translateX(${newPosition}px)`;

        // Update the progress bar
        progressBar_section_7.value = ((currentIndex_section_7 + 1) / slider_section_7.children.length) * 100;
    };

    const showPrev_section_7 = () => {
        currentIndex_section_7 = (currentIndex_section_7 - 1 + slider_section_7.children.length) % slider.children.length;
        updateSlider_section_7();
    };

    const showNext_section_7 = () => {
        currentIndex_section_7 = (currentIndex_section_7 + 1) % slider_section_7.children.length;
        updateSlider_section_7();
    };

    // Initial update
    updateSlider_section_7();

    prevBtn_section_7.addEventListener('click', showPrev_section_7);
    nextBtn_section_7.addEventListener('click', showNext_section_7);
}
// hier eindigen alle js codes voor de slider in section 7 van home page

// de codes en functies die voor de slider geschreven zijn dubbel, 
// deze zouden ingekort kunnen worden tot één fucntion



// hier staan alle js codes voor de footer
const footer = document.querySelector('footer');
const footerBtn = document.querySelector('footer > button');

footerBtn.addEventListener('click', () => {
    footerBtn.classList.toggle('buttonToggle');
    footer.classList.toggle('footerOpen');
});

// hier eindigen alle js codes voor de footer


// % = modulo, deelt het aantal mogelijke kinderen door wat er in parseInt. kijkt hoevaal het getal in het hele past, dat wat over blijft is de modulo

// => moderne manier voor fuction  