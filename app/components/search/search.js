"use strict";

angular.module("todoApp")

    .component("search", {
        templateUrl: "app/components/search/search.html",
        controller: Search
    })


function Search() {
    this.query = "";
}