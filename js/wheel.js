window.onload=function(){
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var x = canvas.width / 2;
var y = canvas.height / 2;

var pads = [];
// size of a pie : it is an angle in radians
var angle = 2 * Math.PI / 12;
var color = ["#1874cd", "#2C0095", "#760190", "#E4007B", "#b22222", "#FE0000", "#e67300", "#FDB700", "yellow", "#81D500", "#217B33", "#13979a"];
var Pads = function(x, y, radius, start, end) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.start = start;
    this.end = end;

};
function drawSimon(radius) {
    for (var i = 0; i < 12; i++) {
        context.beginPath();
        context.moveTo(x, y);
        context.arc(x, y, radius, i*angle, (i+1)*angle, false);
        context.lineWidth = radius;
        context.fillStyle = color[i];
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#444';
        context.stroke();
        var pad = new Pads(x, y, radius, i*angle, (i+1)*angle);
        pads.push(pad);
    }

}

var radius = 350;
drawSimon(radius);

$('#myCanvas').click(function (e) {
var nx,ny;
nx=-(x- e.pageX);
ny=y- e.pageY;
 var dx = Math.abs(Math.abs(x)-Math.abs(e.pageX));
 var dy = Math.abs(Math.abs(y)-Math.abs(e.pageY));
 var distance_clicked = Math.sqrt((dx*dx)+(dy*dy));
 if(distance_clicked <= radius){
	if (nx>0 && ny>0){
  alert('Yellow');
  }else if (nx<0 && ny>0){
  alert('Blue');
  }else if (nx>0 && ny<0){
  alert('Green');
  }else if (nx<0 && ny<0){
  alert('Red');
  }
}
});

}