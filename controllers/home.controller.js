    
(() => {

'use strict';

    angular
        .module('app', [])
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$mdToast'];

    /*
        
        Put all ng-click, ng-change functions here

    */

    let bindEventListeners = ($scope, $mdToast) => {
        
        $scope.checkCommand = function (key) {
            //TODO check command

            $scope.input.text = $scope.input.text.trim();

            if($scope.input.text === 'clr') {
                $scope.input = { text : '' };
                $scope.inputs = [];
                $scope.showSimpleToast('Terminal Cleared!');
                return true;
            }
            $scope.inputs.push($scope.input);
            $scope.input = { text : '' };
            return true;
        };


        $('#console').click(() => {
            $('textarea').focus();
        });

        $scope.showSimpleToast = function(text) {
            var pinTo = 'bottom left';

            $mdToast.show(
              $mdToast.simple()
                .textContent(text)
                .position(pinTo)
                .hideDelay(3000)
            );
        };

        setInterval(function(){
            if($scope.inputs.length > 1) $scope.inputs.splice(0, 1);
        }, 1000);
    };

    function HomeCtrl($scope, $mdToast){
        
        bindEventListeners($scope, $mdToast);

        $scope.rows = [
            {
                id: '601',
                name: 'Frozen joghurt',
                calories: '159',
                fat: '6',
                carbs: '24',
                protein: '4.0',
                sodium: '87',
                calcium: '14%',
                iron: '1%'
            }
        ];  

        $scope.data = {
            data: $scope.rows,
            'column-keys' : [
                'name',
                'calories',
                'fat',
                'carbs',
                'protein',    
                'sodium',
                'calcium',
                'iron'
            ]
        };

        $scope.columns = ['Column 1','Column 2','Column 3','Column 4','Column 5','Column 6','Column 7','Column 8'];

        $scope.inputs = [];
        $scope.input = { text : '' };


    }

})()