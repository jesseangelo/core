
/* Docs Prototype stuff */
$(document).ready(function () {
  var dataSource = new kendo.data.TreeListDataSource({
      data: [
        /*
        { id: 1, File: "Cashflow Statement Q1 2017", FilePath: "2017 Financials", Date: "28-Feb-2017", Declaration: "Public", Status: "", Remove: "", parentId: null },
        { id: 2, File: "Balance Sheet Q1 2017", FilePath: "2017 Financials", Date: "28-Feb-2017", Declaration: "Public", Status: "", Remove: "", parentId: null },
        { id: 3, File: "Income Statement Q1 2017", FilePath: "2017 Financials", Date: "28-Feb-2017", Declaration: "Public", Status: "", Remove: "", parentId: null },
        { id: 4, File: "Cashflow Statement Q4 2016", FilePath: "2016 Financials", Date: "28-Feb-2017", Declaration: "Public", Status: "", Remove: "", parentId: null }
        */
      ],
      schema: {
          model: {
              id: "id",
              expanded: true
          }
      },
      change: function (e) {
        var data = this.data();
        //console.log(data.length);
      }
  });

  $("#treelist").kendoTreeList({
      dataSource: dataSource,
      sortable: true,
      editable: true,
      columns: [
          { field: "File", title: "File Name, Path, and Description", template: $("#file-template").html(), width: 400},
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


  $("#folder-list").kendoTreeView({
      dataSource: folderListData
  });

  //EXPAND ALL THE FOLDER ITEMS
  $("#folder-list").data( "kendoTreeView" ).expand(".k-item");

 
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
      var lastIndex = dataSource.data().length;
      var myItem = dataSource.add({ id: lastIndex++, File: droppedFiles[0].name, FilePath: folderName, Date: "", Declaration: "", Status: "", Remove: "", parentId: null })
      //console.log(myItem.id)

      //init only on the last table row
      var treeList = $("#treelist").data("kendoTreeList");
      var scope = $("#treelist tbody>tr:last");
      var val = 0;
      var myPB;

      //enable remove/trash
      $(".fa-trash", scope).click(function (e) {
        var treeList = $("#treelist").data("kendoTreeList");
        treeList.removeRow($(this).closest("tr"));
      });

      $(".msg-complete", scope).hide();
      
      //make it a date picker
      $(".datePicker", scope).kendoDatePicker();
      
      //init progress bar
      myPB = $(".progressbar", scope).kendoProgressBar({
        type: "value",
        min: 0,
        max: 100
      }).data("kendoProgressBar");
      
    });
  });

  
  $(".btn-upload").click(function () {
    $("#treelist tbody tr").each(function(index) {
      var scope = this;
      console.log(scope)

      var myPB = $(".progressbar", scope).kendoProgressBar({
        value: false
      }).data("kendoProgressBar");
    
      
      PEREZOSO.addInfinite(450, function () {
        var val = myPB.value(); 
        //console.log(myPB.value())
        val += Math.floor(Math.random() * 6) + 0;
        if(myPB != undefined) {
          myPB.value(val)
        }
      });
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