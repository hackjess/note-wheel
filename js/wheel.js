var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };
	
	var Cper = CsDfPer = Dper = DsEbper = Eper = Fper = FsGbper = Gper = GsAbper = Aper =AsBfper = Bper = 65;
	console.log(Cper);
    var chartColors = window.chartColors;
    var color = Chart.helpers.color;
    var config = {
        data: {
            datasets: [{
                data: [
                    Cper,
					CsDfPer,
					Dper,
					DsEbper,
					Eper,
					Fper,
					FsGbper,
					Gper,
					GsAbper,
					Aper,
					AsBfper,
					Bper,
                ],
                backgroundColor: [
                    "#1874cd", "#2C0095", "#760190", "#E4007B", "#b22222", "#FE0000", "#e67300", "#FDB700", "yellow", "#81D500", "#217B33", "#13979a",
                ],
                label: 'Note' // for legend
            }],
            labels: [
                "C",
                "C#/Db",
                "D",
                "D#/Eb",
				"E",
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
  pieceLabel: {
    mode: 'label'
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

    document.getElementById('randomizeData').addEventListener('click', function() {
        config.data.datasets.forEach(function(piece, i) {
            piece.data.forEach(function(value, j) {
                config.data.datasets[i].data[j] = randomScalingFactor();
            });
        });
        window.myPolarArea.update();
    });