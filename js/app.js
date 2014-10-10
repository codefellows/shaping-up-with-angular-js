(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.product = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Look at all those sides!',
      canPurchase: true
    },
    {
      name: 'Pentahedron',
      price: 2.95,
      description: 'Looky there!',
      canPurchase: true
    },
  ];
})();
