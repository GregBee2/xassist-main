var jsdom = require("jsdom");
var dom=new jsdom.JSDOM("<!DOCTYPE html><h1 id='one'></h1>")
global.window=dom.window;
global.document =global.window.document;

var definition = require("../package.json");
var main=require("../"+definition.main);4
var tape=require("tape");



tape("id() returns unique identifier", function(test) {
	var oldId=main.id();
	test.equal(oldId, (parseInt(main.id())-1).toString(),"id() returns a new unique identifier every time it runs");
	oldId=main.id("prefix");
	test.equal(oldId.split("_")[0],"prefix","id(prefix) adds the prefix before the identifier with an _ inbetween");
	test.equal(oldId.split("_")[1], (parseInt(main.id("prefix").split('_')[1])-1).toString(),
		"id(prefix) returns a new unique identifier every time it runs");
	test.end();
});


tape("template() changes ${objectKey} inside text with the value specified in the object, or a notfound text when the key is not found (recursively)", function(test) {
	test.equal(main.template('begin${a}end${c}',{a:"OK",b:"NOK"}),'beginOKend',
		"template(txt,obj) replaces ${objKey} in txt with the correct value of obj[objKey], if not found it will be skipped");
	test.equal(main.template('begin${c}end',{a:"OK",b:"NOK"},"notfound"),'beginnotfoundend',
		"template(txt,obj,strNotFound) replaces ${objKey} in txt with strNotFound if obj[objKey] does not exist");
	test.equal(main.template('${a}${b.c.d}${b.c.d.e}',{a:"OK",b:{c:{d:"VERYDEEP"}}},"notfound"),'OKVERYDEEPnotfound',
		"template(txt,obj,strNotFound) replaces ${key1.key2.key3} in txt with  obj[key1][key2][key3] or with strNotFound if this does not exist");
	test.end();
});
tape("ready() runs on DOMContentLoaded Event with correct context", function(test) {
	var t=0,me=false;fakeMe={a:1},evt=false;
	var event=new window.Event("DOMContentLoaded");
	main.ready(function(e){t++;me=this;evt=e;});
	test.ok((t===0&&me===false&&evt===false),
		"Ready(callBack) does not execute when document is not ready yet");
	document.dispatchEvent(event);
	test.ok((t===1&&me===document&&evt===event),
		"Ready(callBack) executes after event fired, and sets this inside callback to document");
	document.dispatchEvent(event);
	evt=false;
	test.equal(t,1,"Ready(callBack) fires only once!, even when event is refired");
	main.ready(function(e){t="testFinished";me=this;evt=e},fakeMe);
	test.ok((t==="testFinished"&&me===fakeMe&&evt===event),
		"Ready(callBack,thisArg) fires immediatly if event was triggered before. thisArg is correctly used as this inside callback"); //with extra this parameter
	test.end();
})
 
/*tape('a test', function (t) {
  t.ok(true);
  t.end();
});*/
