angular.module('app', [])
	.controller('mainCtrl', mainCtrl)
	.directive('country', countryDirective)
;

function mainCtrl($scope){
	$scope.countries = [];

	$scope.addRandom=function(){
		$scope.countries.push(
			countryArray[Math.floor(Math.random() * (countryArray.length))]
		);
	}
}

function countryDirective(){
	return{
		scope: {
			user: '='
		},
		restrict: 'E',
		template:(

			// I'll change this more when I figure out what information we'll have.

			'<div class="Country">' +
			  '<img ng-src="http://www.angelafloydschools.com/wp-content/uploads/placeholder-car1.png" />' +
			  '<h4>{{country.name}}</h4>' +
			'</div>'
		),
	};
}



var countryArray = [
{name: "United States"},
{name: "Italy"},
{name: "India"},
{name: "England"}]







