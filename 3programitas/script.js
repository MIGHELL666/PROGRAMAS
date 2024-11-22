function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function bubbleSort() {
    const size = parseInt(document.getElementById("listSize").value);
    const data = document.getElementById("listData").value.split(",").map(Number);
    const order = document.getElementById("sortOrder").value;
    
    if (data.length !== size) {
        alert("List size doesn't match the number of elements provided!");
        return;
    }

    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            if ((order === "asc" && data[j] > data[j + 1]) || 
                (order === "desc" && data[j] < data[j + 1])) {
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }

    document.getElementById("bubbleSortResult").innerHTML = 
        `Sorted array (${order === "asc" ? "Ascending" : "Descending"}): ${data.join(", ")}`;
}

function sortNames() {
    let names = [];
    for (let i = 1; i <= 5; i++) {
        names.push(document.getElementById(`name${i}`).value);
    }
    names.sort();
    let result = names.map(name => `${name} (${name.length} letters)`).join("<br>");
    document.getElementById("nameSortResult").innerHTML = result;
}

function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    }
    document.getElementById("calculatorResult").innerHTML = `Result: ${result}`;
}

// Open the first tab by default
document.getElementsByClassName("tablinks")[0].click();