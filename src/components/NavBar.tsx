import Link from "next/link";

export default function NavBar() {
	return (
		<>
			<h1 className="text-xl font-bold"><Link href='/'>F E E D caster</Link></h1>
			<ul>
				<li><Link href='/profile'>profile</Link></li>
				<li><Link href='/~/explore'>explore</Link></li>
			</ul>
		</>
	);
};