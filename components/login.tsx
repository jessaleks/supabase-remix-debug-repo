import { useOutletContext } from '@remix-run/react';

import type { SupabaseOutletContext } from '~/root';

export function Login() {
	const { supabase } = useOutletContext<SupabaseOutletContext>();

	async function handleLogin() {
		return (await supabase).auth.signInWithOAuth({
			provider: 'github',
		});
	}

	const handleLogout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}
