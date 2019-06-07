/**
 * Delaying work with timeouts:
 * ----------------------------
 * Use timeouts for works that has to be performed only once
 * syntaxx : setTimeout(callback,delayMilliseconds,args)
 * The setTimeout() returns a timer object ID , and this Id can be passed to clearTimeout() to cancel the timeout.
 */

 function simpleTimeout(consoleTimer){
     console.timeEnd(consoleTimer)
 }
 function consolelogs(){
 console.time("two seconds");
 setTimeout(simpleTimeout,2000,"two seconds");
 console.time("one second");
 setTimeout(simpleTimeout,1000,"one second");
 console.time("five second");
 setTimeout(simpleTimeout,5000,"five second");
 console.time("fiftymillisecond");
 setTimeout(simpleTimeout,50,"fiftymillisecond")
 }
 //consolelogs();

 /**
  * Performimg periodic work with Intervals:
  * ----------------------------------------
  * Use Interval for the work that has to be done on regular basis
  * syntaxx: setInterval(callback,delaymilliseconds,args)
  * the setInterval() returns a time object id that can be passed to the clearInterval() to cancel the interval
  */
 function intervals(){
    var x=0,y=0,z=0;
    function displayvalues(){
        console.log("x=%d;y=%d;z=%d",x,y,z)
    }
    function updatex(){
        x +=1
    }
    function updatey(){
        y +=1
    }
    function updatez(){
        z +=1
        displayvalues()
    }
    setInterval(updatex,500)
    setInterval(updatey,1000)
    setInterval(updatez,2000)
 }
 //intervals()

 /**
  * Performing Imidiate work with Immediate
  * - To perform work as soon as then I/O event callbacks are executed.
  * - Schedule work done after the event queue are completed.
  * - SyntXX : setImmidiate(callback,args)
  * - SetImmediate returns a object Id that can be passed to clearImmediate() to clear the Immediate function
  */

/**
 * ref() and unref() are used to reffrence and unrefference the timers when they are the only events in the event loop
 */
 

    
