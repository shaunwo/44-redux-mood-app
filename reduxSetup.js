// defining default (meh) mood and the method to change the mood
const DEFAULT_STATE = {
	face: '┐( ˘_˘ )┌',
};

function moodReducer(state = DEFAULT_STATE, action) {
	// changing beteween the different moods
	switch (action.type) {
		case 'MOOD_HAPPY':
			return { ...state, face: action.payload };
		case 'MOOD_SAD':
			return { ...state, face: action.payload };
		case 'MOOD_ANGRY':
			return { ...state, face: action.payload };
		case 'MOOD_CONFUSED':
			return { ...state, face: action.payload };
		case 'MOOD_RESET':
			return { ...state, face: DEFAULT_STATE.face };
		default:
			return state;
	}
}
