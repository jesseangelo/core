function HeroDetailController() {
}



angular.module('dd-ui-core').component('heroDetail', {
  templateUrl: '/scripts/templates/heroDetail.html',
  controller: HeroDetailController,
  bindings: {
    hero: '='
  }
});