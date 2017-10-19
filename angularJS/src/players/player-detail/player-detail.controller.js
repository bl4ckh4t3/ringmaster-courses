'use strict';

PlayerDetailController.$inject = ['PlayerService'];

function PlayerDetailController(PlayerService) {

    this.service = PlayerService;
    this.$onInit = ngOnInit.bind(this);
    this.detail = detail.bind(this);

    function ngOnInit() {
        this.detail();
    }

    function detail() {
        console.log('Player Detail');
    }
}

module.exports = PlayerDetailController;