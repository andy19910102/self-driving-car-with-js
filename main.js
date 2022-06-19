const canvas = document.getElementById("myCanvas");
// Set canvas size to
// width: 200px;
canvas.width = 200;

const ctx = canvas.getContext("2d");

const road = new Road(canvas.width / 2, canvas.width * 0.9)
const car = new Car(road.getLaneCenter(1), 100, 30, 50, "KEYS");
const traffic = [
    new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2)
]


animate();

function animate() {
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].update(road.borders, []);
    }

    car.update(road.borders, traffic);
    // Set canvas height to 100vh
    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.7);

    road.draw(ctx);
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].draw(ctx, "red");
    }
    car.draw(ctx, "blue");

    ctx.restore();

    // The window.requestAnimationFrame() method tells 
    // the browser that you wish to perform an animation 
    // and requests that the browser calls a specified 
    // function to update an animation before the next repaint. 
    // The method takes a callback as an argument to be invoked 
    // before the repaint.
    requestAnimationFrame(animate);
}