let version = 7

let files = [
"/",
"assets/css/style.css",
"assets/img/bg.jpg",
"assets/img/user-marco-luque.jpg",
"assets/fonts/montserrat-700.woff2",
"assets/fonts/montserrat-regular.woff2",
"js/models/Task.js",
"js/models/Message.js",
"js/models/ListTask.js",
"js/controllers/TaskController.js",
"js/views/View.js",
"js/views/ListView.js",
"js/views/MessageView.js",
]

self.addEventListener("install", function(){
    console.log("Install SW")
})

self.addEventListener("activate", function(){
    caches.open("quero-files-" + version).then(cache => {
        cache.addAll(files)
            .then(function(){
                caches.delete("quero-files-" + (version - 1 ))
                caches.delete("quero-files")
            })
    })
})

self.addEventListener("fetch", function(event){

    let order = event.request
    let promiseResponse = caches.match(order).then(responseCache => {
        let response = responseCache ? responseCache : fetch(order)
        return response
    })

    event.respondWith(promiseResponse)

})

