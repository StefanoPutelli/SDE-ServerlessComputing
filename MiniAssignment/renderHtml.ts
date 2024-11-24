const FTEXT_URL = "https://4e0a9eeb.miniass.pages.dev/";

export default function renderHtml(content: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Simple Web Page</title>
        <link rel="stylesheet" type="text/css" href="https://templates.cloudflareintegrations.com/styles.css">
      </head>
    
      <body>
        <header>
          <h1>Insert some text!</h1>
        </header>
        <main>
          <form id="textForm" style="display:flex;flex-direction: column;align-items:center;gap:1em;margin-bottom:1em;">
            <label for="textInput">Enter text:</label>
            <input type="text" id="textInput" name="textInput" required />
            <button type="submit" style="padding:1em;">Submit</button>
          </form>
          <pre><code></code></pre>
        </main>
        <script>
          document.getElementById('textForm').addEventListener('submit', async function(event) {
            event.preventDefault();
            const textInput = document.getElementById('textInput').value;
            const response = await fetch('${FTEXT_URL + "api/receivetext"}', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ text: textInput })
            });
            const result = await response.json();
            document.querySelector('pre code').textContent = JSON.stringify(result, null, 2);
          });
        </script>
      </body>
    </html>
  `;
}
