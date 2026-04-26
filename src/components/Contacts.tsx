import { motion } from 'framer-motion';
import { Section, fadeIn } from './Section';

const channels = [
  {
    name: 'Telegram',
    href: 'https://t.me/pookerpanda',
    description: 'Оперативная связь',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/osipovts',
    description: 'Пет-проекты, примеры кода',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contacts() {
  return (
    <Section id="contacts">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-amber-500/50">03</span>
          Контакты
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Каналы связи */}
          <motion.div variants={fadeIn} className="space-y-4">
            {channels.map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 hover:border-amber-500/20 hover:bg-zinc-900/50 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500/15 transition-colors duration-300 shrink-0">
                  {channel.icon}
                </div>
                <div>
                  <div className="font-semibold text-zinc-200 group-hover:text-amber-50 transition-colors duration-300 text-sm">
                    {channel.name}
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5">{channel.description}</div>
                </div>
                <svg
                  className="w-4 h-4 text-zinc-600 group-hover:text-amber-500/60 ml-auto shrink-0 transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            ))}
          </motion.div>

          {/* Условия */}
          <motion.div variants={fadeIn} className="space-y-4">
            <div className="p-5 rounded-xl border border-zinc-800/50 bg-zinc-900/30 space-y-4">
              <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                Предпочтения
              </h3>

              <div className="space-y-3">
                {[
                  {
                    label: 'Формат',
                    value: 'Полная удалёнка',
                  },
                  {
                    label: 'Часовой пояс',
                    value: 'МСК ±2 часа',
                  },
                  {
                    label: 'Занятость',
                    value: 'Полная',
                  },
                  {
                    label: 'Контракт',
                    value: 'По ТК РФ или самозанятость',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-4">
                    <span className="text-xs text-zinc-500 uppercase tracking-wider shrink-0">
                      {item.label}
                    </span>
                    <span className="text-sm text-zinc-300 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
