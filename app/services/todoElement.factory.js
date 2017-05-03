
"use strict";

angular.module("todoApp")

    .factory("todoFactory", function() {
        return {
            editElem: editElem
        }

        function editElem() {
            return "nawak";
        }
    })