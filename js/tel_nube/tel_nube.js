function valida_totales_tel_nube(id, cantidad) {
    console.log(" --- valida_totales_tel_nube --- ");
    console.log(id);
    console.log(cantidad);

    var monto_input = "#monto_tel_nube_" + id;
    var total = 0;
    planes_telefonia_nube.forEach(element => {
        if (element.id == id) {


            $(monto_input).val(element.precio * cantidad);;
        }


        total = Number(total) + Number($("#monto_tel_nube_" + element.id).val());
    });

    $("#total_tel_nube").val(total);
}





function _planes_telefonia_nube() {


    var contenido_tel_nube = '';

    if (planes_telefonia_nube.length > 0) {

        planes_telefonia_nube.forEach(element => {
            contenido_tel_nube += '<div class="row top-buffer">';
            contenido_tel_nube += '<div class="col-4">';
            contenido_tel_nube += element.nombre;
            contenido_tel_nube += '</div>';
            contenido_tel_nube += '<div class="col-2">';
            contenido_tel_nube += '<input type="number" id="cantidad_tel_nube_' + element.id + '" class="form-control" placeholder="Cantidad" min="1" max="100" onchange="valida_totales_tel_nube(' + element.id + ',this.value)">';
            contenido_tel_nube += '</div>';
            contenido_tel_nube += '<div class="col-3">';
            contenido_tel_nube += '<input type="text" class="form-control" placeholder="precio" value="' + element.precio + '" disabled>';
            contenido_tel_nube += '</div>';
            contenido_tel_nube += ' <div class="col-3">';
            contenido_tel_nube += ' <input type="text" id="monto_tel_nube_' + element.id + '" class="form-control" placeholder="Monto" disabled>';
            contenido_tel_nube += ' </div>';
            contenido_tel_nube += '</div>';
        });

        contenido_tel_nube += '<div class="row top-buffer">';
        contenido_tel_nube += '<div class="col-9"></div>';
        contenido_tel_nube += '<div class="col-3 border border-warning mx-auto">';
        contenido_tel_nube += ' Total : <input type="text" id="total_tel_nube" class="form-control" placeholder="total" disabled>';
        contenido_tel_nube += ' </div>';
        contenido_tel_nube += '</div>';
        contenido_tel_nube += '<div class="row top-buffer">';
        contenido_tel_nube += '<div class="col-6">';
        contenido_tel_nube += '<button type="button" class="btn btn-lg btn-block btn-outline-primary" id="agregar_tel_nube" value="tel_nube" onclick="_agregar(this.id,this.value)">Agregar</button>';
        contenido_tel_nube += '</div>';
        contenido_tel_nube += ' <div class="col-6">';
        contenido_tel_nube += '<button type="button" class="btn btn-lg btn-block btn-outline-primary" id="cancelar_tel_nube" value="tel_nube"  onclick="cancelar(this.id,this.value)">Cancelar</button>';
        contenido_tel_nube += ' </div>';
        contenido_tel_nube += ' </div>';
        contenido_tel_nube += '';


        return contenido_tel_nube;

    }
}


function _agregar_tel_nube(id, value) {

    var items = [];

    planes_telefonia_nube.forEach(element => {


        var cantidad = $("#cantidad_tel_nube_" + element.id).val();
        if (cantidad > 0) {

            var total = $("#monto_tel_nube" + element.id).val();

            var item = {
                nombre: element.nombre,
                cantidad: cantidad,
                precio_total: total
            }

            items.push(item);

        }

    });

    if (items.length > 0) {

        var total = $("#total_tel_nube").val();

        var plan = {
            id: planes_add.length + 1,
            tipo_plan: 'Telefonia n la Nube',
            precio_total: total,
            items: items
        }


        planes_add.push(plan);
    }

    arma_detalle_cotizacion();
    cancelar("cancelar_tel_nube", "tel_nube");
}