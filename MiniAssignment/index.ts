const FTEXT_URL = "https://4e0a9eeb.miniass.pages.dev/api/receivetext";

interface requestBody {
	text: string;
}

export default {
	async fetch(request, env, ctx) {
		if (request.method === "GET") {
			// TODO: Change name as you like, max 20 characters
			const name = "Clone";

			// TODO: make a POST request to the FTEXT_URL with the name as text field in the post data and await the response
			
			const response = await fetch(FTEXT_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ text: name }),
			});

			const data = await response.json();
			return new Response(data.message, {
				status: 200,
				statusText: "OK",
			});
		} else {
			// If you did not use `DB` as your binding name, change it here
			return new Response("booking_id parameter is missing", { status: 400 });
	  	}
	}
  
	// TODO: Insert the correct <URL>
	return new Response(
	"Call /api/customers to see all table entries\n" + 
	"Call <URL>?booking_id= to see a specific booking entry",
	);
},
} satisfies ExportedHandler<Env>;
