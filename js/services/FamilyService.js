angular.module('petApp')
    .service('FamilyService', function() {
        let familiesList = [];

        this.getFamilyObj = () => {
            return { name: '', diet: '', noise: '', ability: '', individuals: 0 };
        }

        this.addFamily = (family) => {
            if (family.name === "") return false;
            let clonedFamily = _.clone(family);
            let any = familiesList.filter(familyObj => familyObj.name === clonedFamily.name);
            if (!any.length) {
                familiesList.push(clonedFamily);
                return true;
            }
            return false;
        }

        this.updateIndividualCount = (familyName, action = "sum") => {
            let family = familiesList.filter(familyObj => familyObj.name === familyName);
            if (family.length > 0) {
                action === "sum" ? family[0].individuals++ : family[0].individuals--;
            }
        }

        this.getFamilies = () => familiesList;

    });