/* projectsPicker.js
When a link to show an open project is clicked, we want to open a sidebar which contains some content
about the project. For this, I implemented a custom event. This function contains some helper functions related to that.
*/
export const projectPickedEventName = 'projectPicked'; // The main event name.
export function announceProjectPicked(projectId) {
	/**
	 * Helper function for dispatching an event to announce that a project has been picked.
	 * @type {CustomEvent<unknown>}
	 * @param projectId: The ID of the project to announce has been picked.
	 */
	// Create a new custom event and send the project ID as a detail
	const event = new CustomEvent(projectPickedEventName, {
		detail: projectId
	});
	document.dispatchEvent(event);
}
