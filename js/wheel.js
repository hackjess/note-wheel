var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    var chartColors = window.chartColors;
    var color = Chart.helpers.color;
    var config = {
        data: {
            datasets: [{
                data: [
                    65,
					65,
					65,
					65,
					65,
					65,
					65,
					65,
					65,
					65,
					65,
                ],
				
                backgroundColor: [
                    "#1874cd", "#2C0095", "#760190", "#E4007B", "#b22222", "#FE0000", "#e67300", "#FDB700", "yellow", "#81D500", "#217B33", "#13979a"
                ],
                label: 'My dataset' // for legend
            }],
            labels: [
                "C",
                "C#/Db",
                "D",
                "D#/Eb",
                "F",
				"F#/Gb",
				"G",
				"G#/Ab",
				"A",
				"A#/Bb",
				"B"
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Chart.js Polar Area Chart'
            },
            scale: {
              ticks: {
                beginAtZero: true
              },
              reverse: false
            },
            animation: {
                animateRotate: false,
                animateScale: true
            }
        }
    };

    window.onload = function() {
        var ctx = document.getElementById("chart-area");
        window.myPolarArea = Chart.PolarArea(ctx, config);
    };


    var colorNames = Object.keys(window.chartColors);
    document.getElementById('addData').addEventListener('click', function() {
        if (config.data.datasets.length > 0) {
            config.data.labels.push('data #' + config.data.labels.length);
            config.data.datasets.forEach(function(dataset) {
                var colorName = colorNames[config.data.labels.length % colorNames.length];
                dataset.backgroundColor.push(window.chartColors[colorName]);
                dataset.data.push(randomScalingFactor());
            });
            window.myPolarArea.update();
        }
    });