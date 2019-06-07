/**
 * Next Tick;
 * ----------
 * Used to scheduling work on event queue. 
 * SYNTAXX : process.nextTick(callback).
 * The nextTick() fires before the I/O events are fired.
 * Node js limits the no.of nexttick by process.maxTickDepth which defaults to 1000 
 * */

    var fs = require("fs");
    fs.stat("nextTick.js",function(){
        console.log("the file exists")
    });
    setImmediate(function(){
        console.log("timer 1 executed")
    });
    setImmediate(function(){
        console.log("timer 2 executed")
    });
    setImmediate(function(){
        console.log("timer 3 executed")
    });
    process.nextTick(function(){
        console.log("process tick 1")
    });
    process.nextTick(function(){
        console.log("process tick 2")
    });

/**
 * The explanation is that the process.nexttick fires before the event queue is fired and hence all the next tick will be executed first ,
 * after the next tick the fs.stat is on the event loop once it is completed the setImmediate kicks in.
 */