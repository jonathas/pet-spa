angular.module('petApp')
    .service('StyleService', function() {

        let selectedStyle = null;

        let stylesList = [{
                id: "sidemenu",
                name: "Side Menu",
                href: "styles/side-menu.css",
                menuHeading: "Animals",
                classes: "pure-menu"
            },
            {
                id: "marketing",
                name: "Landing page",
                href: "styles/marketing.css",
                menuHeading: "Pet Web Project",
                classes: "pure-menu home-menu pure-menu-horizontal pure-menu-fixed"
            }
        ]

        this.select = (style) => {
            selectedStyle = style;
        }

        this.getSelectedStyle = () => {
            if (!selectedStyle) {
                selectedStyle = stylesList[0];
            }
            return selectedStyle;
        }

        this.getStyles = () => stylesList;

    });