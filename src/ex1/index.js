// Exercise 1 
// Create a backend that respond 

export default {
	async fetch(request, env, ctx) {
		if(request.method === "GET"){
			return new Response("I recived a GET!", {
				headers: {
					"Content-Type": "text/html"
				}
			})
		} else if(request.method === "POST"){
			return new Response("I recived a POST!", {
				headers: {
					"Content-Type": "text/html"
				}
			})
		} else if(request.method === "DELETE"){
			return new Response("I recived a DELETE!", {
				headers: {
					"Content-Type": "text/html"
				}
			})
		} else if(request.method === "PUT"){
			return new Response("I recived a PUT!", {
				headers: {
					"Content-Type": "text/html"
				}
			})
		}
	},
};


