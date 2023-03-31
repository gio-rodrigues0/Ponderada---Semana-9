function newPosition() {
    var x = document.getElementById("inputX").value;
    var y = document.getElementById("inputY").value;
    var z = document.getElementById("inputZ").value;
    var j1 = document.getElementById("inputJ1").value;
    var j2 = document.getElementById("inputJ2").value;
    var j3 = document.getElementById("inputJ3").value;

    console.log({
        x: x,
        y: y,
        z: z,
        j1: j1,
        j2: j2,
        j3: j3
    })

    fetch("https:/localhost:5000/newPosition", {
        method: "POST",
        body: JSON.stringify({
            x: x,
            y: y,
            z: z,
            j1: j1,
            j2: j2,
            j3: j3
        }),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    .then(response => response.json())

    .then(json => console.log(json));
};