angular.module('petApp')
    .controller('SpecificCtrl', function($scope, FamilyService, AnimalService) {

        $scope.familiesList = FamilyService.getFamilies();
        $scope.animalsList = AnimalService.getAnimals();

        $scope.removeAnimal = (animal) => {
            AnimalService.removeAnimal(animal);
            $scope.animalsList = AnimalService.getAnimals();
        }

    });