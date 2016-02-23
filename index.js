angular.module('app', [])
	.controller('mainCtrl', mainCtrl)
	.directive('country', countryDirective)
;

function mainCtrl($scope){
	$scope.countries = [];

	$scope.addNew=function(country){
		console.log("here");
		$scope.countries.push({
			name: country,
			//this is where i'll go grab the flag from the array whenever it shows up.
		});
	}
	console.log("call select country");
	selectCountry();
}

function selectCountry(){
	$("#myMap").on("click", function(event){
		console.log(event.pageY +"px");
		console.log(event.pageX + "px");
		var name;
		if(event.pageX >= 320 && event.pageX <= 415 && event.pageY >=410 && event.pageY <= 435){
			name = "France";
			console.log(name);
		}
		if(event.pageX >= 190 && event.pageX <= 265 && event.pageY >=510 && event.pageY <= 530){
			name = "Spain"
			console.log(name);
		}
		if(event.pageX >= 115 && event.pageX <= 180 && event.pageY >=485 && event.pageY <= 555){
			name = "Portugal"
			console.log(name);
		}
		if(event.pageX >= 290 && event.pageX <= 365 && event.pageY >=315 && event.pageY <= 345){
			name = "United Kingdom"
			console.log(name);
		}
		if(event.pageX >= 215 && event.pageX <= 275 && event.pageY >=310 && event.pageY <= 325){
			name = "Ireland"
			console.log(name);
		}
		if(event.pageX >= 230 && event.pageX <= 305 && event.pageY >=140 && event.pageY <= 160){
			name = "Iceland"
			console.log(name);
		}
		if(event.pageX >= 475 && event.pageX <= 540 && event.pageY >=460 && event.pageY <= 475){
			name = "Italy"
			console.log(name);
		}
		if(event.pageX >= 465 && event.pageX <= 580 && event.pageY >=350 && event.pageY <= 365){
			name = "Germany"
			console.log(name);
		}
		if(event.pageX >= 430 && event.pageX <= 510 && event.pageY >=425 && event.pageY <= 445){
			name = "Switzerland"
			console.log(name);
		}
		if(event.pageX >= 380 && event.pageX <= 440 && event.pageY >=355 && event.pageY <= 385){
			name = "Belgium"
			console.log(name);
		}
		if(event.pageX >= 415 && event.pageX <= 460 && event.pageY >=335 && event.pageY <= 355){
			name = "Netherlands"
			console.log(name);
		}
		if(event.pageX >= 490 && event.pageX <= 550 && event.pageY >=290 && event.pageY <= 305){
			name = "Denmark"
			console.log(name);
		}
		if(event.pageX >= 460 && event.pageX <= 550 && event.pageY >=215 && event.pageY <= 230){
			name = "Norway"
			console.log(name);
		}
		if(event.pageX >= 550 && event.pageX <= 635 && event.pageY >=230 && event.pageY <= 245){
			name = "Sweden"
			console.log(name);
		}
		if(event.pageX >= 665 && event.pageX <= 760 && event.pageY >=185 && event.pageY <= 200){
			name = "Finland"
			console.log(name);
		}
		if(event.pageX >= 700 && event.pageX <= 755 && event.pageY >=235 && event.pageY <= 250){
			name = "Estonia"
			console.log(name);
		}
		if(event.pageX >= 715 && event.pageX <= 775 && event.pageY >=265 && event.pageY <= 275){
			name = "Latvia"
			console.log(name);
		}
		if(event.pageX >= 680 && event.pageX <= 755 && event.pageY >=285 && event.pageY <= 295){
			name = "Lithuania"
			console.log(name);
		}
		if(event.pageX >= 605 && event.pageX <= 700 && event.pageY >=335 && event.pageY <= 355){
			name = "Poland"
			console.log(name);
		}
		if(event.pageX >= 555 && event.pageX <= 635 && event.pageY >=380 && event.pageY <= 400){
			name = "Czech Republic"
			console.log(name);
		}
		if(event.pageX >= 560 && event.pageX <= 630 && event.pageY >=410 && event.pageY <= 420){
			name = "Austria"
			console.log(name);
		}
		if(event.pageX >= 565 && event.pageX <= 620 && event.pageY >=440 && event.pageY <= 450){
			name = "Slovenia"
			console.log(name);
		}
		if(event.pageX >= 620 && event.pageX <= 680 && event.pageY >=465 && event.pageY <= 485){
			name = "Bosnia and Herzegovina"
			console.log(name);
		}
		if(event.pageX >= 605 && event.pageX <= 675 && event.pageY >=450 && event.pageY <= 465){
			name = "Croatia"
			console.log(name);
		}
		if(event.pageX >= 635 && event.pageX <= 725 && event.pageY >=395 && event.pageY <= 405){
			name = "Slovakia"
			console.log(name);
		}
		if(event.pageX >= 630 && event.pageX <= 715 && event.pageY >=420 && event.pageY <= 435){
			name = "Hungary"
			console.log(name);
		}
		if(event.pageX >= 680 && event.pageX <= 745 && event.pageY >=465 && event.pageY <= 475){
			name = "Serbia"
			console.log(name);
		}
		if(event.pageX >= 665 && event.pageX <= 698 && event.pageY >=490 && event.pageY <= 505){
			name = "Montenegro"
			console.log(name);
		}
		if(event.pageX >= 700 && event.pageX <= 730 && event.pageY >=495 && event.pageY <= 505){
			name = "Kosovo"
			console.log(name);
		}
		if(event.pageX >= 685 && event.pageX <= 720 && event.pageY >=505 && event.pageY <= 545){
			name = "Albania"
			console.log(name);
		}
		if(event.pageX >= 715 && event.pageX <= 755 && event.pageY >=510 && event.pageY <= 525){
			name = "Macedonia"
			console.log(name);
		}
		if(event.pageX >= 710 && event.pageX <= 770 && event.pageY >=545 && event.pageY <= 555){
			name = "Greece"
			console.log(name);
		}
		if(event.pageX >= 755 && event.pageX <= 850 && event.pageY >=480 && event.pageY <= 500){
			name = "Bulgaria"
			console.log(name);
		}
		if(event.pageX >= 730 && event.pageX <= 835 && event.pageY >=440 && event.pageY <= 455){
			name = "Romania"
			console.log(name);
		}
		if(event.pageX >= 805 && event.pageX <= 865 && event.pageY >=390 && event.pageY <= 425){
			name = "Moldova"
			console.log(name);
		}
		if(event.pageX >= 785 && event.pageX <= 890 && event.pageY >=360 && event.pageY <= 380){
			name = "Ukraine"
			console.log(name);
		}
		if(event.pageX >= 735 && event.pageX <= 845 && event.pageY >=315 && event.pageY <= 330){
			name = "Belarus"
			console.log(name);
		}
		if(event.pageX >= 830 && event.pageX <= 960 && event.pageY >=210 && event.pageY <= 230){
			name = "Russia"
			console.log(name);
		}
		if(event.pageX >= 930 && event.pageX <= 980 && event.pageY >=505 && event.pageY <= 520){
			name = "Turkey"
			console.log(name);
		}
		addNew(name);
	})
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











