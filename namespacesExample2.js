/** Self-Executing Anonymous Function: Part 2 (Public & Private)
 *
 * We looked at the Self-Executing Anonymous Function earlier as a
 * pattern you could use to keep all your code private. As it turns
 * out, you can actually modify the pattern somewhat so that you
 * can achieve the same benefits of the Revealing Module Pattern.
 * Not only can we achieve public and private properties and
 * methods, but we can also provide an easy way to extend the
 * namespace while keeping the content protected from the global
 * namespace. In addition, the following pattern can protect the
 * $ from conflicting with other JavaScript libraries and also
 * protect undefined from being redefined.
 *
 * Take a look at the following example, and we will walk through
 * the code explaining the key changes to the pattern.  */

//Self-Executing Anonymous Func: Part 2 (Public & Private)
    (function( skillet, $, undefined ) {
        //Private Property
        var isHot = true;

        //Public Property
        skillet.ingredient = 'Bacon Strips';

        //Public Method
        skillet.fry = function() {
            var oliveOil;

            addItem( 'tn Butter nt' );
            addItem( oliveOil );
            console.log( 'Frying ' + skillet.ingredient );
        };

        //Private Method
        function addItem( item ) {
            if ( item !== undefined ) {
                console.log( 'Adding ' + $.trim(item) );
            }
        }

    }( window.skillet = window.skillet || {}, jQuery ));

//Public Properties
console.log( skillet.ingredient ); //Bacon Strips

//Public Methods
skillet.fry(); //Adding Butter & Fraying Bacon Strips

//Adding a Public Property
skillet.quantity = "12";
console.log( skillet.quantity ); //12

//Adding New Functionality to the Skillet
(function( skillet, $, undefined ) {
    //Private Property
    var amountOfGrease = "1 Cup";

    //Public Method
    skillet.toString = function() {
        console.log( skillet.quantity + ' ' +
        skillet.ingredient + ' & ' +
        amountOfGrease + ' of Grease' );
        console.log( isHot ? 'Hot' : 'Cold' );
    };
}( window.skillet = window.skillet || {}, jQuery ));

try {
    //12 Bacon Strips & 1 Cup of Grease
    skillet.toString(); //Throws Exception
} catch( e ) {
    console.log( e.message );
    //isHot is not defined
}
/* You can execute and modify the above code from jsFiddle.
 * First, since we have a Self-Executing Anonymous Function, we can
 * actually provide some parameters to pass to it when it executes.
 * In this case we are passing 2 arguments to the anonymous function.
 *
 * The first argument looks quite strange. What is
 * window.skillet = window.skillet || {} doing? The code checks to
 * see if skillet exists in the global namespace (window). If it
 * does not exist, then window.skillet is assigned an empty object
 * literal. Using this approach we can build a library across
 * JavaScript files. If another script uses the same technique, then
 * it will pass in the existing instance and append logic to it.
 * Inside the Anonymous Function, if we want something to be public,
 * then we append it to the skillet object. Any other properties or
 * methods will be considered private.
 *
 * The second argument passed in jQuery. The benefit of this is that
 * the named parameter is referenced as $, which allows us to refer
 * to jQuery as $ within the Anonymous Function without having to
 * worry that it will conflict with the $ declared in other
 * JavaScript libraries. This is a common practice that you will
 * most likely run across when looking at well written jQuery code.
 *
 * You might notice a 3rd parameter to the Anonymous Function called
 * undefined. Why did we add that parameter and why didn’t we pass an
 * argument to it? In JavaScript, you can unfortunately redefine what
 * undefined means. Imagine that some code somewhere deep in one of
 * your 3rd party libraries redefines undefined to something strange
 * like true. If anywhere in your code you test against undefined,
 * then you code will most likely not behave like you intended. In
 * JavaScript, if you have a parameter that doesn’t have a matching
 * argument, then it’s value is set as undefined. By using this trick,
 * it can save us from the bad code someone wrote to redefine undefined. */