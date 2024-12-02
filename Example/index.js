export default {
  async fetch(request, env) {
    // Check if the request method is POST
    if (request.method !== "POST") {
      return new Response("Only POST requests are allowed", { status: 405 });
    }

    // Retrieve the request body (expected to contain an image)
    const contentType = request.headers.get("Content-Type");
    if (!contentType || !contentType.startsWith("image/")) {
      return new Response("Invalid Content-Type, expecting an image", { status: 400 });
    }

    // Read the request body as an array of bytes
    const imageData = await request.arrayBuffer();

    // Prepare the input for the AI model
    const inputs = {
      // Convert the ArrayBuffer to a byte array
      image: [...new Uint8Array(imageData)], 
    };

    // Execute the AI model with the provided image
    const response = await env.AIModel.run('@cf/microsoft/resnet-50', inputs);

    // Respond with the AI model's output
    return Response.json({ inputs: { image: [] }, response });
  },
};
