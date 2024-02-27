function GeneraGrafico (datos) {
// console.log(datos);
    var options = {
        title: {
            text: `Estadisticas de Poder Para:${datos.name}`
        },
        backgroundColor: "#f6d365",
        animationEnabled: true,
        data: [{
            type: "pie",
            startAngle: 40,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 13,
            indexLabel: "{label}-{y}%",
            dataPoints: [
                { y: datos.powerstats.intelligence, label: "Intelligence" },
                { y: datos.powerstats.strength, label: "strength" },
                { y: datos.powerstats.speed, label: "Speed" },
                { y: datos.powerstats.durability, label: "durability" },
                { y: datos.powerstats.power,  label: "power" },
                { y: datos.powerstats.combat, label: "combat" },

            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
    
    }