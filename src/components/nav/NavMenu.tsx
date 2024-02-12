import Link from "next/link";
import NavLinks from "./NavLinks";

export default async function NavMenu() {
	
	return (
		<>
			<h1 className="text-xl font-bold"><Link href='/'>Feedr</Link></h1>
			<ul>
				<NavLinks />
			</ul>
		</>
	);
};
