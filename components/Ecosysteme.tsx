// @/components/ecosysteme.tsx
import Link from "next/link";
import React from "react";
import Back from "@/components/Back";
import { ExternalLink, Users, Heart, Smartphone } from "lucide-react";

export default function EcosystemePage() {
  const resources = [
    {
      title:
        "Grands-parents : maintenir les liens avec les petits-enfants grâce à la techno",
      url: "https://naitreetgrandir.com/fr/nouvelles/2023/06/12/grands-parents-maintenir-liens-petits-enfants-grace-techno/",
      description:
        "Article sur l'utilisation de la technologie pour renforcer les liens intergénérationnels",
      source: "Naître et grandir",
      category: "Communication",
      icon: Heart,
    },
    {
      title: "Grappels de médicaments",
      url: "https://www.mytherapyapp.com/fr",
      description:
        "Rappels de prise de médicaments fiables et documentation cohérente de vos prises",
      source: "Naître et grandir",
      category: "Communication",
      icon: Heart,
    },
    {
      title: "https://www.redpanicbutton.com/",
      url: "https://www.redpanicbutton.com/",
      description: "https://www.redpanicbutton.com/",
      source: "Naître et grandir",
      category: "Communication",
      icon: Heart,
    },
    {
      title:
        "https://www.silvereco.fr/la-nouvelle-application-ami-qui-revolutionne-la-relation-entre-les-aidants-et-leurs-proches-aides/",
      url: "https://www.silvereco.fr/la-nouvelle-application-ami-qui-revolutionne-la-relation-entre-les-aidants-et-leurs-proches-aides/",
      description:
        "Article sur l'utilisation de la technologie pour renforcer les liens intergénérationnels",
      source: "Naître et grandir",
      category: "Communication",
      icon: Heart,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Back label="← Retour" fallbackUrl="/" />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-700 via-blue-600 to-purple-700 bg-clip-text text-transparent mb-6">
            Ressources & Écosystème Senior
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Liens utiles et ressources pour comprendre l'univers des seniors et
            les technologies qui les connectent.
          </p>
        </div>

        {/* Section Liens Externes */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <ExternalLink size={24} className="text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Liens & Ressources Externes
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <resource.icon size={20} className="text-blue-600" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full flex-shrink-0">
                        {resource.category}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Source : {resource.source}
                      </span>

                      <Link
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium group-hover:underline"
                      >
                        Lire l'article
                        <ExternalLink size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section informative */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            À propos de ces ressources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/70 rounded-xl p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Recherche Approfondie
              </h3>
              <p className="text-gray-600 text-sm">
                Ces liens proviennent d'une recherche documentée sur les enjeux
                intergénérationnels et les solutions technologiques pour
                seniors.
              </p>
            </div>

            <div className="bg-white/70 rounded-xl p-6">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Smartphone size={24} className="text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Innovation Technologique
              </h3>
              <p className="text-gray-600 text-sm">
                Focus sur les technologies qui facilitent vraiment la
                communication entre générations, au-delà des gadgets.
              </p>
            </div>

            <div className="bg-white/70 rounded-xl p-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Impact Social
              </h3>
              <p className="text-gray-600 text-sm">
                Études et témoignages sur l'impact réel de ces technologies sur
                le bien-être des seniors et leurs familles.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
