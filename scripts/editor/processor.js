console.log("processor.js")

// each tick every machine (logic box) runs
// 1. check inputs (output nodes of connected machines)
// 2. process inputs
// 3. set output nodes to respective processed results
// Each machine runs every tick

// logic box = machine
// input/out = node

let machines = [] // list of machines

function addMachine(type, object) {
    let mType = type.toString();
    mType = mType.replace("items_", "");

    const machine = {
        operation: mType,
        object: object
    }

    machines.push(machine);
}

function processLoop() {
    for (let machine of machines) {
        // check object inputs
        // check each input for a valid linked wire (see if wire is linked, if linked, is the wire existing?)
        // grab outputs of links (if exist)
        // process
        // set output of machine to processed input


        // how to optimise/!?!?!?!?!??!?!?!?!??!?!
    }
}


// MACHINE
// INPUT - connected wiringParent id = x
// OUTPUT - stored processed value = 100

// wiring parent has data-linked-output = x (linked output node id)

// input node stores connected output node ID (ANDGATEMACHINEid=500output=5 -------- ANDGATEMACHINEinput1=500 (stored ID)
// wire stores connected input that its connected to
// when wire is deleted it sends a signal to the inputslot saying it got deleted
// then it unlinks the output
// stored id's value is queried every frame

// when a machine is deleted, it deletes the wire, which in turn should delete the link.