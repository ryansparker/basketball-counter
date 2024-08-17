let btnHome1 = document.getElementById('btn-home-1');
let btnHome2 = document.getElementById('btn-home-2');
let btnHome3 = document.getElementById('btn-home-3');

let btnAway1 = document.getElementById('btn-away-1');
let btnAway2 = document.getElementById('btn-away-2');
let btnAway3 = document.getElementById('btn-away-3');

let btnNew = document.getElementById('btn-new');

let homeScore = document.getElementById('home');
let awayScore = document.getElementById('away');

let scoreHome = document.getElementById('score-home');
let scoreAway = document.getElementById('score-away');

let homeCount = 0;
let awayCount =0;

function updateScoreHighlight() {

	if (homeCount > awayCount) {
		scoreHome.classList.add('highlight-lead');
		scoreAway.classList.remove('highlight-lead');
	} else if (awayCount > homeCount) {
		scoreAway.classList.add('highlight-lead');
		scoreHome.classList.remove('highlight-lead');
	} else {
		// If scores are equal, remove highlight from both
		scoreHome.classList.remove('highlight-lead');
		scoreAway.classList.remove('highlight-lead');
	}
}

btnHome1.addEventListener('click', () => {
homeCount += 1;
	homeScore.innerText= homeCount;
	updateScoreHighlight()
});
btnHome2.addEventListener('click', () => {
	homeCount += 2;
	homeScore.innerText= homeCount;
	updateScoreHighlight()
});
btnHome3.addEventListener('click', () => {
	homeCount += 3;
	homeScore.innerText= homeCount;
	updateScoreHighlight()
});

btnAway1.addEventListener('click', () => {
	awayCount += 1;
	awayScore.innerText= awayCount;
	updateScoreHighlight()
});
btnAway2.addEventListener('click', () => {
	awayCount += 2;
	awayScore.innerText= awayCount;
	updateScoreHighlight()
});
btnAway3.addEventListener('click', () => {
	awayCount += 3;
	awayScore.innerText= awayCount;
	updateScoreHighlight()
});

btnNew.addEventListener('click', () => {
	awayCount = 0
	homeCount = 0
	awayScore.innerText= awayCount;
	homeScore.innerText= homeCount;
	updateScoreHighlight()
})

