let versao = 7

let arquivos = [
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
    console.log("Instalou")
})

self.addEventListener("activate", function(){
    caches.open("ceep-arquivos-" + versao).then(cache => {
        cache.addAll(arquivos)
            .then(function(){
                caches.delete("ceep-arquivos-" + (versao - 1 ))
                caches.delete("ceep-arquivos")
            })

    })
})


self.addEventListener("fetch", function(event){

    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
    })

    event.respondWith(promiseResposta)

})

