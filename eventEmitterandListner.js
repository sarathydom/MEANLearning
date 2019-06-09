/**
 * event proare emitted using EventEmitter object.
 * This object is included in the event module.
 * SYNTAXX : emit(eventName,[args]) :
 *           - Triggers the eventName event and includes any arguments included
 * Below is the code sinippet
 */

 var events = require('events');
 var emitter = new events.EventEmitter();
 emitter.emit("simple event");

 /**
  * To add the events to our own javascript Object , Then we ned to inherit the EventEmitter functionality into my objects,
  * by calling events.EventEmitter.call(this) and also we need to add events.EventEmitter.prototype to our objects.
  * below is the example
  */

  function someObj(){
      Events.EventEmitter.call(this);
  }
  someObj.prototype.__proto__=events.EventEmitter.prototype;

  // To emit the events from the javascript objects then , you have to do the below :

  var someObj_ = new someObj();
  someObj_.emit("myEvent");