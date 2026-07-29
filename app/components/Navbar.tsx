export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-blue-500">Tai</span>ranos
        </h1>

        <ul className="hidden gap-8 text-gray-300 md:flex">
          <li><a href="#" className="hover:text-blue-400">হোম</a></li>
          <li><a href="#" className="hover:text-blue-400">সেবাসমূহ</a></li>
          <li><a href="#" className="hover:text-blue-400">মূল্য</a></li>
          <li><a href="#" className="hover:text-blue-400">যোগাযোগ</a></li>
        </ul>

        <button className="rounded-lg bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-700">
          ফ্রি পরামর্শ
        </button>
      </nav>
    </header>
  );
}