function valida_totales_play(id,cantidad){
    console.log(" --- validaCantidadPrecio --- ");
    console.log(id);
    console.log(cantidad);

    var monto_input = "#monto_play_"+id;
    var total = 0; 
    planes_play.forEach(element => {
        if(element.id == id){


            $(monto_input).val(element.precio * cantidad); ;
        }

      
        total = Number(total) + Number($("#monto_play_"+element.id).val());
    });

    $("#total_play").val(total);
}




function _planes_play(){


    var contenido_planes_play= '';

    if(planes_play.length > 0){

        planes_play.forEach(element => {
            contenido_planes_play += '<div class="row top-buffer">';
            contenido_planes_play += '<div class="col-4">';
            contenido_planes_play += element.nombre;
            contenido_planes_play += '</div>';
            contenido_planes_play += '<div class="col-2">';
            contenido_planes_play += '<input type="number" id="cantidad_play" class="form-control" placeholder="Cantidad" min="1" max="100" onchange="valida_totales_play('+element.id+',this.value)">';
            contenido_planes_play += '</div>';
            contenido_planes_play += '<div class="col-3">';
            contenido_planes_play += '<input type="text" id="precio_play" class="form-control" placeholder="precio" value="'+element.precio+'" disabled>';
            contenido_planes_play += '</div>';
            contenido_planes_play += ' <div class="col-3">';
            contenido_planes_play += ' <input type="text" id="monto_play_'+element.id+'" class="form-control" placeholder="Monto" disabled>';
            contenido_planes_play += ' </div>';
            contenido_planes_play += '</div>';
        });

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
        contenido_planes_play += '<button type="button" class="btn btn-lg btn-block btn-outline-primary" id="cancelar_play">Cancelar</button>';
        contenido_planes_play += ' </div>';
        contenido_planes_play += ' </div>';
        contenido_planes_play += '';
        

        return contenido_planes_play;

    }
}


