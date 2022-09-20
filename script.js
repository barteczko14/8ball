const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answers = [
	'Yes',
	'No',
	'You do not want to know the answer ;/',
	'maybe',
];

const shakeBall = () => {
	ball.classList.add('shake-animation');
	setTimeout(checkInput, 1000);
};

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer();
		error.textContent = '';
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'The question must be ended with a question mark';
		answer.textContent = '';
	} else {
		error.textContent = 'You need to ask a question!';
		answer.textContent = '';
	}
	ball.classList.remove('shake-animation');
};

const generateAnswer = () => {
	const number = Math.floor(Math.random() * answers.length);
	answer.innerHTML = `<span>Answer:</span> ${answers[number]}`;
};

ball.addEventListener('click', shakeBall);
