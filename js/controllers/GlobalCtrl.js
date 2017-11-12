angular.module('petApp')
    .controller('GlobalCtrl', function($scope) {
        $scope.formFamily = false;
        $scope.formIndividual = false;

        $scope.showAddFamily = function() {
            $scope.formFamily = true;
            $scope.formIndividual = false;
        };

        $scope.showAddIndividual = function() {
            $scope.formFamily = false;
            $scope.formIndividual = true;
        };

    });