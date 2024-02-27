$(document).ready(function () {
    // recibiendo id super heroe del formulario 
    $("#buscarSuperHeroe").on("click", function () {
        var superHero = $("#superHero").val()
        console.log(superHero)
        $.ajax({
            type: "GET",
            url:`https://www.superheroapi.com/api.php/4905856019427443/${superHero}`,
            dataType: "json",
            success: function (datos) {
            //   console.log(datos.biography.first-appearance);
                $("#Nomb-Super").text(datos.name);
                $("#pub").text(datos.biography.publisher);
                $("#ocupacion").text(datos.work.occupation);
                $("#primeraAparicion").text(datos.biography["first-appearance"]);
                $("#altura").text(datos.appearance.height);
                $("#peso").text(datos.appearance.weight[1]);
                $("#conexion").text(datos.connections["group-affiliation"]);
               
                $("#alianzas").text(datos.biography.aliases);
                $("#imgSuperHero").attr({"src":datos.image.url})
            },
        });
    });
});


// la urel del profe:


// https://www.superheroapi.com/api.php/4905856019427443/213