# Hammerhead-Tailored JSON Implementation
 
This is a JSON implementation used in [TestCafe Hammerhead](https://github.com/DevExpress/testcafe-hammerhead) web proxy's client code.
 
Serialization/deserialization logic is borrowed from http://json.org/json2.js.
 
## Motivation
 
TestCafe Hammerhead client code required an isolated JSON implementation that does not rely on any external stuff (like prototypes, existing JSON implementations, etc.)
 
So we ended up with this `json-hammerhead` module based on `json2.js` but without fallbacks to the existing JSON implementations.
 
## Usage
 
Provides drop-in replacement for standard `JSON.parse` and `JSON.stringify` methods.
 
```js
const JSON = require('json-hammerhead');
 
let jsonString = '{"foo": "bar"}';
const obj      = JSON.parse(jsonString);
 
console.log(obj.foo) // > bar ;
 
obj.foo = "abc";
jsonString = JSON.stringify(obj);
 
console.log(jsonString) // > {"foo": "abc"} ;
```
 
Adds the `JSON.isSerializable` method that determines if the given object can be serialized.
 
```js
const JSON = require('json-hammerhead');
 
if(JSON.isSerializable({ foo: "bar" }))
    console.log('Regular JavaScript objects can be serialized');
 
if(!JSON.isSerializable(document.body))
    console.log('DOM nodes cannot be serialized');    
    
if(!JSON.isSerializable(function () { return void 0; }))
    console.log('Functions cannot be serialized');
```

