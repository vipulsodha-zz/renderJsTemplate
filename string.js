'use strict';

function replaceAt(s, n, t) {
    return s.substring(0, n) + t + s.substring(n + 1);
}

exports.parseTemplate = function (string, values, char) {
    var idx = string.indexOf(char),
        i = -1;
    while (idx !== -1) {
        i = i + 1;
        string = replaceAt(string, idx, values[i]);
        idx = string.indexOf(char, idx + 1);
    }
    return string;

};