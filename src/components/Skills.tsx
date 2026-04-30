import { motion } from 'framer-motion';
import { Section, fadeIn } from './Section';

const groups = [
  {
    title: 'Языки и фреймворки',
    items: ['Node.js', 'TypeScript', 'NestJS'],
  },
  {
    title: 'БД и ORM',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Drizzle', 'Knex'],
  },
  {
    title: 'Архитектура и интеграции',
    items: ['REST API', 'gRPC', 'DDD', 'NATS', 'BullMQ'],
  },
  {
    title: 'Инфраструктура',
    items: ['Git', 'Github Actions', 'Docker', 'NGINX', 'Linux / CLI'],
  },
  {
    title: 'Безопасность и тестирование',
    items: ['JWT', 'OAuth2', 'Jest'],
  },
  {
    title: 'Наблюдаемость',
    items: ['OpenTelemetry', 'Prometheus', 'Grafana'],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          variants={fadeIn}
          className="text-3xl font-bold mb-12 flex items-center gap-4 text-zinc-900 dark:text-zinc-50"
        >
          <span className="font-mono text-sm text-sky-500/50">01</span>
          Технологический стек
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {groups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeIn}
              className="p-5 rounded-2xl border dark:border-zinc-800/50 border-zinc-200/50 dark:bg-zinc-900/30 bg-zinc-100/30"
            >
              <p className="text-[11px] dark:text-zinc-500 text-zinc-600 uppercase tracking-widest mb-3">
                {group.title}
              </p>
              <ul className="space-y-2.5" role="list">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm dark:text-zinc-400 text-zinc-700"
                  >
                    <span
                      className="block w-1 h-1 rounded-full bg-sky-500/60 shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p variants={fadeIn} className="mt-10 text-xs dark:text-zinc-600 text-zinc-500">
          Подстраиваюсь под проект и открыт к изучению новых технологий.
        </motion.p>
      </div>
    </Section>
  );
}
