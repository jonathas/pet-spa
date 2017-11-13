angular.module('petApp')
    .controller('SpecificCtrl', function($scope, FamilyService, AnimalService) {

        $scope.family = { name: '' };
        $scope.familiesList = FamilyService.getFamilies();
        $scope.animalsList = AnimalService.getAnimals();

        $scope.filterByFamily = function(family) {

        }

    });