// script for "build mode" which is the normal mode wheere you can place gates onto the editor
console.log("building.js");

// vars
window.building = {
    lastGivenID: 2, // ID SYSTEM is OBJECT - IO i.e. AND is "1", wirespots are "1-1" "1-2" "1-3". Increments when new objects are created
    buildMode: false
}

const canvas = document.getElementById("canvas");

// get all sidebar items (does not need to be updated live)
const items = document.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', buildNode, false);
}

// building
function buildNode(e) {
    if (!wiring.wiringMode && !building.buildMode) {
        const i = e.currentTarget.id;
        console.log(i);

        building.lastGivenID++;
        
        const node = document.createElement("div");
        node.innerHTML = items[`${i}_dom`](building.lastGivenID);
        canvas.appendChild(node);

        const nodeRect = node.getBoundingClientRect();

        document.addEventListener("pointermove", trackSpot)
        function trackSpot(e) {
            // position
            node.style.transform = `translate(${e.clientX - 35 - nodeRect.x - 7}px, ${e.clientY - 35 - nodeRect.y - 17}px)`;
            node.style.pointerEvents = "none";

            // rotation
            // ADD ROTATION < !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        }

        setTimeout(() => { document.addEventListener('click', finishBuild, { once: true }); }, 0);
        function finishBuild(e) {
            if (e.target.classList.contains("block")) {
                // do nothing! (unironically does something)
                setTimeout(() => { document.addEventListener('click', finishBuild, { once: true }); }, 0);
            } else if (e.target.classList.contains("sidebar") || e.target.classList.contains("item")) {
                // destroy
                document.removeEventListener("pointermove", trackSpot);
                node.remove();
                building.buildMode = false;
            } else {
                // place block
                document.removeEventListener("pointermove", trackSpot);
                building.buildMode = false;

                node.style.pointerEvents = "initial";

                addClickZones();
            }

            document.removeEventListener("click", finishBuild);
        }
    }
}

