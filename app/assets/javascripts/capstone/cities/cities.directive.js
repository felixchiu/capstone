(function() {
  "use strict";

  angular
    .module("capstone.cities")
    .directive("sdCities", CitiesDirective);

  CitiesDirective.$inject = ["capstone.APP_CONFIG"];

  function CitiesDirective(APP_CONFIG) {
    var directive = {
        templateUrl: APP_CONFIG.cities_html,
         replace: true,
         bindToController: true,
         controller: "capstone.cities.CitiesController",
         controllerAs: "citiesVM",
         restrict: "E",
         scope: {},
         link: link
    };
    return directive;

    function link(scope, element, attrs) {
      console.log("CitiesDirective", scope);
    }
  }

})();