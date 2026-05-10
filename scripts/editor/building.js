// script for "build mode" which is the normal mode wheere you can place gates onto the editor

window.building = {
    lastGivenID: 2 // ID SYSTEM is OBJECT - IO i.e. AND is "1", wirespots are "1-1" "1-2" "1-3". Increments when new objects are created
}

let lastGivenID = building.lastGivenID;