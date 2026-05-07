/*
notes space

script that manages all the connections

each "node" gets a random UUID i guess and allat connects together but inside each unique script the uuids are linked towards inputs/outputs

 */

var clickZones = document.getElementsByClassName("wire-clickzone");

function createWire(e) {
    console.log(e.currentTarget);
}

for (var i = 0; i < clickZones.length; i++) {
    clickZones[i].addEventListener('click', createWire, false);
}
