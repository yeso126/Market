angular.module('market.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MyStocksCtrl', ['$scope',
 function($scope) {
  $scope.myStocksArray = [
    {ticker: "AAPL"},
    {ticker: "GPRO"},
    {ticker: "FB"},
    {ticker: "NFLX"},
    {ticker: "TSLA"},
    {ticker: "BRK-A"},
    {ticker: "INTC"},
    {ticker: "MSFT"},
    {ticker: "GE"},
    {ticker: "BAC"},
    {ticker: "C"},
    {ticker: "T"},
  ];
}])

.controller('StockCtrl',[
  '$scope',
  '$stateParams',
  '$window',
  'stockDataService',
  'dateService',
  'chartDataService',


 function($scope, $stateParams, $window, stockDataService, dateService, chartDataService) {
   $scope.ticker = $stateParams.stockTicker;
   $scope.chartview = 4;
   $scope.$on("$ionicView.afterEnter", function() {
     getPriceData();
     getDetailsData();
   });

   $scope.chartViewFunc = function(n) {
     $scope.chartview = n;
   };

   function getPriceData () {
     var promise = stockDataService.getPriceData($scope.ticker);
     promise.then(function(data) {
       console.log(data);
       $scope.stockPriceData = data;
     });
   }
   function getDetailsData () {
     var promise = stockDataService.getDetailsData($scope.ticker);
     promise.then(function(data) {
       console.log(data);
       $scope.stockDetailsData = data;
     });
   }
   function getChartData(){

     var promise = chartDataService.getHistoricalData($scope.ticker, $scope.oneYearAgoDate );

   }

   $scope.myData = [
		{
			"key": "volume" ,
			"bar": true ,
			"color": "#cccccc" ,
			"values": [ [ 1403481600000 , 58492200 ],[ 1403568000000 , 73262500 ],[ 1403654400000 , 71766400 ],[ 1403740800000 , 68519600 ],[ 1403827200000 , 58149200 ],[ 1404086400000 , 47776800 ],[ 1404172800000 , 74193500 ],[ 1404259200000 , 87685800 ],[ 1404345600000 , 70582300 ],[ 1404691200000 , 62437100 ],[ 1404777600000 , 73343400 ],[ 1404864000000 , 46415800 ],[ 1404950400000 , 61458500 ],[ 1405036800000 , 56849400 ],[ 1405296000000 , 59181700 ],[ 1405382400000 , 99946700 ],[ 1405468800000 , 123897400 ],[ 1405555200000 , 114839900 ],[ 1405641600000 , 74859200 ],[ 1405900800000 , 61802200 ],[ 1405987200000 , 58331100 ],[ 1406073600000 , 47253300 ],[ 1406160000000 , 46549800 ],[ 1406246400000 , 35627200 ],[ 1406505600000 , 39313000 ],[ 1406592000000 , 51480500 ],[ 1406678400000 , 83243100 ],[ 1406764800000 , 70677300 ],[ 1406851200000 , 115978900 ],[ 1407110400000 , 51954700 ],[ 1407196800000 , 65071500 ],[ 1407283200000 , 95977900 ],[ 1407369600000 , 80058300 ],[ 1407456000000 , 54495000 ],[ 1407715200000 , 41545100 ],[ 1407801600000 , 33674400 ],[ 1407888000000 , 34394600 ],[ 1407974400000 , 29934600 ],[ 1408060800000 , 61535500 ],[ 1408320000000 , 54968600 ],[ 1408406400000 , 44825500 ],[ 1408492800000 , 57825000 ],[ 1408579200000 , 177294400 ],[ 1408665600000 , 107641800 ],[ 1408924800000 , 89396500 ],[ 1409011200000 , 73323400 ],[ 1409097600000 , 63061800 ],[ 1409184000000 , 62170400 ],[ 1409270400000 , 50106600 ],[ 1409616000000 , 59400400 ],[ 1409702400000 , 67418900 ],[ 1409788800000 , 56378600 ],[ 1409875200000 , 80974900 ],[ 1410134400000 , 99411200 ],[ 1410220800000 , 82428900 ],[ 1410307200000 , 75656100 ],[ 1410393600000 , 106598100 ],[ 1410480000000 , 117118300 ],[ 1410739200000 , 87306900 ],[ 1410825600000 , 65017200 ],[ 1410912000000 , 82902700 ],[ 1410998400000 , 111923200 ],[ 1411084800000 , 88455000 ],[ 1411344000000 , 109276700 ],[ 1411430400000 , 91921900 ],[ 1411516800000 , 86396100 ],[ 1411603200000 , 104522500 ],[ 1411689600000 , 66785900 ],[ 1411948800000 , 68038300 ],[ 1412035200000 , 82217400 ],[ 1412121600000 , 91235900 ],[ 1412208000000 , 118018800 ],[ 1412294400000 , 110840600 ],[ 1412553600000 , 66212100 ],[ 1412640000000 , 91396300 ],[ 1412726400000 , 101266800 ],[ 1412812800000 , 121363100 ],[ 1412899200000 , 129552700 ],[ 1413158400000 , 92674100 ],[ 1413244800000 , 97451900 ],[ 1413331200000 , 216591800 ],[ 1413417600000 , 148199400 ],[ 1413504000000 , 94339200 ],[ 1413763200000 , 76510700 ],[ 1413849600000 , 78287300 ],[ 1413936000000 , 85199800 ],[ 1414022400000 , 68436600 ],[ 1414108800000 , 41951400 ],[ 1414368000000 , 51500000 ],[ 1414454400000 , 71580600 ],[ 1414540800000 , 99875700 ],[ 1414627200000 , 72579100 ],[ 1414713600000 , 82788900 ],[ 1414972800000 , 64050700 ],[ 1415059200000 , 53515400 ],[ 1415145600000 , 58608200 ],[ 1415232000000 , 57339200 ],[ 1415318400000 , 53907800 ],[ 1415577600000 , 54261100 ],[ 1415664000000 , 62236000 ],[ 1415750400000 , 48669100 ],[ 1415836800000 , 50586300 ],[ 1415923200000 , 41144600 ],[ 1416182400000 , 43393300 ],[ 1416268800000 , 39490700 ],[ 1416355200000 , 49441600 ],[ 1416441600000 , 49652100 ],[ 1416528000000 , 63000000 ],[ 1416787200000 , 52785700 ],[ 1416873600000 , 44786300 ],[ 1416960000000 , 27310300 ],[ 1417132800000 , 27834900 ],[ 1417392000000 , 61173100 ],[ 1417478400000 , 62301200 ],[ 1417564800000 , 70104200 ],[ 1417651200000 , 49412800 ],[ 1417737600000 , 131824000 ],[ 1417996800000 , 101035100 ],[ 1418083200000 , 95939400 ],[ 1418169600000 , 103611100 ],[ 1418256000000 , 80173200 ],[ 1418342400000 , 88886700 ],[ 1418601600000 , 101305300 ],[ 1418688000000 , 96112000 ],[ 1418774400000 , 92164100 ],[ 1418860800000 , 79334000 ],[ 1418947200000 , 105588200 ],[ 1419206400000 , 70969300 ],[ 1419292800000 , 94405200 ],[ 1419379200000 , 35091300 ],[ 1419552000000 , 34362500 ],[ 1419811200000 , 58370900 ],[ 1419897600000 , 41433500 ],[ 1419984000000 , 57819600 ],[ 1420156800000 , 48951100 ],[ 1420416000000 , 105605500 ],[ 1420502400000 , 144912400 ],[ 1420588800000 , 104603800 ],[ 1420675200000 , 73388500 ],[ 1420761600000 , 84144600 ],[ 1421020800000 , 92762500 ],[ 1421107200000 , 100845400 ],[ 1421193600000 , 164779800 ],[ 1421280000000 , 193241300 ],[ 1421366400000 , 149802000 ],[ 1421712000000 , 123402800 ],[ 1421798400000 , 101054200 ],[ 1421884800000 , 183042100 ],[ 1421971200000 , 103376900 ],[ 1422230400000 , 69969300 ],[ 1422316800000 , 86184200 ],[ 1422403200000 , 105359800 ],[ 1422489600000 , 76095800 ],[ 1422576000000 , 99844600 ],[ 1422835200000 , 101586700 ],[ 1422921600000 , 105159400 ],[ 1423008000000 , 83848100 ],[ 1423094400000 , 92264700 ],[ 1423180800000 , 154352900 ],[ 1423440000000 , 95532900 ],[ 1423526400000 , 100322800 ],[ 1423612800000 , 99924400 ],[ 1423699200000 , 116394100 ],[ 1423785600000 , 93632700 ],[ 1424131200000 , 93350600 ],[ 1424217600000 , 84057400 ],[ 1424304000000 , 83604300 ],[ 1424390400000 , 89763600 ],[ 1424649600000 , 87623700 ],[ 1424736000000 , 74109600 ],[ 1424822400000 , 57201000 ],[ 1424908800000 , 161100700 ],[ 1424995200000 , 130448200 ],[ 1425254400000 , 71402400 ],[ 1425340800000 , 65689800 ],[ 1425427200000 , 78441600 ],[ 1425513600000 , 69510000 ],[ 1425600000000 , 163207200 ],[ 1425859200000 , 72912700 ],[ 1425945600000 , 85633600 ],[ 1426032000000 , 85910100 ],[ 1426118400000 , 126376300 ],[ 1426204800000 , 88581900 ],[ 1426464000000 , 63406500 ],[ 1426550400000 , 67315000 ],[ 1426636800000 , 86387600 ],[ 1426723200000 , 109169200 ],[ 1426809600000 , 99867700 ],[ 1427068800000 , 73773500 ],[ 1427155200000 , 77011000 ],[ 1427241600000 , 88541500 ],[ 1427328000000 , 76741500 ],[ 1427414400000 , 73140800 ],[ 1427673600000 , 70835300 ],[ 1427760000000 , 61381700 ],[ 1427846400000 , 73153900 ],[ 1427932800000 , 50443500 ],[ 1428278400000 , 51189500 ],[ 1428364800000 , 50057800 ],[ 1428451200000 , 71732500 ],[ 1428537600000 , 44935600 ],[ 1428624000000 , 43817700 ],[ 1428883200000 , 49191200 ],[ 1428969600000 , 84385400 ],[ 1429056000000 , 124479100 ],[ 1429142400000 , 105591000 ],[ 1429228800000 , 88994300 ],[ 1429488000000 , 53649400 ],[ 1429574400000 , 64033100 ],[ 1429660800000 , 73092800 ],[ 1429747200000 , 50292200 ],[ 1429833600000 , 40766100 ],[ 1430092800000 , 73523400 ],[ 1430179200000 , 58080100 ],[ 1430265600000 , 134499400 ],[ 1430352000000 , 78313900 ],[ 1430438400000 , 78171400 ],[ 1430697600000 , 76592300 ],[ 1430784000000 , 106148700 ],[ 1430870400000 , 96426500 ],[ 1430956800000 , 73794800 ],[ 1431043200000 , 86333700 ],[ 1431302400000 , 56246000 ],[ 1431388800000 , 59627100 ],[ 1431475200000 , 47330600 ],[ 1431561600000 , 55395700 ],[ 1431648000000 , 54937800 ],[ 1431907200000 , 51059900 ],[ 1431993600000 , 89115500 ],[ 1432080000000 , 67684000 ],[ 1432166400000 , 52056600 ],[ 1432252800000 , 47032900 ],[ 1432598400000 , 100048200 ],[ 1432684800000 , 70026700 ],[ 1432771200000 , 60970000 ],[ 1432857600000 , 74266200 ],[ 1433116800000 , 62941600 ],[ 1433203200000 , 65513200 ],[ 1433289600000 , 89614900 ],[ 1433376000000 , 61025500 ],[ 1433462400000 , 118482900 ],[ 1433721600000 , 67740600 ],[ 1433808000000 , 80942100 ],[ 1433894400000 , 88577700 ],[ 1433980800000 , 76656000 ],[ 1434067200000 , 52818300 ],[ 1434326400000 , 67534200 ],[ 1434412800000 , 47150600 ],[ 1434499200000 , 88431700 ],[ 1434585600000 , 97311900 ],[ 1434672000000 , 80128200 ],[ 1434931200000 , 57679500 ] ]
		},
		{
			"key": "BAC" ,
			"color": "#999999" ,
			"values": [ [ 1403481600000 , 15.640 ],[ 1403568000000 , 15.490 ],[ 1403654400000 , 15.470 ],[ 1403740800000 , 15.410 ],[ 1403827200000 , 15.330 ],[ 1404086400000 , 15.370 ],[ 1404172800000 , 15.600 ],[ 1404259200000 , 15.850 ],[ 1404345600000 , 16.030 ],[ 1404691200000 , 15.940 ],[ 1404777600000 , 15.580 ],[ 1404864000000 , 15.600 ],[ 1404950400000 , 15.440 ],[ 1405036800000 , 15.380 ],[ 1405296000000 , 15.570 ],[ 1405382400000 , 15.810 ],[ 1405468800000 , 15.510 ],[ 1405555200000 , 15.200 ],[ 1405641600000 , 15.490 ],[ 1405900800000 , 15.520 ],[ 1405987200000 , 15.520 ],[ 1406073600000 , 15.520 ],[ 1406160000000 , 15.620 ],[ 1406246400000 , 15.590 ],[ 1406505600000 , 15.500 ],[ 1406592000000 , 15.340 ],[ 1406678400000 , 15.580 ],[ 1406764800000 , 15.250 ],[ 1406851200000 , 14.980 ],[ 1407110400000 , 15.050 ],[ 1407196800000 , 15.000 ],[ 1407283200000 , 15.200 ],[ 1407369600000 , 15.120 ],[ 1407456000000 , 15.200 ],[ 1407715200000 , 15.220 ],[ 1407801600000 , 15.210 ],[ 1407888000000 , 15.250 ],[ 1407974400000 , 15.320 ],[ 1408060800000 , 15.220 ],[ 1408320000000 , 15.450 ],[ 1408406400000 , 15.450 ],[ 1408492800000 , 15.520 ],[ 1408579200000 , 16.160 ],[ 1408665600000 , 16.130 ],[ 1408924800000 , 16.290 ],[ 1409011200000 , 16.330 ],[ 1409097600000 , 16.200 ],[ 1409184000000 , 16.010 ],[ 1409270400000 , 16.090 ],[ 1409616000000 , 16.270 ],[ 1409702400000 , 16.100 ],[ 1409788800000 , 16.110 ],[ 1409875200000 , 16.020 ],[ 1410134400000 , 16.350 ],[ 1410220800000 , 16.140 ],[ 1410307200000 , 16.360 ],[ 1410393600000 , 16.570 ],[ 1410480000000 , 16.790 ],[ 1410739200000 , 16.740 ],[ 1410825600000 , 16.710 ],[ 1410912000000 , 16.770 ],[ 1410998400000 , 17.040 ],[ 1411084800000 , 16.950 ],[ 1411344000000 , 17.030 ],[ 1411430400000 , 17.050 ],[ 1411516800000 , 17.180 ],[ 1411603200000 , 16.850 ],[ 1411689600000 , 17.030 ],[ 1411948800000 , 17.010 ],[ 1412035200000 , 17.050 ],[ 1412121600000 , 16.820 ],[ 1412208000000 , 16.880 ],[ 1412294400000 , 17.290 ],[ 1412553600000 , 17.290 ],[ 1412640000000 , 16.880 ],[ 1412726400000 , 17.120 ],[ 1412812800000 , 16.590 ],[ 1412899200000 , 16.480 ],[ 1413158400000 , 16.400 ],[ 1413244800000 , 16.520 ],[ 1413331200000 , 15.760 ],[ 1413417600000 , 16.080 ],[ 1413504000000 , 16.210 ],[ 1413763200000 , 16.260 ],[ 1413849600000 , 16.600 ],[ 1413936000000 , 16.400 ],[ 1414022400000 , 16.600 ],[ 1414108800000 , 16.720 ],[ 1414368000000 , 16.590 ],[ 1414454400000 , 16.800 ],[ 1414540800000 , 16.990 ],[ 1414627200000 , 17.030 ],[ 1414713600000 , 17.160 ],[ 1414972800000 , 17.270 ],[ 1415059200000 , 17.210 ],[ 1415145600000 , 17.340 ],[ 1415232000000 , 17.360 ],[ 1415318400000 , 17.360 ],[ 1415577600000 , 17.370 ],[ 1415664000000 , 17.320 ],[ 1415750400000 , 17.290 ],[ 1415836800000 , 17.220 ],[ 1415923200000 , 17.140 ],[ 1416182400000 , 17.090 ],[ 1416268800000 , 17.140 ],[ 1416355200000 , 17.060 ],[ 1416441600000 , 17.000 ],[ 1416528000000 , 17.120 ],[ 1416787200000 , 17.180 ],[ 1416873600000 , 17.100 ],[ 1416960000000 , 17.110 ],[ 1417132800000 , 17.040 ],[ 1417392000000 , 16.790 ],[ 1417478400000 , 17.150 ],[ 1417564800000 , 17.290 ],[ 1417651200000 , 17.210 ],[ 1417737600000 , 17.680 ],[ 1417996800000 , 17.660 ],[ 1418083200000 , 17.560 ],[ 1418169600000 , 17.380 ],[ 1418256000000 , 17.470 ],[ 1418342400000 , 17.130 ],[ 1418601600000 , 16.850 ],[ 1418688000000 , 16.720 ],[ 1418774400000 , 17.260 ],[ 1418860800000 , 17.530 ],[ 1418947200000 , 17.620 ],[ 1419206400000 , 17.710 ],[ 1419292800000 , 17.930 ],[ 1419379200000 , 17.980 ],[ 1419552000000 , 17.980 ],[ 1419811200000 , 18.110 ],[ 1419897600000 , 18.130 ],[ 1419984000000 , 17.890 ],[ 1420156800000 , 17.900 ],[ 1420416000000 , 17.380 ],[ 1420502400000 , 16.860 ],[ 1420588800000 , 16.940 ],[ 1420675200000 , 17.290 ],[ 1420761600000 , 16.980 ],[ 1421020800000 , 16.680 ],[ 1421107200000 , 16.450 ],[ 1421193600000 , 16.040 ],[ 1421280000000 , 15.200 ],[ 1421366400000 , 15.380 ],[ 1421712000000 , 15.260 ],[ 1421798400000 , 15.410 ],[ 1421884800000 , 16.090 ],[ 1421971200000 , 15.730 ],[ 1422230400000 , 15.850 ],[ 1422316800000 , 15.630 ],[ 1422403200000 , 15.200 ],[ 1422489600000 , 15.430 ],[ 1422576000000 , 15.150 ],[ 1422835200000 , 15.460 ],[ 1422921600000 , 15.890 ],[ 1423008000000 , 15.790 ],[ 1423094400000 , 15.970 ],[ 1423180800000 , 16.490 ],[ 1423440000000 , 16.350 ],[ 1423526400000 , 16.420 ],[ 1423612800000 , 16.360 ],[ 1423699200000 , 16.670 ],[ 1423785600000 , 16.610 ],[ 1424131200000 , 16.630 ],[ 1424217600000 , 16.300 ],[ 1424304000000 , 16.210 ],[ 1424390400000 , 16.380 ],[ 1424649600000 , 16.200 ],[ 1424736000000 , 16.380 ],[ 1424822400000 , 16.490 ],[ 1424908800000 , 16.040 ],[ 1424995200000 , 15.810 ],[ 1425254400000 , 16.010 ],[ 1425340800000 , 16.040 ],[ 1425427200000 , 15.840 ],[ 1425513600000 , 16.000 ],[ 1425600000000 , 16.220 ],[ 1425859200000 , 16.170 ],[ 1425945600000 , 15.790 ],[ 1426032000000 , 16.110 ],[ 1426118400000 , 16.090 ],[ 1426204800000 , 16.090 ],[ 1426464000000 , 16.130 ],[ 1426550400000 , 16.090 ],[ 1426636800000 , 15.980 ],[ 1426723200000 , 15.610 ],[ 1426809600000 , 15.840 ],[ 1427068800000 , 15.720 ],[ 1427155200000 , 15.610 ],[ 1427241600000 , 15.410 ],[ 1427328000000 , 15.420 ],[ 1427414400000 , 15.310 ],[ 1427673600000 , 15.520 ],[ 1427760000000 , 15.390 ],[ 1427846400000 , 15.410 ],[ 1427932800000 , 15.540 ],[ 1428278400000 , 15.510 ],[ 1428364800000 , 15.460 ],[ 1428451200000 , 15.610 ],[ 1428537600000 , 15.710 ],[ 1428624000000 , 15.720 ],[ 1428883200000 , 15.800 ],[ 1428969600000 , 15.820 ],[ 1429056000000 , 15.640 ],[ 1429142400000 , 15.790 ],[ 1429228800000 , 15.560 ],[ 1429488000000 , 15.570 ],[ 1429574400000 , 15.500 ],[ 1429660800000 , 15.740 ],[ 1429747200000 , 15.690 ],[ 1429833600000 , 15.640 ],[ 1430092800000 , 15.560 ],[ 1430179200000 , 15.650 ],[ 1430265600000 , 15.980 ],[ 1430352000000 , 15.930 ],[ 1430438400000 , 16.110 ],[ 1430697600000 , 16.440 ],[ 1430784000000 , 16.350 ],[ 1430870400000 , 16.290 ],[ 1430956800000 , 16.240 ],[ 1431043200000 , 16.450 ],[ 1431302400000 , 16.490 ],[ 1431388800000 , 16.430 ],[ 1431475200000 , 16.470 ],[ 1431561600000 , 16.520 ],[ 1431648000000 , 16.350 ],[ 1431907200000 , 16.510 ],[ 1431993600000 , 16.770 ],[ 1432080000000 , 16.740 ],[ 1432166400000 , 16.730 ],[ 1432252800000 , 16.750 ],[ 1432598400000 , 16.500 ],[ 1432684800000 , 16.740 ],[ 1432771200000 , 16.670 ],[ 1432857600000 , 16.500 ],[ 1433116800000 , 16.550 ],[ 1433203200000 , 16.720 ],[ 1433289600000 , 16.930 ],[ 1433376000000 , 16.780 ],[ 1433462400000 , 17.190 ],[ 1433721600000 , 17.080 ],[ 1433808000000 , 17.310 ],[ 1433894400000 , 17.590 ],[ 1433980800000 , 17.490 ],[ 1434067200000 , 17.490 ],[ 1434326400000 , 17.470 ],[ 1434412800000 , 17.550 ],[ 1434499200000 , 17.370 ],[ 1434585600000 , 17.380 ],[ 1434672000000 , 17.170 ],[ 1434931200000 , 17.470 ] ]
		}
	]
	.map(function(series) {
		series.values = series.values.map(function(d) { return {x: d[0], y: d[1] }; });
		return series;
	});

	var xTickFormat = function(d) {
		var dx = $scope.myData[0].values[d] && $scope.myData[0].values[d].x || 0;
		if (dx > 0) {
      return d3.time.format("%b %d")(new Date(dx));
		}
		return null;
	};

  var x2TickFormat = function(d) {
    var dx = $scope.myData[0].values[d] && $scope.myData[0].values[d].x || 0;
    return d3.time.format('%b %Y')(new Date(dx));
  };

  var y1TickFormat = function(d) {
    return d3.format(',f')(d);
  };

  var y2TickFormat = function(d) {
    return d3.format('s')(d);
  };

  var y3TickFormat = function(d) {
    return d3.format(',.2s')(d);
  };

  var y4TickFormat = function(d) {
    return d3.format(',.2s')(d);
  };

  var xValueFunction = function(d, i) {
    return i;
  };

  var marginBottom = ($window.innerWidth / 100) * 10;

	$scope.chartOptions = {
    chartType: 'linePlusBarWithFocusChart',
    data: 'myData',
    margin: {top: 15, right: 40, bottom: marginBottom, left: 70},
    interpolate: "cardinal",
    useInteractiveGuideline: false,
    yShowMaxMin: false,
    tooltips: false,
    showLegend: false,
    useVoronoi: false,
    xShowMaxMin: false,
    xValue: xValueFunction,
    xAxisTickFormat: xTickFormat,
    x2AxisTickFormat: x2TickFormat,
    y1AxisTickFormat: y1TickFormat,
    y2AxisTickFormat: y2TickFormat,
    y3AxisTickFormat: y3TickFormat,
    y4AxisTickFormat: y4TickFormat,
    transitionDuration: 500
	};



}]);
