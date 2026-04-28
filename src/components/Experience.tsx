import { motion } from 'framer-motion';
import { Section, fadeIn } from './Section';

const projects = [
  {
    title: 'Касса самообслуживания',
    cases: [
      {
        case: 'Реализация бэкенд-логики',
        result: 'Построил архитектуру, реализовал логику процесса покупки, довел бэкенд до релиза',
      },
      {
        case: 'Интеграции',
        result: 'Интегрировал бэкенд с ERP и POS',
      },
      {
        case: 'Доработка React-фронтенда',
        result: 'Адаптировал фронтенд под меняющиеся требования бизнеса в ходе разработки',
      },
    ],
    tags: ['NestJS', 'PostgreSQL', 'API', 'Jest'],
  },
  {
    title: 'Интерактивная песочница',
    cases: [
      {
        case: 'Внедрение OpenTelemetry',
        result: 'Повысил качество реагирования на инциденты',
      },
      {
        case: 'Замена устаревшего транспорта на gRPC',
        result: 'Снизил время отклика и повысил отказоустойчивость',
      },
      {
        case: 'Рефактор спагетти-легаси кода на Clean Architecture',
        result: 'Сделал дальнейшую работу с кодом безболезненной',
      },
    ],
    tags: ['NestJS', 'MongoDB', 'Redis', 'BullMQ', 'gRPC', 'QEMU', 'Jest'],
  },
  {
    title: 'Видеостриминговая платформа',
    cases: [
      {
        case: 'Реализация бэкенд-логики',
        result: 'Написал аутентификацию, платежи, стримы и статистику',
      },
      {
        case: 'Интеграция платёжных систем',
        result: 'Обеспечил возможность выплаты вознаграждений создателям видеоконтента',
      },
      {
        case: 'Разработка собственного media-движка',
        result: 'Сделал платформу более гибкой и независимой от внешних media-провайдеров',
      },
      {
        case: 'Релиз',
        result: 'Довел платформу до релиза MVP с фокусом на highload и отказоустойчивость',
      },
    ],
    tags: [
      'NestJS',
      'MongoDB',
      'PostgreSQL',
      'Redis',
      'gRPC',
      'NATS',
      'WebRTC',
      'socket.io',
      'Jest',
    ],
  },
  {
    title: 'Внутренняя ERP предприятия',
    cases: [
      {
        case: 'Реализация бэкенд-логики',
        result: 'Ускорил документооборот, автоматизировал процессы, интегрировал ERP с 1С',
      },
      {
        case: 'Создание модуля прогнозирования загруженности производственных цехов',
        result: 'Повысил качество и скорость принятия управленческих решений',
      },
      {
        case: 'Доработка фронтенда',
        result: 'Адаптация фронтенда в ходе жизненного цикла ERP',
      },
    ],
    tags: ['NestJS', 'PostgreSQL', 'PHP', '1C'],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2 variants={fadeIn} className="mb-12 flex items-center gap-4 text-3xl font-bold">
          <span className="font-mono text-sm text-amber-500/50">02</span>
          Опыт
        </motion.h2>

        <div className="flex flex-col gap-10">
          {projects.map((project, index) => {
            const number = `02.${String(index + 1).padStart(2, '0')}`;

            return (
              <motion.article
                key={project.title}
                variants={fadeIn}
                className="group rounded-3xl border border-zinc-800/50 bg-zinc-950/20 px-5 py-7 transition-colors duration-300 md:px-6"
              >
                <div className="grid gap-6 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10">
                  {/* Левая колонка */}
                  <div>
                    <div className="mb-3 font-mono text-sm text-amber-500/50 transition-colors duration-300">
                      {number}
                    </div>

                    <h3 className="text-xl font-semibold leading-tight text-zinc-100 transition-colors duration-300 md:text-2xl">
                      {project.title}
                    </h3>

                    <div className="mt-4">
                      <p className="font-mono text-[11px] leading-relaxed text-zinc-500 transition-colors duration-300">
                        {project.tags.join(' · ')}
                      </p>
                    </div>
                  </div>

                  {/* Правая колонка */}
                  <div>
                    <div className="mb-3 hidden grid-cols-[1.05fr_1.35fr] gap-4 text-[11px] uppercase tracking-[0.18em] text-zinc-500 md:grid">
                      <span>Задача</span>
                      <span>Результат</span>
                    </div>

                    <div className="space-y-3">
                      {project.cases.map((c, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-1 gap-2 border-b border-zinc-800/60 pb-3 last:border-none md:grid-cols-[1.05fr_1.35fr] md:gap-4"
                        >
                          <div className="text-sm font-medium leading-relaxed text-zinc-300 transition-colors duration-300">
                            ✓ {c.case}
                          </div>
                          <div className="text-sm leading-relaxed text-zinc-300 transition-colors duration-300">
                            {c.result}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
