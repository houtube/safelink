var currentURL = location.href;
var str = currentURL;
var res = str.replace("https://houtube.eu.org/safelink/?url=", "");
$(".Visit_Link").hide();

function changeLink() {
    window.open('//houtube.app.link/e/directlink', '_blank')
    window.focus()
    var decodedString = Base64.decode(res);
    window.open(decodedString, '_self')
}

function generate() {
    var e = document.getElementById("download"),
        n = document.getElementById("download2"),
        t = document.getElementById("btn"),
        l = document.getElementById("daplong"),
        d = (document.getElementById("download").href, 6),
        a = document.createElement("span");
    e.parentNode.replaceChild(a, e);
    var o;
    o = setInterval(function () {
        d--, 0 > d ? (a.parentNode.replaceChild(e, a), clearInterval(o), l.style.display = "none",
            e.style.display = "inline", n.style.display = "inline") : (a.innerHTML =
            "<h3 class='text-danger'>Link will appear in " + d.toString() + " Second</h3>",
            t.style.display = "none")
    }, 3550)
}