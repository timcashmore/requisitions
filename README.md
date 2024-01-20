## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Fri Oct 13 2023 16:45:20 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.11.2|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>None|
|**Service URL**<br>N/A
|**Module Name**<br>requisitions|
|**Application Title**<br>API Requisitions|
|**Namespace**<br>tc|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.119.1|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## requisitions

API LIst Requisistions  This is based upon SAP Demo Scenarion 18352

https://content-discovery.int.sap/assets/demo-store/18352

NB: Switch between API_DEMO and API_DEMO_TEST

Added new destination for using local Integration Suite as part of demonstrating the DevOps process

Switch ui5.yaml to contents of ui5 Original Dest.yaml for original APIDEMO_TEST

New Destination is REQ_CPI (switch in xsapp.json file, original APIDEMO_TEST).

Also, .env file for client id and client secret from cpi service for loacl testing

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


