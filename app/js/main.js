require.config({
    paths:{
        angular:'lib/angular/angular.min'
    },
    shim:{
        angular:{
            exports:'angular'
        }
    }
});

require(['angular', 'app', 'routes'],
    function (angular) {
        angular.bootstrap(document, ['bootstrap']);
    });

