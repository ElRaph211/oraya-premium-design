import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Mail, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/33778958554";
const LINKEDIN_URL = "https://www.linkedin.com/in/raphaelaubry03";
const INSTAGRAM_URL = "https://www.instagram.com/raphaelaubry_/";

const Contact = () => {
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", tel: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact de ${form.prenom} ${form.nom}`);
    const body = encodeURIComponent(
      `Nom: ${form.nom}\nPrénom: ${form.prenom}\nEmail: ${form.email}\nTéléphone: ${form.tel}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:raphael@orayasystem.fr?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass = "w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors";

  return (
    <>
      <Navbar />
      <main className="section-padding">
        <div className="section-container max-w-4xl">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <ScrollReveal>
                <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
                <p className="text-sm text-muted-foreground mb-8">
                  Une question ? Un doute ? Écrivez-nous, Raphaël vous répond personnellement.
                </p>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-highlight mt-0.5" />
                    <span className="text-muted-foreground">128 Rue La Boétie, 75008 Paris</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-highlight mt-0.5" />
                    <a href="mailto:raphael@orayasystem.fr" className="text-highlight hover:underline">raphael@orayasystem.fr</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-highlight mt-0.5" />
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">07.78.95.85.54 (WhatsApp)</a>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-4 mt-6">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-highlight/10 flex items-center justify-center text-highlight hover:bg-highlight/20 transition-colors" aria-label="WhatsApp">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-highlight/10 flex items-center justify-center text-highlight hover:bg-highlight/20 transition-colors" aria-label="LinkedIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-highlight/10 flex items-center justify-center text-highlight hover:bg-highlight/20 transition-colors" aria-label="Instagram">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <div className="md:col-span-3">
              <ScrollReveal delay={100}>
                {submitted ? (
                  <div className="rounded-xl border border-highlight/30 p-8 text-center" style={{ backgroundColor: "#F0F7FF" }}>
                    <p className="font-semibold text-highlight">Votre client email va s'ouvrir avec le message pré-rempli.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Nom *</label>
                        <input required value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className={inputClass} />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Prénom *</label>
                        <input required value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })} className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Email *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Numéro de téléphone *</label>
                      <input required type="tel" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Message *</label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass} />
                    </div>
                    <button type="submit" className="w-full bg-cta text-cta-foreground py-3 rounded-lg font-semibold text-sm hover:bg-cta-hover transition-colors">
                      Envoyer le message
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
