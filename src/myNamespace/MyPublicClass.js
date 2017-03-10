// MyPublicClass Class
public class MyPublicClass{}

// Static Properties (Static (aka Class) Properties)
static var myStaticProperty = "myNamespace.MyPublicClass.myStaticProperty";
// End Static Properties

// Constructor
constructor function MyPublicClass() {

	instance var myInstanceProperty = "myNamespace.MyPublicClass.myInstanceProperty";

}
// End Constructor

// Methods (organize methods by Method and relationship)
static function myStaticMethod = function() {

	console.log( "myNamespace.MyPublicClass.myStaticMethod" );

}

instance function myInstanceMethod = function() {

	console.log( "myNamespace.MyPublicClass.myInstanceMethod" );

}

// A Public Class can expose a Private Class
static function getMyPrivateClass = function() {

	return MyPrivateClass;

}

// A Public Class can create Instances of a Private Classes
static function newMyPrivateClass = function() {

	return new MyPrivateClass();

}
// End Methods

// End Class