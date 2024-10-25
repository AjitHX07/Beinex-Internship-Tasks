document.addEventListener("DOMContentLoaded", () => {
    const fName = document.getElementById("fname");
    const button = document.getElementById("btn-check");
    const list = document.getElementById("list");

    // Handle button click
    button.addEventListener("click", () => {
        alert("Button clicked!");
    });

    // Handle keypress in input field
    fName.addEventListener("keydown", (event) => {
        console.log(`Key pressed: ${event.key}`);

        // alert(`Key pressed: ${event.key}`)
    });


    // Handle click events for the list using event delegation
    list.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            alert(`You clicked on ${event.target.textContent}`);
        }
    });
});
