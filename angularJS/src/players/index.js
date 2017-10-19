'use strinct';

var angular = require('angular');
var indexTemplate = require('./player-list/player-list.tpl.html');
var detailTemplate = require('./player-detail/player-detail.tpl.html');

var PlayersModule = angular.module('Players', [])
    .service('PlayerService', require('./player.service'))
    .component('playerList', {
        "controller": require('./player-list/player-list.controller'),
        "templateUrl": indexTemplate
    })
    .component('playerDetail', {
        "controller": require('./player-detail/player-detail.controller'),
        "templateUrl": detailTemplate,
        "bindings": {
            "player": "<"
        }
    });

module.exports = PlayersModule;