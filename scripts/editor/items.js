// item function definitions
// https://oaklandsrblxwiki.miraheze.org/wiki/Logic

console.log("items.js");

// Inputs

function button() {
    // "Activates an output of 10.0 for 1 second when pressed."
}

function switchLogic() {
    // "Toggles between an output of 0.0 and 10.0."
}

function joystick() {
    // "Has four output signals, which can go up to 10.0 depending on how close the joystick is to that direction."
}

function pressurePad() {
    // "Activates an output of 10.0 when a player or object is standing on the pressure pad."
}

function lock() {
    // "A structure that comes with a key! Outputs a signal of 10.0 when the lock is turned. The signal may stay activated if the key is taken out while the lock is turned."
}

function slider() {
    // "Outputs a signal from [0.0, 10.0], depending on slider position."
}

function chatCommander() {
    // "Activates an output when the assigned phrase is in a chat message. Outputs 10.0 if it is the owner, outputs 1.0 if it is a random player."
}

function daylightSensor() {
    // "Outputs a number from [0, 24), depending on current time of day."
}

function proximity() {
    // "Outputs a signal if a player is within 15 studs. Outputs 10.0 if the player is the owner, 5.0 if the player is trusted, 1.0 if the player is untrusted."
}

function weatherSensor() {
    // "Outputs a signal [1,6]. 1 for sunny, 2 for cloudy, 3 for rain, 4 for thunderstorm, 5 for aurora borealis, and 6 for the rare falling star event."
}

// Gates

items.items_and_dom = (id) => `
<div id="${id}" class="block items_and">
    <img src="objects/items_and/items_and.png" alt="AND" draggable="false">
    <div class="inputs">
        <div id="${id}-1" class="wire-clickzone wire-in" style="transform: translate(0px,0px)"></div>
        <div id="${id}-2" class="wire-clickzone wire-in" style="transform: translate(0px,0px)"></div>
    </div>

    <div class="outputs">
        <div id="${id}-3" class="wire-clickzone wire-out" style="transform: translate(0px,0px)"></div>
    </div>
</div>
`

function andGate() {
    // "Activates an output of the two inputs when the two inputs are greater than 0.0 and are equal to each other"
}

function notGate() {
    // "Activates an output of 0.0 when the input is greater than 0.0, otherwise it will output 10.0."
}

function orGate() {
    // "Activates the highest output of the two inputs."
}

function xorGate() {
    // "Outputs the binary equivalent of an XOR operation on each bit. Since every input is 10.0, a normal XOR binary truth table will work."
}

function xandGate() {
    // "Similar to the AND gate, however, it will output 10.0 when both inputs are equal to 0.0"
}

function greaterThanGate() {
    // "Will output the left signal if the left signal is greater than the right signal."
}

// Processors

function calculator() {
    // "Applies math equations to the two inputted signals. Addition, Subtraction, Multiplication, Division, and Exponentiation."
}

function sustainer() {
    // "Holds an input signal for the set time."
}

function incrementer() {
    // "The left input allows you to increase the output value by Input / 10.0. The right input resets the output value."
}

function relay() {
    // "When the right input is higher than 0.0, the output will be the left input value."
}

function blocker() {
    // "When the inputted signal on the right is 0.0, the inputted signal on the left will be outputted."
}

function delay() {
    // "Outputs the input value after the set time has passed."
}

function frequency() {
    // "Outputs the input value at an interval of the set time."
}

function hertzClock() {
    // "Activates sequentially at the provided frequency in Hertz (Hz)."
}

function zeroTick() {
    // "Outputs the inputted signal for a 0.1 seconds."
}

function randomizer() {
    // "Outputs a random signal between [0, Input Value]."
}

function signalLock() {
    // "When the right input is powered on, the left input is allowed to store a signal for the output. If the left input power is lost, and the right power input is still active, the left input value will remain."
}

function tFlipFlop() {
    // "Toggles between an on and off signal, similar to a switch. Any input greater than 0.0 will toggle it."
}

function numberSplitter() {
    // "An invention by Gustav. Splits the input into single digits for each power of ten, with the 5th output serving as excess for any remainder."
}

function numberCombiner() {
    // "Combines up to 5 inputs into a single output, with each input being multiplied by a factor corresponding to its position: Input 1 by 1, Input 2 by 10, Input 3 by 100, Input 4 by 1000, and Input 5 by 10000."
}

function binaryInput() {
    // "Takes in up to 5 bits of binary, and will output it as a linear signal."
}

function binaryOutput() {
    // "Takes in a linear signal, and will output it up to 5 bits of binary."
}

// Components

function transmitter() {
    // "Wirelessly sends the inputted signal to a Receiver depending on the assigned keyphrase."
}

function receiver() {
    // "Wirelessly obtains a signal from a Transmitter and outputs the signal based on the assigned keyphrase."
}

function memoryCell() {
    // "Holds the inputted signal provided in the left input. The right input is able to reset the output."
}

function tether() {
    // "A way to organize your wires, acts as a passthrough."
}

// Lasers

function redLaser() {
    // "Outputs a signal of 10.0 if it hits an object, a signal of 5.0 if it hits a player. Reflects off of privacy glass up to 5 times."
}

function materialLaser() {
    // "Assign a material to the laser by touching the material onto the schematic input. When the laser hits a material, it will output a signal of 10.0"
}

function laserReceiver() {
    // "Will activate an output of 10.0 when a laser hits the receiver."
}

// Misc

function interactor() {
    // "Interacts with objects or structures within the world. Requires permissions from the user."
}

function collider() {
    // "Enables and disables collisions with filled schematics, privacy glass, vehicle/trailer pads, and spawn pads within the world."
}

function ownershipManager() {
    // "Allows you to clear & transfer ownership of items! Providing a power input of 10.0 will clear the ownership of items, and providing a user id will transfer the ownership to that player. This only works on items that you own!"
}

function speaker() {
    // "Sends out a chat message & chat bubble when powered! The chat message only shows to people who are friended to you. Using the {num} keyword will format it to be the number input. If you use the {display_name} keyword, and provide a user id of a player, it will display their name. RichText is supported!"
}

function donator() {
    // "Allows players to donate to you for a fixed amount! Outputs their user id as a signal upon donation. An interaction can change the donation amount!"
}

function lcd() {
    // "A resizeable array of toggleable lights with logic. When input numbers surpass 10.0, the colors of the rainbow start to appear."
}

function bulbPoweredLights() {
    // "A resizeable array of toggleable lights with logic. When input numbers surpass 10.0, the colors of the rainbow start to appear."
}

function electronicBillboard() {
    // "Displays an image depending on what the input signal is. The signal input has to be a Roblox Image ID. An easy way to input this number is with a number interface."
}

function sevenSegmentDisplay() {
    // "Allows you to display numbers. Bottom middle input allows you to provide a number input to display. Bottom left input allows you to provide a color. Top middle input is a passthrough for the number input. Optionally, you can individually activate every segment."
}

function fourteenSegmentDisplay() {
    // "Allows you to display numbers. Bottom middle input allows you to provide a number input to display. Bottom left input allows you to provide a color. Top middle input is a passthrough for the number input. Optionally, you can individually activate every segment."
}

function musicNote() {
    // "Plays different notes depending on the input signal. Can change music type by interacting."
}

function securityCameraDisplay() {
    // "A display made for rendering cameras! Must be toggled on by the user."
}
