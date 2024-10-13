const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
})

inputUpload.addEventListener("change", function(event) {
    var file = event.target.files[0];
    if (!file.type.match("image/png")) {
        alert("Por favor, selecione uma imagem PNG para continuar.");
        inputUpload.value = "";
        return;
    }

    if (file > 2 * 1024 * 1024) {
        alert("A imagem precisa ter no máximo 2MB.");
        inputUpload.value = "";
        return;
    }

    console.log(file); 
})


function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onLoad = () => {
            resolve({ url: leitor.result, nome: arquivo.name });
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`);   
        }

        leitor.readAsDataURL(arquivo);
    })
}