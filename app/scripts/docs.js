
/* Docs Prototype stuff */
$(document).ready(function () {

  var dataSource = new kendo.data.TreeListDataSource({
      schema: {
          model: {
              id: "docId",
              fields: {
                docId: { editable: true, nullable: false },
                File: {},
                FilePath: { editable: false },
                Date: { editable: false }, 
                Declaration: { editable: false },
                Status: { editable: false },
                Remove: { editable: false }
              }
          }
      },
      editable: "inline",
      change: function (e) {
        var data = this.data();
        //console.log(data.length);
      }
  });

  $("#treelist").kendoTreeList({
      dataSource: dataSource,
      sortable: true,
      editable: "inline",
      columns: [
          { field: "docId", title: "ID", width: "40px" },
          { field: "File", title: "File Name, Path, and Description", template: $("#file-template").html(), width: 400},
          { command: ["edit"] },          
          { field: "Date", title: "Effective Date", template: $("#file-datepicker-template").html() },
          { field: "Declaration", title: "Public/Private", template: $("#file-declaration-template").html() },
          { field: "Status",  title: "Upload Status", template: $("#file-upload-progress-template").html() },
          { field: "Remove", template: $("#file-remove-template").html(), width: 75 }
      ]
  });

  var folderListData = new kendo.data.HierarchicalDataSource({
      data: [
          { text: "Executed Credit Docs" },
          { text: "Amendment Docs" },
          { text: "Financials & Compliance", 
            items: [
              { text: "2015 Financials" },
              { text: "2016 Financials" },
              { text: "2017 Financials" }
              ]
          }
      ]
  });

  $(".browse").click( function() {
    $(".box__file").click();
  });

  $("#folder-list").kendoTreeView({
      dataSource: folderListData
  });

  //calc height of window for no scroll
  $("#treelist").height($(window).height() - 600);
  $("#folder-list").height($(window).height() - 650);
  

  //EXPAND ALL THE FOLDER ITEMS
  $("#folder-list").data( "kendoTreeView" ).expand(".k-item");

 
  function addFiles(files, folder) {
      var lastIndex = dataSource.data().length;
      var myItem = dataSource.add({ 
        docId: lastIndex++,
        File: files[0].name.replace(/\.[^/.]+$/, ""), 
        FilePath: folder, 
        Date: "", 
        Declaration: "", 
        Status: "", 
        Remove: "", 
        parentId: null 
      });
      var treeList = $("#treelist").data("kendoTreeList");
      var scope = $("#treelist tbody>tr:last");
      var val = 0;

      //enable remove/trash
      $(".fa-trash", scope).click(function (e) {
        var treeList = $("#treelist").data("kendoTreeList");
        treeList.removeRow($(this).closest("tr"));
      });

      $(".msg-complete", scope).hide();
      
      //make it a date picker
      $(".datePicker", scope).kendoDatePicker({
        value: new Date()
      });
            
  }

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
      //var node = $(e.dropTarget).closest("tr");
      var folderName = $(e.currentTarget).text();

      addFiles(droppedFiles, folderName);
      
    });
  });

  
  $(".btn-upload").click(function () {
    $("#treelist tbody tr").each(function(index) {
      var scope = this;

      $(".msg-queued").fadeOut();

      $(".progressbar", scope).hide();

       var myPB = $(".progressbar", scope).kendoProgressBar({
          min: 0,
          max: 100,
          value: false,
          type: "percent"
        }).data("kendoProgressBar");
            
      PEREZOSO.addTimed(350, function () {
         $(".progressbar", scope).fadeIn();
      });
      
      
      PEREZOSO.addInfinite(500, function () {
        var val = myPB.value();         
        val += Math.floor(Math.random() * 6) + 0;
        if(myPB != undefined) {
          myPB.value(val)
        }
      });
    });

  });
  

  var $form = $("body");
  var $input = $form.find('input[type="file"]');
  $input.on('change', function(e) {
    addFiles(e.target.files);
  });

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