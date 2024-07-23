<main class="flex justify-center items-center h-screen">
	<div class="w-full max-w-lg shadow bg-white border p-4 rounded-xl">
		<h1 class="text-3xl font-bold mb-4">Create your account</h1>
		<form
			method="POST"
			action="?/signup"
			class=" flex flex-col space-y-2 pb-4 border-b border-slate-200"
		>
			<label for="email" class="font-semibold"> Email </label>
			<input
				placeholder="Votre email"
				class="border border-slate-100 p-2 rounded-md shadow-sm"
				name="email"
				id="email"
				type="email"
			/>
			<label for="password" class="font-semibold"> Password </label>
			<input
				placeholder="password"
				class="border border-slate-100 p-2 rounded-md shadow-sm"
				name="password"
				id="password"
				type="password"
			/>
			<button class="w-full bg-blue-500 hover:bg-blue-600 rounded-md text-white py-2"
				>Create an account</button
			>
		</form>

		<form method="POST" class="pt-4">
			<button
				formaction="?/login&provider=google"
				class="bg-white border flex items-center gap-2 justify-center border-slate-100 shadow w-full p-2 rounded-md"
				><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"
					><path
						d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
						fill="#4285F4"
					/><path
						d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
						fill="#34A853"
					/><path
						d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
						fill="#FBBC05"
					/><path
						d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
						fill="#EA4335"
					/><path d="M1 1h22v22H1z" fill="none" /></svg
				>Signin with Google</button
			>
		</form>
		<div class="mt-4">
			<p class="text-sm text-center">
				Already have an account? <a class="text-blue-500 underline" href="/login">Login</a>
			</p>
		</div>
	</div>
</main>
