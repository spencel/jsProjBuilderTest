/*public module*/ var  myNamespace = (function() {

// Global Variables (Static (aka Class) Properties)
/*public*/ var myPublicVariable = "myNamespace.myPublicVariable";

/*private*/ var myPrivateVariable = "myNamespace.myPrivateVariable";
// End Global Variables 

// Global Functions (Static (aka Class) Methods) (organize methods by function and relationship)
/*public*/ function myPublicFunction() {

	console.log( "myNamespace.myPublicFunction" );

	console.log( myPrivateVariable );

	myPrivateFunction();

}

/*private*/ function myPrivateFunction() {

	console.log( "myNamespace.myPrivateFunction" );

}
// End Global Functions

// End Module

// ../../src/myNamespace/MyPrivateClass.js
// MyPrivateClass Class
/*private class MyPrivateClass{}*/
// Static Properties (Static (aka Class) Properties)
MyPrivateClass.myStaticProperty = "myNamespace.MyPrivateClass.myStaticProperty";
// End Static Properties

// Constructor
/*constructor*/ function MyPrivateClass() {

	this.myInstanceProperty = "myNamespace.MyPrivateClass.myInstanceProperty";

}
// End Constructor

// Methods (organize methods by Method and relationship)
MyPrivateClass.myStaticMethod = function() {

	console.log( "myNamespace.MyPrivateClass.myStaticMethod" );

}

MyPrivateClass.prototype.myInstanceMethod = function() {

	console.log( "myNamespace.MyPrivateClass.myInstanceMethod" );

}
// End Methods

// End Class

// ../../src/myNamespace/MyPublicClass.js
// MyPublicClass Class
/*public class MyPublicClass{}*/
// Static Properties (Static (aka Class) Properties)
MyPublicClass.myStaticProperty = "myNamespace.MyPublicClass.myStaticProperty";
// End Static Properties

// Constructor
/*constructor*/ function MyPublicClass() {

	this.myInstanceProperty = "myNamespace.MyPublicClass.myInstanceProperty";

}
// End Constructor

// Methods (organize methods by Method and relationship)
MyPublicClass.myStaticMethod = function() {

	console.log( "myNamespace.MyPublicClass.myStaticMethod" );

}

MyPublicClass.prototype.myInstanceMethod = function() {

	console.log( "myNamespace.MyPublicClass.myInstanceMethod" );

}

// A Public Class can expose a Private Class
MyPublicClass.getMyPrivateClass = function() {

	return MyPrivateClass;

}

// A Public Class can create Instances of a Private Classes
MyPublicClass.newMyPrivateClass = function() {

	return new MyPrivateClass();

}
// End Methods

// End Class

// ../../src/myNamespace/MyPublicModule.js
// MyPublicModule Module (Abstract Class simulated as a Module)
/*public module*/ var  MyPublicModule = (function() {

// Global Variables (Static (aka Class) Properties)
/*public*/ var myPublicVariable = "myNamespace.MyPublicModule.myPublicVariable";

/*private*/ var myPrivateVariable = "myNamespace.MyPublicModule.myPrivateVariable";
// End Global Variables 

// Global Functions (Static (aka Class) Methods) (organize methods by function and relationship)
/*public*/ function myPublicFunction() {

	console.log( "myNamespace.MyPublicModule.myPublicFunction" );

	console.log( myPrivateVariable ); 

	myPrivateFunction();

}

/*private*/ function myPrivateFunction() {

	console.log( "myNamespace.MyPublicModule.myPrivateFunction" );

}
// End Global Functions

// End Module

// ../../src/myNamespace/MyPublicModule/MyPrivateClass.js
// MyPrivateClass Class
/*private class MyPrivateClass{}*/
// Static Properties (Static (aka Class) Properties)
MyPrivateClass.myStaticProperty = "myNamespace.MyPublicModule.MyPrivateClass.myStaticProperty";
// End Static Properties

// Constructor
/*constructor*/ function MyPrivateClass() {

	this.myInstanceProperty = "myNamespace.MyPublicModule.MyPrivateClass.myInstanceProperty";

}
// End Constructor

// Methods (organize methods by Method and relationship)
MyPrivateClass.myStaticMethod = function() {

	console.log( "myNamespace.MyPublicModule.MyPrivateClass.myStaticMethod" );

}

MyPrivateClass.prototype.myInstanceMethod = function() {

	console.log( "myNamespace.MyPublicModule.MyPrivateClass.myInstanceMethod" );

}
// End Methods

// End Class

// ../../src/myNamespace/MyPublicModule/MyPublicClass.js
// MyPublicClass Class
/*public class MyPublicClass{}*/
// Static Properties (Static (aka Class) Properties)
MyPublicClass.myStaticProperty = "myNamespace.MyPublicModule.MyPublicClass.myStaticProperty";
// End Static Properties

// Constructor
/*constructor*/ function MyPublicClass() {

	this.myInstanceProperty = "myNamespace.MyPublicModule.MyPublicClass.myInstanceProperty";

}
// End Constructor

// Methods (organize methods by Method and relationship)
MyPublicClass.myStaticMethod = function() {

	console.log( "myNamespace.MyPublicModule.MyPublicClass.myStaticMethod" );

}

MyPublicClass.prototype.myInstanceMethod = function() {

	console.log( "myNamespace.MyPublicModule.MyPublicClass.myInstanceMethod" );

}

// A Public Class can expose a Private Class
MyPublicClass.getMyPrivateClass = function() {

	return MyPrivateClass;

}

// A Public Class can create Instances of a Private Classes
MyPublicClass.newMyPrivateClass = function() {

	return new MyPrivateClass();

}
// End Methods

// End Class
// Expose Public Members
return {

myPublicVariable: myPublicVariable,

myPublicFunction: myPublicFunction,

MyPublicClass: MyPublicClass

}

}());
// Expose Public Members
return {

myPublicVariable: myPublicVariable,

myPublicFunction: myPublicFunction,

MyPublicClass: MyPublicClass,

MyPublicModule: MyPublicModule

}

}());