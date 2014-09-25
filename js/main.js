"use strict";

var app = angular.module("paperdreamer", ["ngRoute", "restangular", "ui.bootstrap"]);

var templatePath = "partials/",
	restAPI = "../backend/";

app.config(function ($routeProvider, RestangularProvider) {
	var templatePath = "partials/";
	RestangularProvider.setBaseUrl(restAPI);

	$routeProvider
		.when('/login', {
			templateUrl: templatePath + 'login.html',
			controller: "loginController"
		})
		.when('/registration', {
			templateUrl: templatePath + 'registration.html',
			controller: "registrationController"
		})
		.when('/userlist', {
			templateUrl: templatePath + 'userlist.html',
			controller: "userlistController"
		})
		.when('/registrationComplete', {
			templateUrl: templatePath + 'registrationComplete.html'
		})
		.when('/dashboard', {
			templateUrl: templatePath + 'dashboard.html',
			controller: "dashboardController"
		})
		.when('/allProjects', {
			templateUrl: templatePath + 'allProjects.html',
			controller: "allProjectsController"
		})
		.when('/createProject', {
			templateUrl: templatePath + 'createproject.html',
			controller: "newProjectController"
		})
		.when('/project/:projectID', {
			templateUrl: templatePath + 'projectView.html',
			controller: "projectViewController"
		})
		.when('/project/:projectID/canvas/:canvasID', {
			templateUrl: templatePath + 'canvasEdit.html',
			controller: "canvasEditController"
		})
		.when('/user/:userID', {
			templateUrl: templatePath + 'profile.html',
			controller: "profileController"
		})
		.when('/user/:userID/editProfile', {
			templateUrl: templatePath + 'editProfile.html',
			controller: "editProfileController"
		})
		.when('/forgotPassword', {
			templateUrl: templatePath + 'forgotPassword.html',
			controller: "forgotPasswordController"
		})

	.otherwise({
		redirectTo: '/login'
	});
});
