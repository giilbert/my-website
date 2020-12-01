let mouseEnter = (e, el) => {
    let tooltip = el.children[1]; // change if adding more to nav element

    tooltip.style.display = 'block';
}

let mouseLeave = (e, el) => {
    let tooltip = el.children[1]; // change if adding more to nav element

    tooltip.style.display = 'none';
}


IncludeJS.onload(() => {
    let nav = document.getElementById('nav-items');

    if (navigator.userAgent.toLowerCase().match(/mobile/i)) return; // no tooltips if on mobile device

    for (let i = 0; i < nav.children.length; i++) {
        let el = nav.children[i];

        el.addEventListener('mouseenter', e => {
            mouseEnter(e, el)
        })

        el.addEventListener('mouseleave', e => {
            mouseLeave(e, el)
        })
    }
})


// light / dark theme switcher 
let currentTheme = localStorage.getItem('theme'); // true = dark, false = light

// switch to dark if condition in local storage
window.addEventListener('load', () => {
    if (currentTheme == 'true') {
        document.body.classList.remove('light');
        document.body.classList.add('dark')
    }
})


let toggleTheme = () => {
    if (currentTheme == 'true') {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        currentTheme = 'false';
    } else if (currentTheme == 'false') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        currentTheme = 'true';
    }
    // update in local storage
    localStorage.setItem('theme', currentTheme);
}