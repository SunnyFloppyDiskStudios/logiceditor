// this script is for all the connections and is the script that makes all the logic function

/* notes space

when the wires are connected we need to store those connections.. somewhere. and link it to the wires so when they get cut or something things happen or something like that i guess

this script makes me want to EXPLODE

if id 1-3 connects with 2-2 then it creates a variable with

every tick we start from a starter node (output exclusive) and we continute down a path of connections each node stores the things its connected to


id : connections it outputs to
[[1:[1-2,4-5]], [2:[3-4,6-1]]]

const connections = {
    "1-3": ["2-2", "5-1"],
    "2-2": ["7-1"]
};

and then keep following the path until the end??????????????????????????

 */

window.logic = {
    connections: undefined
}

// logic.connections = {
//     "":[""]
// }