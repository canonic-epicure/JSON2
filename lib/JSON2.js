Class('JSON2', {
    
    use : {
        token       : 'JSON2/static/json2.js',
        presence    : 'JSON'
    },
    
    
    my : {
        
        methods : {
            
            parse : function () {
                return JSON.parse.apply(JSON, arguments)
            },
            
            
            stringify : function () {
                return JSON.stringify.apply(JSON, arguments)
            }
        }
    }
})