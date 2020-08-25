const assert = require('assert')
const request= require('request')
const config=require("../utils/config")


/**
 * Code to verify DELETE query 
 */

describe("Code to verify DELETE query ",function(){
    
   var token;

   it("Create a resource-DELETE",function(done){
         const options = {  
            url: config.baseurl +'/posts/1',
            method: 'DELETE'
            
         };

         request(options, function(error,response,body) {  
            let json = JSON.parse(body);
            console.log(json);
            assert.equal(response.statusCode,'200')
            done();
         });
        
   })
})
