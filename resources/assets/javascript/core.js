$(function(){

  function Rodizio(){
    var self = this;
    this.locationGeo = google.maps.geometry.poly;
    this.mapCanvas = document.getElementById('map_canvas');
    this.mapOptions = {
      zoom: 12,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: new google.maps.LatLng(-23.5500, -46.6333)
    };
    this.map = new google.maps.Map(this.mapCanvas, this.mapOptions);
    this.rodizioCoords = [
      new google.maps.LatLng(-23.5076450,-46.7063130),
      new google.maps.LatLng(-23.5072510,-46.7114630),
      new google.maps.LatLng(-23.5080370,-46.7200470),
      new google.maps.LatLng(-23.5127610,-46.7251100),
      new google.maps.LatLng(-23.5164590,-46.7321480),
      new google.maps.LatLng(-23.5167740,-46.7439940),
      new google.maps.LatLng(-23.5190570,-46.7475990),
      new google.maps.LatLng(-23.5272410,-46.7507730),
      new google.maps.LatLng(-23.5325920,-46.7502580),
      new google.maps.LatLng(-23.5492740,-46.7321480),
      new google.maps.LatLng(-23.5624140,-46.7064850),
      new google.maps.LatLng(-23.5702010,-46.7033950),
      new google.maps.LatLng(-23.5777530,-46.6970430),
      new google.maps.LatLng(-23.5831030,-46.6935250),
      new google.maps.LatLng(-23.5871150,-46.6920650),
      new google.maps.LatLng(-23.5919920,-46.6953280),
      new google.maps.LatLng(-23.5952950,-46.6928380),
      new google.maps.LatLng(-23.5975760,-46.6891480),
      new google.maps.LatLng(-23.6014300,-46.6820230),
      new google.maps.LatLng(-23.6067780,-46.6785900),
      new google.maps.LatLng(-23.6107900,-46.6749850),
      new google.maps.LatLng(-23.6129120,-46.6704360),
      new google.maps.LatLng(-23.6151140,-46.6681180),
      new google.maps.LatLng(-23.6171590,-46.6621110),
      new google.maps.LatLng(-23.6239230,-46.6500080),
      new google.maps.LatLng(-23.6302920,-46.6467480),
      new google.maps.LatLng(-23.6306840,-46.6443430),
      new google.maps.LatLng(-23.6295050,-46.6427130),
      new google.maps.LatLng(-23.6292700,-46.6407390),
      new google.maps.LatLng(-23.6292700,-46.6311260),
      new google.maps.LatLng(-23.6283260,-46.6242590),
      new google.maps.LatLng(-23.6268320,-46.6185940),
      new google.maps.LatLng(-23.6246290,-46.6142180),
      new google.maps.LatLng(-23.6214840,-46.6114710),
      new google.maps.LatLng(-23.6070920,-46.6058910),
      new google.maps.LatLng(-23.6049700,-46.6040040),
      new google.maps.LatLng(-23.6027670,-46.6001410),
      new google.maps.LatLng(-23.5999350,-46.5974810),
      new google.maps.LatLng(-23.5939580,-46.5975660),
      new google.maps.LatLng(-23.5893960,-46.5981660),
      new google.maps.LatLng(-23.5879800,-46.5970510),
      new google.maps.LatLng(-23.5882150,-46.5939610),
      new google.maps.LatLng(-23.5866420,-46.5897560),
      new google.maps.LatLng(-23.5840470,-46.5858080),
      new google.maps.LatLng(-23.5853840,-46.5828890),
      new google.maps.LatLng(-23.5845190,-46.5780820),
      new google.maps.LatLng(-23.5823160,-46.5724170),
      new google.maps.LatLng(-23.5793280,-46.5719020),
      new google.maps.LatLng(-23.5735050,-46.5708720),
      new google.maps.LatLng(-23.5716970,-46.5728470),
      new google.maps.LatLng(-23.5691780,-46.5735340),
      new google.maps.LatLng(-23.5666620,-46.5749070),
      new google.maps.LatLng(-23.5575350,-46.5781690),
      new google.maps.LatLng(-23.5550960,-46.5760220),
      new google.maps.LatLng(-23.5521060,-46.5777390),
      new google.maps.LatLng(-23.5421140,-46.5806570),
      new google.maps.LatLng(-23.5279500,-46.5851210),
      new google.maps.LatLng(-23.5294440,-46.5917290),
      new google.maps.LatLng(-23.5283420,-46.5953340),
      new google.maps.LatLng(-23.5218890,-46.6036610),
      new google.maps.LatLng(-23.5228330,-46.6088960),
      new google.maps.LatLng(-23.5218100,-46.6119860),
      new google.maps.LatLng(-23.5180340,-46.6179070),
      new google.maps.LatLng(-23.5188200,-46.6243460),
      new google.maps.LatLng(-23.5181110,-46.6373910),
      new google.maps.LatLng(-23.5159860,-46.6561880),
      new google.maps.LatLng(-23.5129960,-46.6781620),
      new google.maps.LatLng(-23.5094540,-46.6832250),
      new google.maps.LatLng(-23.5073290,-46.6955850),
      new google.maps.LatLng(-23.5075660,-46.7015070)
    ];
    this.corRodizioOn = "#FF0000";
    this.corRodizioOff = "#66CC00";
    this.estaAqui = 'Você está aqui!';

    this.fixCss = fixCss;
    this.corArea = corArea;
    this.getPosition = getPosition;

    this.rodStartManha = 7;
    this.rodEndManha = 10;
    this.rodStartTarde = 17;
    this.rodEndTarde = 20;


    function fixCss(){
      $('#map_canvas').css('height',$(window).height()-80);
    };

    function corArea(){
      var d = new Date();
      var rodizioColor = "";

      if((d.getDay() == 0) || (d.getDay() == 6)){

        rodizioColor = this.corRodizioOff;
        $('.alerta .alert').addClass("alert-info-alt");
        $('.alerta .contador').text('Hoje o Rodízio está liberado');

      } else if((d.getHours() >= this.rodStartManha && d.getHours() < this.rodEndManha) || (d.getHours() >= this.rodStartTarde && d.getHours() < this.rodEndTarde)){

        rodizioColor = this.corRodizioOn;
        $('.alerta .alert').addClass("alert-danger-alt")
        $('.alerta .contador').text('Estamos em horario de rodizio!');

      } else {

        rodizioColor = this.corRodizioOff;

        var rodTime = new Date();
        if ((d.getHours() >= 0 && d.getHours() < this.rodStartManha) || (d.getHours() >= this.rodStartManha && d.getHours() < this.rodEndManha)) {
          rodTime.setHours(this.rodStartManha - 1);
        } else if(d.getHours() >= this.rodEndTarde){
          rodTime.setHours(this.rodStartManha + (24 - d.getHours()) - 1);
        } else {
          rodTime.setHours(this.rodStartTarde - 1);
        }

        rodTime.setMinutes(59);
        rodTime.setSeconds(59);

        setInterval(function() {
          var now = new Date(),
              h = ('0' + Math.abs(rodTime.getHours() - now.getHours())).slice(-2),
              m = ('0' + Math.abs(rodTime.getMinutes() - now.getMinutes())).slice(-2),
              s = ('0' + Math.abs(rodTime.getSeconds() - now.getSeconds())).slice(-2),
              timeDiff = h + ':' + m + ':' + s;

              $('.alerta .alert').addClass("alert-success-alt");
              $('.alerta .contador').text('O proximo rodizio começa em: ' + timeDiff);
        }, 1000);

      }

      showArea(rodizioColor);

    };

    function showArea(colorRodizio){
      var rodizioArea = new google.maps.Polygon({
        paths: self.rodizioCoords,
        strokeColor: colorRodizio,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: colorRodizio,
        fillOpacity: 0.35
      });

      rodizioArea.setMap(self.map);
    };

    function myPosition(position){
      self.geoLoc = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

      addMarker(self.geoLoc);

      contains(self.geoLoc);
    };

    function handleNoGeolocation(errorFlag) {
      if (errorFlag) {
        var content = 'Erro: A Geolocalização falhou.';
      } else {
        var content = 'Erro: Seu navegador não suporta geolocation.';
      }

      var options = {
        map: self.map,
        position: new google.maps.LatLng(-23.5500, -46.6333),
        content: content
      };

      var infowindow = new google.maps.InfoWindow(options);
      self.map.setCenter(options.position);
    };

    function getPosition(){
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(myPosition, handleNoGeolocation);
      }else{
        handleNoGeolocation(false)
      }
    };

    function addMarker(geoLocation){
      var marker = new google.maps.Marker({
        position: geoLocation,
        map: self.map,
        title: self.estaAqui
      });

      self.map.panTo(geoLocation);
    };

    function contains(myLocation){
      var rodizioArea = new google.maps.Polygon({
        paths: self.rodizioCoords
      })

      if(self.locationGeo.containsLocation(myLocation, rodizioArea)) {
        console.log('dentro');
      } else {
        console.log('fora');
      }
    };


  }

  rodizioObj = new Rodizio();
  rodizioObj.fixCss();
  rodizioObj.corArea();
  rodizioObj.getPosition();

});
