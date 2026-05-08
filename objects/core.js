/* notes space

when the wires are connected we need to store those connections.. somewhere. and link it to the wires so when they get cut or something things happen or something like that i guess

this script makes me want to EXPLODE

 */


// global variables
var wiringMode;
var lastGivenID = 2; // ID SYSTEM is OBJECT - IO i.e. AND is "1", wirespots are "1-1" "1-2" "1-3". Increments when new objects are created

// initialise click zones (does not cover new objects fix later)
var clickZones = document.getElementsByClassName("wire-clickzone");

for (var i = 0; i < clickZones.length; i++) {
    clickZones[i].addEventListener('click', createWire, false);
}

// wire creation
function createWire(e) {
    if (e.target.classList.contains("wire-out") && !wiringMode) {
        console.log(e.currentTarget);

        wiringMode = true;

        // initial wire
        const ogHead = document.createElement("div");
        ogHead.className = "wire-head";
        e.currentTarget.appendChild(ogHead);

        appendWire(e.currentTarget, ogHead);

        // when b or right click is pressed, undo a head and start re-editing the wire segment of the previous heda (until none and stop editing)
        // when escape is pressed delete the highestmost parent head and stop editing
    }
}

function appendWire(parent, oHead) {
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

        const x = e.clientX - (oHeadRect.left + oHeadRect.width / 2);
        const y = e.clientY - (oHeadRect.top + oHeadRect.height / 2);

        const dist = Math.hypot(x, y);
        const angle = Math.atan2(y, x) * (180 / Math.PI);

        nWire.style.width = `${dist}px`;
        nWire.style.transform = `rotate(${angle}deg)`;
    }

    // MORE WIRES WEWEEEE ARE EXTENDING THESE WIRES
    setTimeout(() => { document.addEventListener('click', finishWire, { once: true }); }, 0);
    function finishWire(e) {
        console.log("doing something");

        if (e.target.classList.contains("wire-out")) {
            // do nothing! (unironically does something)
            setTimeout(() => { document.addEventListener('click', finishWire, { once: true }); }, 0);
        } else if (e.target.classList.contains("wire-in")) {
            // connect wire to input
            document.removeEventListener("pointermove", trackWire);
            wiringMode = false;
        } else {
            // extende
            document.removeEventListener("pointermove", trackWire);
            appendWire(parent, nHead);
        }

        document.removeEventListener("click", finishWire);
    }
}

// there was once pythagoras theroem here :sob: but i deleted it :sob: because :sob: it was USELESS :sob:
