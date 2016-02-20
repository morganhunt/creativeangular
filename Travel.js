var app = angular.module("myApp",[])
app.controller("mainCtrl", function($scope, $http)
{
  $scope.url1 = ""
  $scope.country = []
  $scope.find = function(form)
  {
    console.log(form)
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&" +
    "api_key=eec233f2e3290363c3885dc4c03cc190&text=" + form.text + 
    "&format=json&nojsoncallback=1";
    $http.get(url).then(function(response)
    {
      var photo = response.data.photos.photo[1]
      var url1 = "https://farm" + photo.farm + 
      ".staticflickr.com/" + photo.server + "/" + photo.id + 
      "_" + photo.secret + "_t.jpg";
      $scope.url1 = url1
      console.log(url1);
      $scope.country = response.data;
    })
  }
})

//   $scope.country_name = user.country;
//   $scope.myurl = "https://api.yelp.com/v2/search/?term=Pizza&location="
//   myurl += country_name;
//   $http.get(fullurl);
//   .then(function(response)
//   {
//     $scope.best_restaraunt = response["business"]["name"];
//     $scope.everything;
//     everything 
//     $scope.result = response.everything;
//   }
// });





// https://api.flickr.com/services/rest/?method=flickr.photos.search
// &api_key=60aabc7325212133b84723290d90e759
// &text=Paris&format=json&nojsoncallback=1
// &api_sig=c9f91f579ff2e10cb7a4b3aaf3c3ea80




