sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "sap/ui/table/library",
    'sap/m/DynamicDateRange',
    "sap/ui/model/odata/ODataUtils",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,library, DynamicDateRange,ODataUtils) {
        "use strict";
        
        return Controller.extend("tc.requisitions.controller.req", {
            onInit: function () {
                var oStandardOptions = ["DATE", "TODAY", "YESTERDAY", "FIRSTDAYWEEK", "FIRSTDAYMONTH", "FIRSTDAYQUARTER", 
                "FIRSTDAYYEAR", "DATERANGE", "YEARTODATE", "LASTMINUTES", "LASTHOURS", "LASTDAYS", 
                "LASTWEEKS", "LASTMONTHS", "LASTQUARTERS", "LASTYEARS", "TODAYFROMTO", "THISWEEK", "LASTWEEK", "SPECIFICMONTH", "SPECIFICMONTHINYEAR", 
                "THISMONTH", "LASTMONTH", "THISQUARTER", "LASTQUARTER", "QUARTER1", "QUARTER2", "QUARTER3", "QUARTER4", "THISYEAR", "LASTYEAR"];
//                var oDynamicRange = this.getView().byId("dynamic-range");
                // Set options on Date Picker
                this.getView().byId("dynamic-range").setStandardOptions(oStandardOptions);

                // Test ajax get
                //this.loadTestData();
            },
            onChange: function(oEvent) {
                var oValue = oEvent.getParameter("value");
                var bValid = oEvent.getParameter("valid");
                var aDates = DynamicDateRange.toDates(oValue);
//                console.log("aDates = "+aDates.length+" "+aDates[0]+" "+aDates[1]);
                if (oValue != null && bValid) {
                    // Reload data
                    this.loadDataModel(aDates[0],aDates[1]);	              
                }             
            }, 
            loadDataModel: function(fromDate, toDate) {
                var oView = this.getView();
                //var URI =  "/PurchaseRequisition?$top=10000&$filter=Material eq 'MZ-TG-0011' and CreationDate gt "+this.dateAsURIParam(fromDate)+"and CreationDate le "+this.dateAsURIParam(toDate);
                var URI =  "/PurchaseRequisition?$top=10000&$filter=CreationDate ge "+this.dateAsURIParam(fromDate)+"and CreationDate le "+this.dateAsURIParam(toDate);
                // Construct path to resource within the SAPUI5 framework
                var fullURI = sap.ui.require.toUrl(((this.getOwnerComponent().getManifestEntry("/sap.app/id")).replaceAll(".","/"))+URI);
                //console.log("fulURI = "+fullURI);
                var oReqs = new JSONModel();
//                var oPromise = oReqs.loadData(fullURI);
                oReqs.loadData(fullURI).then( () => {
                    //How many items read
                    var oLen = oReqs.getData().length;
//                    console.log("reload length = "+oLen);                    
                    var oUIModel = new JSONModel({
                        numReqs: oLen
                    });
                    oView.setModel(oUIModel,"ui");
                    oView.setModel(oReqs,"reqs");
                    // Sort by default Descending Purchase Req Num
                    oView.byId("reqtable").sort(oView.byId("reqNum"), library.SortOrder.Descending);
                }) 
            },

            loadTestData: function () {
  
                    // Function to Test Ajax Calls and Creating relative URL correctly - for reference only, not called
                    var oProds = new JSONModel();
                    var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
                    var appPath = appId.replaceAll(".", "/");
                    var url = sap.ui.require.toUrl(appId.replaceAll(".","/")+"/Product");                  

                    $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'json',
                        async: true,
                        contentType: 'application/json',
//                        beforeSend: function(xhr) {
//                            xhr.setRequestHeader('X-CSRF-Token', 'fetch');
//                        },
                        success: function(data) {
                            oProds.setData(data);
   //                         console.log("oProds Success "+oProds.getJSON());
   //                        jQuery.ajaxSetup({
   //                             beforeSend: function(xhr) {
   //                               xhr.setRequestHeader("X-CSRF-Token",response.getResponseHeader('X-CSRF-Token'));
   //                             }
   //                           });
                        },
                        error: function(error) {
    //                        console.log("Error on ajax: "+ error);
                        }
                      });
            },

            dateAsURIParam: function (vValue) {
                return vValue ? ODataUtils.formatValue((new Date(vValue)).toISOString().slice(0, 10), "Edm.DateTime") : "<null>";
            }

        });
    });
