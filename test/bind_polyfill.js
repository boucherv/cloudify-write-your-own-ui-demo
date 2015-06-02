/** don't know why but the mozilla polyfill did not do the job.. */


console.log.bind = function(){ return function(){}; }; // don't really case about it..
