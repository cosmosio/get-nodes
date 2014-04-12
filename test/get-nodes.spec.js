/**
* @license get-nodes https://github.com/cosmios/get-nodes
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
require("quick-dom");

var getNodes = require("../index");

describe("get-nodes", function () {

    document.body.innerHTML = "<header></header>" +
        "<section>" +
            "<div></div><span></span><p></p>" +
        "</section>" +
        "<footer></footer>";

    it("should return the list of dom nodes", function () {
        var nodes = getNodes(document.body.querySelector("section"));
        expect(nodes.length).toBe(4);
        expect(nodes[0]).toBe(document.querySelector("section"));
        expect(nodes[1]).toBe(document.querySelector("div"));
        expect(nodes[2]).toBe(document.querySelector("span"));
        expect(nodes[3]).toBe(document.querySelector("p"));
    });
});
