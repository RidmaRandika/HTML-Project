$(document).ready(function () {

    $("#btnHome").css("background-color","#2196F3");
    $("#btnHome").css("color","white");

    $("div#divDownload").hide();
    $("div#divContactUs").hide();
    $("div#divStaff").hide();
    $("div#divMain").show();
    $("div#divAboutUs").hide();


    $("#btnHome").click(function () {

        $("#btnHome").css("background-color","#2196F3");
        $("#btnHome").css("color","white");

        $("#btnDwnload").css("background-color","#333");
        $("#btnDwnload").css("color","white");

        $("#btnContactUs").css("background-color","#333");
        $("#btnContactUs").css("color","white");

        $("#btnStaff").css("background-color","#333");
        $("#btnStaff").css("color","white");

        $("#btnAboutUs").css("background-color","#333");
        $("#btnAboutUs").css("color","white");
  

        $("div#divMain").show();
        $("div#divDownload").hide();
        $("div#divContactUs").hide();
        $("div#divStaff").hide();
        $("div#divAboutUs").hide();
    });



    $("#btnDwnload").click(function () {

        $("#btnDwnload").css("background-color","#2196F3");
        $("#btnDwnload").css("color","white");

        $("#btnHome").css("background-color","#333");
        $("#btnHome").css("color","white");

        $("#btnContactUs").css("background-color","#333");
        $("#btnContactUs").css("color","white");

        $("#btnStaff").css("background-color","#333");
        $("#btnStaff").css("color","white");

        $("#btnAboutUs").css("background-color","#333");
        $("#btnAboutUs").css("color","white");
       
        $("div#divMain").hide();
        $("div#divDownload").show();
        $("div#divContactUs").hide();
        $("div#divStaff").hide();
        $("div#divAboutUs").hide();

    });

    $("#btnContactUs").click(function () {


        $("div#divContactUs").css("background-color","#98AFC7");


        $("#btnContactUs").css("background-color","#2196F3");
        $("#btnContactUs").css("color","white");

        $("#btnHome").css("background-color","#333");
        $("#btnHome").css("color","white");

        $("#btnDwnload").css("background-color","#333");
        $("#btnDwnload").css("color","white");

        $("#btnStaff").css("background-color","#333");
        $("#btnStaff").css("color","white");

        $("#btnAboutUs").css("background-color","#333");
        $("#btnAboutUs").css("color","white");
 
        $("div#divStaff").hide();
        $("div#divMain").hide();
        $("div#divDownload").hide();
        $("div#divContactUs").show();
        $("div#divAboutUs").hide();
    });



$("#btnStaff").click(function () {


    $("#btnStaff").css("background-color","#2196F3");
    $("#btnStaff").css("color","white");

    $("#btnHome").css("background-color","#333");
    $("#btnHome").css("color","white");

    $("#btnDwnload").css("background-color","#333");
    $("#btnDwnload").css("color","white");

    $("#btnContactUs").css("background-color","#333");
    $("#btnContactUs").css("color","white");

    $("#btnAboutUs").css("background-color","#333");
    $("#btnAboutUs").css("color","white");

    $("div#divStaff").show();
    $("div#divMain").hide();
    $("div#divDownload").hide();
    $("div#divContactUs").hide();
    $("div#divAboutUs").hide();
});


    $("#btnAboutUs").click(function () {


        $("#btnAboutUs").css("background-color","#2196F3");
        $("#btnAboutUs").css("color","white");

        $("#btnHome").css("background-color","#333");
        $("#btnHome").css("color","white");

        $("#btnDwnload").css("background-color","#333");
        $("#btnDwnload").css("color","white");

        $("#btnContactUs").css("background-color","#333");
        $("#btnContactUs").css("color","white");

        $("#btnStaff").css("background-color","#333");
        $("#btnStaff").css("color","white");


        $("div#divStaff").hide();
        $("div#divMain").hide();
        $("div#divDownload").hide();
        $("div#divContactUs").hide();
        $("div#divAboutUs").show();
    });















});








$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});