import ContactUsSection from "@/components/contactUs/ContactUsSection";
import { SEO } from "@/components/SEO";

export default function ContactUs() {
  return (
    <>
      <SEO
        title="Contacto | Grupo Dip C.A. — Cotiza tu Proyecto de Construcción"
        description="Contáctanos para cotizar tu proyecto de construcción, obras civiles o alquiler de maquinaria pesada en Venezuela. Ingenieros especializados a tu disposición."
        keywords="contacto Grupo Dip, cotizar construcción Venezuela, presupuesto obra civil Venezuela, agendar consultoría construcción, ingenieros Venezuela"
        canonicalPath="/contact"
      />
      <ContactUsSection />
    </>
  );
}
