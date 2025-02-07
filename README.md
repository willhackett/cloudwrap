# cloudwrap

I wrote this on a Friday evening to replace CleanShot X's cloud upload feature. It's a simple upload handler and a web server that serves the uploaded files.

It deploys to Cloudflare Workers and uses R2 for storage.

There's a Siri Shortcut that uploads the last screenshot to the server.

## Deploy to Cloudflare Workers

I added a button that deploys the project to Cloudflare Workers. You can use it to deploy your own instance of cloudwrap.

1. Sign up to Cloudflare & create an R2 bucket named `cloudwrap`.

2. Click the button below to deploy the project to Cloudflare Workers.

   [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/willhackett/cloudwrap)

3. Navigate to the Workers dashboard and add the following environment variables as a secret:

   - `SHARED_SECRET` - Choose a secret key that will be used to authenticate requests.

4. (Optionally) Setup a custom domain for your Worker.

## Setup the Siri Shortcut

1. Click the link below to download the Siri Shortcut.

   [Download the shortcut](https://www.icloud.com/shortcuts/3f7fdffd75d2449c901498821ad4173a)

2. Set the _Endpoint URL_ variable to the URL of your Worker

3. Set the _Secret_ variable to the secret key you chose earlier

4. (Optionally) Make it accessible

   - On macOS select "Finder" under "Use as Quick Action"
   - On macOS select "Show in Share Sheet"

## Manual installation

1. Clone the repository

   ```sh
   git clone https://github.com/willhackett/cloudwrap.git
   ```

2. Install the dependencies

   ```sh
   npm install
   ```

3. Deploy the project to Cloudflare Workers

   ```sh
   wrangler deploy
   ```

4. Follow secret setup instructions from the Cloudflare Workers deployment section

## Customise the template

The template is located in `public/template.html`. You can customise it to your liking.
