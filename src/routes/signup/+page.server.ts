import { redirect } from '@sveltejs/kit';
import { type Provider } from '@supabase/supabase-js';
import type { Actions } from './$types';

export const actions: Actions = {
	signup: async ({ request, locals: { supabase }, url }) => {

		const provider = url.searchParams.get('provider') as Provider;

		if (provider) {
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider,
				options: {
					redirectTo: 'http://localhost:5173/login/callback'
				}
			});

			if (error) {
				console.error(error);
				redirect(303, '/login/error');
			}

			console.log(data);

			if (data.url) {
				throw redirect(303, data.url);
			}
		}

		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signUp({ email, password });
		if (error) {
			console.error(error);
			redirect(303, '/signup/error');
		} else {
			redirect(303, '/');
		}
	}
};
