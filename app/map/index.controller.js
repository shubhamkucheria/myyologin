(function () {
    'use strict';

    angular
        .controller('Map.IndexController', Controller);

    function Controller(UserService) {
        var vm = this;

        vm.user = null;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
                console.log('->>>>>>>>>>>>>>>>>>>>>>>>>>>');
                console.log( vm.user);

            });
        }
    }

})();
