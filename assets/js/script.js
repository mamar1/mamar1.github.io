  $(document).ready(function() {
    $("#btn-callback-carousel").on("click", function(){
      $("#callback-modal").modal('show');
    });
    
    $("#btn-callback-phone-icon").on("click", function(){
      $("#callback-modal").modal('show');
      $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#btn-callback-navbar").on("click", function(){
        $("#callback-modal").modal('show');
        $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#btn-callback-footer").on("click", function(){
        $("#callback-modal").modal('show');
        $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#lessons-1").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-2").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-3").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-4").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-5").on("click", function(){
        $("#modal-lessons2").modal('show');
    });

    $("#lessons-6").on("click", function(){
        $("#modal-lessons2").modal('show');
    });

    $("#lessons-7").on("click", function(){
        $("#modal-lessons2").modal('show');
    });

    $("#lessons-8").on("click", function(){
        $("#modal-lessons2").modal('show');
    });

    $("#lessons-9").on("click", function(){
        $("#modal-lessons3").modal('show');
    });

    $("#lessons-10").on("click", function(){
        $("#modal-lessons3").modal('show');
    });

    $("#lessons-11").on("click", function(){
        $("#modal-lessons3").modal('show');
    });

    $("#lessons-12").on("click", function(){
        $("#modal-lessons3").modal('show');
    });

    $("#btn-callback-carousel-ok").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#callBackMain").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#success-modal-ok").on("click", function(){
      $("#success-modal").modal('hide');
    });

    window.setInterval(function() {
      function getDateNow() {
        var n =  new Date();
        var y = n.getFullYear();
        var m = n.getMonth() + 1;
        m = m.toString().length < 2 ? '0'+m : m;
        var d = n.getDate();
        d = d.toString().length < 2 ? '0'+d : d;
        var h = n.getHours();
        h = h.toString().length < 2 ? '0'+h : h;
        var min = n.getMinutes();
        min = min.toString().length < 2 ? '0'+min : min;
        $('#inputTime').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime2').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime3').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
      };
      getDateNow();
    }, 5000);
  });

  $(document.body).on('hide.bs.modal,hidden.bs.modal', function () {
    $('body').css('padding-right','0');
  });