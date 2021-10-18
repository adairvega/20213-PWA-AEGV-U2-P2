let principal = $("#principal");
let news = $("#news");
let url = window.location.href
let swDirect = "/20213-PWA-AEGV-U2-P2/sw.js"

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        swDirect = "/sw.js"
    }
    navigator.serviceWorker.register(swDirect)  
}else{    
    console.error("Error al cargar SW")
}

$(".btn-seguir").on("click", (e) => {
    e.preventDefault();
    principal.fadeOut(() => {
        news.slideDown(1000)
    })
});

$(".btn-return").on("click", () => {
    news.fadeOut(() => {
        principal.slideDown(1000)
    })
})