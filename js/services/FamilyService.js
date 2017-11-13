angular.module('petApp')
    .service('FamilyService', function() {
        let familiesList = [];

        this.getFamilyObj = function() {
            return { name: '', diet: '', noise: '', ability: '' };
        }

        this.addFamily = function(family) {
            let clonedFamily = _.clone(family);
            let any = familiesList.filter(familyObj => familyObj.name === clonedFamily.name);
            if (!any.length) {
                familiesList.push(clonedFamily);
            }
        }

        this.getFamilies = function() {
            return familiesList;
        }
    });