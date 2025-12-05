// src/App.jsx → FINAL MASTERPIECE (3 THEMES + ULTRA ELEGANT
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Contrast } from "lucide-react";

const projects = [
  { id: 1, title: "PopFlix", desc: "Netflix clone with AI recommendations", tech: "Next.js • TMDB • Prisma", color: "#c084fc" },
  { id: 2, title: "KernelChat", desc: "Real-time chat with popcorn reactions", tech: "React • Socket.io", color: "#fbbf24" },
  { id: 3, title: "ButterUI", desc: "Smooth animated component library", tech: "Framer Motion • TS", color: "#fb923c" },
  { id: 4, title: "Popcorn Analytics", desc: "Movie watch-time dashboard", tech: "D3.js • PostgreSQL", color: "#f87171" },
  { id: 5, title: "SnackTrack", desc: "Calorie tracker for cinema lovers", tech: "React Native • Firebase", color: "#34d399" },
];

export default function Task() {
  const [theme, setTheme] = useState(0); // 0=Light, 1=Dark, 2=B&W
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const nextTheme = () => setTheme((prev) => (prev + 1) % 3);

  // 3 Beautiful Themes - Full Control
  const themes = {
    0: { // Light - Warm & Cozy
      bg: "#fefce8",
      text: "#1a1a1a",
      card: "rgba(255, 255, 255, 0.88)",
      border: "rgba(0,0,0,0.08)",
      accent: "#f97316",
      hero: "linear-gradient(135deg, #ff8a00, #e52e71)",
    },
    1: { // Dark - Cinema Mode
      bg: "#0c0c0c",
      text: "#f5f5f5",
      card: "rgba(25, 25, 25, 0.92)",
      border: "rgba(255, 255, 255, 0.12)",
      accent: "#ff8a00",
      hero: "linear-gradient(135deg, #1e293b, #0f172a)",
    },
    2: { // Black & White - Pure Elegance
      bg: "#000000",
      text: "#ffffff",
      card: "rgba(255, 255, 255, 0.06)",
      border: "rgba(255, 255, 255, 0.3)",
      accent: "#ffffff",
      hero: "linear-gradient(135deg, #111111, #222222)",
    },
  };

  const t = themes[theme];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Dynamic Global Styles */}
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          background: ${t.bg};
          color: ${t.text};
          font-family: 'Poppins', 'Segoe UI', sans-serif;
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card {
          background: ${t.card};
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid ${t.border};
          border-radius: 26px;
          overflow: hidden;
          transition: all 0.5s ease;
          cursor: pointer;
        }
        .card:hover {
          transform: translateY(-24px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.4);
        }
        .input {
          background: ${t.card};
          border: 2px solid ${t.border};
          color: ${t.text};
          padding: 18px 24px;
          border-radius: 16px;
          font-size: 17px;
          transition: 0.4s;
        }
        .input:focus {
          outline: none;
          border-color: ${t.accent};
          box-shadow: 0 0 0 5px ${t.accent}25;
        }
      `}</style>

    {/* THE CUTEST POPCORN LOADING SCREEN EVER */}
<AnimatePresence>
  {loading && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "linear-gradient(135deg, #ff8a65, #ff5722)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",
        overflow: "hidden"
      }}
    >
      {/* Main Cute Popcorn Icon */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          fontSize: "180px",
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))"
        }}
      >
        {/* Super Cute Popcorn SVG */}
        <svg viewBox="0 0 100 100" width="180" height="180">
          {/* Popcorn Bucket */}
          <path d="M20 75 L80 75 L75 95 L25 95 Z" fill="#ff5252" stroke="#d32f2f" strokeWidth="3"/>
          <path d="M25 75 Q50 60 75 75" fill="#ff8a65"/>
          
          {/* Popcorn Pieces - Super Cute Style */}
          <g fill="#fffde7" stroke="#ffb300" strokeWidth="2">
            <circle cx="35" cy="55" r="12"/>
            <circle cx="50" cy="45" r="15"/>
            <circle cx="65" cy="52" r="13"/>
            <circle cx="42" cy="38" r="10"/>
            <circle cx="58" cy="35" r="11"/>
          </g>
          
          {/* Sparkles for extra cuteness */}
          <motion.circle
            cx="20" cy="30" r="4" fill="#fff59d"
            animate={{ scale: [0, 1.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          />
          <motion.circle
            cx="80" cy="35" r="4" fill="#fff59d"
            animate={{ scale: [0, 1.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </svg>
      </motion.div>

   

      {/* Title with Pop Effect */}
      <motion.h1
        initial={{ scale: 0, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        style={{
          fontSize: "50px",
          fontWeight: 500,
          color: "white",
          letterSpacing: "10px",
          textShadow: "0 10px 30px rgba(0,0,0,0.6)",
          marginTop: "0px"
        }}
      >
        POPCORN WEBSITE
      </motion.h1>

      {/* Your Name - Cute & Elegant */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
        style={{
          fontSize: "28px",
          color: "#fff8e1",
          fontWeight: 600,
          letterSpacing: "4px",
          fontFamily: "'Dancing Script', cursive"
        }}
      >
        Developed  by RadhaPreethi
      </motion.p>
    </motion.div>
  )}
</AnimatePresence>

      {/* Theme Switcher Button - Click to Cycle 3 Themes */}
      <motion.button
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextTheme}
        style={{
          position: "fixed", top: 32, right: 32, zIndex: 999,
          width: 66, height: 66, borderRadius: "50%",
          background: t.card, border: `2px solid ${t.border}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 12px 32px rgba(0,0,0,0.4)", cursor: "pointer"
        }}
      >
        {theme === 0 && <Sun size={32} color="#f59e0b" />}
        {theme === 1 && <Moon size={32} color="#60a5fa" />}
        {theme === 2 && <Contrast size={32} color="#fff" />}
      </motion.button>

      {/* Hero */}
      <section style={{ minHeight: "50vh", background: t.hero, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        {[...Array(9)].map((_, i) => (
          <motion.div key={i} animate={{ y: [800, -400] }} transition={{ duration: 14 + i * 2, repeat: Infinity }} style={{ position: "absolute", left: `${8 + i * 10}%`, fontSize: "52px", opacity: 0.12, color: "white" }}>
            Popcorn
          </motion.div>
        ))}
        <div style={{ textAlign: "center", color: "white", zIndex: 10 }}>
          <motion.h1 initial={{ y: -120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ fontSize: "58px", fontWeight: 900, letterSpacing: "10px", textShadow: "0 25px 60px rgba(0,0,0,0.7)" }}>
            POPCORN WEBSITE
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ fontSize: "38px", fontWeight: 300 }}>
           DESIRED STYLES 
          </motion.p>
        </div>
      </section>
 
      <section style={{ padding: "140px 40px", maxWidth: "1280px", margin: "0 auto" }}>
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} style={{ fontSize: "56px", textAlign: "center", marginBottom: "100px", fontWeight: 800 }}>
          My Projects
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "44px" }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="card"
              onClick={() => setSelected(p)}
            >
              <div style={{
                height: "90px",
                background: theme === 2 ? "linear-gradient(135deg,#1a1a1a,#000)" : `linear-gradient(135deg,${p.color},${p.color}dd)`,
                position: "relative"
              }}>
                {/* <div style={{ fontSize: "90px", opacity: 0.15, color: "white", textAlign: "center", paddingTop: "50px" }}>Popcorn</div> */}
                <h3 style={{ position: "absolute", bottom: 24, left: 28, fontSize: "30px", color: "white", fontWeight: 700 }}>{p.title}</h3>
              </div>
              <div style={{ padding: "36px" }}>
                <p style={{ fontSize: "17.5px", lineHeight: "1.7", marginBottom: "18px", opacity: 0.9 }}>{p.desc}</p>
                <p style={{ color: t.accent, fontWeight: 600, fontSize: "15.5px" }}>{p.tech}</p>
                <div style={{ marginTop: "20px", color: t.accent, fontWeight: "bold", fontSize: "17px" }}>View Project →</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
 
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.94)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.div initial={{ scale: 0.7 }} animate={{ scale: 1 }} onClick={e => e.stopPropagation()} style={{ background: t.card, padding: "70px", borderRadius: "32px", maxWidth: "620px", border: `1px solid ${t.border}` }}>
              <button onClick={() => setSelected(null)} style={{ position: "absolute", top: 28, right: 32, background: "none", border: "none", fontSize: "40px", cursor: "pointer", color: t.text }}>×</button>
              <h2 style={{ fontSize: "50px", marginBottom: "24px" }}>{selected.title}</h2>
              <p style={{ fontSize: "21px", lineHeight: "1.8", opacity: 0.9 }}>{selected.desc}</p>
              <p style={{ color: t.accent, fontWeight: "bold", marginTop: "32px", fontSize: "19px" }}>{selected.tech}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section style={{ padding: "160px 40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", color: "white" }}>
          <h2 style={{ fontSize: "56px", marginBottom: "10px",  color:"black"}}>Let's Connect</h2>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "28px" }}>
            <input className="input" placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <input className="input" placeholder="Your Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <textarea className="input" rows="7" placeholder="Your Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" style={{ padding: "22px", background: "white", color: "#e52e71", fontSize: "26px", fontWeight: "bold", border: "none", borderRadius: "20px", cursor: "pointer" }}>
              Send Message
            </motion.button>
          </form>
        </div>
      </section>

      <footer style={{ padding: "100px", textAlign: "center", background: "#000", color: "white" }}>
        <p style={{ fontSize: "24px" }}>RadhaPreethi@FullStackDeveloper</p>
           <p style={{ fontSize: "24px" }}>Contact:9666201921</p>
   
      </footer>
    </>
  );
} 