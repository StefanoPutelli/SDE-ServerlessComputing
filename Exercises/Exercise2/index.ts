export default {
	async fetch(request, env) {
	  const { pathname } = new URL(request.url);
  
	  // Gestiamo le operazioni per Customers
	  if (pathname.startsWith("/api/customers")) {
		// Operazione GET: selezioniamo tutti i clienti
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
  
	  // Gestiamo le operazioni per Rooms
	  if (pathname.startsWith("/api/rooms")) {
		// Operazione GET: selezioniamo tutte le stanze
		if (request.method === "GET") {

		  // TODO: Insert the code to perform the query
  
		  return new Response(JSON.stringify(results), {
			headers: { "Content-Type": "application/json" }
		  });
		}
  
		// Build the 404 response
	  }
  
	  // Gestiamo le operazioni per Bookings
	  if (pathname.startsWith("/api/bookings")) {
		// Insert the whole code
	  }
  
	  // Gestiamo le operazioni per Payments
	  if (pathname.startsWith("/api/payments")) {
		// Insert the whole code
	  }
  
	  // Risposta predefinita per richieste a percorsi non definiti
	  return new Response(
		"Use /api/customers, /api/rooms, /api/bookings, or /api/payments",
		{ headers: { "Content-Type": "text/plain" } }
	  );
	},
  };
  