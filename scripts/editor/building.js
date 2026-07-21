// script for "build mode" which is the normal mode wheere you can place gates onto the editor
console.log("building.js");

// vars
window.building = {
    lastGivenID: 0, // ID SYSTEM is OBJECT - IO i.e. AND is "1", wirespots are "1-1" "1-2" "1-3". Increments when new objects are created
    buildMode: false
}

const canvas = document.getElementById("canvas");

// get all sidebar items (does not need to be updated live)
const items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', buildMachine, false);
}

// preload
window.addEventListener("load", () => {
    history.scrollRestoration = "manual";
    window.scrollTo(document.documentElement.scrollWidth / 2, document.documentElement.scrollHeight / 2);
})


// building
function buildMachine(e) {
    if (!wiring.wiringMode && !building.buildMode) {
        let rotation = 0;

        const i = e.currentTarget.id;
        console.log(i);

        building.lastGivenID++;
        
        const machine = document.createElement("div");
        machine.innerHTML = items[`${i}_dom`](building.lastGivenID);
        canvas.appendChild(machine);

        const machineRect = machine.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();

        document.addEventListener("pointermove", trackSpot);
        trackSpot(e);
        function trackSpot(e) {
            // position
            machine.style.transform = `translate(${e.clientX - canvasRect.left - machineRect.x}px, ${e.clientY - canvasRect.top - machineRect.y}px)`;
            machine.style.pointerEvents = "none";
        }

        // rotation
        document.addEventListener("keydown", rotateObject)
        function rotateObject(e) {
            if (e.key === "r") {
                rotation = (rotation + 90) % 360;
                machine.style.rotate = `${rotation}deg`;
            }
        }

        setTimeout(() => { document.addEventListener('click', finishBuild, { once: true }); }, 0);
        function finishBuild(e) {
            if (e.target.parentElement.classList.contains("block") || e.target.classList.contains("wire-clickzone")) {
                // do nothing! (unironically does something)
                setTimeout(() => { document.addEventListener('click', finishBuild, { once: true }); }, 0);
            } else if (e.target.classList.contains("sidebar") || e.target.classList.contains("item") || e.target.parentElement.classList.contains("items-search")) {
                // destroy
                document.removeEventListener("pointermove", trackSpot);
                document.removeEventListener("keydown", rotateObject);
                machine.remove();
                building.buildMode = false;
            } else {
                // place block
                document.removeEventListener("pointermove", trackSpot);
                document.removeEventListener("keydown", rotateObject);
                building.buildMode = false;

                machine.style.pointerEvents = "initial";

                addClickZones();
                addMachine(i, machine);
            }

            document.removeEventListener("click", finishBuild);
        }
    }
}

// 10k x 10k canvas size
// clipping mask to revela canvas
// canvas is pannable

// wiring gets its own parent instead of being parented to the machine. teh wire head positions get calculated or whatever. idk.