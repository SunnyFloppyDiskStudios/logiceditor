console.log("items.js");

// item function definitions
// https://oaklandsrblxwiki.miraheze.org/wiki/Logic

// Inputs

items.items_button_dom = (id) => ``

function button() {
    // "Activates an output of 10.0 for 1 second when pressed."
}

items.items_switch_dom = (id) => ``

function switchLogic() {
    // "Toggles between an output of 0.0 and 10.0."
}

items.items_joystick_dom = (id) => ``

function joystick() {
    // "Has four output signals, which can go up to 10.0 depending on how close the joystick is to that direction."
}

items.items_pressure_dom = (id) => ``

function pressurePad() {
    // "Activates an output of 10.0 when a player or object is standing on the pressure pad."
}

items.items_lock_dom = (id) => ``

function lock() {
    // "A structure that comes with a key! Outputs a signal of 10.0 when the lock is turned. The signal may stay activated if the key is taken out while the lock is turned."
}

items.items_slider_dom = (id) => ``

function slider() {
    // "Outputs a signal from [0.0, 10.0], depending on slider position."
}

items.items_chatCommander_dom = (id) => ``

function chatCommander() {
    // "Activates an output when the assigned phrase is in a chat message. Outputs 10.0 if it is the owner, outputs 1.0 if it is a random player."
}

items.items_daylightSensor_dom = (id) => ``

function daylightSensor() {
    // "Outputs a number from [0, 24), depending on current time of day."
}

items.items_proximity_dom = (id) => ``

function proximity() {
    // "Outputs a signal if a player is within 15 studs. Outputs 10.0 if the player is the owner, 5.0 if the player is trusted, 1.0 if the player is untrusted."
}

items.items_weatherSensor_dom = (id) => ``

function weatherSensor() {
    // "Outputs a signal [1,6]. 1 for sunny, 2 for cloudy, 3 for rain, 4 for thunderstorm, 5 for aurora borealis, and 6 for the rare falling star event."
}

items.items_numberInterface_dom = (id) => `
<div id="${id}" class="block items_numberInterface interactable">
    <img src="objects/items_numberInterface/items_numberInterface.png" alt="AND" class="udg" style="max-block-size: 75px;">

<!--    <p class="udg interfaceInput" style="font-size: 30px; font-weight: bold">> SCHEMA NAME <</p>-->

    <div class="outputs">
        <div id="${id}-0" class="wire-clickzone wire-out wire-interaction" style="transform: translate(0px,0px)" data-stored-value="x"></div>
    </div>
</div>
`

function numberInterface(field1, out1) {

}

// Gates

items.items_and_dom = (id) => `
<div id="${id}" class="block items_and">
    <img src="objects/items_and/items_and.png" alt="AND" class="udg">
    <div class="inputs">
        <div id="${id}-1" class="wire-clickzone wire-in" style="transform: translate(0px,0px)" data-linked-wiring-parent="x"></div>
        <div id="${id}-2" class="wire-clickzone wire-in" style="transform: translate(0px,0px)" data-linked-wiring-parent="x"></div>
    </div>

    <div class="outputs">
        <div id="${id}-3" class="wire-clickzone wire-out" style="transform: translate(0px,0px)" data-stored-value="0"></div>
    </div>
</div>
`

function and(inp1, inp2, out1) {
    // "Activates an output of the two inputs when the two inputs are greater than 0.0 and are equal to each other"
}

items.items_not_dom = (id) => ``

function not() {
    // "Activates an output of 0.0 when the input is greater than 0.0, otherwise it will output 10.0."
}

items.items_or_dom = (id) => ``

function or() {
    // "Activates the highest output of the two inputs."
}

items.items_xor_dom = (id) => ``

function xor() {
    // "Outputs the binary equivalent of an XOR operation on each bit. Since every input is 10.0, a normal XOR binary truth table will work."
}

items.items_xand_dom = (id) => ``

function xand() {
    // "Similar to the AND gate, however, it will output 10.0 when both inputs are equal to 0.0"
}

items.items_greaterThan_dom = (id) => ``

function greaterThan() {
    // "Will output the left signal if the left signal is greater than the right signal."
}

// Processors

items.items_calculator_dom = (id) => ``

function calculator() {
    // "Applies math equations to the two inputted signals. Addition, Subtraction, Multiplication, Division, and Exponentiation."
}

items.items_sustainer_dom = (id) => ``

function sustainer() {
    // "Holds an input signal for the set time."
}

items.items_incrementer_dom = (id) => ``

function incrementer() {
    // "The left input allows you to increase the output value by Input / 10.0. The right input resets the output value."
}

items.items_relay_dom = (id) => ``

function relay() {
    // "When the right input is higher than 0.0, the output will be the left input value."
}

items.items_blocker_dom = (id) => ``

function blocker() {
    // "When the inputted signal on the right is 0.0, the inputted signal on the left will be outputted."
}

items.items_delay_dom = (id) => ``

function delay() {
    // "Outputs the input value after the set time has passed."
}

items.items_frequency_dom = (id) => ``

function frequency() {
    // "Outputs the input value at an interval of the set time."
}

items.items_hertzClock_dom = (id) => ``

function hertzClock() {
    // "Activates sequentially at the provided frequency in Hertz (Hz)."
}

items.items_zeroTick_dom = (id) => ``

function zeroTick() {
    // "Outputs the inputted signal for a 0.1 seconds."
}

items.items_randomiser_dom = (id) => ``

function randomiser() {
    // "Outputs a random signal between [0, Input Value]."
}

items.items_signalLock_dom = (id) => ``

function signalLock() {
    // "When the right input is powered on, the left input is allowed to store a signal for the output. If the left input power is lost, and the right power input is still active, the left input value will remain."
}

items.items_tFlipFlop_dom = (id) => ``

function tFlipFlop() {
    // "Toggles between an on and off signal, similar to a switch. Any input greater than 0.0 will toggle it."
}

items.items_numberSplitter_dom = (id) => ``

function numberSplitter() {
    // "An invention by Gustav. Splits the input into single digits for each power of ten, with the 5th output serving as excess for any remainder."
}

items.items_numberCombiner_dom = (id) => ``

function numberCombiner() {
    // "Combines up to 5 inputs into a single output, with each input being multiplied by a factor corresponding to its position: Input 1 by 1, Input 2 by 10, Input 3 by 100, Input 4 by 1000, and Input 5 by 10000."
}

items.items_binaryInput_dom = (id) => ``

function binaryInput() {
    // "Takes in up to 5 bits of binary, and will output it as a linear signal."
}

items.items_binaryOutput_dom = (id) => ``

function binaryOutput() {
    // "Takes in a linear signal, and will output it up to 5 bits of binary."
}

// Components

items.items_transmitter_dom = (id) => ``

function transmitter() {
    // "Wirelessly sends the inputted signal to a Receiver depending on the assigned keyphrase."
}

items.items_receiver_dom = (id) => ``

function receiver() {
    // "Wirelessly obtains a signal from a Transmitter and outputs the signal based on the assigned keyphrase."
}

items.items_memoryCell_dom = (id) => ``

function memoryCell() {
    // "Holds the inputted signal provided in the left input. The right input is able to reset the output."
}

items.items_tether_dom = (id) => ``

function tether() {
    // "A way to organize your wires, acts as a passthrough."
}

// Lasers

items.items_redLaser_dom = (id) => ``

function redLaser() {
    // "Outputs a signal of 10.0 if it hits an object, a signal of 5.0 if it hits a player. Reflects off of privacy glass up to 5 times."
}

items.items_materialLaser_dom = (id) => ``

function materialLaser() {
    // "Assign a material to the laser by touching the material onto the schematic input. When the laser hits a material, it will output a signal of 10.0"
}

items.items_laserReceiver_dom = (id) => ``

function laserReceiver() {
    // "Will activate an output of 10.0 when a laser hits the receiver."
}

// Misc

items.items_interactor_dom = (id) => ``

function interactor() {
    // "Interacts with objects or structures within the world. Requires permissions from the user."
}

items.items_collider_dom = (id) => ``

function collider() {
    // "Enables and disables collisions with filled schematics, privacy glass, vehicle/trailer pads, and spawn pads within the world."
}

items.items_ownershipManager_dom = (id) => ``

function ownershipManager() {
    // "Allows you to clear & transfer ownership of items! Providing a power input of 10.0 will clear the ownership of items, and providing a user id will transfer the ownership to that player. This only works on items that you own!"
}

items.items_speaker_dom = (id) => ``

function speaker() {
    // "Sends out a chat message & chat bubble when powered! The chat message only shows to people who are friended to you. Using the {num} keyword will format it to be the number input. If you use the {display_name} keyword, and provide a user id of a player, it will display their name. RichText is supported!"
}

items.items_donator_dom = (id) => ``

function donator() {
    // "Allows players to donate to you for a fixed amount! Outputs their user id as a signal upon donation. An interaction can change the donation amount!"
}

items.items_lcd_dom = (id) => ``

function lcd() {
    // "A resizeable array of toggleable lights with logic. When input numbers surpass 10.0, the colors of the rainbow start to appear."
}

items.items_bulbPoweredLights_dom = (id) => ``

function bulbPoweredLights() {
    // "A resizeable array of toggleable lights with logic. When input numbers surpass 10.0, the colors of the rainbow start to appear."
}

items.items_electronicBillboard_dom = (id) => ``

function electronicBillboard() {
    // "Displays an image depending on what the input signal is. The signal input has to be a Roblox Image ID. An easy way to input this number is with a number interface."
}

items.items_sevenSegmentDisplay_dom = (id) => ``

function sevenSegmentDisplay() {
    // "Allows you to display numbers. Bottom middle input allows you to provide a number input to display. Bottom left input allows you to provide a color. Top middle input is a passthrough for the number input. Optionally, you can individually activate every segment."
}

items.items_fourteenSegmentDisplay_dom = (id) => ``

function fourteenSegmentDisplay() {
    // "Allows you to display numbers. Bottom middle input allows you to provide a number input to display. Bottom left input allows you to provide a color. Top middle input is a passthrough for the number input. Optionally, you can individually activate every segment."
}

items.items_musicNote_dom = (id) => ``

function musicNote() {
    // "Plays different notes depending on the input signal. Can change music type by interacting."
}

items.items_securityCameraDisplay_dom = (id) => ``

function securityCameraDisplay() {
    // "A display made for rendering cameras! Must be toggled on by the user."
}

items.items_atmosphereController_dom = (id) => ``

function atmosphereController() {
    // "Allows you to change the Atmosphere's properties on your plot. From left to right, inputs 1-3 correspond to Red, Green and Blue RGB values (0-255). Input 4,5 and 6 correspond to Density(0-1), Glare(0-10) and Haze(0-10)."
}

items.items_hsvToRgbConverter_dom = (id) => ``

function hsvToRgbConverter() {
    // "Takes in logic value of H[0,360], S[0,100], V[0,100] (representing Hue, Saturation, and Value) and outputs converted values of R,G,B [0, 255] for the RGB color space. Best applicable for the Atmosphere Controller"
}