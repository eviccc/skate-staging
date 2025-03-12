


const scriptsInEvents = {

	async GlobalEs_Event22_Act1(runtime, localVars)
	{
		window.parent.postMessage({
		        type: 'SUBMIT_SCORE',
		        score: runtime.globalVars.points
		    }, '*');
		
		console.log(runtime.globalVars.points)
	},

	async GlobalEs_Event25_Act4(runtime, localVars)
	{
		const urlParams = new URLSearchParams(window.location.search);
		const selectedHead = urlParams.get('head');
		const selectedBody = urlParams.get('body');
		const selectedBottom = urlParams.get('bottom');
		const selectedShoes = urlParams.get('shoes');
		
		function getNumberFromKey(key) {
			if (key) {
			const parts = key.split('-');
			return parseInt(parts[parts.length - 1]) || 0;
			}
			return 0;
		}
		
		// Set the global variables in Construct
		runtime.globalVars.selectedHead = getNumberFromKey(selectedHead); 
		runtime.globalVars.selectedBody = getNumberFromKey(selectedBody);
		runtime.globalVars.selectedBottom = getNumberFromKey(selectedBottom);
		runtime.globalVars.selectedShoes = getNumberFromKey(selectedShoes);
	},

	async LoadingEs_Event1_Act6(runtime, localVars)
	{
		localStorage.setItem("gameToken", runtime.globalVars.Token);
	},

	async Lv15Es15_Event3_Act1(runtime, localVars)
	{
		window.parent.postMessage({
		        type: 'SUBMIT_SCORE',
		        score: runtime.globalVars.points
		    }, '*');
		
		console.log(runtime.globalVars.points)
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

