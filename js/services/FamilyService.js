angular.module('petApp')
    .service('FamilyService', function() {
        let familiesList = [];

        this.getFamilyObj = function() {
            return { name: '', diet: '', noise: '', ability: '', individuals: 0 };
        }

        this.addFamily = function(family) {
            let clonedFamily = _.clone(family);
            let any = familiesList.filter(familyObj => familyObj.name === clonedFamily.name);
            if (!any.length) {
                familiesList.push(clonedFamily);
                return true;
            }
            return false;
        }

        this.addIndividualCount = function(familyName) {
            let family = familiesList.filter(familyObj => familyObj.name === familyName);
            if (family.length > 0) {
                family[0].individuals++;
            }
        }

        this.getFamilies = function() {
            return familiesList;
        }
    });