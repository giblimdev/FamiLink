// @/app/contact/page.tsx
import React from "react";
import Back from "@/components/Back";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Calendar,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Back label="← Retour" fallbackUrl="/" />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-6">
            Contactez GrandConnect
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre équipe est là pour vous accompagner dans la découverte de
            GrandConnect. Parlons ensemble de comment révolutionner le bien-être
            de vos proches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Formulaire de Contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Demandez votre démonstration gratuite
              </h2>
              <p className="text-gray-600">
                Remplissez ce formulaire et notre équipe vous contactera sous
                24h
              </p>
            </div>

            <form className="space-y-6">
              {/* Nom et Prénom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              {/* Email et Téléphone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="votre@email.fr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="01 23 45 67 89"
                  />
                </div>
              </div>

              {/* Profil */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vous êtes *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Sélectionnez votre profil</option>
                  <option value="enfant">Enfant/Petit-enfant soucieux</option>
                  <option value="senior">Senior intéressé</option>
                  <option value="aidant">Aidant professionnel</option>
                  <option value="etablissement">Établissement/Résidence</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Parlez-nous de votre situation, vos besoins ou vos questions..."
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  J'accepte d'être contacté par GrandConnect concernant ma
                  demande et les services proposés. Mes données ne seront jamais
                  partagées.
                </label>
              </div>

              {/* Bouton */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Envoyer ma demande
              </button>
            </form>
          </div>

          {/* Informations de Contact */}
          <div className="space-y-8">
            {/* Contact Direct */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contactez-nous directement
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Téléphone</h4>
                    <p className="text-gray-600">01 15 96 52 55</p>
                    <p className="text-sm text-gray-500">
                      Lundi au Vendredi, 9h-18h
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">contact@grandconnect.fr</p>
                    <p className="text-sm text-gray-500">
                      Réponse sous 4h en moyenne
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Adresse</h4>
                    <p className="text-gray-600">123 Avenue de l'Innovation</p>
                    <p className="text-gray-600">75015 Paris, France</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Clock size={20} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Horaires</h4>
                    <p className="text-gray-600">Lun-Ven : 9h00 - 18h00</p>
                    <p className="text-gray-600">Support d'urgence 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Proposés */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Ce que nous vous proposons
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="text-green-300 flex-shrink-0"
                  />
                  <span>Démonstration gratuite à domicile</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="text-green-300 flex-shrink-0"
                  />
                  <span>Test gratuit de 30 jours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="text-green-300 flex-shrink-0"
                  />
                  <span>Installation et formation incluses</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="text-green-300 flex-shrink-0"
                  />
                  <span>Support technique dédié</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="text-green-300 flex-shrink-0"
                  />
                  <span>Accompagnement personnalisé</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-xl">
                <p className="text-sm opacity-90">
                  <strong>Engagement :</strong> Satisfaction garantie ou
                  remboursé. Notre mission est de rapprocher les générations,
                  pas de vous contraindre.
                </p>
              </div>
            </div>

            {/* Actions Rapides */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <Calendar size={18} />
                Planifier un RDV
              </button>
              <button className="bg-white border-2 border-purple-500 text-purple-600 hover:bg-purple-50 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                Chat en direct
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Questions Fréquentes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                La démonstration est-elle vraiment gratuite ?
              </h4>
              <p className="text-gray-600 text-sm">
                Oui, absolument ! Nous nous déplaçons chez vous pour une
                présentation personnalisée sans aucun engagement.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Combien de temps dure l'installation ?
              </h4>
              <p className="text-gray-600 text-sm">
                L'installation complète prend environ 1h, formation comprise.
                Nous restons jusqu'à ce que tout soit parfaitement maîtrisé.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Que se passe-t-il si la technologie ne convient pas ?
              </h4>
              <p className="text-gray-600 text-sm">
                Période d'essai de 30 jours, remboursement intégral si vous
                n'êtes pas satisfait. Aucune question posée.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Le support technique est-il inclus ?
              </h4>
              <p className="text-gray-600 text-sm">
                Support technique complet inclus, assistance téléphonique et
                interventions à domicile si nécessaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
