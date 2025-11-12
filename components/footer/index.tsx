
export default function Footer() {
  return (
    <footer className="bg-white/5 text-slate-500 py-5">
      <div className=" container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Mehran Mahmoudkhani. All rights reserved.
        </div>

        <nav className="flex gap-4 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

