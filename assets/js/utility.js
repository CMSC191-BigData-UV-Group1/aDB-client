/*
    
    This service contains all utility functions that can be used 
    and be accessed from anywhere in the app.

*/

((root) => {

'use strict';

    function start(){

        let responseHandler = (response, callback) => {

            var toastDuration = 3000;

            /*
                Check if the passed parameter is a string
            */

            if((typeof response) === 'string'){

                /*
                    
                    We first check if there is a callback function passed.
                    (Materialize toasts can execute callbacks)

                */

                if(callback){
                    //Materialize.toast(response, '', callback, toastDuration);
                    return;  
                }
                //Materialize.toast(response, '', toastDuration);
            }

            /*
                Check if the passed parameter is a object
            */

            if((typeof response) === 'object'){
                
                /*
                    
                    This part depends on the format of the response
                    
                    Example:
                    This is the response object format:

                    let response = {
                        status: 403,
                        message: {
                            code:       'INV_PASSWORD',
                            context:    'Invalid password'
                        }
                    },
                    
                */

                if(callback){

                    /*

                        Materialize.toast(
                            response.message.context, 
                            '',
                            callback,
                            toastDuration);
                        return

                    */
                }
                else{
                    /*

                        Materialize.toast(
                            response.message.context, 
                            '',
                            callback,
                            toastDuration);
                        return

                    */
                }

            }

        };


        const service = {
            responseHandler: responseHandler
        };

        return service;

    }


    root.utility = start();

})(this)