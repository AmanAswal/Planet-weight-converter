document.getElementById('output').style.visibility = 'hidden';

document.getElementById('kgsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let kgs = e.target.value;
    document.getElementById('mercuryOutput').innerHTML = ((kgs/9.81)*3.7).toFixed(2) + " kg";
    document.getElementById('venusOutput').innerHTML = ((kgs/9.81)*8.87).toFixed(2) + " kg";
    document.getElementById('moonOutput').innerHTML = ((kgs/9.81)*1.622).toFixed(2) + " kg";
    document.getElementById('marsOutput').innerHTML = ((kgs/9.81)*3.711).toFixed(2) + " kg";
    document.getElementById('jupiterOutput').innerHTML = ((kgs/9.81)*24.79).toFixed(2) + " kg";
    document.getElementById('saturnOutput').innerHTML = ((kgs/9.81)*10.44).toFixed(2) + " kg";
    document.getElementById('uranusOutput').innerHTML = ((kgs/9.81)*8.69).toFixed(2) + " kg";
    document.getElementById('neptuneOutput').innerHTML = ((kgs/9.81)*11.15).toFixed(2) + " kg";
});

