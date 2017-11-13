angular.module('petApp')
    .service('AnimalService', function(FamilyService) {
        let animalsList = [];

        this.getAnimalObj = function() {
            return { family: '', name: '', age: 0 };
        }

        this.addAnimal = function(animal) {
            if (animal.name === "") return false;
            let clonedAnimal = _.clone(animal);
            let any = animalsList.filter(animalObj => animalObj.name === clonedAnimal.name);
            if (!any.length) {
                animalsList.push(clonedAnimal);
                FamilyService.updateIndividualCount(clonedAnimal.family);
                return true;
            }
            return false;
        }

        this.removeAnimal = function(animal) {
            animalsList = animalsList.filter(animalObj => animalObj.name !== animal.name);
            FamilyService.updateIndividualCount(animal.family, "sub");
        }

        this.getAnimals = function(family) {
            if (!family) {
                return animalsList;
            }
            let filtered = animalsList.filter(animal => animal.family === family);
            return filtered;
        }
    });