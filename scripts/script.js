const sections = document.querySelector("section")

const observer = new IntersectionObserver(entries =>
{
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        if (intersecting ==true) {
            entry.target.classlist.add("inBeeld")
        }
        else if (intersecting == false ) {
            
        }
    })

}, { threshold: .5 })

sections.forEach(section => {
    observer.observe(section)
})