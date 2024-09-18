import Link from "next/link"
import Image from "next/image"
import logo from "../public/neetcode-io-logo.png"

export default function Nav() {
  return (
    <nav className="bg-gray-700">
        <div className="flex px-6 py-2 gap-10">
            <Link href="/"><Image src={logo} alt="NeetCode" width={36} /></Link>
            <ul className="flex gap-12">
                <li><Link href="/">Courses</Link></li>
                <li><Link href="/">Practice</Link></li>
                <li><Link href="/">Roadmap</Link></li>
                <li><Link href="/">Newsletter</Link></li>
            </ul>
        </div>
        <div>

        </div>
        <hr />
    </nav>
  )
}
