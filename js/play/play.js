function valida_totales_play(id, cantidad) {
    console.log(" --- validaCantidadPrecio --- ");
    console.log(cantidad);

    var select_play = $("#select_play").val();
    console.log(select_play);

    var monto_input = "#";
    var total = 0;
    var precio = 0;

    if (id == "cantidad_play") {
        precio = $("#precio_play").val();
        monto_input += "monto_play"
    } else {
        precio = $("#precio_decode").val();
        monto_input += "monto_decode"
    }

    $(monto_input).val(precio * cantidad);;

    total = Number(total) + Number(Number($("#monto_play").val()) + Number($("#monto_decode").val()));
    $("#total_play").val(total);
}




function _planes_play() {


    var contenido_planes_play = '';

    if (planes_play.length > 0) {


        contenido_planes_play += '<div class="row top-buffer">';
        contenido_planes_play += '<div class="col-4">';
        contenido_planes_play += '<select id="select_play" class="custom-select" onchange="valida_select(this.id,this.value)">';
        contenido_planes_play += '<option value="-1"> --- Selecciona Play --- </option>';
        planes_play.forEach(element => {

            contenido_planes_play += '<option value="' + element.id + '">' + element.nombre + '</option>';


        });


        contenido_planes_play += _other_inputs('play');



        contenido_planes_play += '<div class="row top-buffer">';
        contenido_planes_play += '<div class="col-4">';
        contenido_planes_play += '<select id="select_decode" class="custom-select" onchange="valida_select(this.id,this.value)">';
        contenido_planes_play += '<option value="-1"> --- Selecciona Decoder --- </option>';
        planes_deco.forEach(element => {

            contenido_planes_play += '<option value="' + element.id + '">' + element.nombre + '</option>';


        });

        contenido_planes_play += _other_inputs('decode');


        contenido_planes_play += '<div class="row top-buffer">';
        contenido_planes_play += '<div class="col-9"></div>';
        contenido_planes_play += '<div class="col-3 border border-warning mx-auto">';
        contenido_planes_play += ' Total : <input type="text" id="total_play" class="form-control" placeholder="total" disabled>';
        contenido_planes_play += ' </div>';
        contenido_planes_play += '</div>';
        contenido_planes_play += '<div class="row top-buffer">';
        contenido_planes_play += '<div class="col-6">';
        contenido_planes_play += '<button type="button" class="btn btn-lg btn-block btn-outline-primary" id="agregar_play">Agregar</button>';
        contenido_planes_play += '</div>';
        contenido_planes_play += ' <div class="col-6">';
        contenido_planes_play += '<button type="button" class="btn btn-lg btn-block btn-outline-primary" id="cancelar_play"  value="play"  onclick="cancelar_play(this.id,this.value)">Cancelar</button>';
        contenido_planes_play += ' </div>';
        contenido_planes_play += ' </div>';
        contenido_planes_play += '';


        return contenido_planes_play;

    }
}

function valida_select(id, value) {

    if (id == "select_decode") {


        planes_deco.forEach(element => {
            if (element.id == value) {
                $("#precio_decode").val(element.precio);
            }

        });
    } else if (id == "select_play") {


        planes_play.forEach(element => {
            if (element.id == value) {
                $("#precio_play").val(element.precio);
            }

        });
    }
}



function _other_inputs(tipo) {
    var content_other_inputs = '';
    content_other_inputs += '</select>';
    content_other_inputs += '</div>';
    content_other_inputs += '<div class="col-2">';
    content_other_inputs += '<input type="number" id="cantidad_' + tipo + '" class="form-control" placeholder="Cantidad" min="1" max="100" onchange="valida_totales_play(this.id,this.value)">';
    content_other_inputs += '</div>';
    content_other_inputs += '<div class="col-3">';
    content_other_inputs += '<input type="text" id="precio_' + tipo + '" class="form-control" placeholder="precio" value="" disabled>';
    content_other_inputs += '</div>';
    content_other_inputs += ' <div class="col-3">';
    content_other_inputs += ' <input type="text" id="monto_' + tipo + '" class="form-control" placeholder="Monto" disabled>';
    content_other_inputs += ' </div>';
    content_other_inputs += '</div>';

    return content_other_inputs;

}


function cancelar_play(id_input, plan) {
    console.log(" --- cancelar_play --- ");
    console.log(id_input);
    console.log(plan);

    $("#monto_play").val(0);
    $("#monto_decode").val(0);

    $("#cantidad_play").val(0);
    $("#cantidad_decode").val(0);

    $("#precio_play").val(0);
    $("#precio_decode").val(0);

    $('#select_play').val("-1")
    $('#select_decode').val("-1")

    $("#total_play").val(0);
}