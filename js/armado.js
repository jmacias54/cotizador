function initPage() {

	var html_IOT = _planesIOT();
	var html_telefonia_nube = _planes_telefonia_nube();
	var html_telefonia_movil = _planes_telefonia_movil();
	var html_planes_play = _planes_play();

	$("#telefonia_movil").fadeOut(function () {
		$(this).html(html_telefonia_movil).fadeIn('slow');

	});


	$("#tv_internet").fadeOut(function () {
		$(this).html(html_planes_play).fadeIn('slow');

	});

	$("#iot").fadeOut(function () {
		$(this).html(html_IOT).fadeIn('slow');

	});

	$("#telefonia_nube").fadeOut(function () {
		$(this).html(html_telefonia_nube).fadeIn('slow');

	});


	arma_detalle_cotizacion();

}

function cancelar(id_input, plan) {
	console.log(" --- cancelar --- ");
	console.log(id_input);
	console.log(plan);

	var planes_array = [];

	if (plan === 'iot') {
		planes_array = planes_iot;
	} else if (plan === 'tel_movil') {
		planes_array = planes_telefonia_movil;
	} else if (plan === 'tel_nube') {
		planes_array = planes_telefonia_nube;
	}

	planes_array.forEach(element => {
		$("#cantidad_" + plan + "_" + element.id).val(0);
		$("#monto_" + plan + "_" + element.id).val(0);
	});

	$("#total_" + plan).val(0);



}



function arma_detalle_cotizacion() {


	var contenido_html = '';
	var total_detalle = 0;
	planes_add.forEach(element => {


		contenido_html += '<tr>';
		contenido_html += '<th scope="row"></th>';
		contenido_html += '<td>' + element.tipo_plan + '</td>';
		contenido_html += '<td>';
		contenido_html += '		<ul class="list-group">';
		element.items.forEach(item => {
			contenido_html += '				<li class="list-group  list-group-flush">' + item.nombre + '';
			contenido_html += '						<span class="badge badge-primary badge-pill">Cantidad : ' + item.cantidad + '</span>';
			contenido_html += '				</li>';
		});
		contenido_html += '		</ul>';
		contenido_html += '</td>';
		contenido_html += '<td>$ ' + element.precio_total + '</td>';
		contenido_html += '</tr>';

		total_detalle = Number(total_detalle) + Number(element.precio_total);
	});



	$("#detalle").fadeOut(function () {
		$(this).html(contenido_html).fadeIn('slow');

	});

	$("#total_detalle").val(total_detalle);
	
}




function _agregar(id, value) {


	var planes_array = [];
	var tipo_plan = "";

	if (value === 'iot') {
		planes_array = planes_iot;
		tipo_plan ="Integrador IOT"; 
	} else if (value === 'tel_movil') {
		planes_array = planes_telefonia_movil;
		tipo_plan ="Telefonia Movil"; 
	} else if (value === 'tel_nube') {
		planes_array = planes_telefonia_nube;
		tipo_plan ="Telefonia en la Nube"; 
	}


	var items = [];

	planes_array.forEach(element => {


			var cantidad = $("#cantidad_"+value+"_" + element.id).val();
			if (cantidad > 0) {

					var total = $("#monto_"+value+"_" + element.id).val();

					var item = {
							nombre: element.nombre,
							cantidad: cantidad,
							precio_total: total
					}

					items.push(item);

			}

	});

	if (items.length > 0) {

			var total = $("#total_"+value).val();

			var plan = {
					id: planes_add.length + 1,
					tipo_plan: tipo_plan,
					precio_total: total,
					items: items
			}


			planes_add.push(plan);
	}

	arma_detalle_cotizacion();
	cancelar("cancelar_"+value, value);
}