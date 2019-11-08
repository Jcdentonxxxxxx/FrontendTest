var path = document.querySelector('.progress svg path');
var ship = document.getElementById('img');
var step = 400;
var forward = true;
var x;
var y;
var totalLength = path.getTotalLength();
var stop = true;
var arr = [];

console.log(totalLength);


var select = document.getElementById('select');

select.addEventListener('click', function (event) {
    var dot = document.querySelector('#progress .progress__dot.active');
    var leftOfDot = parseFloat(getComputedStyle(dot).left);
    arr.push(leftOfDot);
    
    
    if (!stop) return;

    var timerId = setInterval(function() {

        stop = false;   

        if (arr[0] + 5 >= x) {
            forward = true;
        } else if (arr[0] - 5 <= x) {
            forward = false;
        }
        
        if (forward) {
            
            if (x >= arr[0]) {
                
                
                
                arr.shift();

                if (arr.length === 0) {
                    console.log(arr.length);
                    clearInterval(timerId);
                    stop = true;
                    return;
                }
                

            }
        } else {
            
            if (x <= arr[0]) {
                
                arr.shift();

                if (arr.length === 0) {
                    
                    clearInterval(timerId);
                    stop = true;
                    return;
                }
                
            }
        }
        
        move(arr[0]);
        

    }, 0);
    
    function move(dot) {

        point = path.getPointAtLength(step);

        x = point.x;
        y = point.y;
        console.log(x);
        ship.style.left = x - (ship.offsetHeight / 2) + 'px';
        ship.style.top = y - ship.offsetHeight + 'px';

        if (forward) {
            step++;
            
        } else {
            step--;
            
        }

    }
});
