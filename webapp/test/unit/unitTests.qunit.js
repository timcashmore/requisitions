/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"tc/requisitions/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
