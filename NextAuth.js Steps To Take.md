# To-Do
- [ ] Route Handler
- [ ] Front-End Session Handler
- [ ] Back-End Session Handler
- [ ] Environment Variables
- [ ] Route.TS Options
- [ ] Route Access Control 

# Initialization Guidelines
- Initialize Route Handler (app/api/[...nextauth]/route.ts)
    - GET and POST (const handler = NextAuth...)
- Configure Options
    - Add Environment Variables
        - VERCEL_URL, NEXTAUTH_URL
        - NEXTAUTH_SECRET (`openssl rand -base64 32` )
    - Providers
        - CredentialsProvider (https://next-auth.js.org/configuration/providers/credentials)
            - Adding `profile()` callback, adding role to the database adapter
            - `authorize()` function, look up user from credentials supplied.
    - Pages 
        - Custom signin, signout, error pages
        - Credentials Prov Signin https://next-auth.js.org/configuration/pages#credentials-sign-in
    - Callbacks
        - Asynchronous, override actions when performed.
        - Session callback, getSession(), useSession()
    - Adapter
        - Drizzle Adapter: https://authjs.dev/reference/adapter/drizzle
            - Update Schema and run a Drizzle Migration
        - AdapterUser (https://authjs.dev/reference/core/adapters#adapteruser) (important for role based login)
    - Debug (default value is false, allows auth and db operation debugging)
- Securing Pages (https://next-auth.js.org/tutorials/securing-pages-and-api-routes)
    - Middleware.js (https://next-auth.js.org/tutorials/securing-pages-and-api-routes#nextjs-middleware)
    - Set up Client API
        - Frontend --> useSession() & getSession()
            - Easy way to check if someone is signed in before entering a page
        - Backend  --> getServerSession()
            - Handy for protecting specific API routes. 

# Helpful Guides
- Basics:           https://next-auth.js.org/tutorials/securing-pages-and-api-routes
- Adapters:         https://next-auth.js.org/tutorials/creating-a-database-adapter
- Role-based:       https://authjs.dev/guides/basics/role-based-access-control
- Authorization:    https://blog.logrocket.com/implement-authentication-authorization-next-js/#authentication-vs-authorization-next-js 
- Role-Based:       https://www.youtube.com/watch?v=ay-atEUGIc4 