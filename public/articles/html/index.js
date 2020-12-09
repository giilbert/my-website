const rootURL = '/articles/html/';

let queryParams = new URLSearchParams(window.location.search)
let contentContainer;

function wait(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, x);
    });
}

async function goHome() {
    contentContainer.innerHTML = '<h1>returning in 3</h1>'
    await wait(1000);
    contentContainer.innerHTML = '<h1>returning in 2</h1>'
    await wait(1000);
    contentContainer.innerHTML = '<h1>returning in 1</h1>'
    await wait(1000);
    window.location = '/';
}

window.addEventListener('load', async () => {
    let articleID = queryParams.get('id');
    contentContainer = document.getElementById('main-content');

    if (articleID == null || isNaN(articleID)) {
        contentContainer.innerHTML = `
            <h1>invalid article id</h1> 

            <br /><br /><br /><br /><br /><br />

            <p style="opacity: 0.2">#lost<p>
        `;

        await wait(10000);
        goHome();

        return;
    }

    let res = fetch(rootURL + 'content/' + articleID.toString() + '.html', {
        cache: 'no-cache',
        headers: {
            pragma: 'no-cache',
        }
    })

    let text = (await res).text();
    let status = (await res).status 

    if (!text || status != 200) {
        contentContainer.innerHTML = `
            <h1>could not find article</h1>
            <h2 style="opacity: 0.7">status ${status}</h2>
            
            <br /><br /><br /><br /><br /><br />

            <p style="opacity: 0.2">#lost<p>
        `;

        await wait(10000)
        goHome();

        return;
    }

    contentContainer.innerHTML = await text
})