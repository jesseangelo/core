"use strict";function checkSize(){"none"==$(".mediaTest").css("float")?($(".actionbar-fixed-bottom").removeClass("maximized"),$("#mainWindow").removeClass("maximized")):"left"==$(".mediaTest").css("float")&&$("#sidebar").hasClass("minimized")&&($(".actionbar-fixed-bottom").addClass("maximized"),$("#mainWindow").addClass("maximized"))}$(".minimize-sidebar").click(function(){$(this).hide(),$(".maximize-sidebar").show(),$("#sidebar .content-minimized").show(),$("#sidebar .content-maximized").hide(),$("#sidebar").addClass("minimized").removeClass("col-md-3"),$("#mainWindow").addClass("maximized").removeClass("col-md-9"),$(".actionbar-fixed-bottom").addClass("maximized")}),$(".maximize-sidebar").click(function(){$("#sidebar").removeClass("minimized").addClass("col-md-3"),$("#mainWindow").removeClass("maximized").addClass("col-md-9"),$(this).hide(),$(".minimize-sidebar").show(),$("#sidebar .content-minimized").hide(),$("#sidebar .content-maximized").show(),$(".actionbar-fixed-bottom").removeClass("maximized")}),$(".minimize-topbar").click(function(){$("#topbar").addClass("minimized"),$(this).hide(),$(".maximize-topbar").show(),$("#topbar .content-minimized").show(),$("#topbar .content-maximized").hide()}),$(".maximize-topbar").click(function(){$("#topbar").removeClass("minimized"),$(this).hide(),$(".minimize-topbar").show(),$("#topbar .content-minimized").hide(),$("#topbar .content-maximized").show()}),$(".fa-search").click(function(){$(".global-search").toggle()}),$("section.workflow-step, section.workflow-end").hide(),$(".workflow .btn-start").click(function(){$(".workflow .workflow-start").hide(),$(".workflow-sample .workflow-step").first().show()}),$(".workflow .btn-next").click(function(){$(this).parents("section.workflow-step").hide(),$(this).parents("section.workflow-step").next().show()}),$(".workflow .btn-finish").click(function(){$(this).parents("section.workflow-end").hide(),$("section.workflow-start").show()}),$(".workflow .btn-cancel").click(function(){$(this).parents('section[class^="workflow-"]').hide(),$("section.workflow-start").show()});var p=!0;$(".fa-spin").hide(),$(".fa-check").hide(),$(".section-demo-buttons .btn-warning").click(function(){if(p){p=!1,$(".fa-spin").show(),$(".section-demo-buttons .btn-warning .btn-label").text(" Saving");var i=function(){$(".section-demo-buttons .btn-warning").addClass("btn-success"),$(".section-demo-buttons .btn-warning .btn-label").text(" Success"),$(".fa-spin").hide(),$(".fa-check").show()};setTimeout(i,1500)}else p=!0,function(){$(".section-demo-buttons .btn-warning").removeClass("btn-success"),$(".section-demo-buttons .btn-warning .btn-label").text("Primary"),$(".fa-check").hide()}()});var isBackdropped=!1;$(document).ready(function(){$(".nav .dropdown").on("show.bs.dropdown",function(){isBackdropped||($('<div class="menu-backdrop fade in"></div>').appendTo(document.body),isBackdropped=!0)}),$(".dropdown").on("hide.bs.dropdown",function(){removeBackdrop()})});var removeBackdrop=function(){$(".menu-backdrop").remove(),isBackdropped=!1};$(document).on("click",function(){removeBackdrop()}),$(document).ready(function(){checkSize(),$(window).resize(checkSize)}),$(window).scroll(function(){0!=$(window).scrollTop()?$(".navbar-custom").addClass("scrolling"):$(".navbar-custom").removeClass("scrolling")}),$(document).ready(function(){$(".toggleActionbar").click(function(){$(".actionbar-fixed-bottom").toggle()})});