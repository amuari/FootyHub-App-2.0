import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <div className="navbar bg-[#2a2727]">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost text-xl glass text-[#f8f7f7]">FootyHub</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li>
        <details>
          <summary>
            Menu
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><Link to='/login'>Login</Link></li>
            {/* <li><a>Link</a></li> */}
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    </nav>
  );
}

export default Navbar;