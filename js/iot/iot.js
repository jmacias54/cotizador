function valida_totales_iot(id,cantidad){
    console.log(" --- valida_totales_iot --- ");
    console.log(id);
    console.log(cantidad);

    var monto_input = "#monto_iot_"+id;
    var total = 0; 
    planes_iot.forEach(element => {
        if(element.id == id){


            $(monto_input).val(element.precio * cantidad); ;
        }

      
        total = Number(total) + Number($("#monto_iot_"+element.id).val());
    });

    $("#total_iot").val(total);
}



function _planesIOT(){


    var contenido_planes_iot= '';

    if(planes_iot.length > 0){

        planes_iot.forEach(element => {
            contenido_planes_iot += '<div class="row top-buffer">';
            contenido_planes_iot += '<div class="col-3">';

            if(!element.adicional){
                contenido_planes_iot += '<strong>'+element.nombre+'</strong>';
            }else{
                contenido_planes_iot += element.nombre + '*';
            }
           
            contenido_planes_iot += '</div>';
            contenido_planes_iot += '<div class="col-2">';
            contenido_planes_iot += '<input type="number" id="cantidad_iot_'+element.id+'"class="form-control" placeholder="Cantidad" min="1" max="100" onchange="valida_totales_iot('+element.id+',this.value)">';
            contenido_planes_iot += '</div>';
            contenido_planes_iot += '<div class="col-3">';
            contenido_planes_iot += '<input type="text" class="form-control" placeholder="precio" value="'+element.precio+'" disabled>';
            contenido_planes_iot += '</div>';
            contenido_planes_iot += ' <div class="col-3">';
            contenido_planes_iot += ' <input type="text" id="monto_iot_'+element.id+'" class="form-control" placeholder="Monto" disabled>';
            contenido_planes_iot += ' </div>';
            contenido_planes_iot += '</div>';
        });

        contenido_planes_iot += '<div class="row top-buffer">';
        contenido_planes_iot += '<div class="col-9"></div>';
        contenido_planes_iot += '<div class="col-3 border border-warning mx-auto">';
        contenido_planes_iot += ' Total : <input type="text" id="total_iot" class="form-control" placeholder="total" disabled>';
        contenido_planes_iot += ' </div>';
        contenido_planes_iot += '</div>';
        contenido_planes_iot += '<div class="row top-buffer">';
        contenido_planes_iot += '<div class="col-6">';
        contenido_planes_iot += '<button type="button" class="btn btn-lg btn-block btn-outline-primary" id="agregar_iot" value="iot"   onclick="_agregar(this.id,this.value)">Agregar</button>';
        contenido_planes_iot += '</div>';
        contenido_planes_iot += ' <div class="col-6">';
        contenido_planes_iot += '<button type="button" class="btn btn-lg btn-block btn-outline-primary" id="cancelar_iot" value="iot"  onclick="cancelar(this.id,this.value)">Cancelar</button>';
        contenido_planes_iot += ' </div>';
        contenido_planes_iot += ' <div class="col">';
        contenido_planes_iot += '  <font color="red"><small>* Elementos adicionales al Kit<small></font>';
        contenido_planes_iot += ' </div>';
        contenido_planes_iot += ' </div>';
        contenido_planes_iot += '';
        

        return contenido_planes_iot;

    }
}





function guardar(id_input,plan){
    console.log(" --- guardar --- ");
    console.log(id_input);
    console.log(plan);

  
}
