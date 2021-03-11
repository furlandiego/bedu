function submitForm() {
    var i = 0;

    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
            }
        }
    }
}

function updateProgressBar() {
    
    var img = document.createElement("img");

    var currentProgress = calculateProgress();

    alert(currentProgress);

    if (img != undefined) {
        var obj = document.getElementById("progressBarImage");
        var img = obj.firstChild.obj;
        img.setAttribute("src", "img/" + String(currentProgress) + ".jpg");
    }
    else {
        img.src = "img/" + String(currentProgress) + ".jpg";
        var src = document.getElementById("progressBarImage");

        src.appendChild(img);
    }
}

function calculateProgress(){

    var currentProgress = 0;
    var inputs = document.getElementById("autosave").elements;

    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].nodeName === "INPUT" && inputs[i].value.trim.length > 0) {
            currentProgress = currentProgress + 20;
        }
    }
}
	