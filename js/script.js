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
                saveAs(blob, "git-cheat-sheet.png");
            }
        )
    });

}