import { motion, useReducedMotion } from 'framer-motion';

const fadeItem = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const facts = [
  {
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: '4+ года опыта',
  },
  {
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Удаленка',
  },
  {
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'МСК ±2 часа',
  },
  {
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    label: 'Полная занятость',
  },
];

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center dot-grid overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/[0.06] rounded-full blur-[80px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div initial="hidden" animate="visible" className="flex flex-col items-center gap-5">
          {/* Статус */}
          <motion.div
            custom={0}
            variants={prefersReduced ? undefined : fadeItem}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-800/60 bg-zinc-900/40 text-sm text-zinc-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            В активном поиске работы
          </motion.div>

          {/* Роль */}
          <motion.h1
            custom={1}
            variants={prefersReduced ? undefined : fadeItem}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-50"
          >
            <span className="text-amber-500">Node.js</span> разработчик
          </motion.h1>

          {/* Опыт */}
          <motion.p
            custom={2}
            variants={prefersReduced ? undefined : fadeItem}
            className="font-mono text-sm text-zinc-500"
          ></motion.p>

          {/* Суть — 2 предложения, сканируемые */}
          <motion.p
            custom={3}
            variants={prefersReduced ? undefined : fadeItem}
            className="text-left max-w-lg text-[0.95rem] leading-relaxed text-zinc-400"
          >
            Привет! Меня зовут Алексей Осипов, я строю надежный backend: монолиты, микросервисы,
            observability и интеграции.
          </motion.p>

          <motion.p
            custom={5}
            variants={prefersReduced ? undefined : fadeItem}
            className="text-left max-w-lg text-[0.95rem] leading-relaxed text-zinc-400"
          >
            Умею быстро погружаться в сложные домены, превращать разрозненные требования в понятную
            и устойчивую систему, а затем доводить ее до релиза.
          </motion.p>

          <motion.p
            custom={5}
            variants={prefersReduced ? undefined : fadeItem}
            className="text-left max-w-lg text-[0.95rem] leading-relaxed text-zinc-400"
          >
            Думaю не только кодом, но и метриками, отказоустойчивостью, скоростью развития продукта
            и удобством команды, поэтому одинаково уверенно работаю как в старте нового проекта, так
            и в поддержке высоконагруженного production.
          </motion.p>

          {/* Факты */}
          <motion.div
            custom={6}
            variants={prefersReduced ? undefined : fadeItem}
            className="flex flex-wrap justify-center gap-1 mt-3"
          >
            {facts.map((fact, idx) => (
              <span
                key={fact.label}
                className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-medium text-zinc-500 bg-zinc-900/50 border border-zinc-800/50"
              >
                <span className="text-amber-500/60">{fact.icon}</span>
                {fact.label}
                {idx < facts.length - 1}
              </span>
            ))}
          </motion.div>

          {/* Кнопки */}
          <motion.div
            custom={7}
            variants={prefersReduced ? undefined : fadeItem}
            className="flex flex-wrap justify-center gap-4 mt-5"
          >
            <a
              href="https://github.com/osipovts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700/60 text-sm font-medium text-zinc-300 hover:border-amber-500/50 hover:text-amber-400 hover:bg-amber-500/[0.04] transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://t.me/osipov_ts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-sm font-semibold text-zinc-950 hover:bg-amber-400 transition-colors duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Скролл-индикатор */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="w-5 h-8 rounded-full border-2 border-zinc-700/50 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-zinc-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
