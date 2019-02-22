function _planes_telefonia_nube(){


    var contenido_tel_nube = '';

    if(planes_telefonia_nube.length > 0){

        planes_telefonia_nube.forEach(element => {
            contenido_tel_nube += '<div class="row top-buffer">';
            contenido_tel_nube += '<div class="col-4">';
            contenido_tel_nube += element.nombre;
            contenido_tel_nube += '</div>';
            contenido_tel_nube += '<div class="col-2">';
            contenido_tel_nube += '<input type="number" class="form-control" placeholder="Cantidad" min="1" max="100">';
            contenido_tel_nube += '</div>';
            contenido_tel_nube += '<div class="col-3">';
            contenido_tel_nube += '<input type="text" class="form-control" placeholder="precio" value="'+element.precio+'" disabled>';
            contenido_tel_nube += '</div>';
            contenido_tel_nube += ' <div class="col-3">';
            contenido_tel_nube += ' <input type="text" class="form-control" placeholder="Monto" disabled>';
            contenido_tel_nube += ' </div>';
            contenido_tel_nube += '</div>';
        });

        contenido_tel_nube += '<div class="row top-buffer">';
        contenido_tel_nube += '<div class="col-9"></div>';
        contenido_tel_nube += '<div class="col-3 border border-warning mx-auto">';
        contenido_tel_nube += ' Total : <input type="text" class="form-control" placeholder="total" disabled>';
        contenido_tel_nube += ' </div>';
        contenido_tel_nube += '</div>';
        contenido_tel_nube += '<div class="row top-buffer">';
        contenido_tel_nube += '<div class="col-6">';
        contenido_tel_nube += '<button type="button" class="btn btn-lg btn-block btn-outline-primary" id="agregar_tel_nube">Agregar</button>';
        contenido_tel_nube += '</div>';
        contenido_tel_nube += ' <div class="col-6">';
        contenido_tel_nube += '<button type="button" class="btn btn-lg btn-block btn-outline-primary" id="cancelar_tel_nube">Cancelar</button>';
        contenido_tel_nube += ' </div>';
        contenido_tel_nube += ' </div>';
        contenido_tel_nube += '';
        

        return contenido_tel_nube;

    }
}