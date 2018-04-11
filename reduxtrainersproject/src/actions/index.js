// select the Trainer to show details when click action occurs

// in redux, action is made up of two parts (type, payload)
//SelectTrainer is action which we bind it to click event of DOM in react

export const selectTrainer=(trainer)=>{
	console.log("You have clicked on Trainer ",trainer.first);
	return {
		type:'TRAINER_SELECTED',
		payload:trainer
	}
}