"use strict";

angular.module("todoApp")
    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })


function Home() {
    this.title = "homepage";
    this.number = 0;
}