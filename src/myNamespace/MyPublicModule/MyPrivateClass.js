// MyPrivateClass Class
private class MyPrivateClass{}

// Static Properties (Static (aka Class) Properties)
static var myStaticProperty = "myNamespace.MyPublicModule.MyPrivateClass.myStaticProperty";
// End Static Properties

// Constructor
constructor function MyPrivateClass() {

	instance var myInstanceProperty = "myNamespace.MyPublicModule.MyPrivateClass.myInstanceProperty";

}
// End Constructor

// Methods (organize methods by Method and relationship)
static function myStaticMethod = function() {

	console.log( "myNamespace.MyPublicModule.MyPrivateClass.myStaticMethod" );

}

instance function myInstanceMethod = function() {

	console.log( "myNamespace.MyPublicModule.MyPrivateClass.myInstanceMethod" );

}
// End Methods

// End Class