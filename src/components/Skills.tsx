import { motion } from 'framer-motion';
import { Section, fadeIn } from './Section';

const groups = [
  {
    title: 'Основа',
    items: ['Node.js', 'TypeScript', 'NestJS', 'Express'],
  },
  {
    title: 'Микросервисы',
    items: ['gRPC', 'NATS', 'BullMQ', 'REST API'],
  },
  {
    title: 'Инструменты',
    items: ['Git', 'Docker', 'NGINX'],
  },
  {
    title: 'Данные',
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Observability',
    items: ['OpenTelemetry', 'Jaeger', 'Prometheus', 'Grafana'],
  },
  {
    title: 'Подходы',
    items: ['Clean Architecture', 'DI / IoC', 'SAGA'],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-amber-500/50">01</span>
          Технологический стек
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {groups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeIn}
              className="p-5 rounded-2xl border border-zinc-800/50 bg-zinc-900/30"
            >
              <p className="text-[11px] text-zinc-500 uppercase tracking-widest mb-3">
                {group.title}
              </p>
              <ul className="space-y-2.5" role="list">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-400">
                    <span
                      className="block w-1 h-1 rounded-full bg-amber-500/60 shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p variants={fadeIn} className="mt-10 text-xs text-zinc-600">
          Подстраиваюсь под проект и открыт к изучению новых технологий.
        </motion.p>
      </div>
    </Section>
  );
}
