document.querySelectorAll('div').forEach(item => {
        item.onmouseover = () => {
            item.style.color = "red"
        }
        item.onmouseout = () => {
            item.style.color = "black"
        }
    }
)

function exportAsPng() {
    html2canvas(document.querySelector("body")).then(canvas => {
        canvas.toBlob(
            blob => {  
                let file = new Blob([blob], {type: "application/octet-strem"});
                let blobUrl = URL.createObjectURL(file);
                window.location.href = blobUrl;
            }
        )
    });

}