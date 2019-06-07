var sar = require("uploadsarathy");
var a= true
console.log(sar.getCensoredWord())
sar.addCensoredWord("ppp")
console.time('label')
console.log(sar.censor("sar ppp sar"),"log")
console.info(sar.censor("sar ppp sar"),"info")
console.error(sar.censor("sar ppp sar"),"error")
console.warn(sar.censor("sar ppp sar"),"warn")
console.dir(sar.censor("sar ppp sar"),"warn")
console.timeEnd('label')
console.trace('label')
console.assert(a,"hai this is false")