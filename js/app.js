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

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    }
  })

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
      reviews: [
        {
          stars: 5,
          body: "This one is really neat!",
          author: "joe@mama.com"
        },
        {
          stars: 3,
          body: "I've had better",
          author: "meh@sok.com"
        }
      ]
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
