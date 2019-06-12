
function Documentation(){
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

  /**
   * Adding Event listners to the object:
   * ------------------------------------
   * SYNTAXX : addListener(eventName,callback)
   * on(eventName,callback)
   * once(eventName,callback) -> only the first time the event is triggered
   */

  function myCallback(){}

  var someObj__=new someObj();
  someObj__.on("someevent",myCallback);

  /**
   * Removing listners from objects
   * listeners(eventName)
   *    - Returns a list of eventNames
   * setMaxListeners(n) 
   *    - triggers a warning in more than n lstners are added.
   * removeListener(eventName,callback)
   *    - removes the listener from the object
   */
}

/**
 * Implementing Event Listeners and Event Emittrs
 */

 var events = require('events');
 /**
  * contains two functions deposit and balace and both emit balance changed event.
  */
 function Account(){
     this.balance=0;
     events.EventEmitter.call(this);
     this.deposit=function(amount){
         this.balance+=amount;
         this.emit("balanceChanged")
     };
     this.withdraw=function(amount){
         this.balance-=amount;
         this.emit('balanceChanged')
     };
 }
 // setting event emitter prototype to the account.
 Account.prototype.__proto__=events.EventEmitter.prototype;
 function displayBalance(){
     console.log("Account balance $%d",this.balance);
 }
 function checkgoal(acc,goal){
    if(acc.balance>goal){
        console.log("Goal Achived!!!")
    }
 }
 function checkOverdraw(){
     if(this.balance<0){
         console.log("Account Overdrawn");
     }
 }
var account = new Account();
account.on('balanceChanged',displayBalance);
account.on('balanceChanged',checkOverdraw);
account.on('balanceChanged',function(){
    checkgoal(this,1000)
});
account.deposit(100);
account.deposit(2000);
account.withdraw(5000);

console.log(account.listeners('balanceChanged'));

/**
 * End Of event listner and event emitter example
 */