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
                "FIRSTDAYYEAR", "DATERANGE", "DATETIMERANGE", "YEARTODATE", "LASTMINUTES", "LASTHOURS", "LASTDAYS", 
                "LASTWEEKS", "LASTMONTHS", "LASTQUARTERS", "LASTYEARS", "TODAYFROMTO", "THISWEEK", "LASTWEEK", "SPECIFICMONTH", "SPECIFICMONTHINYEAR", 
                "THISMONTH", "LASTMONTH", "THISQUARTER", "LASTQUARTER", "QUARTER1", "QUARTER2", "QUARTER3", "QUARTER4", "THISYEAR", "LASTYEAR"];
                var oDynamicRange = this.getView().byId("dynamic-range");
                oDynamicRange.setStandardOptions(oStandardOptions);
            },
            onChange: function(oEvent) {
                var oValue = oEvent.getParameter("value");
                var bValid = oEvent.getParameter("valid");
                var aDates = DynamicDateRange.toDates(oValue);
                console.log("aDates = "+aDates.length+" "+aDates[0]+" "+aDates[1]);
                if (oValue != null && bValid) {
                    // Reload data
                    this.loadDataModel(aDates[0],aDates[1]);		                
                }             
            }, 
            loadDataModel: function(fromDate, toDate) {
                console.log("hostname = "+window.location.hostname);
//                var URI =  "/PurchaseRequisition?$top=10000&$filter=Material eq 'MZ-TG-0011' and CreationDate gt "+this.dateAsURIParam(fromDate)+"and CreationDate le "+this.dateAsURIParam(toDate);
                var URI =  "PurchaseRequisition?$top=10000&$filter=CreationDate gt "+this.dateAsURIParam(fromDate)+"and CreationDate le "+this.dateAsURIParam(toDate);
                console.log("URI= "+URI);
                var oReqs = new JSONModel();
                var oPromise = oReqs.loadData(URI);
                oPromise.then( () => {
                    //How many items
                    var oLen = oReqs.getData().length;
                    console.log("reload length = "+oLen);                    
                    var oUIModel = new JSONModel({
                        numReqs: oLen
                    });
                    var oView = this.getView();
                    oView.setModel(oUIModel,"ui");
                    oView.setModel(oReqs,"reqs");
                    var oReqID = oView.byId("reqNum");
                    oView.byId("reqtable").sort(oView.byId("reqNum"), library.SortOrder.Descending);
                }) 
            },
            dateAsURIParam: function (vValue) {
                return vValue ? ODataUtils.formatValue(vValue, "Edm.DateTime") : "<null>";
            }

        });
    });
