import Profile from "../profile/Profile"

type PageHeaderProps = {
	pageTitle: string
	isProfile: boolean
}

export default function PageHeader({pageTitle, isProfile=false}: PageHeaderProps) {
	return (
		<div>
			<div className="p-2 border-b-2 border-black border-opacity-50">
				<h2 className="text-lg font-bold">{pageTitle}</h2>
				{isProfile ? <Profile /> : <></>}
			</div>
		</div>
	)
}