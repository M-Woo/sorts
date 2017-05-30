var items = [5, 2, 6, 1, 3, 9];

function insertionSort(items) {

    var len     = items.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;                          // index into sorted section

    for (i=1; i < len; i++) {

        // store the current value because it may shift later
        value = items[i];

        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
        for (j=i-1; j >= 0 && items[j] > value; j--) {
            items[j+1] = items[j];
        }

        items[j+1] = value;
    }

    return items;
}


// i = number to be sorted
// j = sorted numbers

// first for loop, i should start at 1. This is to avoid extra code execution

//Insertion sort is a good choice for small or mostly sorted collections.
// it performs well, has littl memory overhead and is simple to understand and impliment. 


// Characteristics
// Like bubble sorts, insertion sorts is efficient for an already sorted or 
// nearly sorted collection. Insertion sort will always be at 
// least as efficient as a bubble sort.