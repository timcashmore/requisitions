/*global QUnit*/

sap.ui.define([
	"tc/requisitions/controller/req.controller"
], function (Controller) {
	"use strict";

	QUnit.module("req Controller");

	QUnit.test("I should test the req controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
