import router from "./router.js";

document.addEventListener("click",e => {
    e.preventDefault();

    if(!e.target.className.includes("nav-link")){
        const parent = e.target.parentNode;
        console.log(parent);
        e.target.className.includes("items") ?  parent.click() :  false;
        return false;
    }
    urlEdit(e)

},false)

function urlEdit(e) {
    window.history.pushState({},"",e.target.href);
    locHandler();
}

async function locHandler(){
const loc = window.location.pathname;
const route = router[loc] || router["/Pages/page404"];

const html = await fetch(route.templete);
const vhtml = await html.text();
console.log(vhtml);
document.querySelector("html").innerHTML = vhtml;
}

window.onpopstate = locHandler;
