function firstColorChanged() {
    let newColor = document.getElementById("first").value;
    document.documentElement.style
        .setProperty('--primary-color', newColor);
}

function secondColorChanged() {
    let newColor = document.getElementById("second").value;
    document.documentElement.style
        .setProperty('--secondary-color', newColor);
}