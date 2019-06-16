/**
 * There are three spwcific implementation of callbacks,
 *  - passing parameters to the callbacks
 *  - Handling callback funtions parameters inside the loop
 *  - Nesting callbacks
 */

 /**
  * Passing parameters to callbacks
  */

  function passig_parameters(){
      var events = require('events');
      function Carshow(){
          events.EventEmitter.call(this);
          this.seeCar=(make)=>{
              this.emit('sawcar',make);
          };
      };
      Carshow.prototype.__proto__=events.EventEmitter.prototype;
      var show  =   new Carshow();
      function logCar(make){
          console.log('saw a %s',make)
      }
      function logColorCar(make,color){
          console.log("saw a %s %s",color,make);
      }
      show.on("sawcar",logCar);
      show.on("sawcar",function(make){
          let colors = ["red","blue","black"];
          let color = colors[Math.floor(Math.random()*3)];
          logColorCar(color,make)
      });
      show.seeCar("benz")
  };
  //passig_parameters();

  /**
   * Implementing Closture in callbacks
   *    - Closture is a javascript term that indicates tahat the scope of variables are bind to the functions scope but not parents scope
   */

   function clostureCallbacks(){
        function logCar(logMsg,callback){
            process.nextTick(()=>{
                callback(logMsg);
            })
        }
        var cars    =   ["Suzuki","Maruti","Honda"];

        for(let idx in cars){
            var message = "saw a car :"+cars[idx];
            logCar(message,function(){
                console.log("Normal Callback :"+message)
            });
        };
        for(let idx in cars){
            var message = "saw a car :"+cars[idx];
            (function(msg){
                logCar(msg,function(){
                    console.log("Closture callback :"+msg)
                })
            })(message)
        }

   };
   //clostureCallbacks();

   /**
    * Chaining Callbacks
    */
   function ChainingCallback(){
       function logCar(car,callback){
           console.log("saw a %s",car);
           if(cars.length){
               process.nextTick(()=>{
                   callback();
               })
           };
       };
       function logcars(cars){
           var car = cars.pop();
           logCar(car,function(){
               logcars(cars);
           });
       };
       var cars=["Honda","Kia","ISUZU"];
       logcars(cars);
   };
   ChainingCallback();