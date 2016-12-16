angular.module('gameApp').filter('toArray', function() { return function(obj) {
   
    if (!(obj instanceof Object)) return obj;
    
    	return _.map(obj, function(val, key) {
       	 return Object.defineProperty(val, '$key', {__proto__: null, value: key});
    });

}});