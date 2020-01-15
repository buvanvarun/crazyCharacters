var symbols = ["*", "#", "%", "&", "?", "@"];
var speed = 2000;
setInterval(crazy, speed);

function crazy() {
    var i = 0;
    var timer = setInterval(crazy_b, 90);

    function crazy_b() {
        if (i < 5) {
            var sym = symbols[Math.floor(Math.random() * 6)];
            document.getElementById("crazy").textContent = sym;
            i++;
        } else {
            clearInterval(timer);
            timer = null;
            document.getElementById("crazy").textContent = "B";
        }
    }
}