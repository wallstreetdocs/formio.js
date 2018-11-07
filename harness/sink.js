(function ( $ ) {

	window.WSDFormIO = {

		// Get a model value
		getValue: function ( path ) {
			return _.get ( WSDFormIO.FormData, path );
		},

		// Form data model - used for global logic rules
		FormData: {
			data: {}
		},

		//
		beforeSubmit: function ( submission ) {

			console.log ( submission );
			console.log ( WSDFormIO.FormData );

			return false;

		}

	};

	// Init
	$ ( document ).ready ( function () {

		// Create vehicle test form
		Formio.createForm (
			document.getElementById ( 'form_embed__kitchensink' ),
			window.forms.kitchensink,
			{
				breadcrumbSettings: {
					clickable: true
				},
				hooks             : {
					beforeSubmit: WSDFormIO.beforeSubmit
				},
				buttonSettings    : {
					showCancel: false
				}
			}
		)
			.then ( function ( form ) {

				WSDFormIO.Form = form;

				// Prevent the submission from going to the form.io server.
				WSDFormIO.Form.nosubmit = true;

				// Populate the data
				WSDFormIO.Form.submission = WSDFormIO.FormData;

				// Handle form change event
				form.on ( 'change', function ( e ) {

					// Update our own reference
					WSDFormIO.FormData.data = e.data;

					console.log ( 'Form changed', WSDFormIO.FormData.data );

				} );

				// Render event is fired for each tab change or nested form inclusion
				form.on ( 'render', function () {
					console.log ( 'Form rendered' );
				} );

				// Form error
				form.on ( 'error', function ( e ) {
					console.error ( 'Form error', e );
				} );

			} )
			.catch ( function ( e ) {
				console.error ( 'Form error', e );
			} )
		;

	} );

}) ( jQuery );