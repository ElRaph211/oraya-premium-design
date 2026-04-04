import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Mail, Phone } from "lucide-react";

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
                </div>
              </ScrollReveal>
            </div>

            <div className="md:col-span-3">
              <ScrollReveal delay={100}>
                {submitted ? (
                  <div className="rounded-xl border border-cta/30 p-8 text-center" style={{ backgroundColor: "#F0FFF4" }}>
                    <p className="font-semibold text-cta">Votre client email va s'ouvrir avec le message pré-rempli.</p>
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
