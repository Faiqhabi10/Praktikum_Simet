// Data untuk grafik suhu rata-rata
const temperatureData = {
    labels: [2000, 2005, 2010, 2015, 2020],
    datasets: [{
        label: 'Suhu Rata-rata Global (°C)',
        data: [14.3, 14.5, 14.7, 14.9, 15.1],
        backgroundColor: 'rgba(0, 173, 181, 0.2)',
        borderColor: 'rgba(0, 173, 181, 1)',
        borderWidth: 2
    }]
};

// Opsi untuk grafik
const config = {
    type: 'line',
    data: temperatureData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
};

// Inisialisasi grafik
const ctx = document.getElementById('temperatureChart').getContext('2d');
new Chart(ctx, config);
