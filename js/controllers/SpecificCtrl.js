angular.module('petApp')
    .controller('SpecificCtrl', function($rootScope, $scope, StyleService, FamilyService, AnimalService) {

        $rootScope.stylesList = StyleService.getStyles();
        $rootScope.selectedStyle = StyleService.getSelectedStyle();

        $rootScope.setStyle = (style) => {
            StyleService.select(style);
        }

        $scope.familiesList = FamilyService.getFamilies();
        $scope.animalsList = AnimalService.getAnimals();

        $scope.removeAnimal = (animal) => {
            AnimalService.removeAnimal(animal);
            $scope.animalsList = AnimalService.getAnimals();
        }

    });