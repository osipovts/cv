import { motion } from 'framer-motion';
import { Section, fadeIn } from './Section';

const skillGroups = [
  {
    title: 'Микросервисы',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    skills: ['gRPC', 'NATS', 'Redis', 'BullMQ'],
  },
  {
    title: 'Базы данных',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
    skills: ['PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Подходы',
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </svg>
    ),
    skills: ['DDD', 'Clean Architecture', 'DI / IoC', 'SAGA', 'Строгая типизация'],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-amber-500/50">01</span>
          Стек
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeIn}
              className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/30"
            >
              {/* Иконка + заголовок */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-500/10 text-amber-500">
                  {group.icon}
                </div>
                <h3 className="font-semibold text-zinc-200">{group.title}</h3>
              </div>

              {/* Список скиллов */}
              <ul className="space-y-2.5" role="list">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-sm text-zinc-400">
                    <span
                      className="block w-1 h-1 rounded-full bg-amber-500/60 shrink-0"
                      aria-hidden="true"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          key="last"
          variants={fadeIn}
          className="p-5 rounded-xl border border-zinc-800/50 bg-zinc-900/30 space-y-4 mt-4"
        >
          <div className="max-w-5xl mx-auto px-0 text-left text-[0.95rem] leading-relaxed text-zinc-400">
            Открыт к изучению новых технологий! В свободное время осваиваю Golang, Electron.js и
            Telegram API. Just For Fun.
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
