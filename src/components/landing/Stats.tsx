import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [rounded]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const stats = [
  { value: 100, prefix: "+R$ ", suffix: "Mi", label: "sob custódia" },
  { value: 500, prefix: "+", suffix: "", label: "clientes satisfeitos" },
  { value: 15, prefix: "+", suffix: " anos", label: "de experiência" },
  { value: 98, prefix: "", suffix: "%", label: "de satisfação" },
];

export function Stats() {
  return (
    <section className="relative py-20 border-y border-white/5 bg-[var(--navy)]/40">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-gradient font-display">
              <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-white/60 uppercase tracking-wider">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
