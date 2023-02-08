// ==UserScript==
// @name                AO3 Comments Dropdown
// @namespace           https://github.com/MonoScyron/ao3-scripts
// @version             0.0.1
// @description         Dropdown button for random nice commments.
// @author              MonoScyron
// @updateURL           https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/ao3-comments-dropdown.js
// @downloadURL         https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/ao3-comments-dropdown.js
// @match               https://archiveofourown.org/works/*
// @match               https://archiveofourown.org/chapters/*
// @icon                https://archiveofourown.org/images/ao3_logos/logo_42.png
// @resource cJSON      https://raw.githubusercontent.com/MonoScyron/ao3-scripts/main/json/comments.json
// @grant               GM_getResourceText
// @noframes
// ==/UserScript==

(function () {
    'use strict';
    const COMMENTS = JSON.parse(GM_getResourceText("cJSON"));

    console.log(COMMENTS);
})();