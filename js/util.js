function cancelar(id_input,plan){
    console.log(" --- cancelar --- ");
    console.log(id_input);
    console.log(plan);


    var planes_arr = "planes_"+plan;

    planes_arr.forEach(element => {
        $("#monto_"+plan+"_"+element.id).val(0);
    });

    $("#total_"+plan).val(0);
  

  
}


function guardar(id_input,plan){
    console.log(" --- guardar --- ");
    console.log(id_input);
    console.log(plan);

  
}
