//Constant-Time Algorithm
//O(1) — “Order 1”
//On this order, regardless of the complexity (number of items), the time (iterations) is constant.
//You will see this on algorithms that returns an element in an already known position of an array, regardless kind or length.
//Example code:

const getLast = (items) => {
   return items[items.length-1]; 
};

//Example case:

getLast(["a","b","c","d"]);
=> d (1 iteration)
getLast(["a","b","c","d","e","f","g"]);
=> g(1 iteration)




// Linear-Time Algorithm
// O(N) — “Order N”
// In this order, the worst case time (iterations) grows on par with the number of items.
// In other words, for N elements we will require N iterations.
// Example code:

const findIndex = (items, match) => {
   for (let i=0, total=items.length; i < total; i++)
      if (items[i] == match)
         return i;
   return -1;
};

//Example case:

const array= ["a","b","c","d"];
findIndex(array,"a");
=> 0  (1 iteration - best case)
findIndex(array,"d");
=> 3  (4 iterations - worst case)
findIndex(array,"e");
=> -1 (4 iterations - worst case)




// Quadratic-Time Algorithm
// O(N 2 ) — “Order N squared”
// For this kind of order, the worst case time (iterations) is the square of the number of inputs. The time grows exponentially related to the number of inputs.
// Example code:

const buildSquareMatrix = (items) => {
   let matrix= [];
   for (let i=0, total=items.length; i < total; i++){ 
      matrix[i] = [];
      for (let j=0, total=items.length; j < total; j++)
         matrix[i].push(items[j]);
   }
   return matrix;
};

// Example case:

buildSquareMatrix(["a","b","c"]);
=> [
   ["a","b","c"],
   ["a","b","c"],
   ["a","b","c"]
] (9 iterations for 3 elements)




// Logarithmic-Time Algorithm
// O(log n) — “Order log N”
// These are the holy grail of search/sort algorithms, they are usually the most efficient approach when dealing with large collections. Instead of looking through the components one by one, they split the data in chunks and discard a large amount on every iteration, usually the half, or log base 2.
// Assuming we are using a log base 2, we could -ideally- find a specific element in a collection of one million elements using less than 20 iterations, if we scale the size of the collection to a billion we would require only less than 30 iterations.
// With big data being more common every day, it’s easy to see the advantage of this kind of algorithms since the larger the collection, the more relative efficiency they provide.
// The most popular of this algorithms is the Quicksort algorithm, which can be used to find a specific element or sort a list very efficiently. Another popular example of this order is the Merge-Sort algorithm. We will explore these algorithms on future articles.
// Example code:
/**
 *  @method      quickSort
 *  @param       list {json} ['','']
 *  @description orders an array using quicksort
 */ 

 const quickSort = ( list ) => {
    if ( list.length < 2) return list;
    let pivot   = list[0];
    let left    = []; 
    let right   = [];
    for ( let i=1, total=list.length; i<total; i++ ){
       switch ( true ){
          case ( list[i] < pivot ):
             left.push( list[i] );
             break;
          case ( list[i] >= pivot ):
             if( list[i] )
             right.push( list[i] );
             break;
       }
    }
    return [].concat( quickSort( left ), pivot, quickSort( right ));
  };

// Example case:

quickSort( ['q','a','z','w','s','x','e','d','c','r']);
=> ["a", "c", "d", "e", "q", "r", "s", "w", "x", "z"]






