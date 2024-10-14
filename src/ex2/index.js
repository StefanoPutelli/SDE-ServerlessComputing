// Example 1 
// Basic backend that handle GET, POST, DELETE, PUT

export default {
	async fetch(request, env, ctx) {
		if(request.method === "GET"){
			return new Response("Exercise 2!", {
				headers: {
					"Content-Type": "text/html"
				}
			})
		} 
	},
};
