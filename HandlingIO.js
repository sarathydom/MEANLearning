/**
 * JSON - Why JSON over XML ?
 *          * JSON is efficient and takes up fewer Characters.
 *          * Serializing / deserializing JSON is faster than XML due to its simpler syntaxx.
 *          * JSON is easier to Read.
 */
/**
 * JSON Conversion.
 */
function strToObj(){
    var accountStr = '{"name":"sarathy","prop":"test"}';
    var accountObj = JSON.parse(accountStr);
    console.log(accountObj.name);
    console.log(accountObj.prop);
};
// strToObj();
function objToStr(){
    var obj = {
        "name":"sarathy",
        "props":"test"
    }
    var str = JSON.stringify(obj);
    console.log(str);
}
//objToStr();

/**
 * Buffer :
 *          - Transferring compressed files.
 *          - Generating dynamic images.
 *          - Sending serialized binary data.
 *  Buffer data is made up of series of octets in bigendian or little endian format , so they takeup less space than text type of data.
 *  Buffer is similar to that of array but stored out of normal v8 heap in raw mwmory locations.hence, it is not resizable.
 *  Buffer is a global module so no need of require statement.
 * 
 *  Little endian - smallest octa representaing in placed in the lowest address.
 *  Big endian - Largest octa representation is placed in the smallest address.
 *  octa is for the refference to the buffer , 
 *  little and bid endian indepenedtly behave the same way with any type of data representation , 
 *  not only limited to octal representation.
 * 
 * METHODS OF ENCODING :
 *  - UTF8
 *      * Multibyte encoded unicoded characters. 
 *  - utf16le 
 *      * Little endian encoded Unicode characters of 2 or 4 bytes.
 *  - ucs2
 *  - base64
 *      * Base64 string encoding.
 *  - Hex 
 *      * Encoding each byte as two hexadecimal characters.
 */

 // CREATING BUFFERS :
 /**
  * BUFFERS  are in raw memory allocation , hence their size must be specified when creating the buffer.
  * There are three syntaxx in creating buffer:
  *     - new Buffer(sizeinBytes)
  *     - new Buffer(octectArray)
  *     - new Buffer(String,[encoding])
  */

    function creatingBuffer(){
        var buf256 = new Buffer.alloc(256);
        var octectBuffer = new Buffer.from([0x6f,0x63,0x74,0x65,0x74,0x73]);
        var UTF8buff = new Buffer.from("test text",'utf-8');
        console.log(buf256)
        console.log(octectBuffer)
        console.log(UTF8buff)
    }

    creatingBuffer()
