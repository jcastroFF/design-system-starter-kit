var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var config1 = {
    type: 'doughnut',
    data: {
    datasets: [{
        data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        ],
        backgroundColor: [
        window.chartColors.red,
        window.chartColors.orange,
        window.chartColors.yellow,
        window.chartColors.green,
        window.chartColors.blue,
        ],
        label: 'Dataset 1'
    }],
    labels: [
        'Red',
        'Orange',
        'Yellow',
        'Green',
        'Blue'
    ]
    },
    options: {
    responsive: true,
    legend: {
        position: 'right',
    },
    title: {
        display: true,
        text: ''
    },
    animation: {
        animateScale: true,
        animateRotate: true
    }
    }
};
        
var progress = document.getElementById('animationProgress');
var config2 = {
type: 'line',
data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        fill: false,
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]},
        {fill: false,
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
        }]
},
options: {
    title: {
    display: true,
    text: ''
    },legend: false
    ,
    animation: {
    duration: 2000,
    onProgress: function(animation) {
        progress.value = animation.currentStep / animation.numSteps;
    },
    onComplete: function() {
        window.setTimeout(function() {
        progress.value = 0;
        }, 2000);
    }
    }
}
};

var config3 = {
type: 'pie',
data: {
    datasets: [{
    data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
    ],
    backgroundColor: [
        window.chartColors.red,
        window.chartColors.orange,
        window.chartColors.yellow,
        window.chartColors.green,
        window.chartColors.blue,
    ],
    label: 'Dataset 1'
    }],
    labels: [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue'
    ]
},
options: {
    responsive: true,
    legend: false
}
};

window.onload = function() {
    var ctx = document.getElementById('chart-area1').getContext('2d');
    window.myDoughnut = new Chart(ctx, config1);
    var ctx = document.getElementById('chart-area2').getContext('2d');
    window.myLine = new Chart(ctx, config2);
    var ctx = document.getElementById('chart-area3').getContext('2d');
    window.myLine = new Chart(ctx, config3);
};

var colorNames = Object.keys(window.chartColors);
