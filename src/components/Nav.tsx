import Link from "next/link"
import Image from "next/image"
import logo from "../public/neetcode-io-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved, faSun } from "@fortawesome/free-solid-svg-icons"

export default function Nav() {
  return (
    <>
      <nav className="bg-nav-bg flex justify-between font-semibold">
        <div className="flex px-6 py-2 gap-4 items-center">
          <Link href="/" className="transition duration-300 ease-in-out hover:rotate-12"><Image src={logo} alt="NeetCode" width={36} /></Link>
          <ul className="flex gap-2">
            <li className="nav-link"><Link href="/courses">Courses</Link></li>
            <li className="nav-link"><Link href="/practice">Practice</Link></li>
            <li className="nav-link"><Link href="/roadmap">Roadmap</Link></li>
            <li className="nav-link"><Link href="/newsletter">Newsletter</Link></li>
          </ul>
        </div>

        <div className="flex items-center gap-2 px-6">
          <Link href="/pro" className="bg-pro-btn-bg px-4 py-1 flex items-center gap-2 rounded-xl hover:bg-pro-btn-bg-hover transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faFireFlameCurved} />
            <div>Pro</div>
          </Link>
          <div className="nav-link hover:cursor-pointer ">
            <FontAwesomeIcon icon={faSun} />
          </div>
          <div className="bg-sign-in-btn px-3 py-1 rounded-md hover:bg-blue-400 transition duration-300 ease-in-out hover:cursor-pointer">
            Sign in
          </div>
        </div>
      </nav>
      <hr />
    </>
  )
}
