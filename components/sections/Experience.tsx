import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
// Kita import Kartu dan Garis interaktifnya dari satu file yang sama!
import ExperienceCard, { ScrollLine } from '@/components/ui/ExperienceCard'

export default async function Experience() {
  const query = groq`*[_type == "experience"] | order(dateRange desc)`
  const experiences = await client.fetch(query)

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Panggil Garis Interaktifnya di sini */}
          <ScrollLine />

          <div className="space-y-12">
            {experiences.map((exp: any) => (
              <div key={exp._id} className="relative flex flex-col md:flex-row gap-8 items-start w-full">
                
                {/* Kolom Kiri: Tanggal (Aman, gak patah ke bawah) */}
                <div className="md:w-[20%] flex flex-col md:items-end md:text-right md:pr-10 shrink-0 relative mt-2">
                  <div className="absolute right-[-5px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_#06b6d4] hidden md:block z-10" />
                  
                  <span className="text-cyan-400 font-mono font-bold text-sm whitespace-nowrap">{exp.dateRange}</span>
                  <span className="text-gray-500 font-mono text-xs mt-1 mb-3">Remote</span>
                  
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 w-fit md:ml-auto flex items-center gap-2 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                    {exp.workType}
                  </span>
                </div>

                {/* Kolom Kanan: Card */}
                <div className="md:w-[80%] w-full">
                  <ExperienceCard experience={exp} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol LinkedIn (Udah balik!) */}
        <div className="mt-16 flex justify-center">
          <a 
            href="https://linkedin.com/in/nouval-aiman" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 text-white font-mono text-sm transition-all group hover:bg-white/10"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            View Full Timeline on LinkedIn
            <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}