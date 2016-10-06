/**
 * universal eol of javascript  
 * node reference : https://github.com/nodejs/node/blob/5e5ec2cd1ee875ec5c837b5e0721d73628f12053/lib/os.js#L62
 * browser reference： https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/platform
 * 
 * usage: var EOL = require('universal-eol').EOL;
 */
'use strict';
const { platform } = typeof window === 'undefined' ? process : navigator;
if(/win/i.test(platform)){
    exports.EOL = '\r\n';
}else{    
    exports.EOL = '\n';
}