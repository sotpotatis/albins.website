/* tisseltasselClient.js
For showing whether I am listening to music or not, I am accessing the Last.FM API
and retrieving my listening history / "scrobbles".
I implemented an API gateway called "tisseltassel" for this purpose.
It is also what I am accessing here to hide the API token. */
import axios from 'axios';
export default class TisselTasselAPIClient {
	constructor(baseURL) {
		/* Initializes an API client.
        @param baseURL The base server to access tisseltassel on. */
		this.baseURL = baseURL.trim('/');
		this.accessAPI = this.accessAPI.bind(this);
	}
	accessAPI(apiType, apiMethod, apiData, callback) {
		/** Requests an API from the Tisseltassel API gateway.
		 * @param apiType The type of the API. For more information, see https://github.com/sotpotatis/tisseltassel
		 * @param apiMethod The API method to request. For more information, see For more information, see https://github.com/sotpotatis/tisseltassel
		 * @param apiData Any data to send to the API.
		 * @param callback A callback that will receive the result. */
		console.log(`Accessing API ${apiType}, method ${apiMethod} with data ${apiData}...`);
		axios(this.baseURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			data: {
				apiType: apiType,
				apiMethod: apiMethod,
				apiData: apiData
			}
		})
			.then((response) => {
				const responseData = response.data;
				console.log('Received response from Tisseltassel: ', responseData);
				// Each Tisseltassel response has a .success property for whether the request failed or not.
				if (responseData.success) {
					// Send to callback function
					callback(responseData.response);
				} else {
					// Signal error to callback function
					console.log('The request failed.');
					callback(null);
				}
			})
			.catch((error) => {
				console.log('An error occurred when sending a request to Tisseltassel: ', error);
				// Signal error to callback function
				console.log('The request failed.');
				callback(null);
			});
	}
}
