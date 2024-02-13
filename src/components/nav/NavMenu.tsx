import Link from "next/link";
import NavLinks from "./NavLinks";

export default async function NavMenu() {
	
	return (
		<>
			<h1 className="text-xl font-bold"><Link href='/'>Feedr<span className="opacity-0 text-gray-600 hover:opacity-80 ease-out duration-300">.eth.limo</span></Link></h1>
			<NavLinks />
		</>
	);
};
