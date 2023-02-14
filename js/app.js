const bottone = document.getElementById("btn");

bottone.addEventListener(
    'click',

    function () {
        const griglia = document.getElementById("grid");
        generagriglia(griglia);
    }
)




function generagriglia(grid) {
    grid.InnerHTML = "";

    for (let i = 0; i < 100; i++) {

        const box = document.createElement("div");
        box.classList.add("square");
        box.append(i + 1);

        box.addEventListener(
            'click',

            function () {
                this.classList.toggle("active")
                console.log(i + 1)
            }
        )

        grid.append(box);
    }

}