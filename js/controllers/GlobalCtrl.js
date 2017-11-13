angular.module('petApp')
    .controller('GlobalCtrl', function($scope, FamilyService, AnimalService) {
        $scope.formFamily = false;
        $scope.formIndividual = false;

        $scope.family = FamilyService.getFamilyObj();
        $scope.animal = AnimalService.getAnimalObj();

        $scope.familiesList = FamilyService.getFamilies();

        $scope.showAddFamily = function() {
            $scope.formFamily = true;
            $scope.formIndividual = false;
        };

        $scope.showAddIndividual = function() {
            $scope.formFamily = false;
            $scope.formIndividual = true;
        };

        $scope.addFamily = function() {
            if (FamilyService.addFamily($scope.family)) {
                $scope.family = FamilyService.getFamilyObj();
                $scope.familiesList = FamilyService.getFamilies();
            }
        };

        $scope.addIndividual = function() {
            console.log($scope.animal);
            if (AnimalService.addIndividual($scope.animal)) {
                $scope.animal = AnimalService.getAnimalObj();
                // Update count of individuals in the correct family
            }
        };

    });