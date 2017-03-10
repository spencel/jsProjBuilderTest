'''
This is a javascript to javascript transcompiler and file concatenator
It utilizes directory and file names to determine dependency?, etc.
E.g.:
nameSpace.js
nameSpace/
	ClassA.js
	ClassB.js
	etc.
	ModuleA.js
	ModuleA/
		ClassA.js
		ClassB.js
		etc.
	ModuleB.js
	ModuleB/
		ClassA.js
		ClassB.js
		etc.
	etc.
The Class names above do not conflict because they are in isolated scopes, namespaces, and modules.
Global variables and functions are coded inside the namespace and module js files.
'''
import io
import os

# Info and moduleName

sourceDirectory = "../../src/"
buildDirectory = "../../build/"
moduleName = "myNamespace"
buildFileName = "myNamespace-v0.0.0.js"
keywords = {
	"public": "public",
	"private": "private"
}

with io.open( buildDirectory + buildFileName, "w", encoding="utf-8" ) as buildFile:
	with io.open( sourceDirectory + moduleName + ".js", "r", encoding="utf-8" ) as file:
		publicMembers = []
		for line in file:

			# If line is module opener
			if line.find( "var " + moduleName + " = {};" ) > -1:
				line = "var " + moduleName + " = (function() {\n"
				print( line )

			# If line is public member opener
			publicKeyword = keywords[ "public" ]
			if line.find( publicKeyword ) > -1:

				# If public function/method
				if line.find( " = function(" ) > -1:
					memberNameStartIndex = len( publicKeyword ) + 1 # space sensitive must be 1 space between keyword and identifier
					memberNameEndIndex  = line.find( " = function(" )
					memberName = line[ memberNameStartIndex : memberNameEndIndex ]
					print( memberName )
					publicMembers.append( memberName )
					line = line.replace( " = function(", "(", 1 )
					line = line.replace( publicKeyword, "/*" + publicKeyword + "*/", 1 )
					print( line )

				# Else public variable/property
				else:
					memberNameStartIndex = len( publicKeyword ) + 1 # space sensitive must be 1 space between keyword and identifier
					memberNameEndIndex  = line.find( " = " )
					memberName = line[ memberNameStartIndex : memberNameEndIndex ]
					print( memberName )
					publicMembers.append( memberName )
					line = line.replace( publicKeyword, "/*" + publicKeyword + "*/", 1 )
					print( line )

			# If line is private member opener
			privateKeyword = keywords[ "private" ]
			if line.find( privateKeyword ) > -1:

				# If private function/method
				if line.find( " = function(" ) > -1:
					line = line.replace( " = function(", "(", 1 )
					line = line.replace( privateKeyword, "/*" + privateKeyword + "*/", 1 )
					print( line )

				# Else private variable/property
				else:
					line = line.replace( privateKeyword, "/*" + privateKeyword + "*/", 1 )
					print( line )

			buildFile.write( line )
				
		buildFile.write( "\n// Expose Public Members\nreturn {")
		for i, member in enumerate( publicMembers ):
			buildFile.write( "\n\n" + member + ": " + member)
			# Handle commas
			if i < len( publicMembers ) - 1:
				buildFile.write( "," )
		buildFile.write( "\n\n}")
		buildFile.write( "\n\n}());" )