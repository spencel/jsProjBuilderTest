// myNamespace Module (Abstract Class simulated as a Module)
public module myNamespace{}

// Global Variables (Static (aka Class) Properties)
public var myPublicVariable = "myNamespace.myPublicVariable";

private var myPrivateVariable = "myNamespace.myPrivateVariable";
// End Global Variables 

// Global Functions (Static (aka Class) Methods) (organize methods by function and relationship)
public function myPublicFunction() {

	console.log( "myNamespace.myPublicFunction" );

	console.log( myPrivateVariable );

	myPrivateFunction();

}

private function myPrivateFunction() {

	console.log( "myNamespace.myPrivateFunction" );

}
// End Global Functions

// End Module