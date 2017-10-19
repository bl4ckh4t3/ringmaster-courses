'use strict';

PlayerListController.$inject = ['PlayerService'];

function PlayerListController(PlayerService) {

    this.service = PlayerService;

    this.selectedPlayer = undefined;

    this.$onInit = ngOnInit.bind(this);
    this.index = index.bind(this);
    this.onSelect = onSelect.bind(this);


    function ngOnInit() {
        this.index();
    }

    function index() {
        this.players = this.service.getList();
    }

    function onSelect(selectedPlayer) {
        console.log("selecting player", selectedPlayer);
        this.selectedPlayer = selectedPlayer;
    }
}

module.exports = PlayerListController;
