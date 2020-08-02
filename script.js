if("serviceWorker" in navigator){
    navigator.ServiceWorker.register("sworker.js").then(registration=>{
        console.log("Service Worker Registered");
        console.log(registration);
    })
}
else{
    alert("Service worker not working...!")
}