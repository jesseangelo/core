$(document).ready(function () {
	
	//DRAG N DROP
  $(".k-in").each(function(index) {
    //console.log( index + ": " + $( this ).text() );
     var droppedFiles = false;
     var $form = $(this);
    $form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
      e.preventDefault();
      e.stopPropagation();
    })
    .on('dragover dragenter', function(e) {
      $(e.currentTarget).addClass("k-state-focused");
      $(".file-drop-zone").addClass('active');
    })
    .on('dragleave dragend drop', function(e) {
      $(e.currentTarget).removeClass("k-state-focused");
    })
    .on('drop', function(e) {
      droppedFiles = e.originalEvent.dataTransfer.files; // the files that were dropped
      $(".file-drop-zone").removeClass('active');
      var node = $(e.dropTarget).closest(".k-item");
      var folderName = $(e.currentTarget).text();
      var lastIndex = dataSource.data().length;

      if (node.length && node.parents(".k-treeview").length) {
          // the dropTarget is within the treeview,
          // `node` is the closest treeview item
      }
      
      var myItem = dataSource.add({ id: lastIndex++, File: droppedFiles[0].name, FilePath: folderName, Date: "", Declaration: "", Status: "", Remove: "", parentId: null })
      console.log(myItem.id)
      $(".datePicker").kendoDatePicker();
      $(".progressbar").kendoProgressBar();

    });
  });


  var $form = $("body");
  $form.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', function(e) {
    $(".file-drop-zone").addClass('active');
  })
  .on('dragleave dragend drop', function(e) {
    $(".file-drop-zone").removeClass('active');
  })
  .on('drop', function(e) {
    $(".file-drop-zone").removeClass('active');
  });
});