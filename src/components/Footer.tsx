export default function Footer() {
  return (
    <footer className="bg-white text-stone-900 border-t border-stone-300 py-6 px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-sans tracking-[0.2em] uppercase opacity-60">
      <div className="text-center md:text-left">
        &copy; {new Date().getFullYear()} Lumière & Pierre. All Rights Reserved.
      </div>
      <div className="flex gap-6 justify-center">
        <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Journal</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Stockists</a>
      </div>
    </footer>
  );
}
