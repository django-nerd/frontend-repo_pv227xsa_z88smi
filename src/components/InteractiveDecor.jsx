import { motion, useAnimationControls } from 'framer-motion';
import { Sparkles, Star, Hash, Heart } from 'lucide-react';
import { useEffect } from 'react';

const float = {
  initial: { y: 0 },
  animate: {
    y: [-6, 6, -6],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
  }
};

export default function InteractiveDecor() {
  const controls = useAnimationControls();
  useEffect(() => {
    controls.start('animate');
  }, [controls]);

  const common = {
    drag: true,
    dragMomentum: false,
    whileHover: { scale: 1.08, rotate: 2 },
    whileTap: { scale: 0.95 },
    variants: float,
    animate: controls,
    initial: 'initial'
  };

  return (
    <div className="pointer-events-auto absolute inset-0">
      <motion.div {...common} className="absolute left-6 top-16 select-none">
        <div className="rounded-2xl border border-slate-900/10 bg-white px-3 py-2 text-xs font-bold shadow-sm">
          <div className="flex items-center gap-1 text-slate-800"><Sparkles size={14}/> AI Copilot</div>
        </div>
      </motion.div>
      <motion.div {...common} className="absolute right-10 top-24 select-none">
        <div className="rounded-full border border-slate-900/10 bg-gradient-to-br from-pink-200 to-rose-200 p-3 shadow">
          <Star className="text-slate-800" size={16} />
        </div>
      </motion.div>
      <motion.div {...common} className="absolute left-24 bottom-10 select-none">
        <div className="rounded-full border border-slate-900/10 bg-gradient-to-br from-sky-200 to-cyan-200 p-3 shadow">
          <Hash className="text-slate-800" size={16} />
        </div>
      </motion.div>
      <motion.div {...common} className="absolute right-24 bottom-20 select-none">
        <div className="rounded-full border border-slate-900/10 bg-gradient-to-br from-amber-200 to-yellow-200 p-3 shadow">
          <Heart className="text-slate-800" size={16} />
        </div>
      </motion.div>
    </div>
  );
}
