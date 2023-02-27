const panels = document.querySelectorAll('.panel');

/* Adding an event listener to each panel. 
When the panel is clicked, it removes the active class from all panels and 
adds the active class to the panel that was clicked. */
panels.forEach((panel) => {
    panel.addEventListener('click', (event) => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

/*
 Function to remove the active class from all panels.
 */
const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}