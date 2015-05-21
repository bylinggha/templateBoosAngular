
      var mainApp = angular.module("mainApp", ['ngRoute', 'ui.bootstrap', 'ngAnimate']);
      
      mainApp.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/index', {
                  templateUrl: 'default.html',
					controller: 'default'
               }).
               when('/about', {
                  templateUrl: 'about.html',
                  controller: 'about'
               }).
               when('/galery', {
                  templateUrl: 'galery.html',
                  controller: 'galery'
               }).
               otherwise({
                  redirectTo: '/index'
               });
         }]);
			
			var url="data.JSON";
			mainApp.controller('default', function($scope, $http){
					$http.get(url).success( function(response) {
							   $scope.content = response; 
							});
				  $scope.myInterval = 5000;
				  var slides = $scope.slides = [];
				  $scope.addSlide = function() {
					var newWidth = 600 + slides.length + 1;
					slides.push({
					  image: 'http://placekitten.com/' + newWidth + '/300',
					  text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
						['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
					});
				  };
				  for (var i=0; i<4; i++) {
					$scope.addSlide();
				  }
				$scope.pageClass = 'default';
			});
			mainApp.controller('galery', function($scope, $http){
					$http.get(url).success( function(response) {
							   $scope.content = response; 
							});
				$scope.pageClass = 'galery';
			});
			mainApp.controller('about', function($scope, $http){
					$http.get(url).success( function(response) {
							   $scope.content = response; 
							});
				$scope.pageClass = 'about';
			});