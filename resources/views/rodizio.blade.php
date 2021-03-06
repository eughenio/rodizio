<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Rodízio São Paulo - SP</title>
            <meta name="Description" content="Esse site é para auxiliar pessoas que não tem conhecimento ou noção da área do Rodízio em São Paulo, ele exibe a área, aonde você está, se está dentro ou fora da área do rodízio e um contador do tempo que falta para começar a nova janela de rodízio.">
            <meta name="Keywords" content="São Paulo Rodizio trânsito">

            <link href="{{ asset('/styles/styles.css') }}" rel="stylesheet">

            <script src="{{ asset('javascript/javascript.js') }}"></script>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAG7ywDgXOGA545Xbj4klk7tSTmYpIAys4&libraries=geometry&sensor=true&language=br"></script>
        </head>
        <body>
            <nav class="navbar navbar-inverse navbar-static-top">
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Rodízio São Paulo</a>
                    </div>
                </div>
            </nav>

            <div class="col-md-6 alerta">
                <div class="alert alert-dismissable">
                    <span class="glyphicon glyphicon-certificate"></span>
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <span class="contador"></span>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div id="map_canvas" class=".col-lg-12"></div>
                </div>
            </div>

            <div class="footer">
                <div id="container-fluid">
                    <p class="text-muted">
                        Made with &#9829; in São Paulo - Developing with &#9829; using <a href="http://www.jetbrains.com.br/phpstorm">JetBrains - PHPStorm</a>
                    </p>
                </div>
            </div>

            <script src="{{ asset('javascript/mapga.min.js') }}"></script>
        </body>
    </html>