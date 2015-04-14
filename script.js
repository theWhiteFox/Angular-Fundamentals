// Function to avoid global variables IIFE

// Immediatly invoked function expression (IFFE)
(function() {

	var createWorker = function(){

		var workCount = 0;

		// encapsulate code inside of function private 
		var job1 = function(){
			workCount++;
			console.log("job1 " + workCount);
		};

		var job2 = function(){
			workCount++;
				console.log("job2 " + workCount);
		};

		return {
			job1: job1,
			job2: job2
		};
	};


	var worker = createWorker();

		worker.job1();
		worker.job2();
		worker.job2();
		worker.job2();

}()); // end IFFE

