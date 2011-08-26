var Harness
var isNode        = typeof process != 'undefined' && process.pid

if (isNode) {
    require('Task/Test/Run/NodeJSBundle')
    
    Harness = Test.Run.Harness.NodeJS
} else 
    Harness = Test.Run.Harness.Browser.ExtJS
        
    

Harness.configure({
    title     : 'JSON2 Test Suite',
    
    preload : [
        "../json2-test.js"
    ]
})


Harness.start(
    '010_sanity.t.js',
    '020_stringify.t.js',
    '030_parse.t.js'
)

