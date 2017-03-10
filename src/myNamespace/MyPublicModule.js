// MyPublicModule Module (Abstract Class simulated as a Module)
public module MyPublicModule{}

// Global Variables (Static (aka Class) Properties)
public var myPublicVariable = "myNamespace.MyPublicModule.myPublicVariable";

private var myPrivateVariable = "myNamespace.MyPublicModule.myPrivateVariable";
// End Global Variables 

// Global Functions (Static (aka Class) Methods) (organize methods by function and relationship)
public function myPublicFunction() {

	console.log( "myNamespace.MyPublicModule.myPublicFunction" );

	console.log( myPrivateVariable ); 

	myPrivateFunction();

}

private function myPrivateFunction() {

	console.log( "myNamespace.MyPublicModule.myPrivateFunction" );

}
// End Global Functions

// End Module