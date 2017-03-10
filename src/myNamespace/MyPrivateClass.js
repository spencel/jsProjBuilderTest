// MyPrivateClass Class
private class MyPrivateClass{}

// Static Properties (Static (aka Class) Properties)
static var myStaticProperty = "myNamespace.MyPrivateClass.myStaticProperty";
// End Static Properties

// Constructor
constructor function MyPrivateClass() {

	instance var myInstanceProperty = "myNamespace.MyPrivateClass.myInstanceProperty";

}
// End Constructor

// Methods (organize methods by Method and relationship)
static function myStaticMethod = function() {

	console.log( "myNamespace.MyPrivateClass.myStaticMethod" );

}

instance function myInstanceMethod = function() {

	console.log( "myNamespace.MyPrivateClass.myInstanceMethod" );

}
// End Methods

// End Class