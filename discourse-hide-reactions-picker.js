// ==UserScript==
// @name         Hide Discourse Reactions Picker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hides the expanded discourse reactions picker
// @author       You
// @match        https://overgrow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create and inject CSS to hide the element
    var style = document.createElement('style');
    style.innerHTML = `
        .discourse-reactions-picker.is-expanded {
            visibility: hidden !important;
        }
    `;
    document.head.appendChild(style);
})();
