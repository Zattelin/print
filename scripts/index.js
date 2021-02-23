var notebooks = angular.module("notebooks", []);

notebooks.controller("NotebookListCtrl", function ($scope) {
  $scope.SevenAC = [
    {
      job: "BriteBills",
      bin1: "Bin 1",
      Detail: "ENBBBDETCS8x11",
      bin4: "Bin 4",
      Summary: "ENBBBSUMCS8x14",
      printer: "7AC"
    },
    {
      job: "SEBills",
      bin1: "Bin 1",
      Detail: "EBFDETCS",
      bin4: "Bin 4",
      Summary: "EBFSUMCS",
      printer: "7AC"
    },
    {
      job: "SECCTPReprints",
      bin1: "Bin 1",
      Detail: "EBFDETCS",
      bin4: "Bin 4",
      Summary: "EBFSUMCS",
      printer: "7AC"
    },
    {
      job: "UverseRep",
      bin1: "Bin 1",
      Detail: "UverseDETCS",
      bin4: "Bin 4",
      Summary: "UverseSUMCS",
      printer: "7AC"
    },
    {
      job: "LibertyCsmLtr",
      bin1: "Bin 1",
      Detail: "DMCUTR",
      bin4: "Bin 4",
      Summary: "",
      printer: "7AC"
    },
    {
      job: "MobilityNbiBills",
      bin1: "Bin 1",
      Detail: "ENBBBDETCS",
      bin4: "Bin 4",
      Summary: "ENBBBSUMCS",
      printer: "7AC"
    },
    {
      job: "LibBill",
      bin1: "Bin 1",
      Detail: "ENBBBDETCS8x11",
      bin4: "Bin 4",
      Summary: "ENBBBSUMCS",
      printer: "7AC"
    },
    {
      job: "ENBBBLPBill",
      bin1: "Bin 1",
      Detail: "ENBBBDETCS8x11",
      bin4: "Bin 4",
      Summary: "ENBBBSUMCS",
      printer: "7AC"
    },
    {
      job: "MobilityNWSBill",
      bin1: "Bin 1",
      Detail: "ENBBBDETCS8x11",
      bin4: "Bin 4",
      Summary: "ENBBBSUMCS",
      printer: "7AC"
    },
    {
      job: "DTVCSHLtr 8x11",
      bin1: "Bin 1",
      Detail: "DMCUTR",
      bin4: "Bin 4",
      Summary: "",
      printer: "7AC"
    },
    {
      job: "MobReprints",
      bin1: "Bin 1",
      Detail: "MOBDETCS8x11",
      bin4: "Bin 4",
      Summary: "MOBSUMCS",
      printer: "7AC"
    },
    {
      job: "SECMIABill",
      bin1: "Bin 1",
      Detail: "EBFDETCS",
      bin4: "Bin 4",
      Summary: "EBFSUMCS",
      printer: "7AC"
    }
  ];

  $scope.EightAB = [
    {
      job: "SECDRemits",
      bin4: "",
      Snapshot: "SEMCCCS8x11",
      bin6: "",
      printer: "8AB" 
    },
    {
      job: "SeelecRemits",
      bin4: "4",
      Snapshot: "SEMCCCS8x11",
      bin6: "",
      Snapshot2: "",
      printer: "8AB"
    },
    {
      job: "PRWLtr",
      bin4: "",
      Snapshot: "PRWMACSPNICS8x11R",
      bin6: "",
      Snapshot2: "",
      printer: "8AB"
    },
    {
      job: "SEElecRemits 8x11",
      bin4: "",
      Snapshot: "SEMCCCS8x11R",
      bin6: "",
      Snapshot2: "",
      printer: "8AB"
    },
    {
      job: "SEALclubBill 8x11",
      bin4: "4",
      Snapshot: "SECRISC8x11",
      bin6: "",
      Snapshot2: "",
      printer: "8AB"
    },
    {
      job: "SERSBBill 8x11",
      bin4: "",
      Snapshot: "SECRISCS8x11R",
      bin6: "",
      Snapshot2: "",
      printer: "8AB"
    },
    {
      job: "SEDCALACSR 8x11",
      bin4: "",
      Snapshot: "SEDCCABSBCS8x11",
      bin6: "",
      Snapshot2: "",
      printer: "8AB"
    },
    {
      job: "MOWDCDunLtr",
      bin4: "4",
      Snapshot: "MOWDCCS",
      bin6: "",
      Snapshot2: "",
      printer: "8AB"
    },
        {
      job: "",
      bin4: "4",
      Snapshot: "SEUNECS8X11R",
      bin6: "",
      Snapshot2: "",
      printer: "8AB"
    },
            {
      job: "",
      bin4: "",
      Snapshot: "",
      bin6: "6",
      Snapshot2: "DMCUTNOCLR",
      printer: "8AB"
    }
    
  ];

  $scope.NineAC = [
    {
      job: "BriteBills",
      bin1: "Bin 1",
      Detail: "ENBBBDETCS8x11",
      bin2: "",
      bin3: "",
      bin4: "Bin 4",
      Summary: "ENBBBSUMCS8x14",
      printer: "9AC"
    },
    {
      job: "SEBills",
      bin1: "Bin 1",
      Detail: "EBFDETCS",
      bin2: "",
      bin3: "",
      bin4: "Bin 4",
      Summary: "EBFSUMCS",
      printer: "9AC"
    },
    {
      job: "SECCTPReprints",
      bin1: "Bin 1",
      Detail: "EBFDETCS",
      bin2: "",
      bin3: "",
      bin4: "Bin 4",
      Summary: "EBFSUMCS",
      printer: "9AC"
    },
    {
      job: "UverseRep",
      bin1: "Bin 1",
      Detail: "UverseDETCS",
      bin2: "",
      bin3: "",
      bin4: "Bin 4",
      Summary: "UverseSUMCS",
      printer: "9AC"
    },
    {
      job: "LibertyCsmLtr",
      bin1: "Bin 1",
      Detail: "DMCUTR",
      bin2: "",
      bin3: "",
      bin4: "Bin 4",
      Summary: "",
      printer: "9AC"
    },
    {
      job: "MobilityNbiBills",
      bin1: "Bin 1",
      Detail: "ENBBBDETCS",
      bin2: "",
      bin3: "",
      bin4: "Bin 4",
      Summary: "ENBBBSUMCS",
      printer: "9AC"
    },
    {
      job: "LibBill",
      bin1: "Bin 1",
      Detail: "ENBBBDETCS8x11",
      bin2: "",
      bin3: "",
      bin4: "Bin 4",
      Summary: "ENBBBSUMCS",
      printer: "9AC"
    },
    {
      job: "ENBBBLPBill",
      bin1: "Bin 1",
      Detail: "ENBBBDETCS8x11",
      bin2: "",
      bin3: "",
      bin4: "Bin 4",
      Summary: "ENBBBSUMCS",
      printer: "9AC"
    },
    {
      job: "MobilityNWSBill",
      bin1: "Bin 1",
      Detail: "ENBBBDETCS8x11",
      bin2: "",
      bin3: "",
      bin4: "Bin 4",
      Summary: "ENBBBSUMCS",
      printer: "9AC"
    },
    {
      job: "DTVCSHLtr 8x11",
      bin1: "Bin 1",
      Detail: "DMCUTR",
      bin2: "",
      bin3: "",
      bin4: "Bin 4",
      Summary: "",
      printer: "9AC"
    },
    {
      job: "MobReprints",
      bin1: "Bin 1",
      Detail: "MOBDETCS8x11",
      bin2: "",
      bin3: "",
      bin4: "Bin 4",
      Summary: "MOBSUMCS",
      printer: "9AC"
    },
    {
      job: "SECMIABill",
      bin1: "Bin 1",
      Detail: "EBFDETCS",
      bin2: "",
      bin3: "",
      bin4: "Bin 4",
      Summary: "EBFSUMCS",
      printer: "9AC"
    }
  ];

  $scope.OneZeroFour = [
    {
      //       Even job
      job: "BriteBills",
      Detail: "ENBBBDETMC",
      DetPerf: "NO",
      Summary: "ENBBBSUMMC",
      SumPerf: "YES",
      printer: "104"
    },
    {
      //       Even job
      job: "LDBills",
      Detail: "SBCLDMN",
      Summary: "",
      printer: "104"
    },
    {
      job: "DTVLtrs",
      Detail: "DMAIL1R",
      Summary: "",
      printer: "102 no PERF"
    },    {
      job: "SEBILLS",
      Detail: "EBFDETMC8X11RWhite",
      Summary: "SESUMMCPERF",
      printer: "PERF"
    },
    {
      //       Even job
      job: "LDBusRGBills",
      Detail: "SBCLDMN",
      Summary: "",
      printer: "104"
    },
    
    // Printer 102
    $scope.OneZeroTwo = [
    {
      job: "DTVLtrs",
      Detail: "DMAIL1R",
      Summary: "",
      printer: "102 no PERF"
    },    
      {
      job: "SEBILLS",
      Detail: "EBFDETMC8X11RWhite",
      Summary: "SESUMMCPERF",
      printer: "PERF"
    },
      
  ];
  
  $scope.orderListOne = "job";
  $scope.orderListTwo = "job";
  $scope.orderListThree = "job";
  $scope.orderListFour = "job";
  $scope.orderListFive = "job";
  
});
