'use strict';

PlayerService.$inject = ['$http'];

function PlayerService($http) {

    var players = [
        {id: 0, name: 'alice'},
        {id: 1, name: 'bob'},
        {id: 2, name: 'ciccio'},
        {id: 3, name: 'pasticcio'},
        {id: 4, name: 'pippo'}
    ];

    this.getList = getList.bind(this);

    function getList() {
        return players;
    }
}

module.exports = PlayerService;
