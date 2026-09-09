'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// 1. Komponen Garis Interaktif (Scroll Line) kita taruh sini juga
export function ScrollLine() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] })
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={ref} className="absolute left-[20%] top-0 bottom-0 w-[2px] bg-white/10 hidden md:block">
      <motion.div
        style={{ height }}
        className="w-full bg-gradient-to-b from-cyan-400 to-purple-500 shadow-[0_0_15px_#06b6d4]"
      />
    </div>
  )
}

// 2. Komponen Kartu Utama
type Experience = {
  _id: string;
  role: string;
  company: string;
  dateRange: string;
  workType: string;
  description: string;
  bulletPoints: string[];
  techStack: string[];
}

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/50 transition-all group w-full h-full flex flex-col shadow-lg"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10 mb-4">
        <h3 className="text-xl font-bold text-white font-mono uppercase tracking-wide">{experience.role}</h3>
        <div className="flex items-center gap-2 mt-2">
          <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
          <p className="text-cyan-400 font-medium font-mono text-sm">{experience.company}</p>
        </div>
      </div>

      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{experience.description}</p>

      {experience.bulletPoints && experience.bulletPoints.length > 0 && (
        <ul className="space-y-3 mb-6 flex-grow">
          {experience.bulletPoints.map((point, index) => (
            <li key={index} className="text-gray-300 text-sm flex items-start gap-3">
              <span className="text-cyan-500 mt-0.5 font-bold">{'>'}</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      {experience.techStack && experience.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
          {experience.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 rounded-md hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}