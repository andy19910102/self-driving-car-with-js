const canvas = document.getElementById("myCanvas");
// Set canvas size to
// width: 200px;
canvas.width = 200;

const ctx = canvas.getContext("2d");

const road = new Road(canvas.width / 2, canvas.width * 0.9)
const car = new Car(road.getLaneCenter(1), 100, 30, 50);


animate();

function animate() {
    car.update(road.borders);
    // Set canvas height to 100vh
    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.7);

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();

    // The window.requestAnimationFrame() method tells 
    // the browser that you wish to perform an animation 
    // and requests that the browser calls a specified 
    // function to update an animation before the next repaint. 
    // The method takes a callback as an argument to be invoked 
    // before the repaint.
    requestAnimationFrame(animate);
}