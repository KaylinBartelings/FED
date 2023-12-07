const sections = document.querySelectorAll("section")

const observer = new IntersectionObserver(entries =>
{
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting;

        if (intersecting == true) {
            entry.target.classList.add("inBeeld");
        }
        else if (intersecting == false ) {
            entry.target.classList.remove("inBeeld");
        }
    })

}, { threshold: .25 })

sections.forEach(section => {
    observer.observe(section)
})