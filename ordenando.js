function bubbleSort() {
    var input = document.getElementById('inputArray').value;
    var array = input.split(',').map(Number);

    var len = array.length;
    var swapped;

    do {
        swapped = false;
        for (var i = 0; i < len - 1; i++) {
            if (array[i] > array[i + 1]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    document.getElementById('output').innerHTML = array.join(', ');
}


function quickSort() {
    var input = document.getElementById('inputArray').value;
    var array = input.split(',').map(Number);

    quickSortRecursive(array, 0, array.length - 1);

    document.getElementById('output').innerHTML = array.join(', ');
}

function quickSortRecursive(array, low, high) {
    if (low < high) {
        var pivotIndex = partition(array, low, high);
        quickSortRecursive(array, low, pivotIndex - 1);
        quickSortRecursive(array, pivotIndex + 1, high);
    }
}

function partition(array, low, high) {
    var pivot = array[high];
    var i = low - 1;

    for (var j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, high);
    return i + 1;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


function selectionSort() {
    var input = document.getElementById('inputArray').value;
    var array = input.split(',').map(Number);

    var len = array.length;

    for (var i = 0; i < len - 1; i++) {
        var minIndex = i;

        for (var j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }

    document.getElementById('output').innerHTML = array.join(', ');
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


function shuffleArray() {
    var input = document.getElementById('inputArray').value;
    var array = input.split(',').map(Number);

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    document.getElementById('output').innerHTML = array.join(', ');
}


function partitionArray() {
    var input = document.getElementById('inputArray').value;
    var array = input.split(',').map(Number);

    var pivotIndex = partition(array, 0, array.length - 1);

    document.getElementById('output').innerHTML = "Array particionado: " + array.join(', ');
    document.getElementById('output').innerHTML += "<br>Pivô: " + array[pivotIndex];
    document.getElementById('output').innerHTML += "<br>Posição do pivô: " + pivotIndex;
}

function partition(array, low, high) {
    var pivot = array[high];
    var i = low - 1;

    for (var j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, high);
    return i + 1;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
