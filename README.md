### array.onempty(fn)

Enable call of callback function to empty arrays

# Simple example:

    <script type="txt/javascript src="/path/to/libs/array.onempty.js" ></script>

||

    require('array.onempty);

and then

    [1,2,3,4,5].map(function(item) {return item > 10 }) //this should return an empty list
    .onEmpty(function() {
       console.log('Ey! This is an empty list');
    });


    [].onEmpty(function(empty) {
      empty.push(1) //returning an array : [1]
     }).onEmpty(function() {
         //now this won't be invoked
     });

## Build code
    npm install

## Test code
    npm test

## Publish

    npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease]

    git push --follow-tags

    npm publish

