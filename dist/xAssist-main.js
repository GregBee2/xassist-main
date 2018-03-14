/**
* @preserve
* https://github.com/GregBee2/xassist-main#readme Version 0.1.13.
*  Copyright 2018 Gregory Beirens.
*  Created on Wed, 14 Mar 2018 12:51:35 GMT.
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.xa = global.xa || {})));
}(this, (function (exports) { 'use strict';

var idSeed=Math.round(Math.random()*(1000000)),
	DOMContentLoadedEvent,
	readyCallBacks=[],
	isReady=false;
document.addEventListener( "DOMContentLoaded", readyHandler,{once:true});
function readyHandler(){
	//save event information
	DOMContentLoadedEvent=arguments[0];
	readyCallBacks.forEach(function(cb){
		cb[0].call(cb[1],DOMContentLoadedEvent);
	});
	//empty readyCallBacks
	readyCallBacks=[];
	isReady=true;
}
function id(prefix){
	//creates unique ID based on 
	return ((!arguments.length?'':prefix+'_')+idSeed++);
	
}
function ready(callBack,thisArg){
	//thisArg refers to this inside callback
	if(!thisArg){
		thisArg=document;
	}
	//check if document state is complete
	if (isReady){
		callBack.call(thisArg,DOMContentLoadedEvent);
	}
	else{
		//add to executionList;
		readyCallBacks.push([callBack,thisArg]);
	}
	
}
function template(text,obj,notfoundText){
	notfoundText=(notfoundText?notfoundText:"");
	return text.replace(/\${([^}]*)}/g,function(match,p1){
		
		return p1.split(".").reduce(function(obj,prop){
			if(obj.hasOwnProperty(prop)){
				return obj[prop];
			}
			return notfoundText;
		},obj);
	});
}

exports.id = id;
exports.ready = ready;
exports.template = template;

Object.defineProperty(exports, '__esModule', { value: true });

})));
