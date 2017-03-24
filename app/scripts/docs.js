
/* Docs Prototype stuff */
$(document).ready(function () {

  /* TEMPLATES */
  var addFolderForm = "<form><div class=form-group>"
          + "<input id=folder-name class=form-control type=text style='width: 90%; margin: auto;'/>"
          + "</div>"
          + "<button class='btn btn-primary' id=appendFolder>Add</button> <button type=submit class=btn>Cancel</button>"
          + "</form>";

  /* END TEMPLATES */

  /* Start Folder List */  
  var treeview = $("#folder-list").kendoTreeView({
    dragAndDrop: true,
    animation: false,
    dataSource: { 
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
    },
    select: function preventSelection(e) {
      e.preventDefault();
    },
    dataBound: function(e) {
      if (!this.dataSource.data().length) {
        this.element.append("<div class='no-items text-center'><p>Add a folder to get started</p>"
          + addFolderForm
          + "</div>");
      } else {
        this.element.find(".no-items").remove();
      }
    }
  }).data("kendoTreeView"),
  handleTextBox = function(callback) {
      return function(e) {
          if (e.type != "keypress" || kendo.keys.ENTER == e.keyCode) {
              callback(e);
          }
      };
  };

  var append = handleTextBox(function(e) {
      var selectedNode = treeview.select();

      // passing a falsy value as the second append() parameter
      // will append the new node to the root group
      if (selectedNode.length == 0) {
          selectedNode = null;
      }

      treeview.append({
          text: $("#folder-name").val()
      }, selectedNode);
  });

  $("#appendFolder").click(append);
  $("#appendNodeText").keypress(append);
  
  /* End Folder List */

  /* Start File List */
  var dataSource = new kendo.data.TreeListDataSource({
      schema: {
          model: {
              id: "docId",
              fields: {
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
      messages: {
        noRows: "Drag and drop files on the folders to the left to get started"
      },
      editable: "inline",
      columns: [
          { field: "File", title: "File Name and Path", template: $("#file-template").html() },
          { field: "Date", title: "Effective Date", template: $("#file-datepicker-template").html(), width: 130 },
          { field: "Declaration", title: "Public/Private", template: $("#file-declaration-template").html(), width: 110 },
          { field: "Status",  title: "Upload Status", template: $("#file-upload-progress-template").html(), width: 110 },
          { field: "Encrypt", template: $("#file-encrypt-template").html(), width: 68 },
          { field: "Unzip", template: $("#file-unzip-template").html(), width: 55 },
          { field: "Remove", template: $("#file-remove-template").html(), width: 70 }
      ]
  });
  /* End File List */

  //this need to be re-inited if a file is added then removed
  $("#treelist .k-status").html("<div class=row><div class=col-xs-1><h3><i class='fa fa-arrow-left'></i></h3></div>"
    + "<div class=col-xs-10><h3>Drag and drop files on the folders to the left to get started</h3></div></div>")

  //calc height of window for no scroll
  $("#treelist").height($(window).height() - 380);
  $("#folder-list").height($(window).height() - 426);
  

  //EXPAND ALL THE FOLDER ITEMS
  $("#folder-list").data( "kendoTreeView" ).expand(".k-item");


  $("#folder-list .k-item > div:first-child").each(function(item) {
    var scope = this;
    $(scope).append("<span class='pull-right folder-menu enabled'>" 
      + "<a title='Add Folder' style='margin-right: 4px;'><i class='fa fa-plus'></i></a>"
      + "<a title='Upload' class='browse' style='margin-right: 4px;'><i class='fa fa-upload'></i></a>"
      + "</span>"
      //menu 2
      +"<span class='pull-right folder-menu '>"
      //+ "<a style='margin-right: 4px;'><i class='fa fa-ellipsis-h'></i></a>"
      + "<ul class='folder-sub-menu'>"
        + "<li><i class='fa fa-ellipsis-h'></i>"
          + "<ul>"
            + "<li>Upload Here</li>"
            + "<li>Add Folder</li>"
            + "<li>Remove Folder</li>"
          + "</ul>"
        + "</li>"
      + "</ul>"

      + "</span>");

    $(".folder-menu", scope).toggle();
    $(".folder-menu", scope).toggleClass("k-state-hover");

    $(".folder-sub-menu", scope).kendoMenu();

    $(scope).hover(function(){
      if( $('.folder-menu', scope).hasClass('enabled') ) {
        $(".folder-menu.enabled", scope).toggle();
        $(this).toggleClass("k-state-hover");
      }
    });

    $(scope).kendoTooltip({
      filter: "a[title]",
      width: 120,
       position: "top"
    }).data("kendoTooltip");

    //Browse
    $(".browse", scope).click( function() {
      $(".box__file").click();
      selectedFolder = $('.k-in', scope).text();
    });

  });

  $('#toggleFolderMenus').click(function() {
    $('.folder-menu').toggleClass('enabled');
  });

 


  //FUNCTIONS

///// context menu
  var selectedFolder = "" 
  function getFolderSelected() {
    return selectedFolder;
  }

  //Adds files to list
  function addFiles(files, folder) {
    for(var k = 0; k < files.length; k++) {    
      var lastIndex = dataSource.data().length;
      var myItem = dataSource.add({ 
        docId: lastIndex++,
        File: files[k].name.replace(/\.[^/.]+$/, ""), 
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

      $(scope).kendoTooltip({
        filter: ".doc-name[title]",
        width: 200,
         position: "top"
      }).data("kendoTooltip");

      $(scope).kendoTooltip({
        filter: "a[title]",
        width: 120,
         position: "top"
      }).data("kendoTooltip");
      
      $(".msg-complete", scope).hide();
      $(".msg-progress", scope).hide();
      
      //make it a date picker
      $(".datePicker", scope).kendoDatePicker({
        value: new Date()
      });
    }      
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

  //UPLOAD
  $(".btn-upload").click(function () {
    $("#treelist tbody tr").each(function(index) {
      var scope = this;

      $(".msg-queued").fadeOut();

      $(".msg-progress", scope).hide();

       var myPB = $(".msg-progress", scope).kendoProgressBar({
          min: 0,
          max: 100,
          value: false,
          type: "percent"
        }).data("kendoProgressBar");
            
      PEREZOSO.addTimed(350, function () {
         $(".msg-progress", scope).fadeIn();
      });
      
      
      PEREZOSO.addInfinite(500, function () {
        var val = myPB.value();         
        val += Math.floor(Math.random() * 6) + 0;
        if(myPB != undefined) {
          myPB.value(val)
          if(val >= 100) {
            $(".msg-progress", scope).fadeOut();
            PEREZOSO.addTimed(350, function () {
               $(".msg-complete", scope).fadeIn();
            })
            //.then(1000, function() {
              //window.location.href = 'docs-upload-complete.html';
            //});
          }
        }
      });
    });
  });
  

  var $form = $("body");
  var $input = $form.find('input[type="file"]');
  $input.on('change', function(e) {
    addFiles(e.target.files, getFolderSelected());
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