// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">StockTrackr</h2>
          <p className="mt-3 text-sm text-gray-400">
            Stay ahead of the market with real-time stock insights 📈
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/" className="hover:text-white">Stocks</Link></li>
            <li><Link href="/" className="hover:text-white">About</Link></li>
            <li><Link href="/" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://twitter.com" target="_blank" className="hover:text-white">
              <i className="pi pi-twitter text-xl"></i>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-white">
              <i className="pi pi-linkedin text-xl"></i>
            </Link>
            <Link href="https://github.com" target="_blank" className="hover:text-white">
              <i className="pi pi-github text-xl"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} StockTrackr. All rights reserved.
      </div>
    </footer>
  );
}
