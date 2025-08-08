// @/app/services/page.tsx
import React from "react";
import Back from "@/components/Back";
import {
  Shield,
  MessageCircle,
  Heart,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "Sécurité Intelligente",
      subtitle: "Protection 24/7 discrète et efficace",
      features: [
        "Détection automatique des chutes",
        "Bouton SOS physique et virtuel",
        "Signal 'tout va bien' quotidien",
        "Alertes médicales prédictives",
      ],
      benefits: {
        seniors: "Sécurité sans surveillance intrusive",
        families: "Tranquillité d'esprit absolue",
        aidants: "Intervention ciblée et rapide",
      },
      color: "from-red-500 to-orange-500",
    },
    {
      icon: MessageCircle,
      title: "Communication Naturelle",
      subtitle: "Connectez-vous sans barrière technique",
      features: [
        "Interface vocale intelligente",
        "Messages vocaux avec transcription",
        "Appels simplifiés d'un bouton",
        "Partage de photos commentées",
      ],
      benefits: {
        seniors: "Communication sans contrainte technique",
        families: "Contact facilité malgré la distance",
        aidants: "Suivi des interactions sociales",
      },
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "Santé Proactive",
      subtitle: "Monitoring intelligent et personnalisé",
      features: [
        "Connexion objets connectés",
        "Rappels médicaments personnalisés",
        "Suivi rendez-vous automatique",
        "Détection d'anomalies comportementales",
      ],
      benefits: {
        seniors: "Autonomie préservée avec sécurité renforcée",
        families: "Visibilité sur l'état de santé réel",
        aidants: "Données médicales centralisées",
      },
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      title: "Reporting Automatique",
      subtitle: "Intelligence prédictive pour anticiper",
      features: [
        "Résumés hebdomadaires automatiques",
        "Analyse d'humeur via reconnaissance vocale",
        "Alertes graduées (info/attention/urgence)",
        "Tendances de bien-être long terme",
      ],
      benefits: {
        seniors: "Valorisation de leur quotidien",
        families: "Information sans questionnement intrusif",
        aidants: "Prise de décision éclairée",
      },
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const pricingPlans = [
    {
      name: "Essentiel",
      price: "19€",
      period: "/mois",
      description: "Pour commencer en toute sérénité",
      features: [
        "Communication familiale",
        "Bouton SOS",
        "Détection de chute",
        "Support technique",
      ],
      recommended: false,
      color: "border-gray-200",
    },
    {
      name: "Confort",
      price: "39€",
      period: "/mois",
      description: "L'équilibre parfait pour toute la famille",
      features: [
        "Tout Essentiel +",
        "Santé connectée",
        "Reporting avancé",
        "Objets connectés inclus",
        "Analyse comportementale",
      ],
      recommended: true,
      color: "border-blue-500",
    },
    {
      name: "Sérénité",
      price: "59€",
      period: "/mois",
      description: "Protection maximale et tranquillité absolue",
      features: [
        "Tout Confort +",
        "Téléassistance 24/7",
        "IA prédictive avancée",
        "Support prioritaire",
        "Intervention d'urgence",
      ],
      recommended: false,
      color: "border-purple-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Back variant="minimal" />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-6">
            Nos Services GrandConnect
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            L'assistant intergénérationnel qui révolutionne le bien-être des
            seniors grâce à l'intelligence artificielle et une approche humaine.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              15M de seniors concernés
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              Sécurité 24/7
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              IA prédictive
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}
                  >
                    <service.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.subtitle}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Fonctionnalités :
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-500 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Avantages par utilisateur :
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium text-green-700">
                          Seniors :
                        </span>
                        <span className="text-gray-600 ml-2">
                          {service.benefits.seniors}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium text-blue-700">
                          Familles :
                        </span>
                        <span className="text-gray-600 ml-2">
                          {service.benefits.families}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium text-orange-700">
                          Aidants :
                        </span>
                        <span className="text-gray-600 ml-2">
                          {service.benefits.aidants}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Offres Tarifaires
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez la formule qui correspond à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  plan.color
                } ${plan.recommended ? "scale-105 ring-4 ring-blue-100" : ""}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star size={14} className="fill-current" />
                      Recommandé
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-800">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle
                          size={16}
                          className="text-green-500 flex-shrink-0"
                        />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      plan.recommended
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    Choisir {plan.name}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Révolutionner le Bien-Être de vos Proches ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez GrandConnect avec une démonstration gratuite à domicile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
              <Users size={20} />
              Démonstration gratuite
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
              <Clock size={20} />
              Test 30 jours gratuit
            </button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            📧 contact@grandconnect.fr | 📱 01 15 96 52 55
          </p>
        </div>
      </div>{" "}
      {/* Retour automatique vers la page précédente */}
      <div className="mb-6">
        <Back label="Retour" fallbackUrl="/" />
      </div>
    </main>
  );
}
