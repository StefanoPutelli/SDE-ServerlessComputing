export default {
	async fetch(request, env) {
	  const { pathname } = new URL(request.url);
  
	  // Customers operations
	  if (pathname.startsWith("/api/customers")) {
		// GET: Select all customers
		if (request.method === "GET") {
		  const { results } = await env.DB.prepare(
			"SELECT * FROM Customers"
		  ).all();
  
		  return new Response(JSON.stringify(results), {
			headers: { "Content-Type": "application/json" }
		  });
		}
  
		return new Response(
		  JSON.stringify({ error: "Method not allowed" }),
		  { status: 405, headers: { "Content-Type": "application/json" } }
		);
	  }
  
	  // Rooms operations
	  if (pathname.startsWith("/api/rooms")) {
		// GET: Select all rooms
		if (request.method === "GET") {

		  //TODO: Insert the code to perform the query
  
		  return new Response(JSON.stringify(results), {
			headers: { "Content-Type": "application/json" }
		  });
		}
  
		//TODO: Build the 404 response
	  }
  
	  // Bookings operations
	  if (pathname.startsWith("/api/bookings")) {
		//TODO: Insert the whole code
	  }
  
	  // Payments operations
	  if (pathname.startsWith("/api/payments")) {
		//TODO: Insert the whole code
	  }
  
	  // Default response
	  return new Response(
		"Use /api/customers, /api/rooms, /api/bookings, or /api/payments",
		{ headers: { "Content-Type": "text/plain" } }
	  );
	},
  };
  