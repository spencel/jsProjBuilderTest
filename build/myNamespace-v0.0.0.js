// myNamespace Module (Abstract Class simulated as a Module)
var myNamespace = (function() {

// Global Variables (Static (aka Class) Properties)
/*public*/ var myPublicVariable = "myPublicVariable";

/*private*/ var myPrivateVariable = "myPrivateVariable";
// End Global Variables 

// Global Functions (Static (aka Class) Methods) (organize methods by function and relationship)
function myPublicFunction() {
	
}
/*public*/ function myPublicFunction() {

	console.log( "myPublicFunction" );

	console.log( myPrivateVariable );

	myPrivateFunction();

}

/*private*/ function myPrivateFunction() {

	console.log( "myPrivateFunction" );

}
// End Global Functions

// End Module
// Expose Public Members
return {

myPublicVariable: myPublicVariable,

myPublicFunction: myPublicFunction

}

}());