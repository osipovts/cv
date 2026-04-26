import { useState, useEffect, useCallback } from 'react';

const links = [
  { label: 'Стек', href: '#skills' },
  { label: 'Опыт', href: '#experience' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Основная навигация"
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-mono text-sm text-zinc-400 hover:text-amber-400 transition-colors"
          >
            osipov<span className="text-amber-500">.</span>undo
            <span className="text-amber-500">.</span>it
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden relative w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">{menuOpen ? 'Закрыть' : 'Меню'}</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-5 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
                }`}
              />
              <span
                className={`block h-px w-5 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-2xl transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl font-medium text-zinc-300 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
