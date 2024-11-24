import requests
import os
import sys

def send_image_with_curl(image_path, api_url):
    """
    Sends an image to an API endpoint using POST with headers similar to a cURL command.

    Args:
        image_path (str): The path to the image to be sent.
        api_url (str): The API endpoint URL.

    Returns:
        dict or str: The API response as JSON (if available) or raw text.
    """
    if not os.path.exists(image_path):
        raise FileNotFoundError(f"Image not found: {image_path}")

    # Ensure the content type matches a JPEG file
    content_type = "image/jpeg"
    if not image_path.lower().endswith((".jpg", ".jpeg")):
        raise ValueError(f"The file must be a JPEG image. Provided: {image_path}")

    try:
        with open(image_path, "rb") as image_file:
            # Perform the POST request
            headers = {"Content-Type": content_type}
            response = requests.post(api_url, headers=headers, data=image_file)
            response.raise_for_status()  # Check for HTTP errors
            # Try to return the JSON response, or fallback to raw text
            try:
                return response.json()
            except ValueError:
                return response.text
    except requests.exceptions.RequestException as e:
        raise RuntimeError(f"Error during POST request: {e}")

def format_response(response):
    """
    Formats the API response for better readability.

    Args:
        response (dict): The JSON response from the API.

    Returns:
        str: A formatted string for display.
    """
    if "response" in response:
        formatted_output = "API Response:\n"
        for item in response["response"]:
            label = item.get("label", "Unknown")
            score = item.get("score", 0)
            formatted_output += f"- {label}: {score:.2%}\n"
        return formatted_output
    else:
        return "Unexpected response format:\n" + str(response)

if __name__ == "__main__":
    # Ensure the script is executed with the correct arguments
    if len(sys.argv) != 2:
        print("Usage: python example.py <image_path>")
        sys.exit(1)

    # Get the image path from the command-line argument
    image_path = sys.argv[1]

    # TODO: Replace with your API endpoint
    api_url = "https://example.<your-domain>.workers.dev"

    try:
        # Send the image
        response = send_image_with_curl(image_path, api_url)
        print(format_response(response))
    except Exception as e:
        print(f"Error: {e}")
