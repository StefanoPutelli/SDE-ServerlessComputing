// Exercise 1 
// Create a backend that responds to HTTP requests with the method GET, POST, PUT and DELETE.

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
		} else if(request.method === "PUT"){
			return new Response("I recived a PUT!", {
				headers: {
					"Content-Type": "text/html"
				}
			})
		}
		// TODO: In the case of a DELETE request, return a response with the message "I recived a DELETE!"
		
	},
};


