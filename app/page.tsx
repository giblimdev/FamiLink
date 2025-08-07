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
