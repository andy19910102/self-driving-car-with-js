const canvas = document.getElementById("myCanvas");
// Set canvas size to
// width: 200px;
canvas.width = 200;

const ctx = canvas.getContext("2d");

const car = new Car(100, 100, 30, 50);


animate();

function animate() {
    car.update();
    // Set canvas height to 100vh
    canvas.height = window.innerHeight;
    car.draw(ctx);
    // The window.requestAnimationFrame() method tells 
    // the browser that you wish to perform an animation 
    // and requests that the browser calls a specified 
    // function to update an animation before the next repaint. 
    // The method takes a callback as an argument to be invoked 
    // before the repaint.
    requestAnimationFrame(animate);
}