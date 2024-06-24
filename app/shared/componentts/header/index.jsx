export default function Header() {
    return (
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
            {/* Add your logo SVG here */}
          </svg>
          <span className="ml-2 text-xl font-bold">Aisos</span>
        </div>
      </header>
    )
  }