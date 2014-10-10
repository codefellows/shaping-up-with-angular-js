(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function() {
    this.product = gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Look at all those sides!',
      canPurchase: true,
      images: [
        "http://cl.zdn.io/UuY7/gem-02.gif",
        "http://cl.zdn.io/UuWP/gem-05.gif",
        "http://cl.zdn.io/UuD4/gem-09.gif"
      ],
    },
    {
      name: 'Pentahedron',
      price: 2.95,
      description: 'Looky there!',
      canPurchase: true,
      images: [
        "http://cl.zdn.io/UvAK/gem-01.gif",
        "http://cl.zdn.io/Uuwd/gem-03.gif",
        "http://cl.zdn.io/UuVP/gem-04.gif",
      ],
    },
  ];
})();
