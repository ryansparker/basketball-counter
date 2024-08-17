let btnHome1 = document.getElementById('btn-home-1');
let btnHome2 = document.getElementById('btn-home-2');
let btnHome3 = document.getElementById('btn-home-3');

let btnAway1 = document.getElementById('btn-away-1');
let btnAway2 = document.getElementById('btn-away-2');
let btnAway3 = document.getElementById('btn-away-3');

let homeScore = document.getElementById('home');
let awayScore = document.getElementById('away');

let homeCount = 0;
let awayCount =0;

btnHome1.addEventListener('click', () => {
homeCount += 1;
	homeScore.innerText= homeCount;
});
btnHome2.addEventListener('click', () => {
	homeCount += 2;
	homeScore.innerText= homeCount;
});
btnHome3.addEventListener('click', () => {
	homeCount += 3;
	homeScore.innerText= homeCount;
});

btnAway1.addEventListener('click', () => {
	awayCount += 1;
	awayScore.innerText= awayCount;
});
btnAway2.addEventListener('click', () => {
	awayCount += 2;
	awayScore.innerText= awayCount;
});
btnAway3.addEventListener('click', () => {
	awayCount += 3;
	awayScore.innerText= awayCount;
});
