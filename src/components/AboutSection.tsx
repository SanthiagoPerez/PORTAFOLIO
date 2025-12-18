import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const AboutSection = () => {
  const { t } = useLanguage();

  const [cvUrl, setCvUrl] = useState<string | null>(null);
  const cvName = "CV_SANTIAGO.pdf";

  useEffect(() => {
    // Si existe public/cv.pdf lo usamos como valor por defecto
    fetch("/cv.pdf", { method: "HEAD" })
      .then((res) => { if (res.ok) setCvUrl("/CV_SANTIAGO.pdf"); })
      .catch(() => {});

    return () => {
      // liberar URL de blob si se creó
      if (cvUrl && cvUrl.startsWith("blob:")) {
        URL.revokeObjectURL(cvUrl);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);





  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-6">{t.about.title}</h2>
          
          <div className="h-1 w-12 bg-primary rounded-full mx-auto mb-12" style={{ boxShadow: 'var(--shadow-glow)' }} />

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              {t.about.paragraph1.split("Backend Developer").map((part, i, arr) => 
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}<span className="text-foreground font-medium">Backend Developer</span>
                  </span>
                ) : part
              )}
            </p>

            <p>
              {t.about.paragraph2}
            </p>

            <p>
              {t.about.paragraph3}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">

            <Dialog> 
              <DialogTrigger asChild>
                <Button variant="default">CV ATS</Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Currículum (CV-ATS)</DialogTitle>
                </DialogHeader>

                <div className="w-full h-[72vh] mt-4">
                  {cvUrl ? (
                    <iframe src={cvUrl} title="CV" className="w-full h-full rounded" />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <p className="text-muted-foreground">No hay CV disponible. Puedes subir uno.</p>
                    </div>
                  )}
                </div>

                <DialogFooter>
                  <div className="flex gap-2">
                    <Button variant="outline" asChild>
                      <a href={cvUrl ?? undefined} target="_blank" rel="noreferrer" onClick={(e) => { if (!cvUrl) e.preventDefault(); }}>Abrir en nueva pestaña</a>
                    </Button>

                    <Button variant="secondary" className="hover:bg-accent hover:text-accent-foreground" asChild>
                      <a href={cvUrl ?? undefined} download={cvName} onClick={(e) => { if (!cvUrl) e.preventDefault(); }}>Descargar</a>
                    </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
