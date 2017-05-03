"use strict";

angular.module("todoApp")

    .component("editPage", {
        templateUrl: "app/components/editPage/editPage.html",
        controller: EditPage
    })


function EditPage(todoFactory) {
    this.todoName = "";
    this.todoList = [];
    this.result = todoFactory.editElem();
}