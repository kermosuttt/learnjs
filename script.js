//console.log(window, {document});
// setTimeout(() => {
//     document.location = 'https://google.com';
// }, 5000);
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.rect(10, 10, 100, 90)
ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.stroke();

ctx.fillStyle = '#0000FF';
ctx.fillRect(10, 10, 100, 30);

ctx.fillStyle = '#000000';
ctx.fillRect(10, 40, 100, 30);

ctx.fillStyle = '#FFFFFF';
ctx.fillRect(10, 70, 100, 30);

ctx.moveTo(200,20);
ctx.lineTo(160,50);
ctx.stroke();
ctx.beginPath();

ctx.moveTo(150,20);
ctx.lineTo(190,50);
ctx.stroke();

ctx.moveTo(150,20);
ctx.lineTo(200,20);
ctx.stroke();

ctx.moveTo(175,5);
ctx.lineTo(160,50);
ctx.stroke();

ctx.moveTo(175,5);
ctx.lineTo(190,50);
ctx.stroke();

ctx.moveTo(290,80);
ctx.arc(250, 80, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineTo(250,80);
ctx.arc(250, 80, 40, 4.2, -3.5 / Math.PI);
ctx.fillStyle = 'black';
ctx.fill();
ctx.stroke();