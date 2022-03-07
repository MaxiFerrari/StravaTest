## Available Scripts

In the project directory, you can run:

### `npm start`

IMPORTANT INFORMATION

YOU NEED TO RENAME ".envsample" to ".env" AND YOU NEED TO PUT YOUR AUTHORIZATION CODE THERE.

In order to get your code token with the correct scope of access you will need to access the following page and grant authorization:

https://www.strava.com/oauth/authorize?client_id=[YOUR_CLIENT_CODE]&redirect_uri=http://localhost/exchange_token&response_type=code&scope=read_all,profile:read_all,profile:write,activity:read,activity:read_all,activity:write&approval_prompt=auto

After you access this url and authorize the app, you will get a new url similar to this:

http://localhost/exchange_token?state=&code=[YOUR_CODE]&scope=read,activity:write,activity:read,activity:read_all,profile:write,profile:read_all,read_all

What you need to do is copy [YOUR_CODE] and replace in your .env file in the variable name REACT_APP_CODE

Then in your https://www.strava.com/settings/api page you will get all the other code you need in your .env file like:

REACT_APP_ID_CLIENT you need to add your Client ID
REACT_APP_ACCESS_TOKEN you need to add your Access Token
REACT_APP_CLIENT_SECRET you need to add your Client Secret

after you added all this information to your .env you can start your app by running the npm start in your terminal
