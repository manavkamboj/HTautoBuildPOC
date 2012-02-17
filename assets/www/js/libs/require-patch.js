var oldAttach = require.attach; 
require.attach = function (url, contextName, moduleName, callback, type) { 
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'bust=' + (new Date()).getTime() 
    return oldAttach.call(require, url, contextName, moduleName, callback, type); 
} 