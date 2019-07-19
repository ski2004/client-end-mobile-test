"use strict"

;(function($, win){

    var jsCommon = jsCommon || {};

    jsCommon.makeid = function(length){
        if(typeof length === 'undefined') length = 8;
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    win.jsCommon = jsCommon;

})(jQuery, window);


;(function($, win){

    var comps = [];

    var jsGame = jsGame || {};

    function registerComponent(comp){
        if(Array.isArray(comp)){
            comp.forEach(function(comStr){
                if($(comStr).length > 0){
                    comps.push({
                        comp: $(comStr),
                        type: checkType(comStr)
                    });
                }
            });
        }else{
            if($(comp).length > 0){
                comps.push({
                    comp: $(comp),
                    type: checkType(comp)
                });
            }
        }
    }

    function checkType(comStr){
        var type;
        if(comStr.indexOf('header') !== -1 || comStr.indexOf('footer-bar') !== -1){
            type = 'layout';
        }else{
            type = 'other';
        }
        return type;
    }

    function removeClass(type, theClass){
        comps.forEach(function(obj){
            if(obj.type===type){
                obj.comp.removeClass(theClass);
            }
        });
    }

    function addClass(type, theClass){
        comps.forEach(function(obj){
            if(obj.type===type){
                obj.comp.addClass(theClass);
            }
        });
    }

    function pageScript(){

        if(comps.length > 0){

            var scrollDown = 0;
            $(win).scroll(function (event) {
                var up = $(this).scrollTop();

                if (up > scrollDown) {
                    removeClass('layout', 'active');
                    addClass('other', 'active');
                } else {
                    removeClass('other', 'active');
                    addClass('layout', 'active');
                }

                scrollDown = up;
                var scroll = $(win).scrollTop();

                if (scroll >= 50) {
                    addClass('layout', 'hide');
                } else {
                    removeClass('layout', 'hide');
                }
            });
        }

        imagesLoaded('body', function () {
            $('#loading').fadeOut(2000);
        });
    }

    function toggleSideBar(){
        if($("#sidebar").length > 0) $("#sidebar").toggleClass("toggled");
    }

    jsGame.registerComponent = registerComponent;
    jsGame.pageScript = pageScript;
    jsGame.toggleSidebar = toggleSideBar;
    jsGame.comps = comps;

    win.jsGame = jsGame;

})(jQuery, window);


$(document).ready(function(){
    window.jsGame.pageScript();
});

