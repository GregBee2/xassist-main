var csv2readme = require('csv2readme');
const definition = require("./package.json");

var options={
	input:{
		base:"../../helpData/csv/base.csv",
		functionParam:"../../helpData/csv/functionParameters.csv",
		classDef:"../../helpData/csv/classDefinition.csv"
	},
	moduleName:"xassist-main",
	globalTOC:false,
	header:{
		title:"@xassist/xassist-main",
		explanation:["This module provides some helperfunctions like onready, id-generator and templating engine"].join("\r\n")
	},
	headerFiles:["../../helpData/markdown/installationModule.md"],
	includeDependencies:true,
	includeLicense:true,
	footerFiles:[/*"dependencies.md","src/license.md"*/],
	subTitle:"API",
	output:{
		file:"README.md"
	},
	baseLevel:3,
	headerTemplates:{
		moduleName:"xassist-main",
		moduleUrl:"https://raw.githubusercontent.com/GregBee2/xassist-csv/master/dist/xAssist-main.min.js",
		libraryName:"xassist",
		libraryUrl:"https://github.com/GregBee2/xassist",
		moduleTest:"id()"
	},
	footerTemplates:{
		/*license:definition.license,
		licenseUrl:"https://choosealicense.com/licenses/"+definition.license.toLowerCase()*/
	}
};
csv2readme.init(options);

	
	