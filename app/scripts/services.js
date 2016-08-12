/**
 * Created by olga on 11.08.16.
 */

angular.module('testApp')
    .service('itemFactory', ['$rootScope', function ($rootScope) {

        var items = {

            item_model: {
                id: '',
                description: '',
                comments: ['']
            },

            SaveState: function () {
                sessionStorage.itemFactory = angular.toJson(items.item_model);
            },

            RestoreState: function () {
                items.item_model = angular.fromJson(sessionStorage.itemFactory);
            }
        }

        $rootScope.$on("savestate", items.SaveState);
        $rootScope.$on("restorestate", items.RestoreState);

        return items;

    }]);