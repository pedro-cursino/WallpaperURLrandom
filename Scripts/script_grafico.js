async function fetchBitcoinPriceData() {
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json');
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados do Bitcoin');
        }
        const data = await response.json();
        return data.bpi;
    } catch (error) {
        console.error(error);
    }
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

async function drawChart() {
    try {
        const bitcoinData = await fetchBitcoinPriceData();

        const chartData = [['Data', 'Valor do Bitcoin']];
        for (const date in bitcoinData) {
            const formattedDate = date.slice(5);
            chartData.push([formattedDate, bitcoinData[date]]);
        }

        var options = {
            curveType: 'function',
            legend: { position: 'bottom', textStyle: {fontWeight: 'bold'}},
            vAxis: { textPosition: 'none', gridlines: { color: 'transparent' } },
            hAxis: { textPosition: 'none', gridlines: { color: 'transparent' } },
            backgroundColor: 'transparent',
            colors: ['#000']
        };

        var data = google.visualization.arrayToDataTable(chartData);

        var chartDiv = document.getElementById('bitcoin_chart');
        chartDiv.style.backgroundColor = 'transparent';

        var chart = new google.visualization.LineChart(chartDiv);

        chart.draw(data, options);
    } catch (error) {
        console.error(error);
    }
}
