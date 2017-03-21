
/* Docs Prototype stuff */
$(document).ready(function () {

  //Browse
  $(".browse").click( function() {
    $(".box__file").click();
  });

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
      editable: "inline",
      columns: [
          { field: "File", title: "File Name and Path", template: $("#file-template").html(), width: 300 },
          { field: "Description", title: "Description", template: $("#file-description-template").html() },
          { field: "Date", title: "Effective Date", template: $("#file-datepicker-template").html() },
          { field: "Declaration", title: "Public/Private", template: $("#file-declaration-template").html() },
          { field: "Status",  title: "Upload Status", template: $("#file-upload-progress-template").html() },
          { field: "Remove", template: $("#file-remove-template").html(), width: 75 }
      ]
  });
  /* End File List */


  //calc height of window for no scroll
  $("#treelist").height($(window).height() - 500);
  $("#folder-list").height($(window).height() - 592);
  

  //EXPAND ALL THE FOLDER ITEMS
  $("#folder-list").data( "kendoTreeView" ).expand(".k-item");


  $("#folder-list .k-item > div:first-child").each(function(item) {
    var scope = this;
    //console.log(scope)
    $(scope).append("<span class='pull-right folder-menu enabled'>" 
      + "<a title='Add Folder' style='margin-right: 4px;'><i class='fa fa-plus'></i></a>"
      + "<a title='Upload' style='margin-right: 4px;'><i class='fa fa-upload'></i></a>"
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

  });

  $('#toggleFolderMenus').click(function() {
    $('.folder-menu').toggleClass('enabled');
  });
  


  //FUNCTIONS

///// context menu


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


      $(".description", scope).click(function (){
        $(this).addClass("active");

        //$(".description", scope).toggle();
        //$(this).closest(".description").toggle(); //Maybe?
        event.stopPropagation()
        if($(".description", scope).val() != "") {
          $(".edit-description", scope).addClass("fa-pencil-square").removeClass("fa-pencil-square-o");
        } else {
          //default icon
          $(".edit-description", scope).addClass("fa-pencil-square-o").removeClass("fa-pencil-square"); 
        }
      });
      //$(".description", scope).toggle();

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
            
  }

  $(document).click(function() {
    $(".description").removeClass("active");
  })

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