// wiring script for making the wires
// interfaces with processor.js

console.log("wiring.js");

// global variables
window.wiring = {
    wiringMode: undefined,
}

// initialise click zones (does not cover new objects fix later)
let clickZones = document.getElementsByClassName("wire-clickzone");

function addClickZones() {
    for (let i = 0; i < clickZones.length; i++) {
        clickZones[i].removeEventListener('click', createWire, false);
        clickZones = document.getElementsByClassName("wire-clickzone");
        clickZones[i].addEventListener('click', createWire, false);
    }
}

addClickZones();

// wire creation
function createWire(e) {
    if (e.target.classList.contains("wire-out") && !wiring.wiringMode && !building.buildMode) {
        console.log(e.currentTarget);

        wiring.wiringMode = true;

        // initial wire
        const ogHead = document.createElement("div");
        ogHead.className = "wire-head";
        e.currentTarget.appendChild(ogHead);

        appendWire(e.currentTarget, ogHead);

        // when b or right click is pressed, undo a head and start re-editing the wire segment of the previous heda (until none and stop editing)
        // when escape is pressed delete the highestmost parent head and stop editing
        // ADD ESCAPING < !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
}

function appendWire(parent, oHead) {

    console.log(typeof parent)

    const nHead = document.createElement("div");
    nHead.className = "wire-head";
    parent.appendChild(nHead);

    const nWire = document.createElement("div");
    nWire.className = "wire-segment";
    oHead.appendChild(nWire);

    document.addEventListener("pointermove", trackWire);

    const gate = document.getElementById(parent.id.toString().split("-")[0]);
    const gateRect = gate.getBoundingClientRect();

    function trackWire(e) {
        nHead.style.pointerEvents = "none";

        // cursor - canvas - gate - offset
        nHead.style.transform = `translate(${e.clientX - 35 - gateRect.x - 47}px, ${e.clientY - 35 - gateRect.y - 17}px)`;

        // wire
        const oHeadRect = oHead.getBoundingClientRect();
        const nHeadRect = nHead.getBoundingClientRect();

        const x = (nHeadRect.left + nHeadRect.width / 2) - (oHeadRect.left + oHeadRect.width / 2);
        const y = (nHeadRect.top + nHeadRect.height / 2) - (oHeadRect.top + oHeadRect.height / 2);

        const dist = Math.hypot(x, y);
        const angle = Math.atan2(y, x) * (180 / Math.PI);

        nWire.style.width = `${dist + 5}px`;
        nWire.style.transform = `rotate(${angle}deg)`;
    }

    // MORE WIRES WEWEEEE ARE EXTENDING THESE WIRES
    setTimeout(() => { document.addEventListener('click', finishWire, { once: true }); }, 0);
    function finishWire(e) {
        console.log("doing something");

        if (e.target.classList.contains("wire-out") || e.target.id.toString().split("-")[0] === parent.id.toString().split("-")[0]) {
            // do nothing! (unironically does something)
            setTimeout(() => { document.addEventListener('click', finishWire, { once: true }); }, 0);
        } else if (e.target.classList.contains("wire-in")) {
            // connect wire to input
            document.removeEventListener("pointermove", trackWire);
            wiring.wiringMode = false;

            // add to logic.connections < !!!!!!!!!!!!!!!!!!!!!!!!!!!

        } else {
            // extende
            document.removeEventListener("pointermove", trackWire);
            appendWire(parent, nHead);
        }

        document.removeEventListener("click", finishWire);
    }
}
