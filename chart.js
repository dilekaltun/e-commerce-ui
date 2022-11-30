const data = {
    datasets: [
        {
            data: [10, 20, 48, 28, 80],
            backgroundColor: "hsl(252, 82.9%, 67.8%)",
            borderColor: "#C7F2FF",
            borderWidth: 4,
            hoverBorderWidth: 8,
            fill: false,
            pointBorderColor: "#fff",
            pointBorderWidth: 4,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 1,
            pointRadius: 6,
        },
        {
            label: '2nd',
            data: [20, 30, 60, 40, 96],
            backgroundColor: 'hsl(252, 82.9%, 67.8%)',
            borderWidth: 4,
            borderColor: '#FFE5EE',
            hoverBorderWidth: 8,
            fill: false,
            pointBorderColor: "#fff",
            pointBorderWidth: 4,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 1,
            pointRadius: 6,

        }
    ],
    labels: ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4',]
};

const configLineChart = {
    type: 'line',
    data,
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                },
                min: 0,
                max: 100,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 20
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
                tension: 0.4 // smooth lines
            },
        },
        responsive: true,
    },
};

var chartLine = new Chart(
    document.getElementById('chartLine'),
    configLineChart
);


