// Bubble sort is the most basic way to sort a collection. It works by 
// sequentially going through your array and comparing two values at a time, 
// swapping them if necessary. It then repeats the process until no swaps 
// are required.

// Characteristics
// Like bubble sorts, insertion sorts is efficient for an already sorted or 
// nearly sorted collection. Insertion sort will always be at least as 
// efficient as a bubble sort.



var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
 
function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
 
bubbleSort(a);
console.log(a);