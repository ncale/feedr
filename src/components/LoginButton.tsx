'use client';

import '@farcaster/auth-kit/styles.css';
import { AuthKitProvider, SignInButton, StatusAPIResponse } from '@farcaster/auth-kit';
import { useSession, signIn, signOut, getCsrfToken } from "next-auth/react";

import { useCallback, useState } from "react";

export default function LoginButton() {
	
	const [error, setError] = useState(false);

  const getNonce = useCallback(async () => {
    const nonce = await getCsrfToken();
    if (!nonce) throw new Error("Unable to generate nonce");
    return nonce;
  }, []);

  const handleSuccess = useCallback(
    (res: StatusAPIResponse) => {
      signIn("credentials", {
        message: res.message,
        signature: res.signature,
        name: res.username,
        pfp: res.pfpUrl,
        redirect: false,
      });
    },
    [signIn]
  );
	
	return (
		<>
			<AuthKitProvider>
				<SignInButton 
					nonce={getNonce}
					onSuccess={handleSuccess}
					onError={() => setError(true)}
					onSignOut={() => signOut() }
				/>
			</AuthKitProvider>
		</>
	);
};