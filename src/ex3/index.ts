export interface Env {
	// If you set another name in wrangler.toml as the value for 'binding',
	// replace "DB" with the variable name you defined.
	DB: D1Database;
  }
  
  export default {
	async fetch(request, env): Promise<Response> {
	  const { pathname, searchParams } = new URL(request.url);
	  const params = new URLSearchParams(searchParams);
  
	  if (pathname === "/api/bookings") {
		const bookingId = params.get('booking_id');
		if(bookingId) {
			// If you did not use `DB` as your binding name, change it here
			const { results } = await env.DB.prepare(
			"SELECT * FROM Bookings WHERE booking_id = ?",
			)
			.bind(bookingId)
			.all();
			return Response.json(results);
		} else {
			// If you did not use `DB` as your binding name, change it here
			return new Response("booking_id parameter is missing", { status: 400 });
	  	}
	}
  
	return new Response(
	"Call /api/customers to see all table entries\n" + 
	"Call /api/bookings?booking_id= to see a specific booking entry",
	);
},
} satisfies ExportedHandler<Env>;