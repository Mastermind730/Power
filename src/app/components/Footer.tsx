import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Left side - Company name and year */}
          <div className="flex items-center">
            <span className="text-gray-600 text-sm font-medium">
              Power Global © 2024
            </span>
          </div>

          

          {/* Right side - Navigation links */}
          <nav className="flex items-center space-x-8">
          
            {/* <Link 
              href="/team" 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              Team
            </Link>
            <Link 
              href="/team" 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              Investors
            </Link>
            <Link 
              href="/team" 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              Partners
            </Link> */}
            <Link 
              href="/poem" 
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              Poem
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}