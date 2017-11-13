angular.module('petApp')
    .controller('GlobalCtrl', function($scope, FamilyService, AnimalService) {
        $scope.formFamily = false;
        $scope.formIndividual = false;

        $scope.family = FamilyService.getFamilyObj();

        $scope.showAddFamily = function() {
            $scope.formFamily = true;
            $scope.formIndividual = false;
        };

        $scope.showAddIndividual = function() {
            $scope.formFamily = false;
            $scope.formIndividual = true;
        };

        $scope.addFamily = function() {
            FamilyService.addFamily($scope.family);
            console.log(FamilyService.getFamilies());
        };

        $scope.addIndividual = function() {

        };

    });