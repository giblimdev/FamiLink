import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function GrandConnectPresentation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
              🌟 GrandConnect
            </h1>
            <p className="text-xl md:text-2xl text-blue-700 mb-2">
              L'Assistant Intergénérationnel qui Révolutionne le Bien-Être des
              Seniors
            </p>
            <p className="text-gray-600">
              Dossier de Presse & Présentation Commerciale
            </p>
          </div>
        </div>
      </header>

      {/* Article Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-700 via-blue-600 to-purple-700 bg-clip-text text-transparent mb-6">
              L'Écosystème Numérique Senior : Entre Innovation et Fragmentation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Découvrez pourquoi GrandConnect révolutionne un secteur en pleine
              mutation technologique
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Un Secteur en Pleine Mutation Technologique
            </h3>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                Le marché des applications dédiées aux seniors connaît
                aujourd'hui une transformation majeure. Alors que l'intelligence
                artificielle révolutionne notre quotidien et que les
                technologies de santé connectée progressent à vitesse grand V,
                force est de constater que l'écosystème numérique destiné aux
                personnes âgées peine à suivre le rythme de l'innovation.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="font-semibold text-blue-800">
                  Un paradoxe saisissant : d'un côté, nous assistons à
                  l'émergence d'outils technologiques toujours plus sophistiqués
                  ; de l'autre, les solutions pour nos aînés semblent figées
                  dans des approches obsolètes.
                </p>
              </div>
            </div>
          </div>

          {/* Problématiques actuelles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 p-3 rounded-xl">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Des Solutions Isolées et Vieillissantes
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                La plupart des applications "seniors" datent d'une époque pré-IA
                et n'intègrent pas les avancées technologiques récentes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Interfaces non intuitives
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Fonctionnalités cloisonnées
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Absence d'intelligence prédictive
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  Expérience utilisateur fragmentée
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  L'Éparpillement des Fonctionnalités
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Un senior doit aujourd'hui composer avec de multiples
                applications sans cohérence :
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-600">
                    Application téléassistance
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-600">Communication familiale</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-600">Pilulier connecté</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-600">Objets santé connectés</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                <p className="text-sm font-medium text-orange-700">
                  Cette multiplication crée une barrière insurmontable pour une
                  population déjà peu familière avec le numérique.
                </p>
              </div>
            </div>
          </div>

          {/* L'opportunité IA */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                L'Opportunité de l'Intelligence Artificielle
              </h3>
              <p className="text-lg opacity-90">
                Une révolution technologique sous-exploitée dans le secteur
                senior
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Langage Naturel</h4>
                <p className="text-sm opacity-90">
                  Compréhension et adaptation au vocabulaire
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 11H7v9a2 2 0 002 2h8a2 2 0 002-2V9h2V7H9v4zm3-6V3a1 1 0 00-1-1H9a1 1 0 00-1 1v2h4z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Apprentissage</h4>
                <p className="text-sm opacity-90">
                  Adaptation aux habitudes personnelles
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Prédiction</h4>
                <p className="text-sm opacity-90">
                  Anticipation des besoins futurs
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Centralisation</h4>
                <p className="text-sm opacity-90">
                  Expérience unifiée et cohérente
                </p>
              </div>
            </div>
          </div>

          {/* GrandConnect Solution */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-4">
                GrandConnect : La Réponse à la Fragmentation
              </h3>
              <p className="text-xl text-gray-600">
                Réconcilier l'innovation technologique avec les besoins réels
                des seniors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      IA Conversationnelle
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Interface vocale naturelle qui s'adapte</li>
                      <li>• Assistant personnel qui apprend</li>
                      <li>• Reconnaissance émotionnelle</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Centralisation Intelligente
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Une seule application pour tous les besoins</li>
                      <li>• Intégration native des services</li>
                      <li>• Synchronisation automatique</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Analyse Prédictive
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Détection d'anomalies comportementales</li>
                      <li>• Alertes préventives pour les familles</li>
                      <li>• Optimisation continue</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Simplicité Révolutionnaire
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Interface adaptative au niveau utilisateur</li>
                      <li>• Apprentissage progressif</li>
                      <li>• Support humain intégré</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              L'Avenir du Numérique Senior Commence Aujourd'hui
            </h3>
            <p className="text-lg mb-6 opacity-90">
              GrandConnect incarne la vision d'avenir : une technologie
              puissante rendue invisible par sa simplicité, un accompagnement
              intelligent qui respecte l'autonomie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                Découvrir GrandConnect
              </Button>
              <Button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <Card className="mb-8 border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-red-700">
                🎯 LE CONTEXTE : UN DÉFI SOCIÉTAL MAJEUR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    La Réalité d'Aujourd'hui
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        1
                      </span>
                      <strong>1 senior sur 3</strong> vit seul en France
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        2
                      </span>
                      <strong>60%</strong> des familles sont dispersées
                      géographiquement
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        3
                      </span>
                      Les aidants familiaux consacrent en moyenne{" "}
                      <strong>57h/mois</strong>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        4
                      </span>
                      <strong>300,000</strong> chutes de seniors nécessitent une
                      hospitalisation/an
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        5
                      </span>
                      Coût de la perte d'autonomie :{" "}
                      <strong>24 milliards €</strong> annuels
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Notre Vision
                  </h3>
                  <p className="text-blue-700">
                    GrandConnect transforme cette réalité en créant le premier
                    écosystème intelligent qui connecte, protège et valorise nos
                    aînés tout en libérant leurs familles de l'anxiété
                    quotidienne.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              🚀 GRANDCONNECT : BIEN PLUS QU'UNE APPLICATION
            </h2>
            <p className="text-xl opacity-90">L'Innovation qui Change Tout</p>
          </div>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <p className="text-lg mb-6">
                GrandConnect n'est pas une énième app de communication
                familiale. C'est le premier assistant personnel
                intergénérationnel qui utilise l'intelligence artificielle pour
                :
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Sécuriser le quotidien des seniors",
                  "Rassurer les familles en temps réel",
                  "Prévenir les situations d'urgence",
                  "Maintenir les liens affectifs naturellement",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/20 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl mb-2">✅</div>
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            🎪 FONCTIONNALITÉS RÉVOLUTIONNAIRES
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Security Feature */}
            <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-green-700">
                  🛡️ SÉCURITÉ INTELLIGENTE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Détection Automatique
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Reconnaissance des chutes via capteurs intégrés</li>
                    <li>• Bouton SOS physique et virtuel</li>
                    <li>• Signal "tout va bien" quotidien automatique</li>
                    <li>• Alertes médicales prédictives</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-green-100 text-green-800">
                    🟢 Seniors : Sécurité 24/7 sans surveillance intrusive
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800">
                    🔵 Familles : Tranquillité d'esprit absolue
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-800">
                    🟠 Aidants : Intervention ciblée et rapide
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Communication Feature */}
            <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-purple-700">
                  💬 COMMUNICATION NATURELLE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Simplicité Maximale
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Interface vocale intelligente</li>
                    <li>• Messages vocaux avec transcription automatique</li>
                    <li>• Appels simplifiés d'un bouton</li>
                    <li>• Partage de photos commentées par voix</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-green-100 text-green-800">
                    🟢 Seniors : Communication sans barrière technique
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800">
                    🔵 Familles : Contact facilité malgré la distance
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-800">
                    🟠 Aidants : Suivi des interactions sociales
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Health Feature */}
            <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-red-700">
                  🏥 SANTÉ PROACTIVE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Monitoring Intelligent
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Connexion objets connectés</li>
                    <li>• Rappels médicaments personnalisés</li>
                    <li>• Suivi rendez-vous automatique</li>
                    <li>• Détection d'anomalies comportementales</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-green-100 text-green-800">
                    🟢 Seniors : Autonomie préservée avec sécurité renforcée
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800">
                    🔵 Familles : Visibilité sur l'état de santé réel
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-800">
                    🟠 Aidants : Données médicales centralisées
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Reporting Feature */}
            <Card className="border-l-4 border-l-teal-500 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-teal-700">
                  📊 REPORTING AUTOMATIQUE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Intelligence Prédictive
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Résumés hebdomadaires automatiques</li>
                    <li>• Analyse d'humeur via reconnaissance vocale</li>
                    <li>• Alertes graduées (info/attention/urgence)</li>
                    <li>• Tendances de bien-être long terme</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <Badge className="bg-green-100 text-green-800">
                    🟢 Seniors : Valorisation de leur quotidien
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800">
                    🔵 Familles : Information sans questionnement intrusif
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-800">
                    🟠 Aidants : Prise de décision éclairée
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            👥 BÉNÉFICES PAR UTILISATEUR
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Seniors Benefits */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">
                  🟢 POUR LES SENIORS (60+ ans)
                </CardTitle>
                <p className="text-green-600 italic">
                  "Enfin une technologie qui me comprend !"
                </p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3">Bénéfices Immédiats :</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    🎯 <strong>Sécurité discrète :</strong> Protection sans
                    surveillance oppressante
                  </li>
                  <li>
                    🎯 <strong>Autonomie préservée :</strong> Assistance sans
                    infantilisation
                  </li>
                  <li>
                    🎯 <strong>Connexion simplifiée :</strong> Technologie
                    invisible, relations réelles
                  </li>
                  <li>
                    🎯 <strong>Valorisation :</strong> Partage de leur sagesse
                    et expérience
                  </li>
                  <li>
                    🎯 <strong>Confiance :</strong> Savoir que l'aide arrive si
                    nécessaire
                  </li>
                </ul>
                <div className="bg-white p-4 rounded mt-4">
                  <p className="text-xs italic text-gray-600">
                    "Avec GrandConnect, je me sens en sécurité chez moi. Mes
                    enfants ont moins peur pour moi, et moi je peux vraiment
                    profiter de nos échanges sans qu'ils me posent 20 questions
                    sur ma santé !"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Families Benefits */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">
                  🔵 POUR LES FAMILLES (25-60 ans)
                </CardTitle>
                <p className="text-blue-600 italic">
                  "Enfin des nouvelles rassurantes sans culpabiliser !"
                </p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3">
                  Bénéfices Transformateurs :
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    🎯 <strong>Tranquillité mentale :</strong> Alertes seulement
                    si nécessaire
                  </li>
                  <li>
                    🎯 <strong>Gain de temps :</strong> Informations
                    automatiques vs appels quotidiens
                  </li>
                  <li>
                    🎯 <strong>Proximité retrouvée :</strong> Conversations sur
                    l'essentiel
                  </li>
                  <li>
                    🎯 <strong>Anticipation :</strong> Prévention plutôt que
                    gestion de crise
                  </li>
                  <li>
                    🎯 <strong>Coordination familiale :</strong> Toute la
                    famille informée
                  </li>
                </ul>
                <div className="bg-white p-4 rounded mt-4">
                  <h5 className="font-semibold text-sm mb-2">ROI Famille :</h5>
                  <ul className="text-xs space-y-1">
                    <li>-70% d'appels "de contrôle" par semaine</li>
                    <li>+200% d'échanges positifs</li>
                    <li>-85% d'anxiété liée à la distance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Caregivers Benefits */}
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-700">
                  🟠 POUR LES AIDANTS PROFESSIONNELS
                </CardTitle>
                <p className="text-orange-600 italic">
                  "L'outil qui révolutionne mon accompagnement !"
                </p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3">
                  Avantages Professionnels :
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    🎯 <strong>Efficacité multipliée :</strong> Suivi de
                    plusieurs patients optimisé
                  </li>
                  <li>
                    🎯 <strong>Prévention ciblée :</strong> Intervention avant
                    la crise
                  </li>
                  <li>
                    🎯 <strong>Documentation automatique :</strong> Historiques
                    et rapports générés
                  </li>
                  <li>
                    🎯 <strong>Coordination améliorée :</strong> Lien direct
                    avec les familles
                  </li>
                  <li>
                    🎯 <strong>Valeur ajoutée :</strong> Service premium pour
                    leurs clients
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            💰 MODÈLE ÉCONOMIQUE GAGNANT-GAGNANT
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-700">
                  Essentiel - 19€/mois
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm">
                  <li>✓ Communication</li>
                  <li>✓ SOS</li>
                  <li>✓ Détection chute</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-500">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-700">
                  Confort - 39€/mois
                </CardTitle>
                <Badge className="bg-blue-500 text-white">Populaire</Badge>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm">
                  <li>✓ Tout Essentiel</li>
                  <li>✓ Santé connectée</li>
                  <li>✓ Reporting avancé</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-700">
                  Sérénité - 59€/mois
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2 text-sm">
                  <li>✓ Tout Confort</li>
                  <li>✓ Téléassistance 24/7</li>
                  <li>✓ IA prédictive</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            📊 MARCHÉ & OPPORTUNITÉ
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">
                  🎯 Taille du Marché
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <strong>15 millions</strong> de seniors en France (60+)
                  </li>
                  <li>
                    Marché Silver Economy : <strong>92 milliards €</strong> en
                    2025
                  </li>
                  <li>
                    Croissance annuelle : <strong>+7%</strong> jusqu'en 2030
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">🚀 Objectifs 3 Ans</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    Année 1 : <strong>10,000</strong> utilisateurs actifs
                  </li>
                  <li>
                    Année 2 : <strong>50,000</strong> familles connectées
                  </li>
                  <li>
                    Année 3 : <strong>150,000</strong> seniors équipés
                  </li>
                  <li>
                    Projection CA : <strong>15M€</strong> en année 3
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            🎪 POURQUOI CHOISIR GRANDCONNECT MAINTENANT ?
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">
                  ⚡ Pour les Seniors
                </CardTitle>
                <p className="text-green-600">
                  "Retrouvez votre sérénité à domicile"
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">
                  ⚡ Pour les Familles
                </CardTitle>
                <p className="text-blue-600">
                  "Libérez-vous de l'anxiété quotidienne"
                </p>
              </CardHeader>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-700">
                  ⚡ Pour les Professionnels
                </CardTitle>
                <p className="text-orange-600">
                  "Multipliez votre impact d'accompagnement"
                </p>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">
              📞 CONTACT & DÉMONSTRATION
            </h3>
            <p className="mb-6">Découvrez GrandConnect en action</p>
            <div className="space-y-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 mx-2">
                Démonstration gratuite à domicile
              </Button>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 mx-2">
                Test 30 jours sans engagement
              </Button>
            </div>
            <div className="mt-6 text-sm">
              <p>
                📧 contact@grandconnect.fr | 📱 01 15 96 52 55 | 🌐
                www.grandconnect.fr
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-2">
            GrandConnect : Quand la technologie rapproche les générations
          </h3>
          <p className="text-gray-400">
            🏆 Plus qu'une application, une révolution intergénérationnelle !
          </p>
        </div>
      </footer>
    </div>
  );
}
