function convert() {
    var t, e = document.getElementById("somewhere");
    t = e.value.replace(/&/ig, "&amp;").replace(/</ig, "&lt;").replace(/>/ig, "&gt;").replace(/"/ig, "&quot;").replace(/'/ig, "&#039;").replace(/&#177;/ig, "&plusmn;").replace(/&#169;/ig, "&copy;").replace(/&#174;/ig, "&reg;").replace(/ya'll/ig, "ya'll");
    e.value = t;
    document.getElementById("button-link").style.display = "inline-block";
    document.getElementById("btn_clear").style.display = "inline-block";
}

function copyToClipboard() {
    var copyText = document.getElementById("somewhere");
    copyText.select();
    document.execCommand("copy");

    var btnInfo = document.getElementById("btnInfo");
    btnInfo.style.display = "block"; 
    setTimeout(function() { btnInfo.style.display = 'none'; }, 2000); 
}

function cdClear() {
    document.getElementById("somewhere").value = "";
    document.getElementById("btnInfo").style.display = "none";
    document.getElementById("button-link").style.display = "none";
}
