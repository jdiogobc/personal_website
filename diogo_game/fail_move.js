var elem_bottom = document.getElementById("failed_diogos_bottom");
var elem_top = document.getElementById("failed_diogos_top");

myMove(elem_top, "right");
myMove(elem_bottom, "left");

function myMove(elem, first_dir) {
    var pos = 0;
    var id = setInterval(frame, 1);
    var back = true;

    function frame() {
        if (pos < -350 || pos > 1) {
            back = !back;
        }
        if (back == true){
            pos++;
        } else {
            pos--;
        }


        if (first_dir == "right") {
            elem.style.right = pos + 'px';
        } else {
            elem.style.left = pos + 'px';
        }
        
    }
}