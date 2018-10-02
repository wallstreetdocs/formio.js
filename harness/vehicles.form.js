window.forms = window.forms || {};
window.forms.vehicletest = {
	"type"            : "form",
	"tags"            : [],
	"owner"           : "5b451cf315e1b6664f4e73fc",
	"components"      : [
		{
			"autofocus"           : false,
			"input"               : true,
			"tableView"           : true,
			"inputType"           : "radio",
			"label"               : "Radio",
			"key"                 : "vehicle",
			"values"              : [
				{
					"value"   : "boat",
					"label"   : "Boat",
					"shortcut": ""
				},
				{
					"value"   : "car",
					"label"   : "Car",
					"shortcut": ""
				}
			],
			"defaultValue"        : "",
			"protected"           : false,
			"fieldSet"            : false,
			"persistent"          : true,
			"hidden"              : false,
			"clearOnHide"         : true,
			"validate"            : {
				"required"     : false,
				"custom"       : "",
				"customPrivate": false
			},
			"type"                : "radio",
			"labelPosition"       : "top",
			"optionsLabelPosition": "right",
			"tags"                : [],
			"conditional"         : {
				"show": "",
				"when": null,
				"eq"  : ""
			},
			"properties"          : {},
			"lockKey"             : true
		},
		{
			"clearOnHide"  : true,
			"input"        : true,
			"tableView"    : true,
			"key"          : "wheels",
			"src"          : "",
			"reference"    : true,
			"form"         : "5bb258d7c7d26a693a0aa327",
			"components"   : [
				{
					"autofocus"        : false,
					"input"            : true,
					"tableView"        : true,
					"label"            : "Choose Wheels",
					"key"              : "chooseWheels",
					"placeholder"      : "",
					"data"             : {
						"values"  : [
							{
								"value": "0",
								"label": "None"
							},
							{
								"value": "2",
								"label": "Twin"
							},
							{
								"value": "4",
								"label": "Quad"
							}
						],
						"json"    : "",
						"url"     : "",
						"resource": "",
						"custom"  : ""
					},
					"dataSrc"          : "values",
					"valueProperty"    : "",
					"defaultValue"     : "",
					"refreshOn"        : "",
					"filter"           : "",
					"authenticate"     : false,
					"template"         : "<span>{{ item.label }}</span>",
					"multiple"         : false,
					"protected"        : false,
					"unique"           : false,
					"persistent"       : true,
					"hidden"           : false,
					"clearOnHide"      : true,
					"validate"         : {
						"required": false
					},
					"type"             : "select",
					"labelPosition"    : "top",
					"tags"             : [],
					"conditional"      : {
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties"       : {},
					"lockKey"          : true,
					"customConditional": "show=(WSDFormIO.getValue('data.vehicle') === 'car')"
				},
				{
					"autofocus"       : false,
					"input"           : true,
					"label"           : "Submit",
					"tableView"       : false,
					"key"             : "submit",
					"size"            : "md",
					"leftIcon"        : "",
					"rightIcon"       : "",
					"block"           : false,
					"action"          : "submit",
					"disableOnInvalid": false,
					"theme"           : "primary",
					"type"            : "button"
				}
			],
			"path"         : "",
			"label"        : "Wheels",
			"protected"    : false,
			"unique"       : false,
			"persistent"   : true,
			"type"         : "form",
			"project"      : "devbarry-tradeforms-v3",
			"labelPosition": "top",
			"tags"         : [],
			"conditional"  : {
				"show": "",
				"when": null,
				"eq"  : ""
			},
			"properties"   : {}
		},
		{
			"clearOnHide"  : true,
			"input"        : true,
			"tableView"    : true,
			"key"          : "windows",
			"src"          : "",
			"reference"    : true,
			"form"         : "5bb25910a0f3b43b946af8b6",
			"components"   : [
				{
					"autofocus"    : false,
					"input"        : true,
					"tableView"    : true,
					"label"        : "Choose Windows",
					"key"          : "chooseWindows",
					"placeholder"  : "",
					"data"         : {
						"values"  : [
							{
								"value": "0",
								"label": "None"
							},
							{
								"value": "2",
								"label": "Twin"
							},
							{
								"value": "4",
								"label": "Quad"
							}
						],
						"json"    : "",
						"url"     : "",
						"resource": "",
						"custom"  : ""
					},
					"dataSrc"      : "values",
					"valueProperty": "",
					"defaultValue" : "",
					"refreshOn"    : "",
					"filter"       : "",
					"authenticate" : false,
					"template"     : "<span>{{ item.label }}</span>",
					"multiple"     : false,
					"protected"    : false,
					"unique"       : false,
					"persistent"   : true,
					"hidden"       : false,
					"clearOnHide"  : true,
					"validate"     : {
						"required": false
					},
					"type"         : "select",
					"labelPosition": "top",
					"tags"         : [],
					"conditional"  : {
						"json": {
							">": [
								{
									"method": [
										{ "var": "WSDFormIO" },
										"getValue",
										[ "data.wheels.data.chooseWheels" ]
									]
								},
								2
							]
						}
					},
					"properties"   : {}
				},
				{
					"autofocus"       : false,
					"input"           : true,
					"label"           : "Submit",
					"tableView"       : false,
					"key"             : "submit",
					"size"            : "md",
					"leftIcon"        : "",
					"rightIcon"       : "",
					"block"           : false,
					"action"          : "submit",
					"disableOnInvalid": false,
					"theme"           : "primary",
					"type"            : "button"
				}
			],
			"path"         : "",
			"label"        : "Windows",
			"protected"    : false,
			"unique"       : false,
			"persistent"   : true,
			"type"         : "form",
			"project"      : "devbarry-tradeforms-v3",
			"labelPosition": "top",
			"tags"         : [],
			"conditional"  : {
				"show": "",
				"when": null,
				"eq"  : ""
			},
			"properties"   : {},
			"lockKey"      : true
		},
		{
			"autofocus"       : false,
			"input"           : true,
			"label"           : "Submit",
			"tableView"       : false,
			"key"             : "submit",
			"size"            : "md",
			"leftIcon"        : "",
			"rightIcon"       : "",
			"block"           : false,
			"action"          : "submit",
			"disableOnInvalid": false,
			"theme"           : "primary",
			"type"            : "button"
		}
	],
	"revisions"       : "",
	"_vid"            : 0,
	"_id"             : "5bb25b01a0f3b4fb116af8bf",
	"title"           : "Vehicles Test",
	"display"         : "form",
	"access"          : [
		{
			"roles": [
				"5baa556db0b8fd17689c8428",
				"5baa556db0b8fd86519c8429",
				"5baa556db0b8fdfd759c842a"
			],
			"type" : "read_all"
		}
	],
	"submissionAccess": [],
	"settings"        : {},
	"name"            : "vehiclesTest",
	"path"            : "vehiclestest",
	"project"         : "5baa556db0b8fd41aa9c8427",
	"created"         : "2018-10-01T17:36:01.671Z",
	"modified"        : "2018-10-01T17:36:01.687Z",
	"machineName"     : "devbarry-tradeforms-v3:vehiclesTest"
};