// chart-two
const dataTwo = {
    datasets: [
        {
            data: [40, 30, 45, 34, 30, 45, 32],
            // backgroundColor: gradient,
            pointBackgroundColor: "#5840BB",
            borderColor: "#5840BB",
            borderWidth: 2,
            hoverBorderWidth: 8,
            fill: false,
            pointBorderColor: "#fff",
            pointBorderWidth: 4,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 1,
            pointRadius: 6,
        },
    ],
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
};

const configLineChartTwo = {
    type: 'line',
    data: dataTwo,
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                },
                min: 0,
                max: 50,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 25,
                    callback: function(value, index, values) {
                        return value + 'K';
                    }

                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false,
                labels: {
                    usePointStyle: true, // show legend as point instead of box
                    fontSize: 10 // legend point size is based on fontsize
                }
            },
            tooltip: {
                backgroundColor: '#5840BB',
                cornerRadius: {topLeft: 15, topRight: 5, bottomLeft: 5, bottomRight: 15},
                padding: 15,
                yAlign: 'bottom',
                callbacks: {
                    title: function (tooltipItem, data) {
                        return '10.06 - 17.06.2020';

                    },
                    label: function (tooltipItem, data) {
                        return '';
                    },
                    afterLabel: function (tooltipItem, data) {
                        return '$ 7 320,89';
                    }
                },
            },
        },
        elements: {
            line: {
                tension: 0.3// smooth lines
            },
        },
    },
};

var chartLineTwo = new Chart(
    document.getElementById('chartLineTwo'),
    configLineChartTwo
)

// var ctx = document.getElementById("chartLineTwo").getContext("2d");
//
// // /*** Gradient ***/
// var gradient = ctx.createLinearGradient(0, 0, 0, 0);
// gradient.addColorStop(0, 'rgba(250,174,50,1)');
// gradient.addColorStop(1, 'rgb(150,36,36)');
// // /***************/

