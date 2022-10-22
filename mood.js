// setting up store
const store = Redux.createStore(moodReducer);

// subscribe renderFace to face changes
const face = document.getElementById('mood');

// defining listeners for each button
document.getElementById('happy').addEventListener('click', () => {
	store.dispatch({ type: 'MOOD_HAPPY', payload: '٩(◕‿◕｡)۶' });
});
document.getElementById('sad').addEventListener('click', () => {
	store.dispatch({ type: 'MOOD_SAD', payload: '(ಥ﹏ಥ)' });
});
document.getElementById('crazy').addEventListener('click', () => {
	store.dispatch({ type: 'MOOD_CRAZY', payload: '(◔ڼ◔)' });
});
document.getElementById('angry').addEventListener('click', () => {
	store.dispatch({ type: 'MOOD_ANGRY', payload: '٩(ఠ益ఠ)۶' });
});
document.getElementById('confused').addEventListener('click', () => {
	store.dispatch({ type: 'MOOD_CONFUSED', payload: 'ლ(ಠ_ಠ ლ)' });
});
document.getElementById('reset').addEventListener('click', () => {
	store.dispatch({ type: 'MOOD_RESET' });
});

// define method to change the face on the screen
function renderFace() {
	face.innerHTML = store.getState().face;
}

// calling the method and upating the store
renderFace();
store.subscribe(renderFace);
