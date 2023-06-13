const { hash } = window.location;


const message = atob(hash.replace("#", ""))
if(message){
    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#message-show").classList.remove("remove");
    document.querySelector("h1").innerHTML = atob(hash.replace("#", ""))
}else{
    document.querySelector("#message-show").classList.add("hide")
}


document.querySelector("form").addEventListener("submit", (event) =>{
    event.preventDefault(); //!* interrompe il comportamento di default del browser, ovvero inviare il form
    const messageInput = document.querySelector("#messageInput")
    const messageEncrypted = btoa(messageInput.value)


    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#link-form").classList.remove("hide");



    const inputLink = document.querySelector("#inputLink")
    inputLink.value = `${window.location}#${messageEncrypted}`;

    document.querySelector("#copy").addEventListener('click', () =>{
        inputLink.select();
        inputLink.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(inputLink.value);
        document.querySelector("#copy").textContent = "Copied!"

    })


    CopyLink()



})

