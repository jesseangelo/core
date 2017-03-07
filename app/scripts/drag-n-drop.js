$(document).ready(function () {
	
	//have to calc the placeholder stuff here
	$(".browse").click( function() {
		$(".box__file").click();
	});

	//file upload stuff
	var droppedFiles = false;
	var $form = $("body");
	var $input    = $form.find('input[type="file"]'),
    	$label    = $form.find('label'),
    	$docs	  = $form.find('.form-docs-list'),
    	showFiles = function(files) {
    		console.log(files);
      		//$label.text(files.length > 1 ? ($input.attr('data-multiple-caption') || '').replace( '{count}', files.length ) : files[ 0 ].name);
    		$docs.append('<div class="form-input-doc">' +
	            '<span class="form-input-marker"></span>' +
	            '<input autocomplete="off" class="form-text-input" id="" name="" type="text" value="' +
	            files[0].name + '">' +
	            '<div class="messages play">' +
	            	'<div>Uploading <i class="fa fa-spinner fa-spin"></i></div>' +
	            	'<div>Scanning for Viruses <i class="fa fa-spinner fa-spin"></i></div>' +
	            	'<div>Upload Complete <i class="fa fa-check"></i></div>' +
 	 	            '<div class="form-input-fa-right fa fa-pencil"></div>' +
            	'</div>' +
	        '</div>');
    	};

	$form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
		e.preventDefault();
		e.stopPropagation();
	})
	.on('dragover dragenter', function() {
		$form.addClass('is-dragover');
	})
	.on('dragleave dragend drop', function() {
		$form.removeClass('is-dragover');
	})
	.on('drop', function(e) {
	  droppedFiles = e.originalEvent.dataTransfer.files; // the files that were dropped
	  showFiles( droppedFiles );

	});

	$input.on('change', function(e) {
	  showFiles(e.target.files);
	});

	$form.on('submit', function(e) {
	  if ($form.hasClass('is-uploading')) return false;

	  $form.addClass('is-uploading').removeClass('is-error');

	  if (isAdvancedUpload) {
	    // ajax for modern browsers
	  } else {
	    // ajax for legacy browsers
	  }
	});
	//end file upload stuff
});