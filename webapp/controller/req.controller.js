sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "sap/ui/table/library",
    "sap/m/DynamicDateUtil",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,library,DynamicDateUtil,Filter, FilterOperator) {
        "use strict";

        return Controller.extend("tc.requisitions.controller.req", {
            onInit: function () {
            var oView = this.getView();
            //Upload the model from API call or local test data
//			oView.setModel(this.initDataModel(),"reqs");
            oView.setModel(this.initDataModel());
            // Initial Sorting
            var oReqID = this.oView.byId("reqNum");
			oView.byId("table").sort(oReqID, library.SortOrder.Ascending);

            },
            initDataModel : function() {
                console.log("in initDataModel");
                var oReqs = new JSONModel();
                // Local Test requires a prefix '/' whereas using the destination need to remove the '/' ??
                // Version to use when deployed to BTP using a Destination
//                var URI = "PurchaseRequisition?$top=10000&$filter=CreationDate gt datetime'2023-03-21T00:00:00.000' and Material eq 'MZ-TG-0011'"
                var URI = "/PurchaseRequisition?$top=10000&$filter=CreationDate gt datetime'2023-03-21T00:00:00.000' and Material eq 'MZ-TG-0011'"
//                var URI = "../testData/requisitionListSampleData.json";   // Local Test Data
                var oPromise = oReqs.loadData(URI);
                oPromise.then( () => {
                    //How many items
                    var oLen = oReqs.getData().length;
                    console.log("length = "+oLen);                    
//                    console.log("JSON Model = "+oReqs.getJSON());
                    var oUIModel = new JSONModel({
                        numReqs: oLen
                    });
                    this.getView().setModel(oUIModel,"ui");
               });
               return oReqs;
            },
            onDynamicDateChange: function(oEvent) {
                var oValue = oEvent.getParameter("value");
                // console.log("on change check event value "+ oValue);
                if (oValue != null) {
                    var aDates = DynamicDateUtil.toDates(oValue);
                    var fromDate = (new Date(aDates[0])).toISOString();
                    var toDate = (new Date(aDates[1])).toISOString();
                    console.log("fromX="+ fromDate);
                    console.log("toX="+ toDate);		                
            }
            
 
            },
            loadDataModel: function(fromDate, toDate) {


            }

        });
    });
