import type { LoaderArgs } from '@remix-run/node';

import { useLoaderData } from '@remix-run/react';
import { Login } from 'components/login';
import { createServerClient } from '@supabase/auth-helpers-remix';

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      request,
      response,
    }
  );
  const { data } = await supabase.from("messages").select("*");

  return { messages: data ?? [], headers: response.headers };
};

export default function Index() {
	const { messages } = useLoaderData<typeof loader>();
	return (
		<>
			<Login />
			<pre>{JSON.stringify({ messages }, null, 2)}</pre>
		</>
	);
}
