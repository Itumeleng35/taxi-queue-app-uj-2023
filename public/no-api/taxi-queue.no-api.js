document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'no-api-1.0',
		taxi: 0,
		queuedPerson: 0,
		queue: 0,

			joinQueue() {
				this.queuedPerson++;
				// if (this.queuedPerson) {
				// 	return this.queuedPerson++;
				// }

			},

			leaveQueue() {
				this.queuedPerson--;
				// if (this.queuedPerson > 1) {
				// 	return this.queuedPerson--;
				// }

			},

			joinTaxiQueue() {
				this.taxi++;
				// if (this.queuedPerson > 12) {
					// return this.taxi++;
				// }else {
					// error: 'Not enough people in the taxi';
				
			},

			queueLength() {
				return taxi.length;
			},

			taxiQueueLength() {
				
				if (this.queue = 0) {
					return taxi.length;
				}
			},

			taxiDepart() {
				// this.taxi--;
				if (this.queuedPerson > 12) {
					this.taxi--;
					this.queuedPerson = this.queuedPerson - 12;
					
				// if (this.taxi > 1)
				// 	return this.taxi.counter--;
				}

			}
		}

	});





});


