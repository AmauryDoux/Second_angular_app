"use strict";

angular.module("todoApp")

.component("header", {
    templateUrl: "app/components/header/header.html",
    controller: Header
})

function Header() {
    this.links = ["home", "editPage"];
}