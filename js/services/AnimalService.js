angular.module('petApp')
    .service('AnimalService', function(FamilyService) {
        let animalsList = [];

        this.getAnimalObj = () => {
            return { family: '', name: '', age: 0 };
        }

        this.addAnimal = (animal) => {
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

        this.removeAnimal = (animal) => {
            animalsList = animalsList.filter(animalObj => animalObj.name !== animal.name);
            FamilyService.updateIndividualCount(animal.family, "sub");
        }

        this.getAnimals = () => animalsList;

    });