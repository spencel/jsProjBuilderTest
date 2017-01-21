// myNamespace Module (Abstract Class simulated as a Module)
var myNamespace = {};

// Global Variables (Static (aka Class) Properties)
/*public*/ myNamespace.myPublicVariable = "myNamespace.myPublicVariable";

/*private*/ myNamespace.myPrivateVariable = "myNamespace.myPrivateVariable";
// End Global Variables 

// Global Functions (Static (aka Class) Methods) (organize methods by function and relationship)
function myPublicFunction() {
	
}
/*public*/ myNamespace.myPublicFunction = function() {

	console.log( "myNamespace.myPublicFunction" );

	console.log( myNamespace.myPrivateVariable );

	myNamespace.myPrivateFunction();

}

/*private*/ myNamespace.myPrivateFunction = function() {

	console.log( "myNamespace.myPrivateFunction" );

}
// End Global Functions

// End Module