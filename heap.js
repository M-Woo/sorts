



function heapSort(arr){
  var len = arr.length,
      end = len-1;

  heapify(arr, len);
  
  while(end > 0){
   swap(arr, end--, 0);
   siftDown(arr, 0, end);
  }
  return arr;
}
   



function heapify(arr, len){
   // break the array into root + two sides, to create tree (heap)
   var mid = Math.floor((len-2)/2);
   while(mid >= 0){
    siftDown(arr, mid--, len-1);    
  }
}


function siftDown(arr, start, end){
   var root = start,
       child = root*2 + 1,
       toSwap = root;
   while(child <= end){
      if(arr[toSwap] < arr[child]){
        swap(arr, toSwap, child);
      }
      if(child+1 <= end && arr[toSwap] < arr[child+1]){
        swap(arr, toSwap, child+1)
      }
      if(toSwap != root){
         swap(arr, root, toSwap);
         root = toSwap;
      }
      else{
         return; 
      }
      toSwap = root;
      child = root*2+1
  }
}


function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


//====================================================


var a = [ 9, 10, 2, 1, 5, 4, 3, 6, 8, 7, 13 ];

function swap(a, i, j) {
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}

function max_heapify(a, i, length) {
    while (true) {
        var left = i*2 + 1;
        var right = i*2 + 2;
        var largest = i;

        if (left < length && a[left] > a[largest]) {
            largest = left;
        }

        if (right < length && a[right] > a[largest]) {
            largest = right;
        }

        if (i == largest) {
            break;
        }

        swap(a, i, largest);
        i = largest;
    }
}

function heapify(a, length) {
    for (var i = Math.floor(length/2); i >= 0; i--) {
        max_heapify(a, i, length);
    }
}

function heapsort(a) {
    heapify(a, a.length);

    for (var i = a.length - 1; i > 0; i--) {
        swap(a, i, 0);

        max_heapify(a, 0, i-1);
    }
}

heapsort(a);
   