document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'api-1.0',
			queueCounter: 0,
			taxiCount: 0,
		    queuedPerson: 0,
		    queue: 0,
			init() {
				this.queueLength()
			},
			joinQueue() {
				axios
				.post('/api/passenger/join')
				.then(result => {
					this.queuedPerson = result.data.queuedPersonCount
					this.queueLength()

				});
					
				

			},
			leaveQueue() {
				axios
				.post('/api/passenger/leave')
				.then(result => {
					console.log(result);
					this.queuedperson = result.data.queuedPersonCount;
					this.queueLength();
				})
				

			},

			joinTaxiQueue() {
				axios
				.post('/api/taxi/join')
				.then(result => {
					this.taxi = result.data.taxiCount;
					this.taxiQueueLength();
				})
				

			},

			queueLength() {
				axios
					.get('/api/passenger/queue')
					.then(result => {
						// an example API call
						console.log(result.data.queueCount);
						this.queueCounter = result.data.queueCount
					});

			},

			taxiQueueLength() {
				axios
					.get('/api/taxi/queue')
					.then(result => {
						// an example API call
						console.log(result.data.taxiCount);
						this.taxiCount = result.data.taxiCount
					});
				

			},

			taxiDepart() {
				

			}
		}
	});

});



