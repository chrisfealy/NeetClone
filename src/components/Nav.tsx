import Link from "next/link"
import Image from "next/image"
import logo from "../public/neetcode-io-logo.png"

export default function Nav() {
  return (
    <>
      <nav className="bg-gray-700 flex justify-between">
        <div className="flex px-6 py-2 gap-10 items-center font-semibold">
          <Link href="/" className="transition duration-200 ease-in-out hover:rotate-12"><Image src={logo} alt="NeetCode" width={36} /></Link>
          <ul className="flex gap-6">
            <li className="px-4 py-1 rounded-full transition duration-200 ease-out hover:bg-gray-900"><Link href="/">Courses</Link></li>
            <li className="px-4 py-1 rounded-full transition duration-200 ease-out hover:bg-gray-900"><Link href="/practice">Practice</Link></li>
            <li className="px-4 py-1 rounded-full transition duration-200 ease-out hover:bg-gray-900"><Link href="/">Roadmap</Link></li>
            <li className="px-4 py-1 rounded-full transition duration-200 ease-out hover:bg-gray-900"><Link href="/">Newsletter</Link></li>
          </ul>
        </div>

        <div>
          <div>

          </div>
        </div>
      </nav>
      <hr />
    </>
  )
}
