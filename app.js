(function(){
  'use strict'

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function ($scope) {
    var maxItem = 3;

    $scope.checkIfTooMuch = function(){
      var numberOfItems = getNumberOfItems($scope.items)
      if(numberOfItems > maxItem){

        //too much no. of item. format red
        $scope.checkTooMuchResult = "Too much!";
        $scope.checkTooMuchResultClass = "text-danger";
      }else{

        //acceptable no. of item. format green
        $scope.checkTooMuchResult = "Enjoy!";
        $scope.checkTooMuchResultClass = "text-success";
      }
    };
  });

  function getNumberOfItems(items){
    //get no. of items, items are seprated by ","

    var itemsList = items.split(",")

    var counter =0;
    angular.forEach(itemsList, function(item){
      if(!item == null || !item.trim() == ""){
        counter++;
      }
    });

    return counter;
  }




})();
