import { motion } from 'framer-motion';
import { Section, fadeIn } from './Section';

const projects = [
  {
    title: 'Касса самообслуживания',
    description:
      'Спроектировал и реализовал бэкенд кассы с нуля — от выбора стека до релиза. Интегрировал с бэкенд с ERP и POS. Дорабатывал React-форнтенд в условиях меняющихся требований.',
    tags: ['Монолит', 'Интеграции', 'NestJS', 'PostgreSQL', 'API', 'Jest'],
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
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 9h.01M10 9h.01M13 9h.01M16 9h.01M7 11h.01M10 11h.01M13 11h.01M16 11h.01" />
      </svg>
    ),
  },
  {
    title: 'Интерактивная песочница',
    description:
      'Улучшил observability продукта: от «угадай, что сломалось» до точечной диагностики. Уменьшил время отклика сервисов заменой устаревшего транспорта на gRPC. Переделал спагетти-легаси сервисы в поддерживаемую Clean Architecture',
    tags: [
      'Микросервисы',
      'Node.js',
      'NestJS',
      'MongoDB',
      'Redis',
      'BullMQ',
      'gRPC',
      'QEMU',
      'Jest',
    ],
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
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Видеостриминговая платформа',
    description:
      'Успешно запустил MVP. Интегрировал платежные системы, разработал media-движок, внедрил телеметрию. Фокус на highload и отказоустойчивость с обработкой всех edge-кейсов',
    tags: [
      'Микросервисы',
      'Интеграции',
      'Платежи',
      'gRPC',
      'NATS',
      'NestJS',
      'Redis',
      'MongoDB',
      'PostgreSQL',
      'WebRTC',
      'socket.io',
      'Jest',
    ],
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
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    ),
  },
  {
    title: 'Производство металлических изделий',
    description:
      'Ускорил документооборот и автоматизировал бизнес процессы во внутренней ERP. Улучшил качество управления путем создания модуля прогнозирования загруженности производства',
    tags: ['Монолит', 'NestJS', 'PostgreSQL', 'Интеграции', 'PHP', '1C'],
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
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1" />
        <path d="M12 18h1" />
        <path d="M7 18h1" />
      </svg>
    ),
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-amber-500/50">02</span>
          Опыт
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeIn}
              className="group relative p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:border-amber-500/20 hover:bg-zinc-900/50 transition-all duration-300"
            >
              {/* Иконка */}
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500/15 transition-colors duration-300">
                {project.icon}
              </div>

              {/* Заголовок */}
              <h3 className="text-lg font-semibold mb-2 text-zinc-100 group-hover:text-amber-50 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Описание */}
              <p className="text-sm leading-relaxed text-zinc-400 mb-4">{project.description}</p>

              {/* Теги */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-zinc-500 bg-zinc-800/40 border border-zinc-800/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(245,158,11,0.04), transparent 60%)',
                }}
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
