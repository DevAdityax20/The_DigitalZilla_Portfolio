import { motion } from "motion/react";

const team = [
  { name: "Tajinder Singh", role: "FOUNDER / DIRECTOR", img: "https://res.cloudinary.com/dmloakbty/image/upload/q_auto/f_auto/v1781166261/tajinder_sir_1_vmom1m.webp" },
  { name: "Gurjinder Singh", role: "CEO", img: "https://res.cloudinary.com/dmloakbty/image/upload/q_auto/f_auto/v1781166272/gujindersir_z7i6ef.webp" },
  { name: "Manpreet Singh", role: "VIDEO TEAM HEAD", img: "https://res.cloudinary.com/dmloakbty/image/upload/q_auto/f_auto/v1779999375/manpreet_image_shcmgs.webp" },
  { name: "Abhishek Maurya", role: "VIDEO EDITOR", img: "https://res.cloudinary.com/dmloakbty/image/upload/q_auto/f_auto/v1779999372/Abhi_image_odv2sz.jpg" },
  { name: "Akshansh", role: "VIDEO EDITOR", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face" },
  { name: "Lakshay Seth", role: "VIDEO PRODUCTION HEAD", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face" },
  { name: "Akshayajit Singh", role: "VIDEO EDITOR", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face" },
  { name: "Sahagjit Kaur", role: "VIDEO EDITOR", img: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=500&fit=crop&crop=face" },
  { name: "Dimple Sharma", role: "VIDEO EDITOR", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&crop=face" },
  { name: "Abhishek", role: "VIDEO EDITOR", img: "https://res.cloudinary.com/dmloakbty/image/upload/q_auto/f_auto/v1780570583/Abh_img_b1mzqa.png" },

];

export function TeamSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Meet the Editors Behind the Magic
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
              Not just editors – visual artists, storytellers, color-grade
              motion fanatics, and deadline destroyers. A crew of 30+ specialists
              across India and UAE, all obsessed with making your content go
              further.
            </p>
            <a
              href="https://wa.me/918559060809?text=Hi%2C%20I%27d%20love%20to%20join%20your%20crew!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground border border-foreground rounded-full px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 8H10M10 8L8 6M10 8L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              JOIN OUR CREW
            </a>
          </motion.div>

          {/* Top two featured members */}
          <div className="grid grid-cols-2 gap-4">
            {team.slice(0, 2).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">{member.name}</p>
                  <p className="text-white/70 text-xs">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rest of team grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {team.slice(2).map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={member.img}
                alt={member.name}
                loading="lazy"
                decoding="async"
                className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white font-semibold text-xs">{member.name}</p>
                <p className="text-white/70 text-[10px]">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
