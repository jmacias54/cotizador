function valida_totales_tel_movil(id,cantidad){
    console.log(" --- valida_totales_tel_movil --- ");
    console.log(id);
    console.log(cantidad);

    var monto_input = "#monto_tel_movil_"+id;
    var total = 0; 
    planes_telefonia_movil.forEach(element => {
        if(element.id == id){


            $(monto_input).val(element.precio * cantidad); ;
        }

      
        total = Number(total) + Number($("#monto_tel_movil_"+element.id).val());
    });

    $("#total_tel_movil").val(total);
}




function _planes_telefonia_movil(){


    var contenido_tel_movil= '';

    if(planes_telefonia_movil.length > 0){

        planes_telefonia_movil.forEach(element => {
            contenido_tel_movil += '<div class="row top-buffer">';
            contenido_tel_movil += '<div class="col-4">';
            contenido_tel_movil += element.nombre;
            contenido_tel_movil += '</div>';
            contenido_tel_movil += '<div class="col-2">';
            contenido_tel_movil += '<input type="number" class="form-control" placeholder="Cantidad" min="1" max="100" onchange="valida_totales_tel_movil('+element.id+',this.value)">';
            contenido_tel_movil += '</div>';
            contenido_tel_movil += '<div class="col-3">';
            contenido_tel_movil += '<input type="text" class="form-control" placeholder="precio" value="'+element.precio+'" disabled>';
            contenido_tel_movil += '</div>';
            contenido_tel_movil += ' <div class="col-3">';
            contenido_tel_movil += ' <input type="text"  id="monto_tel_movil_'+element.id+'" class="form-control" placeholder="Monto" disabled>';
            contenido_tel_movil += ' </div>';
            contenido_tel_movil += '</div>';
        });

        contenido_tel_movil += '<div class="row top-buffer">';
        contenido_tel_movil += '<div class="col-9"></div>';
        contenido_tel_movil += '<div class="col-3 border border-warning mx-auto">';
        contenido_tel_movil += ' Total : <input type="text" id="total_tel_movil" class="form-control" placeholder="total" disabled>';
        contenido_tel_movil += ' </div>';
        contenido_tel_movil += '</div>';
        contenido_tel_movil += '<div class="row top-buffer">';
        contenido_tel_movil += '<div class="col-6">';
        contenido_tel_movil += '<button type="button" class="btn btn-lg btn-block btn-outline-primary" id="agregar_tel_movil">Agregar</button>';
        contenido_tel_movil += '</div>';
        contenido_tel_movil += ' <div class="col-6">';
        contenido_tel_movil += '<button type="button" class="btn btn-lg btn-block btn-outline-primary" id="cancelar_tel_movil">Cancelar</button>';
        contenido_tel_movil += ' </div>';
        contenido_tel_movil += ' </div>';
        contenido_tel_movil += '';
        

        return contenido_tel_movil;

    }
}