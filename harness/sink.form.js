window.forms = window.forms || {};
window.forms.kitchensink = {
	"type"            : "form",
	"tags"            : [],
	"owner"           : "5b451cf315e1b6664f4e73fc",
	"components"      : [
		{
			"type"       : "panel",
			"title"      : "Data Grids",
			"components" : [
				{
					"autofocus"         : false,
					"input"             : true,
					"tree"              : true,
					"components"        : [
						{
							"autofocus"    : false,
							"input"        : true,
							"inputType"    : "checkbox",
							"tableView"    : true,
							"label"        : "Want one?",
							"dataGridLabel": true,
							"key"          : "dataGridWantone",
							"defaultValue" : false,
							"protected"    : false,
							"persistent"   : true,
							"hidden"       : false,
							"name"         : "",
							"value"        : "",
							"clearOnHide"  : false,
							"validate"     : {
								"required": false
							},
							"type"         : "checkbox",
							"labelPosition": "right",
							"inDataGrid"   : true,
							"hideLabel"    : false,
							"tags"         : [],
							"conditional"  : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"   : {
								"xpath": "/item/wantOne"
							}
						},
						{
							"autofocus"    : false,
							"input"        : true,
							"tableView"    : true,
							"inputType"    : "number",
							"label"        : "Absolute Number",
							"key"          : "dataGridAbsoluteNumber",
							"placeholder"  : "",
							"prefix"       : "",
							"suffix"       : "",
							"defaultValue" : "",
							"protected"    : false,
							"persistent"   : true,
							"hidden"       : false,
							"clearOnHide"  : true,
							"validate"     : {
								"required": false,
								"min"     : "",
								"max"     : "",
								"step"    : "any",
								"integer" : "",
								"multiple": "",
								"custom"  : ""
							},
							"type"         : "number",
							"inDataGrid"   : true,
							"labelPosition": "top",
							"tags"         : [],
							"conditional"  : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"   : {
								"xpath": "/item/absoluteNumber"
							},
							"dataGridLabel": true
						},
						{
							"autofocus"    : false,
							"input"        : true,
							"tableView"    : true,
							"label"        : "Choose a thing",
							"key"          : "dataGridChooseathing",
							"placeholder"  : "",
							"data"         : {
								"values"  : [
									{
										"value": "1",
										"label": "Thing One"
									},
									{
										"value": "2",
										"label": "Thing Two"
									},
									{
										"value": "3",
										"label": "Thing Three"
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
								"required": true
							},
							"type"         : "select",
							"inDataGrid"   : true,
							"labelPosition": "top",
							"tags"         : [],
							"conditional"  : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"   : {
								"xpath": "/item/chooseThing"
							},
							"dataGridLabel": true,
							"lockKey"      : true
						},
						{
							"autofocus"         : false,
							"input"             : true,
							"tree"              : true,
							"components"        : [
								{
									"autofocus"    : false,
									"input"        : true,
									"tableView"    : true,
									"inputType"    : "text",
									"inputMask"    : "",
									"label"        : "Name",
									"key"          : "dataGridThingVariantName",
									"placeholder"  : "",
									"prefix"       : "",
									"suffix"       : "",
									"multiple"     : false,
									"defaultValue" : "",
									"protected"    : false,
									"unique"       : false,
									"persistent"   : true,
									"hidden"       : false,
									"clearOnHide"  : true,
									"spellcheck"   : true,
									"validate"     : {
										"required"     : false,
										"minLength"    : "",
										"maxLength"    : "",
										"pattern"      : "",
										"custom"       : "",
										"customPrivate": false
									},
									"conditional"  : {
										"show": "",
										"when": null,
										"eq"  : ""
									},
									"type"         : "textfield",
									"inDataGrid"   : true,
									"labelPosition": "top",
									"inputFormat"  : "plain",
									"tags"         : [],
									"properties"   : {
										"xpath": "/item/thingVariantName"
									},
									"lockKey"      : true
								}
							],
							"tableView"         : true,
							"label"             : "Thing Variant",
							"key"               : "dataGridThingVariant",
							"protected"         : false,
							"persistent"        : true,
							"hidden"            : false,
							"clearOnHide"       : true,
							"type"              : "datagrid",
							"addAnotherPosition": "bottom",
							"inDataGrid"        : true,
							"tags"              : [],
							"conditional"       : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"        : {
								"xpath": "/item/thingVariant"
							}
						}
					],
					"tableView"         : true,
					"label"             : "Data Grid",
					"key"               : "dataGrid",
					"protected"         : false,
					"persistent"        : true,
					"hidden"            : false,
					"clearOnHide"       : true,
					"type"              : "datagrid",
					"addAnotherPosition": "bottom",
					"tags"              : [],
					"conditional"       : {
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties"        : {
						"xpath"                     : "/priip/data/things",
						"computed_repeatable_target": "computedRepeatableComputedThings,computedRepeatablePanel2TextConcatenation"
					},
					"customClass"       : "nested-grid-3-field-1-grid"
				},
				{
					"autofocus"         : false,
					"input"             : true,
					"tree"              : true,
					"components"        : [
						{
							"autofocus"    : false,
							"input"        : true,
							"tableView"    : true,
							"inputType"    : "number",
							"label"        : "Fixed Number",
							"key"          : "page1DataGridwithAdditionalFieldsFixedNumber",
							"placeholder"  : "",
							"prefix"       : "",
							"suffix"       : "",
							"defaultValue" : "",
							"protected"    : false,
							"persistent"   : true,
							"hidden"       : false,
							"clearOnHide"  : true,
							"validate"     : {
								"required": false,
								"min"     : "",
								"max"     : "",
								"step"    : "any",
								"integer" : "",
								"multiple": "",
								"custom"  : ""
							},
							"type"         : "number",
							"inDataGrid"   : true,
							"labelPosition": "top",
							"tags"         : [],
							"conditional"  : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"   : {
								"xpath": "/item/fixednumber"
							},
							"dataGridLabel": true
						},
						{
							"autofocus"    : false,
							"input"        : true,
							"tableView"    : true,
							"inputType"    : "text",
							"inputMask"    : "",
							"label"        : "Fixed: Text",
							"key"          : "page1DataGridwithAdditionalFieldsFixedText",
							"placeholder"  : "",
							"prefix"       : "",
							"suffix"       : "",
							"multiple"     : false,
							"defaultValue" : "",
							"protected"    : false,
							"unique"       : false,
							"persistent"   : true,
							"hidden"       : false,
							"clearOnHide"  : true,
							"spellcheck"   : true,
							"validate"     : {
								"required"     : false,
								"minLength"    : "",
								"maxLength"    : "",
								"pattern"      : "",
								"custom"       : "",
								"customPrivate": false
							},
							"conditional"  : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"type"         : "textfield",
							"inDataGrid"   : true,
							"labelPosition": "top",
							"inputFormat"  : "plain",
							"tags"         : [],
							"properties"   : {
								"xpath": "/item/fixedtext"
							},
							"dataGridLabel": true
						},
						{
							"autofocus"        : false,
							"input"            : true,
							"inputType"        : "checkbox",
							"tableView"        : true,
							"label"            : "Additional: Check This",
							"dataGridLabel"    : true,
							"key"              : "page1DataGridwithAdditionalFieldsAdditionalCheckThis",
							"defaultValue"     : false,
							"protected"        : false,
							"persistent"       : true,
							"hidden"           : false,
							"name"             : "",
							"value"            : "",
							"clearOnHide"      : true,
							"validate"         : {
								"required": false
							},
							"type"             : "checkbox",
							"labelPosition"    : "right",
							"inDataGrid"       : true,
							"tags"             : [],
							"conditional"      : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"       : {
								"xpath": "/item/additionalcheckthis"
							},
							"hideLabel"        : false,
							"customClass"      : "",
							"customConditional": "var fld = data['additionalFieldsToggle_' + instance.rowIndex];\nshow = !!fld;"
						},
						{
							"autofocus"        : false,
							"input"            : true,
							"tableView"        : true,
							"label"            : "Additional: Choose That",
							"key"              : "page1DataGridwithAdditionalFieldsAdditionalChooseThat",
							"placeholder"      : "",
							"data"             : {
								"values"  : [
									{
										"value": "foo",
										"label": "Foo"
									},
									{
										"value": "bar",
										"label": "Bar"
									},
									{
										"value": "bollocks",
										"label": "Bollocks"
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
							"inDataGrid"       : true,
							"labelPosition"    : "top",
							"tags"             : [],
							"conditional"      : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"       : {
								"xpath": "/item/additionalchoosethat"
							},
							"dataGridLabel"    : true,
							"customClass"      : "",
							"customConditional": "var fld = data['additionalFieldsToggle_' + instance.rowIndex];\nshow = !!fld;"
						},
						{
							"autofocus"       : false,
							"input"           : true,
							"label"           : "Toggle Additional Fields",
							"tableView"       : false,
							"key"             : "page1DataGridwithAdditionalFieldsAddn",
							"size"            : "md",
							"leftIcon"        : "glyphicon glyphicon-plus",
							"rightIcon"       : "",
							"block"           : false,
							"action"          : "custom",
							"disableOnInvalid": false,
							"theme"           : "default",
							"type"            : "button",
							"inDataGrid"      : true,
							"tags"            : [],
							"conditional"     : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"      : {},
							"custom"          : "WSDFormIO.toggleAdditionalGridFields( 'additionalFieldsToggle', instance )",
							"lockKey"         : true
						}
					],
					"tableView"         : true,
					"label"             : "Data Grid with Additional Fields",
					"key"               : "page1DataGridwithAdditionalFields",
					"protected"         : false,
					"persistent"        : true,
					"hidden"            : false,
					"clearOnHide"       : true,
					"type"              : "datagrid",
					"addAnotherPosition": "bottom",
					"tags"              : [],
					"conditional"       : {
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties"        : {
						"xpath": "/priip/data/gridwithaddnfields"
					},
					"customClass"       : "expanded-grid expanded-grid-2-field-2-expanded",
					"addAnother"        : "Add New",
					"hideLabel"         : false
				}
			],
			"input"      : false,
			"key"        : "page1",
			"clearOnHide": false,
			"theme"      : "default",
			"tableView"  : false,
			"hideLabel"  : false,
			"breadcrumb" : "default",
			"tags"       : [],
			"conditional": {
				"show": "",
				"when": null,
				"eq"  : ""
			},
			"properties" : {}
		},
		{
			"type"       : "panel",
			"title"      : "Sub Forms",
			"components" : [
				{
					"key"        : "page2Content",
					"input"      : false,
					"html"       : "<p>Yeh <em>I know</em> - we dont use em. But.. <em>just</em> in case.. :)</p>\n",
					"type"       : "content",
					"tags"       : [],
					"conditional": {
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties" : {}
				},
				{
					"clearOnHide"  : true,
					"input"        : true,
					"tableView"    : true,
					"key"          : "page2Thing1",
					"src"          : "",
					"reference"    : true,
					"form"         : "5bbf09c583a0cbd7239512a4",
					"path"         : "",
					"label"        : "Thing 1",
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
				}
			],
			"input"      : false,
			"key"        : "subForms",
			"clearOnHide": false,
			"theme"      : "default",
			"tableView"  : false,
			"hideLabel"  : false,
			"breadcrumb" : "default",
			"tags"       : [],
			"conditional": {
				"show": "",
				"when": null,
				"eq"  : ""
			},
			"properties" : {},
			"lockKey"    : true
		},
		{
			"type"       : "panel",
			"title"      : "Computed Repeatables",
			"components" : [
				{
					"clearOnHide": false,
					"key"        : "computedRepeatablePanel",
					"input"      : false,
					"title"      : "First Computed Repeatable",
					"theme"      : "default",
					"tableView"  : false,
					"components" : [
						{
							"autofocus"    : false,
							"input"        : true,
							"tableView"    : true,
							"inputType"    : "number",
							"label"        : "Fixed Number",
							"key"          : "computedRepeatableFixedNumber",
							"placeholder"  : "",
							"prefix"       : "",
							"suffix"       : "",
							"defaultValue" : "",
							"protected"    : false,
							"persistent"   : true,
							"hidden"       : false,
							"clearOnHide"  : true,
							"validate"     : {
								"required": true,
								"min"     : 0,
								"max"     : 100,
								"step"    : "any",
								"integer" : "",
								"multiple": "",
								"custom"  : ""
							},
							"type"         : "number",
							"labelPosition": "top",
							"tags"         : [],
							"conditional"  : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"   : {
								"xpath": "/priip/data/fixedNumber"
							}
						},
						{
							"autofocus"         : false,
							"input"             : true,
							"tree"              : true,
							"components"        : [
								{
									"autofocus"     : false,
									"input"         : true,
									"tableView"     : true,
									"inputType"     : "number",
									"label"         : "Relative Number",
									"key"           : "computedRepeatableComputedThingsRelativeNumber",
									"placeholder"   : "",
									"prefix"        : "",
									"suffix"        : "",
									"defaultValue"  : "",
									"protected"     : false,
									"persistent"    : true,
									"hidden"        : false,
									"clearOnHide"   : true,
									"validate"      : {
										"required": true,
										"min"     : 0,
										"max"     : 100,
										"step"    : "any",
										"integer" : "",
										"multiple": "",
										"custom"  : ""
									},
									"type"          : "number",
									"inDataGrid"    : true,
									"labelPosition" : "top",
									"tags"          : [],
									"conditional"   : {
										"show": "",
										"when": null,
										"eq"  : ""
									},
									"properties"    : {
										"xpath": "/item/relativeNumber"
									},
									"calculateValue": "value = WSDFormIO.getGridRowValue('data.dataGrid', instance, 'dataGridAbsoluteNumber', 0) * ( data. computedRepeatableFixedNumber || 0)"
								},
								{
									"autofocus"    : false,
									"input"        : true,
									"tableView"    : true,
									"inputType"    : "text",
									"inputMask"    : "",
									"label"        : "Arbitrary Stuff",
									"key"          : "computedRepeatableComputedThingsArbitraryStuff",
									"placeholder"  : "",
									"prefix"       : "",
									"suffix"       : "",
									"multiple"     : false,
									"defaultValue" : "",
									"protected"    : false,
									"unique"       : false,
									"persistent"   : true,
									"hidden"       : false,
									"clearOnHide"  : true,
									"spellcheck"   : true,
									"validate"     : {
										"required"     : false,
										"minLength"    : "",
										"maxLength"    : "",
										"pattern"      : "",
										"custom"       : "",
										"customPrivate": false
									},
									"conditional"  : {
										"show": "",
										"when": null,
										"eq"  : ""
									},
									"type"         : "textfield",
									"inDataGrid"   : true,
									"labelPosition": "top",
									"inputFormat"  : "plain",
									"tags"         : [],
									"properties"   : {
										"xpath": "/item/arbstuff"
									}
								}
							],
							"tableView"         : true,
							"label"             : "Computed Things",
							"key"               : "computedRepeatableComputedThings",
							"protected"         : false,
							"persistent"        : true,
							"hidden"            : false,
							"clearOnHide"       : true,
							"type"              : "datagrid",
							"addAnotherPosition": "bottom",
							"tags"              : [],
							"conditional"       : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"        : {
								"xpath": "/priip/data/computedThings"
							},
							"lockKey"           : true,
							"disabled"          : false,
							"validate"          : {
								"minLength": 0,
								"maxLength": null
							},
							"customClass"       : "formio-data-grid-disable-buttons"
						}
					],
					"type"       : "panel",
					"breadcrumb" : "default",
					"hideLabel"  : false,
					"tags"       : [],
					"conditional": {
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties" : {},
					"lockKey"    : true
				},
				{
					"clearOnHide": false,
					"key"        : "computedRepeatablePanel2",
					"input"      : false,
					"title"      : "Second Computed Repeatable",
					"theme"      : "default",
					"tableView"  : false,
					"components" : [
						{
							"autofocus"    : false,
							"input"        : true,
							"tableView"    : true,
							"inputType"    : "text",
							"inputMask"    : "",
							"label"        : "Prefix",
							"key"          : "computedRepeatablePanel2Prefix",
							"placeholder"  : "",
							"prefix"       : "",
							"suffix"       : "",
							"multiple"     : false,
							"defaultValue" : "",
							"protected"    : false,
							"unique"       : false,
							"persistent"   : true,
							"hidden"       : false,
							"clearOnHide"  : true,
							"spellcheck"   : true,
							"validate"     : {
								"required"     : false,
								"minLength"    : "",
								"maxLength"    : "",
								"pattern"      : "",
								"custom"       : "",
								"customPrivate": false
							},
							"conditional"  : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"type"         : "textfield",
							"labelPosition": "top",
							"inputFormat"  : "plain",
							"tags"         : [],
							"properties"   : {
								"xpath": "/priip/data/textPrefix"
							},
							"lockKey"      : true
						},
						{
							"autofocus"         : false,
							"input"             : true,
							"tree"              : true,
							"components"        : [
								{
									"autofocus"     : false,
									"input"         : true,
									"tableView"     : true,
									"inputType"     : "text",
									"inputMask"     : "",
									"label"         : "Output Text",
									"key"           : "computedRepeatablePanel2TextConcatenationOutputText",
									"placeholder"   : "",
									"prefix"        : "",
									"suffix"        : "",
									"multiple"      : false,
									"defaultValue"  : "",
									"protected"     : false,
									"unique"        : false,
									"persistent"    : true,
									"hidden"        : false,
									"clearOnHide"   : true,
									"spellcheck"    : true,
									"validate"      : {
										"required"     : false,
										"minLength"    : "",
										"maxLength"    : "",
										"pattern"      : "",
										"custom"       : "",
										"customPrivate": false
									},
									"conditional"   : {
										"show": "",
										"when": null,
										"eq"  : ""
									},
									"type"          : "textfield",
									"inDataGrid"    : true,
									"labelPosition" : "top",
									"inputFormat"   : "plain",
									"tags"          : [],
									"properties"    : {
										"xpath": "/item/computedText"
									},
									"calculateValue": "value = ( data.computedRepeatablePanel2Prefix || '').length > 0 \n  ? data.computedRepeatablePanel2Prefix + WSDFormIO.getGridRowValue('data.dataGrid', instance, 'dataGridChooseathing', '') : ''"
								}
							],
							"tableView"         : true,
							"label"             : "Text Concatenation",
							"key"               : "computedRepeatablePanel2TextConcatenation",
							"protected"         : false,
							"persistent"        : true,
							"hidden"            : false,
							"clearOnHide"       : true,
							"type"              : "datagrid",
							"addAnotherPosition": "bottom",
							"tags"              : [],
							"conditional"       : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"        : {
								"xpath": "/priip/data/computedTexts"
							},
							"lockKey"           : true,
							"customClass"       : "formio-data-grid-disable-buttons"
						}
					],
					"type"       : "panel",
					"breadcrumb" : "default",
					"hideLabel"  : false,
					"tags"       : [],
					"conditional": {
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties" : {}
				}
			],
			"input"      : false,
			"key"        : "computedRepeatable",
			"clearOnHide": false,
			"theme"      : "default",
			"tableView"  : false,
			"hideLabel"  : false,
			"breadcrumb" : "default",
			"tags"       : [],
			"conditional": {
				"show": "",
				"when": null,
				"eq"  : ""
			},
			"properties" : {},
			"lockKey"    : true
		},
		{
			"type"       : "panel",
			"title"      : "Calculated Values",
			"components" : [
				{
					"key"        : "calculatedValuesContent",
					"input"      : false,
					"html"       : "<p>valueAdjust allows a displayed form value to be adjusted when it is converted into the trade XML. Use this in the field properties.</p>\n\n<p><strong><code>key&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;value</code></strong></p>\n\n<p><code>valueAdjust&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[operator], [adjustment factor]</code></p>\n\n<p><code>valueAdjust&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/, 100</code></p>\n\n<p><code>valueAdjust&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;*, 100</code></p>\n\n<p><code>valueAdjust&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;+, 100</code></p>\n\n<p><code>valueAdjust&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-, 100</code></p>\n",
					"type"       : "content",
					"tags"       : [],
					"conditional": {
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties" : {}
				},
				{
					"autofocus"    : false,
					"input"        : true,
					"tableView"    : true,
					"inputType"    : "number",
					"label"        : "Value Adjust",
					"key"          : "calculatedValuesValueAdjust",
					"placeholder"  : "",
					"prefix"       : "",
					"suffix"       : "",
					"defaultValue" : "",
					"protected"    : false,
					"persistent"   : true,
					"hidden"       : false,
					"clearOnHide"  : true,
					"validate"     : {
						"required": false,
						"min"     : "",
						"max"     : "",
						"step"    : "any",
						"integer" : "",
						"multiple": "",
						"custom"  : ""
					},
					"type"         : "number",
					"labelPosition": "top",
					"tags"         : [],
					"conditional"  : {
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties"   : {
						"xpath"      : "/priip/data/calculatedValues/valueAdjust",
						"valueAdjust": "/, 100"
					},
					"lockKey"      : true
				}
			],
			"input"      : false,
			"key"        : "calculatedValues",
			"clearOnHide": false,
			"theme"      : "default",
			"tableView"  : false,
			"breadcrumb" : "default",
			"tags"       : [],
			"conditional": {
				"show": "",
				"when": null,
				"eq"  : ""
			},
			"properties" : {},
			"lockKey"    : true,
			"hideLabel"  : false
		},
		{
			"type"       : "panel",
			"title"      : "Grid Updater",
			"components" : [
				{
					"clearOnHide": false,
					"label"      : "Columns",
					"input"      : false,
					"tableView"  : false,
					"key"        : "gridUpdaterColumns",
					"columns"    : [
						{
							"components": [
								{
									"autofocus"           : false,
									"input"               : true,
									"tableView"           : true,
									"inputType"           : "radio",
									"label"               : "Certified Lunatic?",
									"key"                 : "gridUpdaterColumnsCertifiedLunatic",
									"values"              : [
										{
											"value"   : "yes",
											"label"   : "Yes",
											"shortcut": ""
										},
										{
											"value"   : "no",
											"label"   : "No",
											"shortcut": ""
										},
										{
											"value"   : "unsure",
											"label"   : "Unsure",
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
									"labelPosition"       : "left-right",
									"optionsLabelPosition": "right",
									"tags"                : [],
									"conditional"         : {
										"show": "",
										"when": null,
										"eq"  : ""
									},
									"properties"          : {
										"grid-updater-target-grid" : "gridUpdaterDataGrid",
										"grid-updater-target-field": "gridUpdaterDataGridCertifiedLunatic"
									},
									"labelWidth"          : 30,
									"labelMargin"         : 3,
									"hideLabel"           : false
								}
							],
							"width"     : 4,
							"offset"    : 0,
							"push"      : 0,
							"pull"      : 0
						},
						{
							"components": [
								{
									"autofocus"    : false,
									"input"        : true,
									"tableView"    : true,
									"inputType"    : "number",
									"label"        : "Percentage Lunatic",
									"key"          : "gridUpdaterColumnsPercentageLunatic",
									"placeholder"  : "",
									"prefix"       : "",
									"suffix"       : "%",
									"defaultValue" : "",
									"protected"    : false,
									"persistent"   : true,
									"hidden"       : false,
									"clearOnHide"  : true,
									"validate"     : {
										"required"     : true,
										"min"          : 0,
										"max"          : 100,
										"step"         : "any",
										"integer"      : "",
										"multiple"     : "",
										"custom"       : "",
										"customMessage": "Percentage Value purlease?"
									},
									"type"         : "number",
									"labelPosition": "top",
									"tags"         : [],
									"conditional"  : {
										"show": "",
										"when": null,
										"eq"  : ""
									},
									"properties"   : {
										"grid-updater-target-grid" : "gridUpdaterDataGrid",
										"grid-updater-target-field": "gridUpdaterNumber"
									},
									"description"  : ""
								}
							],
							"width"     : 4,
							"offset"    : 0,
							"push"      : 0,
							"pull"      : 0
						},
						{
							"components": [
								{
									"autofocus"           : false,
									"input"               : true,
									"tableView"           : true,
									"inputType"           : "radio",
									"label"               : "Mapper Function",
									"key"                 : "gridUpdaterColumnsMapperFunction",
									"values"              : [
										{
											"value"   : "business",
											"label"   : "Business",
											"shortcut": ""
										},
										{
											"value"   : "calendar",
											"label"   : "Calendar",
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
									"properties"          : {
										"grid-updater-target-grid"              : "gridUpdaterDataGrid",
										"grid-updater-target-field"             : "gridUpdaterDataGridMapperDateTarget",
										"grid-updater-mapper-function"          : "gridMapperAdjustForBusinessDays",
										"grid-updater-mapper-params-date_offset": "gridUpdaterColumnsDateOffsetDays"
									},
									"tooltip"             : "Applied to each row",
									"lockKey"             : true
								},
								{
									"autofocus"    : false,
									"input"        : true,
									"tableView"    : true,
									"inputType"    : "number",
									"label"        : "Date Offset (Days)",
									"key"          : "gridUpdaterColumnsDateOffsetDays",
									"placeholder"  : "",
									"prefix"       : "",
									"suffix"       : "",
									"defaultValue" : "5",
									"protected"    : false,
									"persistent"   : true,
									"hidden"       : false,
									"clearOnHide"  : true,
									"validate"     : {
										"required": true,
										"min"     : 1,
										"max"     : 31,
										"step"    : "any",
										"integer" : "",
										"multiple": "",
										"custom"  : ""
									},
									"type"         : "number",
									"labelPosition": "top",
									"tags"         : [],
									"conditional"  : {
										"show": "",
										"when": null,
										"eq"  : ""
									},
									"properties"   : {
										"change-trigger-target": "gridUpdaterColumnsMapperFunction"
									},
									"lockKey"      : true
								}
							],
							"width"     : 4,
							"offset"    : 0,
							"push"      : 0,
							"pull"      : 0
						}
					],
					"type"       : "columns",
					"hideLabel"  : true,
					"tags"       : [],
					"conditional": {
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties" : {}
				},
				{
					"autofocus"         : false,
					"input"             : true,
					"tree"              : true,
					"components"        : [
						{
							"autofocus"           : false,
							"input"               : true,
							"tableView"           : true,
							"inputType"           : "radio",
							"label"               : "Certified Lunatic?",
							"key"                 : "gridUpdaterDataGridCertifiedLunatic",
							"values"              : [
								{
									"value"   : "yes",
									"label"   : "Yes",
									"shortcut": ""
								},
								{
									"value"   : "no",
									"label"   : "No",
									"shortcut": ""
								},
								{
									"value"   : "unsure",
									"label"   : "Unsure",
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
							"inDataGrid"          : true,
							"labelPosition"       : "top",
							"optionsLabelPosition": "right",
							"tags"                : [],
							"conditional"         : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"          : {},
							"dataGridLabel"       : true,
							"lockKey"             : true
						},
						{
							"autofocus"    : false,
							"input"        : true,
							"tableView"    : true,
							"inputType"    : "number",
							"label"        : "Percentage Lunatic",
							"key"          : "gridUpdaterNumber",
							"placeholder"  : "",
							"prefix"       : "",
							"suffix"       : "%",
							"defaultValue" : "",
							"protected"    : false,
							"persistent"   : true,
							"hidden"       : false,
							"clearOnHide"  : true,
							"validate"     : {
								"required"     : true,
								"min"          : 0,
								"max"          : 100,
								"step"         : "any",
								"integer"      : "",
								"multiple"     : "",
								"custom"       : "",
								"customMessage": "% you lunatic!"
							},
							"type"         : "number",
							"labelPosition": "top",
							"tags"         : [],
							"conditional"  : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"   : {},
							"inDataGrid"   : true,
							"dataGridLabel": true,
							"lockKey"      : true
						},
						{
							"autofocus"     : false,
							"input"         : true,
							"tableView"     : true,
							"label"         : "Mapper (Date Target)",
							"key"           : "gridUpdaterDataGridMapperDateTarget",
							"placeholder"   : "",
							"format"        : "yyyy-MM-dd",
							"enableDate"    : true,
							"enableTime"    : false,
							"defaultDate"   : "",
							"datepickerMode": "day",
							"datePicker"    : {
								"showWeeks"     : true,
								"startingDay"   : 0,
								"initDate"      : "",
								"minMode"       : "day",
								"maxMode"       : "year",
								"yearRows"      : 4,
								"yearColumns"   : 5,
								"minDate"       : null,
								"maxDate"       : null,
								"datepickerMode": "day"
							},
							"timePicker"    : {
								"hourStep"     : 1,
								"minuteStep"   : 1,
								"showMeridian" : true,
								"readonlyInput": false,
								"mousewheel"   : true,
								"arrowkeys"    : true
							},
							"protected"     : false,
							"persistent"    : true,
							"hidden"        : false,
							"clearOnHide"   : true,
							"validate"      : {
								"required": false,
								"custom"  : ""
							},
							"type"          : "datetime",
							"inDataGrid"    : true,
							"labelPosition" : "top",
							"tags"          : [],
							"conditional"   : {
								"show": "",
								"when": null,
								"eq"  : ""
							},
							"properties"    : {},
							"hideLabel"     : true,
							"dataGridLabel" : true,
							"calculateValue": "",
							"lockKey"       : true
						}
					],
					"tableView"         : true,
					"label"             : "Data Grid",
					"key"               : "gridUpdaterDataGrid",
					"protected"         : false,
					"persistent"        : true,
					"hidden"            : false,
					"clearOnHide"       : true,
					"type"              : "datagrid",
					"addAnotherPosition": "bottom",
					"tags"              : [],
					"conditional"       : {
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties"        : {},
					"lockKey"           : true
				}
			],
			"input"      : false,
			"key"        : "gridUpdater",
			"clearOnHide": false,
			"theme"      : "default",
			"tableView"  : false,
			"hideLabel"  : false,
			"breadcrumb" : "default",
			"tags"       : [],
			"conditional": {
				"show": "",
				"when": null,
				"eq"  : ""
			},
			"properties" : {},
			"lockKey"    : true
		},
		{
			"type"       : "panel",
			"title"      : "Resources",
			"components" : [
				{
					"key"        : "resourcesContent",
					"input"      : false,
					"html"       : "<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n",
					"type"       : "content",
					"tags"       : [],
					"conditional": {
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties" : {}
				},
				{
					"autofocus"    : false,
					"input"        : true,
					"tableView"    : true,
					"label"        : "Currency",
					"key"          : "resourcesCurrency",
					"placeholder"  : "",
					"data"         : {
						"values"  : [
							{
								"value": "",
								"label": ""
							}
						],
						"json"    : "",
						"url"     : "https://staging-tradeforms-api.priipcloud.com/api/v1.1/resource/currencies",
						"resource": "",
						"custom"  : "",
						"headers" : [
							{
								"value": "",
								"key"  : ""
							}
						]
					},
					"dataSrc"      : "url",
					"valueProperty": "value",
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
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties"   : {},
					"selectValues" : "records",
					"searchField"  : "q"
				},
				{
					"autofocus"    : false,
					"input"        : true,
					"tableView"    : true,
					"label"        : "Underlyings",
					"key"          : "resourcesUnderlyings",
					"placeholder"  : "",
					"data"         : {
						"values"  : [
							{
								"value": "",
								"label": ""
							}
						],
						"json"    : "",
						"url"     : "https://staging-tradeforms-api.priipcloud.com/api/v1.1/resource/underlyings",
						"resource": "",
						"custom"  : "",
						"headers" : [
							{
								"value": "",
								"key"  : ""
							}
						]
					},
					"dataSrc"      : "url",
					"valueProperty": "value",
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
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties"   : {
						"xpath": "/priip/data/resources/underlying"
					},
					"selectValues" : "records",
					"searchField"  : "q",
					"limit"        : "50"
				},
				{
					"key"        : "resourcesContent2",
					"input"      : false,
					"html"       : "<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n",
					"type"       : "content",
					"tags"       : [],
					"conditional": {
						"show": "",
						"when": null,
						"eq"  : ""
					},
					"properties" : {}
				}
			],
			"input"      : false,
			"key"        : "resources",
			"clearOnHide": false,
			"theme"      : "default",
			"tableView"  : false,
			"hideLabel"  : false,
			"breadcrumb" : "default",
			"tags"       : [],
			"conditional": {
				"show": "",
				"when": null,
				"eq"  : ""
			},
			"properties" : {
				"xpath": "/priip/data/resources"
			},
			"lockKey"    : true
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
	"_id"             : "5bbf35d207340c255e332752",
	"title"           : "TEST: Parser Kitchen Sink",
	"display"         : "wizard",
	"access"          : [
		{
			"roles": [],
			"type" : "create_own"
		},
		{
			"roles": [],
			"type" : "create_all"
		},
		{
			"roles": [],
			"type" : "read_own"
		},
		{
			"roles": [
				"5baa556db0b8fd17689c8428",
				"5baa556db0b8fd86519c8429",
				"5baa556db0b8fdfd759c842a"
			],
			"type" : "read_all"
		},
		{
			"roles": [],
			"type" : "update_own"
		},
		{
			"roles": [],
			"type" : "update_all"
		},
		{
			"roles": [],
			"type" : "delete_own"
		},
		{
			"roles": [],
			"type" : "delete_all"
		},
		{
			"roles": [],
			"type" : "team_read"
		},
		{
			"roles": [],
			"type" : "team_write"
		},
		{
			"roles": [],
			"type" : "team_admin"
		}
	],
	"submissionAccess": [
		{
			"roles": [
				"5baa556db0b8fdfd759c842a"
			],
			"type" : "create_own"
		},
		{
			"roles": [],
			"type" : "create_all"
		},
		{
			"roles": [
				"5baa556db0b8fdfd759c842a"
			],
			"type" : "read_own"
		},
		{
			"roles": [],
			"type" : "read_all"
		},
		{
			"roles": [
				"5baa556db0b8fdfd759c842a"
			],
			"type" : "update_own"
		},
		{
			"roles": [],
			"type" : "update_all"
		},
		{
			"roles": [
				"5baa556db0b8fdfd759c842a"
			],
			"type" : "delete_own"
		},
		{
			"roles": [],
			"type" : "delete_all"
		},
		{
			"roles": [],
			"type" : "team_read"
		},
		{
			"roles": [],
			"type" : "team_write"
		},
		{
			"roles": [],
			"type" : "team_admin"
		}
	],
	"settings"        : {},
	"name"            : "testParserKitchenSink",
	"path"            : "testparserkitchensink",
	"project"         : "5baa556db0b8fd41aa9c8427",
	"created"         : "2018-10-11T11:36:50.190Z",
	"modified"        : "2018-11-02T15:22:06.451Z",
	"machineName"     : "devbarry-tradeforms-v3:testDatagridParsing"
};