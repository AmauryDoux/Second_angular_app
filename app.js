
"use strict";

angular.module("todoApp", [
    // les dépendances externes
    "ui.router"
])

    .config(function($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: "home",
                url: "/home",
                component: "home"
            },
            {
                name: "editPage",
                url: "/editPage",
                component: "editPage"
            },
            // {
            //     name: "pageNotFound",
            // }
        ];
        $urlRouterProvider.otherwise("/404");
        states.forEach(function(state) {
            $stateProvider.state(state);
        })
    })

;