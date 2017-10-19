'use strict';

var angular = require('angular');
require('angular-animate');
require('angular-sanitize');

var PlayersModule = require('./players').name;

angular.module('TestAppInternalDependencies', [
    PlayersModule
]);

var TestAppModule = angular.module('TestApp', [
    'ngAnimate',
    'ngSanitize',
    'TestAppInternalDependencies'
])
    .config(AppConfiguration)
    .component('appRoot', {
        'template':'<player-list></player-list>'
    });

AppConfiguration.$inject = [];

function AppConfiguration() {


}

module.exports = TestAppModule;