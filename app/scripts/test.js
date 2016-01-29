$(document).ready(function(){
	console.log("Hello from an external js file");
})
	

$.extend({
    growl: function (options) {
        var defaults, _;
        defaults = {
            delay: 0,
            type: "warning",
            container: "#growlContainer",
            text: "",
            className: ""
        };
        _ = $.extend(defaults, options);

        this.growlContainerCreate = function () {

            if (!$(defaults.container).length) {              //is the container already there?
                var containerHTML = "<div class='growlContainer' id='growlContainer' style='z-index:2000; position:fixed;"
                                    + "width:250px; height: 0px; top:20px; right:20px; overflow:visible;'></div>";
                $("body").append(containerHTML);
            }
        }
        this.growlContainerDestroy = function () {
            if (!$(defaults.container).children().length) {   //are there active growls displayed?
                $(defaults.container).remove();
            }
        }
        this.growlFadeThenRemove = function (g) {
            $(g).fadeOut(400, function () {
                $.growlRemoveMe(g);
            });
        }
        this.growlRemoveMe = function (g) {
            $(g).remove();
            this.growlContainerDestroy();
        }
        var init = (function () {
            //Create markup here
            var id = Math.floor(Math.random() * 1000);
            var growlHTML = "<div class='growl growl" + id + " alert alert-" + _.type + " " + _.className + "'>" +
                "<a style='pointer-events: auto;' class='close' id='growl" + id + "' data-dismiss='alert' href='#'>&times;</a>" +
                (_.title ? "<strong>" + _.title + "</strong>" : "") + _.text;

            $.growlContainerCreate();
            $(_.container).prepend(growlHTML);

            $("#growl" + id).click(function () {
                $.growlFadeThenRemove(".growl" + id);
            });

            //Set delay
            if (defaults.delay > 0) {
                BetterSetInterval.add(defaults.delay, $.growlFadeThenRemove, ".growl" + id);
            }
        }());
    }
})();