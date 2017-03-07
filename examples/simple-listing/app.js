  function BlogListController($scope) {
    $scope.items = [
      {name: 'Blog #1', description: 'Travel blog detailing worldwide travel stories.', language: 'English', software: 'WordPress', www: 'www.solotraveller.ca'},
      {name: 'Blog #2', description: 'Web design and development tutorials and videos.', language: 'English', software: 'Ghost', www: 'www.himpfen.com'}
    ];

    $scope.remove = function(index) {
      $scope.items.splice(index, 1);
    };
  }
