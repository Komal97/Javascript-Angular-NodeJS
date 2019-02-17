app.config(function($routeProvider,$locationProvider,HOME,ABOUT,CNEWS){
    console.log("spa-routes");
    $locationProvider.hashPrefix(''),    // to configure how the application deep linking paths are stored.
    $routeProvider.when(HOME,{
        templateUrl:'views/home.html'
    }).when(ABOUT,{
        templateUrl:'views/aboutus.html',
        controller:'aboutusctrl'
    }).when(CNEWS,{
        templateUrl:'views/news.html',
        controller:'newsctrl'
    }).otherwise({template:'Something went wrong !!'})
});