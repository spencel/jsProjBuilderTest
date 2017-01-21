import io
import os

# Info and moduleName

sourceDirectory = "../../src/"
buildDirectory = "../../build/"
moduleName = "myNamespace"
buildFileName = "myNamespace-v0.0.0.js"

with io.open( buildDirectory + buildFileName, "w", encoding="utf-8" ) as buildFile:
	with io.open( sourceDirectory + moduleName + ".js", "r", encoding="utf-8" ) as file:
		publicMembers = []
		for line in file:

			# If line is module opener
			if line.find( "var " + moduleName + " = {};" ) > -1:
				line = "var " + moduleName + " = (function() {\n"
				print( line )

			# If line is public member opener
			if line.find( "/*public*/" ) > -1:

				# If public function/method
				if line.find( " = function(" ) > -1:
					memberNameStartIndex = 12 + len( moduleName ) 
					memberNameEndIndex  = line.find( " = function(" )
					memberName = line[ memberNameStartIndex : memberNameEndIndex ]
					print( memberName )
					publicMembers.append( memberName )
					line = line.replace( " = function(", "(", 1 )
					line = line.replace( "/*public*/ " + moduleName + ".", "/*public*/ function ", 1 )
					print( line )

				# Else public variable/property
				else:
					memberNameStartIndex = 12 + len( moduleName ) 
					memberNameEndIndex  = line.find( " = " )
					memberName = line[ memberNameStartIndex : memberNameEndIndex ]
					print( memberName )
					publicMembers.append( memberName )
					line = line.replace( "/*public*/ " + moduleName + ".", "/*public*/ var ", 1 )
					print( line )

			# If line is private member opener
			if line.find( "/*private*/" ) > -1:

				# If private function/method
				if line.find( " = function(" ) > -1:
					line = line.replace( " = function(", "(", 1 )
					line = line.replace( "/*private*/ " + moduleName + ".", "/*private*/ function ", 1 )
					print( line )

				# Else private variable/property
				else:
					line = line.replace( "/*private*/ " + moduleName + ".", "/*private*/ var ", 1 )
					print( line )

			# If line has [moduleName]., then remove that part of the line
			line = line.replace( moduleName + ".", "" )

			buildFile.write( line )
				
		buildFile.write( "\n// Expose Public Members\nreturn {")
		for i, member in enumerate( publicMembers ):
			buildFile.write( "\n\n" + member + ": " + member)
			# Handle commas
			if i < len( publicMembers ) - 1:
				buildFile.write( "," )
		buildFile.write( "\n\n}")
		buildFile.write( "\n\n}());" )