import Link from "next/link"

export default function NotFound() {
    return (
        
        <div className="text-center mt-4">
            <h2 className="text-2xl">There was a problem.</h2>
            <p className="mt-2">We could not find the page you were looking for.</p>
            <p>Go back <Link className="text-blue-400 underline" href="/">home</Link></p>
        </div>
    )
}