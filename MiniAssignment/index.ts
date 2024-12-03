export interface Env {
	// If you set another name in wrangler.toml as the value for 'binding',
	// replace "DB" with the variable name you defined.
	DB: D1Database;
  }
  
  export default {
	async fetch(request, env): Promise<Response> {
	  const { pathname, searchParams } = new URL(request.url);
	  const params = new URLSearchParams(searchParams);

	  // For the /api/customers endpoint
	  if (pathname === "/api/customers") {

		// If you did not use `DB` as your binding name, change it here
		const { results } = await env.DB.prepare(
		  "SELECT * FROM Customers",
		).all();

		return Response.json(results);
	  } 
	  // TODO: Insert the correct <URL>
	  else if (pathname === "<URL>") {		// For the /api/bookings endpoint

		// Get the booking_id parameter from the URL
		const bookingId = params.get('booking_id');

		// If the booking_id parameter is present
		if(bookingId) {

			// If you did not use `DB` as your binding name, change it here
			const { results } = await env.DB.prepare(
				// TODO: Insert the SQL query that accepts a booking_id parameter, use Booking table
			)
			.bind(bookingId)
			.all();

			return Response.json(results);
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
