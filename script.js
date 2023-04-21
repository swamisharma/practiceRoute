const btn1 = document.querySelector("button.inc");
const btn2 = document.querySelector("button.getItem");
const btn3 = document.querySelector("button.putItem");
const text = document.querySelector("h1");

let val;

btn1.addEventListener("click", () => {
    val = parseInt(text.textContent) + 1;
    text.textContent = val;
    history.pushState({
        id: 'homepage',
        val: val
    }, 'Home | My App', `/${val}`);
});

btn2.addEventListener("click", () => {
    console.log(JSON.parse(localStorage.getItem("array")));
});

btn2.addEventListener("click", () => {
    localStorage.setItem("array", JSON.stringify([]));
});

window.addEventListener('popstate', () => {
    val = parseInt(window.location.pathname.slice(1));
    console.log(parseInt(window.location.pathname.slice(1)))
    // console.log(window.location.pathname);
}, false);
