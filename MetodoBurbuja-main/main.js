// Función de ordenamiento burbuja que también guarda los pasos
function burbuja(arr) {
    const pasos = [];
    const longitud = arr.length;
    let ordenado = false;
    for (let i = 0; i < longitud; i++) {
        ordenado = true;
        for (let j = 0; j < longitud - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                ordenado = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Intercambio
            }
        }
        pasos.push(`Pasada ${i + 1}: [${arr.join(', ')}]`);  // Guarda el estado del arreglo después de cada pasada
        if (ordenado) break;  // Termina si ya está ordenado
    }
    return pasos;
}

// Arreglos para ordenar
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const arr3 = [2, 1, 3, 4, 5, 6, 7, 8, 9, 10];
const arr4 = ["zacarias", "rodriguez", "Martinez", "Rodriguez", "Zacarias", "albarez"];

// Obtener los pasos de cada arreglo
const pasos1 = burbuja([...arr1]);
const pasos2 = burbuja([...arr2]);
const pasos3 = burbuja([...arr3]);
const pasos4 = burbuja([...arr4]);

// Mostrar los pasos en cada sección de pestaña
document.getElementById('result1').innerText = pasos1.join('\n');
document.getElementById('result2').innerText = pasos2.join('\n');
document.getElementById('result3').innerText = pasos3.join('\n');
document.getElementById('result4').innerText = pasos4.join('\n');

// Función para alternar entre pestañas
function showTab(tabNumber) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    tabs.forEach((tab, index) => {
        tab.classList.toggle('active', index === tabNumber - 1);
    });
    buttons.forEach((button, index) => {
        button.classList.toggle('active', index === tabNumber - 1);
    });
}
