// app/com/
// app/page.tsx
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  HeartHandshake,
  MessageCircle,
  Users,
  Brain,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-16 text-center space-y-20">
      {/* HERO */}
      <section className="max-w-4xl space-y-6">
        <h1 className="text-5xl font-bold tracking-tight leading-tight">
          👵🤖 <span className="text-primary">FamiliAI</span> <br />
          Le lien intelligent entre générations
        </h1>
        <p className="text-lg text-muted-foreground">
          Une application intergénérationnelle assistée par IA pour connecter
          enfants, petits-enfants et grands-parents, simplement et avec
          bienveillance.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg" className="text-lg">
            Essayez gratuitement
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg">
            Voir la démo
          </Button>
        </div>
      </section>

      {/* PROBLÉMATIQUE */}
      <section className="w-full max-w-3xl text-left space-y-6">
        <h2 className="text-3xl font-semibold text-center">
          👵 Un lien familial en voie de disparition
        </h2>
        <p className="text-muted-foreground text-lg">
          Aujourd’hui, plus de 45% des grands-parents se sentent isolés.
          FamiliAI aide à rétablir ce lien précieux avec leurs enfants et
          petits-enfants, à travers une interface adaptée, des rappels doux et
          une intelligence artificielle qui soutient la communication.
        </p>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="w-full max-w-5xl space-y-12">
        <h2 className="text-3xl font-semibold">✨ Fonctionnalités clés</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <FeatureCard
            icon={<MessageCircle className="w-8 h-8 text-primary" />}
            title="Messagerie intelligente"
            desc="Messages texte, audio et vidéo, avec suggestions générées par IA pour aider petits et grands à communiquer simplement."
          />
          <FeatureCard
            icon={<HeartHandshake className="w-8 h-8 text-primary" />}
            title="Assistant vocal senior"
            desc="Lecture automatique des messages, rappel vocal, réponse guidée, interface ultra accessible."
          />
          <FeatureCard
            icon={<Sparkles className="w-8 h-8 text-primary" />}
            title="Reporting familial"
            desc="Suivi de la fréquence des échanges, détection émotionnelle des messages, alertes douces pour renouer le contact."
          />
        </div>
      </section>

      {/* POUR QUI */}
      <section className="w-full max-w-5xl space-y-8">
        <h2 className="text-3xl font-semibold">👨‍👩‍👧 Pour toute la famille</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <AudienceCard
            title="Grands-parents"
            text="Une interface simplifiée, rassurante, avec aide vocale et rappel doux pour garder le lien vivant."
          />
          <AudienceCard
            title="Parents"
            text="Un tableau de bord clair pour suivre les interactions et favoriser une dynamique familiale régulière."
          />
          <AudienceCard
            title="Enfants"
            text="Un outil ludique pour envoyer des messages amusants, aidés par l’IA, et cultiver les liens familiaux."
          />
        </div>
      </section>

      {/* VISION & VALEURS */}
      <section className="w-full max-w-4xl text-left space-y-8">
        <h2 className="text-3xl font-semibold text-center">💡 Notre mission</h2>
        <p className="text-muted-foreground text-lg">
          Chez FamiliAI, nous croyons que la technologie peut rapprocher les
          générations. Nous avons conçu une application inclusive, chaleureuse,
          et soutenue par l'intelligence artificielle pour redonner de la vie,
          de la joie et du lien à nos aînés.
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground text-base">
          <li>Respect et inclusion des personnes âgées</li>
          <li>Technologie bienveillante et utile</li>
          <li>Protection de la vie privée par défaut</li>
          <li>Accessibilité universelle</li>
        </ul>
      </section>

      {/* TECH */}
      <section className="w-full max-w-5xl space-y-8 text-left">
        <h2 className="text-3xl font-semibold text-center">
          🛠️ Comment ça marche ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TechCard
            title="Stack technique moderne"
            icon={<Brain className="w-6 h-6 text-primary" />}
            text="Next.js 15, TypeScript, Tailwind CSS, Prisma, et intégration OpenAI pour une expérience fluide, rapide et sécurisée."
          />
          <TechCard
            title="Modules IA embarqués"
            icon={<Sparkles className="w-6 h-6 text-primary" />}
            text="Génération de réponses, analyse de ton émotionnel, aide vocale, résumé de conversations – tout est pensé pour le lien humain."
          />
        </div>
      </section>

      {/* APERÇU / SCREENSHOTS (optionnel) */}
      {/* Tu peux ajouter ici un composant Carousel si tu veux montrer l’UI de ton app */}

      {/* CTA */}
      <section className="bg-muted rounded-2xl py-12 px-8 w-full max-w-4xl space-y-6 text-center">
        <h2 className="text-3xl font-bold">Prêt à recréer du lien ?</h2>
        <p className="text-muted-foreground text-lg">
          Essayez FamiliAI gratuitement pendant 14 jours et découvrez la
          puissance d’une IA au service de votre famille.
        </p>
        <Button size="lg" className="text-lg">
          Commencer maintenant
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="text-muted-foreground text-sm pt-12 text-center">
        © {new Date().getFullYear()} FamiliAI. Tous droits réservés.
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 bg-muted rounded-xl space-y-4 shadow-sm hover:shadow-md transition">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
}

function AudienceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-muted rounded-xl p-6 space-y-2 shadow-sm hover:shadow-md transition">
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
}

function TechCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start space-x-4 p-6 bg-muted rounded-xl shadow-sm hover:shadow-md transition">
      {icon}
      <div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
