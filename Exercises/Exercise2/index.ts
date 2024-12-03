export default {
	async fetch(request, env) {
	  const { pathname } = new URL(request.url);
  
	  // Manage operations for Customers
	  if (pathname.startsWith("/api/customers")) {
		// Method GET: select all customers
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
  
	  // Manage operations for Rooms
	  if (pathname.startsWith("/api/rooms")) {
		// Method GET: select all rooms
		if (request.method === "GET") {

		  // TODO: Insert the code to perform the query
  
		  return new Response(JSON.stringify(results), {
			headers: { "Content-Type": "application/json" }
		  });
		}
  
		// TODO: Build the 404 response
	  }
  
	  // Manage operations for Bookings
	  if (pathname.startsWith("/api/bookings")) {
		// TODO: Insert the whole code
	  }
  
	  // Manage operations for Payments
	  if (pathname.startsWith("/api/payments")) {
		// TODO: Insert the whole code
	  }
  
	  // Default response for not defined paths
	  return new Response(
		"Use /api/customers, /api/rooms, /api/bookings, or /api/payments",
		{ headers: { "Content-Type": "text/plain" } }
	  );
	},
  };
  