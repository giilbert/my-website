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