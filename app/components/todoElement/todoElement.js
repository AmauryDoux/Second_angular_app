"use strict";

angular.module("todoApp")

    .component("todoElement", {
        bindings: {
            item: "=",
            index: "="
        },
        templateUrl: "app/components/todoElement/todoElement.html",
        controller: TodoElement
    })


function TodoElement() {
}