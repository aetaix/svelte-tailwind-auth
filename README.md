# SvelteKit + Tailwind CSS + Supabase Auth

This is a template for [SvelteKit](https://kit.svelte.dev) apps, blend with [Tailwind CSS](https://tailwindcss.com/), and [Supabase Auth](https://supabase.io/docs/guides/auth).

## Get started

Clone the repository:

```bash
git clone https://github.com/aetaix/svelte-tailwind-auth.git my-app
cd my-app
```

Install the dependencies:

```bash
npm install
```

Use the `.env.example` file to create an `.env` file with your Supabase credentials. Those credentials are required to run the app.

```bash
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=yout_supabase_anon_key
```

## Supabase Auth

This template uses Supabase Auth to handle user authentication. All the Safeguard logic is stored in "src/hooks.server.ts" file. You can customize the logic to fit your needs.

```typescript
// Here we define a route guard that checks if the user is authenticated.
const authGuard: Handle = async ({ event, resolve }) => {
	const { session, user } = await event.locals.safeGetSession();
	event.locals.session = session;
	event.locals.user = user;

	// Here you can define the routes that need to be protected.


    /**
     *  This protect the home route if the user is not authenticated.
     */
	if (!event.locals.session && event.url.pathname === '/') {
		redirect(303, '/login');
	}


	// This protect the login and signup routes if the user is already authenticated.
	if (
		(event.locals.session && event.url.pathname === '/login') ||
		(event.locals.session && event.url.pathname === '/signup')
	) {
		redirect(303, '/');
	}

	return resolve(event);
};
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
