angular.module('petApp')
    .controller('GlobalCtrl', function($scope, FamilyService, AnimalService) {
        $scope.formFamily = false;
        $scope.formAnimal = false;

        $scope.family = FamilyService.getFamilyObj();
        $scope.animal = AnimalService.getAnimalObj();

        $scope.familiesList = FamilyService.getFamilies();

        $scope.showAddFamily = function() {
            $scope.formFamily = true;
            $scope.formAnimal = false;
        };

        $scope.showAddAnimal = function() {
            $scope.formFamily = false;
            $scope.formAnimal = true;
        };

        $scope.addFamily = function() {
            if (FamilyService.addFamily($scope.family)) {
                $scope.family = FamilyService.getFamilyObj();
                $scope.familiesList = FamilyService.getFamilies();
            }
        };

        $scope.addAnimal = function() {
            if (AnimalService.addAnimal($scope.animal)) {
                FamilyService.addIndividualCount($scope.animal.family);
                $scope.animal = AnimalService.getAnimalObj();
            }
        };

    });