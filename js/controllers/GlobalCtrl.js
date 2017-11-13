angular.module('petApp')
    .controller('GlobalCtrl', function($scope, FamilyService, AnimalService) {

        $scope.formFamily = false;
        $scope.formAnimal = false;

        $scope.family = FamilyService.getFamilyObj();
        $scope.animal = AnimalService.getAnimalObj();

        $scope.familiesList = FamilyService.getFamilies();

        $scope.showAddFamily = () => {
            $scope.formFamily = true;
            $scope.formAnimal = false;
        };

        $scope.showAddAnimal = () => {
            $scope.formFamily = false;
            $scope.formAnimal = true;
        };

        $scope.addFamily = () => {
            if (FamilyService.addFamily($scope.family)) {
                $scope.family = FamilyService.getFamilyObj();
                $scope.familiesList = FamilyService.getFamilies();
            }
        };

        $scope.addAnimal = () => {
            if (AnimalService.addAnimal($scope.animal)) {
                $scope.animal = AnimalService.getAnimalObj();
            }
        };

    });