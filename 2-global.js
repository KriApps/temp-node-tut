// Globals - no window
//__dirname - path to current directory
//__filename - file name
//require - function to use modules (CommonJS)
//module - info about current module (file)
//process - info about env where program is being executed

console.log(__dirname); //console also available globally
setInterval(()=>{
    console.log('hello world')
}, 1000);
