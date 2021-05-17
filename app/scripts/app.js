"use strict";

angular
  .module("dashboardApp", [
    "ngAnimate",
    "ngCookies",
    "ngMessages",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch",
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/Login/login.html",
        controller: "LoginCtrl",
        controllerAs: "login",
      })
      .when("/home", {
        templateUrl: "views/Home/home.html",
        controller: "HomeCtrl",
        controllerAs: "home",
      })
      .when("/usuarios", {
        templateUrl: "views/User/user.html",
        controller: "UserCtrl",
        controllerAs: "user",
      })
      .when("/formulario", {
        templateUrl: "views/Form/form.html",
        controller: "FormCtrl",
        controllerAs: "Form",
      })
      .otherwise({
        redirectTo: "/",
      });
  });
