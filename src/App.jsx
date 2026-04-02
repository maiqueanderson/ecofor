import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Music, Heart, MapPin, Tent, Shield, Sparkles,
  Mail, Phone, ExternalLink, Download, HandHeart
} from 'lucide-react';

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const sections = {
  hero: "hero",
  about: "about",
  investment: "investment",
  sponsorship: "sponsorship",
  contact: "contact"
};

const SectionHeading = ({ children, align = "text-center" }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className={`text-4xl md:text-5xl font-extrabold mb-12 tracking-tight ${align}`}
  >
    {children}
  </motion.h2>
);

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quota: 'Ouro',
    message: ''
  });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, email, quota, message } = formData;

    const text = `Olá, equipe Ecofor! Tenho interesse em apoiar o evento.
Nome/Empresa: ${name}
E-mail: ${email}
Cota de Interesse: ${quota}
Mensagem: ${message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5579999127350?text=${encodedText}`, "_blank");
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center pt-20 pb-10 px-6"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1544785316-6e58aed68a50?auto=format&fit=crop&q=80"
            alt="Rave and Nature"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <img
              src="/logo.jpg"
              alt="Ecofor Festival - Som, Corpo e Trance"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-[0_0_60px_rgba(176,38,255,0.3)] border-2 border-white/5 mb-12"
            />
            <h1 className="sr-only">ECOFOR FESTIVAL</h1>
          </motion.div>

          <motion.p className="sr-only">
            Som, Corpo e Transe
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(176, 38, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo(sections.sponsorship)}
            className="bg-gradient-to-r from-deep-violet to-neon-purple px-10 py-5 rounded-full text-xl font-bold uppercase tracking-wider flex items-center gap-3 transition-all"
          >
            Seja um Patrocinador <HandHeart size={24} />
          </motion.button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10 cursor-pointer" onClick={() => scrollTo(sections.about)}>
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-neon-purple rounded-full" />
          </div>
        </div>
      </section>

      {/* 2. SOBRE O EVENTO */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-neon-purple/20 blur-[120px] rounded-full" />

        <SectionHeading>O que é o <span className="text-neon-purple">Ecofor</span>?</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed font-light"
        >
          O Ecofor Festival é um sarau de cultura eletrônica e bem-estar, focado na conexão através da música, da dança e da valorização da arte regional. Realizado pela <strong className="text-white">GT Drinks Produções</strong>, é um pilar de economia criativa e impacto social em Sergipe.
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            { icon: <Heart className="text-[#ff2a5f]" size={36} />, title: "Natureza", desc: "Evento Gratuito, Sem Fins Lucrativos e Beneficente." },
            { icon: <Music className="text-neon-blue" size={36} />, title: "Line-up", desc: "05 DJs de música eletrônica e vertentes do Trance." },
            { icon: <Sparkles className="text-neon-purple" size={36} />, title: "Intervenções", desc: "Equipe profissional de Dança e expressão corporal." },
            { icon: <Tent className="text-yellow-400" size={36} />, title: "Feira de Artesanato", desc: "Espaço estruturado para Artesãos Locais (Exposição e comercialização)." },
            { icon: <Shield className="text-green-400" size={36} />, title: "Propósito", desc: "Oferecer cultura gratuita de alta qualidade, unindo lazer consciente e apoio à arte local." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 hover:bg-white/5 transition-colors"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TRANSPARÊNCIA / PLANO DE INVESTIMENTO */}
      <section id="investment" className="py-24 px-6 md:px-12 bg-black relative">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-neon-blue/10 blur-[120px] rounded-full" />

        <div className="max-w-6xl mx-auto">
          <SectionHeading>Transparência & <br /><span className="text-neon-blue">Plano de Investimento</span></SectionHeading>

          <div className="mb-16 text-center">
            <h3 className="text-gray-400 text-xl font-light mb-4">Meta de Captação</h3>
            <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              R$ 25.000,00
            </div>
            <p className="mt-4 text-gray-300">Todo o recurso captado é investido diretamente na infraestrutura técnica.</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto relative z-10">
            {[
              { label: "Sonorização e Iluminação Profissional", value: 7000, color: "bg-neon-purple" },
              { label: "Cachês e Apoio (05 DJs e Equipe de Dança)", value: 8000, color: "bg-neon-blue" },
              { label: "Estrutura Física (Palco, Tendas, Banheiros)", value: 4000, color: "bg-pink-500" },
              { label: "Segurança, Brigada e Limpeza", value: 3000, color: "bg-green-500" },
              { label: "Espaço do Artesão e Decoração", value: 2000, color: "bg-yellow-500" },
              { label: "Divulgação e Material Gráfico", value: 1000, color: "bg-red-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between mb-2 text-sm md:text-lg">
                  <span className="font-medium">{item.label}</span>
                  <span className="font-bold">R$ {item.value.toLocaleString('pt-BR')}</span>
                </div>
                <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.value / 25000) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 + 0.2 }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SEJA UM PATROCINADOR / COTAS */}
      <section id="sponsorship" className="py-24 px-6 md:px-12 relative">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 blur-[150px] rounded-full" />

        <div className="max-w-6xl mx-auto">
          <SectionHeading>Cotas de <span className="text-yellow-500 text-shadow-neon">Patrocínio</span></SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-10">
            {/* Bronze */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 border-t-4 border-t-[#cd7f32] flex flex-col"
            >
              <h3 className="text-3xl font-black mb-2 text-[#cd7f32]">BRONZE</h3>
              <div className="text-4xl font-bold mb-8">R$ 500</div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3"><span className="text-[#cd7f32] font-bold">✓</span> <span><strong className="text-white">Instagram:</strong> Menção coletiva</span></li>
                <li className="flex items-start gap-3"><span className="text-[#cd7f32] font-bold">✓</span> <span><strong className="text-white">No Evento:</strong> Nome no painel</span></li>
                <li className="flex items-start gap-3"><span className="text-[#cd7f32] font-bold">✓</span> <span><strong className="text-white">Locução:</strong> 01 Agradecimento</span></li>
              </ul>
              <button
                onClick={() => { setFormData({ ...formData, quota: 'Bronze' }); scrollTo(sections.contact); }}
                className="w-full py-4 rounded-xl bg-white/10 hover:bg-[#cd7f32] transition-colors font-bold tracking-wide"
              >
                QUERO ESTA COTA
              </button>
            </motion.div>

            {/* Ouro (Destaque) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 border-2 border-yellow-500 bg-black/60 shadow-[0_0_30px_rgba(234,179,8,0.2)] flex flex-col transform md:-translate-y-4 relative"
            >
              <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-black px-4 py-1 rounded-bl-lg">MAIOR IMPACTO</div>
              <h3 className="text-3xl font-black mb-2 text-yellow-500 text-shadow-neon">OURO</h3>
              <div className="text-4xl font-bold mb-8 text-white">R$ 2.500</div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3"><span className="text-yellow-500 font-bold">✓</span> <span><strong className="text-white">Instagram:</strong> Post fixado + Stories</span></li>
                <li className="flex items-start gap-3"><span className="text-yellow-500 font-bold">✓</span> <span><strong className="text-white">No Evento:</strong> Banner individual no palco</span></li>
                <li className="flex items-start gap-3"><span className="text-yellow-500 font-bold">✓</span> <span><strong className="text-white">Locução:</strong> 05 Menções + Destaque</span></li>
              </ul>
              <button
                onClick={() => { setFormData({ ...formData, quota: 'Ouro' }); scrollTo(sections.contact); }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-600 to-yellow-400 hover:opacity-90 text-black transition-opacity font-black tracking-wide"
              >
                QUERO ESTA COTA
              </button>
            </motion.div>

            {/* Prata */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 border-t-4 border-t-gray-300 flex flex-col"
            >
              <h3 className="text-3xl font-black mb-2 text-gray-300">PRATA</h3>
              <div className="text-4xl font-bold mb-8">R$ 1.000</div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3"><span className="text-gray-300 font-bold">✓</span> <span><strong className="text-white">Instagram:</strong> Post individual no Feed</span></li>
                <li className="flex items-start gap-3"><span className="text-gray-300 font-bold">✓</span> <span><strong className="text-white">No Evento:</strong> Logo no banner oficial</span></li>
                <li className="flex items-start gap-3"><span className="text-gray-300 font-bold">✓</span> <span><strong className="text-white">Locução:</strong> 02 Menções do DJ</span></li>
              </ul>
              <button
                onClick={() => { setFormData({ ...formData, quota: 'Prata' }); scrollTo(sections.contact); }}
                className="w-full py-4 rounded-xl bg-white/10 hover:bg-gray-300 hover:text-black transition-colors font-bold tracking-wide"
              >
                QUERO ESTA COTA
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FORMULÁRIO / CONTATO */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-black relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <SectionHeading>Faça Parte do <span className="text-neon-purple text-shadow-neon">Movimento</span></SectionHeading>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12"
          >
            <p className="text-center text-gray-400 mb-8 leading-relaxed">
              Preencha os dados abaixo e você será redirecionado para o nosso WhatsApp oficial com todas as informações prontas para conversarmos.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nome ou Empresa</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-purple transition-colors"
                    placeholder="Seu nome ou marca"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Telefone (WhatsApp)</label>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-purple transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">E-mail</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-purple transition-colors"
                  placeholder="contato@empresa.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Cota de Interesse</label>
                <select
                  name="quota"
                  value={formData.quota}
                  onChange={handleInputChange}
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-purple transition-colors text-white"
                >
                  <option value="Bronze">Cota Bronze (R$ 500)</option>
                  <option value="Prata">Cota Prata (R$ 1.000)</option>
                  <option value="Ouro">Cota Ouro (R$ 2.500)</option>
                  <option value="Outro Valor">Outro Valor / Apoio Simbólico</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Mensagem (Opcional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-purple transition-colors"
                  placeholder="Conte um pouco sobre por que deseja apoiar..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-black font-black uppercase tracking-wider py-5 rounded-xl transition-colors flex items-center justify-center gap-3 text-lg"
              >
                Enviar via WhatsApp <ExternalLink size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 6. FOOTER E LEGAL */}
      <footer className="border-t border-white/10 pt-16 pb-8 px-6 bg-[#020202]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          <div>
            <h4 className="text-2xl font-black mb-6 flex items-center gap-2">
              <span className="text-neon-purple">ECOFOR</span> FESTIVAL
            </h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Som, Corpo e Transe na capital baiana / nordestina da cultura. Um festival focado em economia criativa e impacto social.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/ecoforfestival" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-purple transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="mailto:samgismario@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-purple transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/5571997284970" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white whitespace-nowrap">Contato & Realização</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3"><Mail size={16} className="text-neon-purple flex-shrink-0" /> samgismario@gmail.com</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-neon-purple flex-shrink-0" /> WhatsApp: (79) 99912-7350</li>
              <li className="flex items-center gap-3"><InstagramIcon size={16} className="text-neon-purple flex-shrink-0" /> @ecoforfestival</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-neon-purple flex-shrink-0" /> Sergipe / Brasil</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Transparência Fiscal</h4>
            <div className="text-sm text-gray-400 space-y-2 mb-6">
              <p><strong>Realização:</strong> GT Drinks Produções</p>
              <p><strong>Diretor de Smile:</strong> Gismário</p>
              <p><strong>Responsável Legal:</strong> José Gismário Santos Santana</p>
              <p><strong>CPF:</strong> 062.816.205-77</p>
            </div>
            <button
              onClick={() => alert("Simulação de download do Recibo de Patrocínio Cultural. O arquivo PDF oficial não foi configurado neste projeto.")}
              className="text-xs bg-white/10 hover:bg-white/20 px-4 py-2 rounded flex items-center gap-2 transition-colors"
            >
              <Download size={14} /> Baixar Modelo de Recibo (Cultural)
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ecofor Festival. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 justify-center text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
