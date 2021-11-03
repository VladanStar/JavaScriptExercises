class Car {
    constructor(wheel, steeringWheel, color) {
        this.wheel = wheel;
        this.steeringWheel = steeringWheel;
        this.color = color;
    }
    get wheel() { return this._wheel; }
    set wheel(newWheel) { this._wheel = newWheel; }
    
    get steeringWheel() { return this._steeringWheel; }
    set steeringWheel(newSteeringWheel) { this._steeringWheel = newSteeringWheel; }
    
    get color() { return this._color; }
    set color(newColor) { this._color = newColor }
    
}
var carInstance = new Car(4, 1, "gray metallic");
console.log(carInstance);
carInstance.color = "red";
console.log(carInstance.color);