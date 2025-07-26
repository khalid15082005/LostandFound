  import Link from 'next/link';
// import './globals.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">🔍 Lost & Found</span>
        <Link href="/" className="nav-link">Home</Link>
        {/* <Link href="/report-lost" className="nav-link">Report Lost</Link>
        <Link href="/report-found" className="nav-link">Report Found</Link> */}
        <Link href="/dashboard" className="nav-link">Dashboard</Link>
      </div>
      <div className="navbar-right">
        <Link href="/login" className="btn btn-login">Login</Link>
        <Link href="/register" className="btn btn-signup">Sign Up</Link>
      </div>
    </nav>
  );
}
