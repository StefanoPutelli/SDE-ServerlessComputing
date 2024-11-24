const FTEXT_URL = "https://4e0a9eeb.miniass.pages.dev/api/receivetext";

interface requestBody {
	text: string;
}

export default {
	async fetch(request, env, ctx) {
		if (request.method === "GET") {
			// TODO: Change name as you like, max 20 characters
			const name = "Clone";

			// TODO: make a POST request to the FTEXT_URL with the name as text field in the post data
			

			const data = await response.json();
			return new Response(data.message, {
				status: 200,
				statusText: "OK",
			});
		} else {
			return new Response("Method not allowed", {
				status: 405,
				statusText: "Method Not Allowed",
			});
		}
		// TODO: In the case of a DELETE request, return a response with the message "I recived a DELETE!"
	},
};


