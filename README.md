# express-deployed

1. created folder
        made folder called express-deployed, CD'd into it

2. firebase init hosting
        -Open project on firebase website prior to this
        -select "existing project" 
        -press enter the whole time
        -then rm -rf public/index.html

3. firebase init functions (make sure BLAZE PLAN)
    -will ask Javascript or Typescript, choose Javascript
    -Press Enter until starts installing dependencies on functions folder

4. Install express and cors in functions folder
    cd functions && npm i express cors && cd..
    -then code . to run VS studio

5. Redirect traffic in firebase.json
       - go into firebase.json => add code below after ignore part
        "rewrites": [{
        "source": "**",
      "function": "api"
         }]
        },


6. build express app in functions/index.js

        -change to ES6 by adding "type":"modules" to package.json
        -go to functions folder, then to index.js
            -remove the ESS line and rewrite into ES6 (Look at index.js file for reference)
        -make src folder and dogs.js file inside functions folder (look at dogs.js file for code references)
7. test using  `firebase emulators: start`

8. deploy using `firebase deploy`
