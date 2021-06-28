(function ($) {
    let html = '<div id="db_main_outer">';
    html += '<div class="container-fluid col-md-12">';
    html += '<div class="col-md-8">';
    html +=
        '<div class="panel panel-default panel-chart pie" id="building-s_outer">';
    html += '<div class="panel-heading">';
    html +=
        '<h3 class="panel-title"><i class="fa fa-building"></i> Gebäudeübersicht</h3>';
    html += '</div>';
    html += '<canvas class="panel-body" id="buildings_char">';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="container-fluid col-md-12">';
    html += '<div class="col-md-8">';
    html += '<div class="panel panel-default panel-chart pie" id="fz-s_outer">';
    html += '<div class="panel-heading">';
    html +=
        '<h3 class="panel-title"><i class="fa fa-car"></i> Fahrzeug Aufteilung</h3>';
    html += '</div>';
    html += '<div class="panel-body">';
    html +=
        '<div class="col-md-3"><h4 style="text-align:center;">Feuerwehr</h4>';
    html += '<div id="ff-fz" style="height:200px"></div>';
    html += '</div>';
    html +=
        '<div class="col-md-3"><h4 style="text-align:center;">Rettungsdienst</h4>';
    html += '<div id="rd-fz" style="height:200px"></div>';
    html += '</div>';
    html += '<div class="col-md-3"><h4 style="text-align:center;">Polizei</h4>';
    html += '<div id="pol-fz" style="height:200px"></div>';
    html += '</div>';
    html += '<div class="col-md-3"><h4 style="text-align:center;">THW</h4>';
    html += '<div id="thw-fz" style="height:200px"></div>';
    html += '</div>';
    html += '</div>';
    html +=
        '<div class="panel-footer clearfix" style="background-color: #fff;">';
    html += '<div class="col-md-3">';
    html += '<span id="ff-ges"></span>';
    html += '</div>';
    html += '<div class="col-md-3">';
    html += '<span id="rd-ges"></span>';
    html += '</div>';
    html += '<div class="col-md-3">';
    html += '<span id="pol-ges"></span>';
    html += '</div>';
    html += '<div class="col-md-3">';
    html += '<span id="thw-ges"></span>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $('#content').before(html);
})($);
