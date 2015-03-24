###Array.onEmpty(fn)

Shim to make able to execute a function if the array is empty


#Simple example


# Simple example:

    <script type="txt/javascript src="/path/to/libs/array.onempty.js" ></script>

||

    require('array.onempty);

and then

    [1,2,3,4,5].map(function(item) {return item > 10 }) //this should return an empty list
    .onEmpty(function() {
       console.log('Ey! This is an empty list');
    });



## Build code
    npm install

## Test code
    npm test


