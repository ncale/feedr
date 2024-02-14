import { CastWithInteractions } from "@neynar/nodejs-sdk/build/neynar-api/v2"
import CastComponent from "./CastComponent"

export default function CastList(props: { casts: CastWithInteractions[] }) {
    
	const castListComponent = props.casts.map((cast) => <CastComponent cast={cast} />)
	
	return (
		<>
			{castListComponent}
		</>
	)
}