# Angular2Files sample
This project is based on a Angular2 beta project built by Richard diZerega in his blog post and video available on https://blogs.msdn.microsoft.com/richard_dizeregas_blog/2015/12/16/angular-2-0-and-the-microsoft-graph/.

## Installation
1. Clone this repo
2. Register a new app in Azure AD with Login URL https://127.0.0.1:8080/#/login, grant permissions to Read User Files in Microsoft Graph section and enable implicit flow.
3. Update constants in `\src\svcConsts\svcConsts.ts` to match your registered app (You need Client ID under which is the app registered in Azure AD and Tenant URL)
3. Run `npm install` to install dependencies
4. Run `npm start` to start the app
5. Have fun with the app. 