angular.module('petApp')
    .service('AnimalService', function() {
        let animalsList = [];

        this.getAnimalObj = function() {
            return { family: '', name: '', age: 0 };
        }

        this.addAnimal = function(animal) {
            let clonedAnimal = _.clone(animal);
            let any = animalsList.filter(animalObj => animalObj.name === clonedAnimal.name);
            if (!any.length) {
                animalsList.push(clonedAnimal);
                return true;
            }
            return false;
        }

        this.getAnimals = function(family) {
            if (!family) {
                return animalsList;
            }
            let filtered = animalsList.filter(animal => animal.family === family);
            return filtered;
        }
    });