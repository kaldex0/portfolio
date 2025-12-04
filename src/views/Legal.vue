<template>
  <div class="min-h-screen pt-20">
    <!-- Legal Hero -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Mentions Légales
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Informations légales et éditoriales
          </p>
        </div>
      </div>
    </section>

    <!-- Legal Content -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <div class="card p-8 space-y-6">
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Éditeur du site</h2>
              <p class="text-gray-600 dark:text-gray-400">
                Le présent site web est édité par :
              </p>
              <ul class="list-none space-y-2 text-gray-600 dark:text-gray-400">
                <li><strong class="text-gray-900 dark:text-white">Nom :</strong> Alexandre DAMMAN</li>
                <li><strong class="text-gray-900 dark:text-white">Adresse :</strong> Dunkerque, France</li>
                <li><strong class="text-gray-900 dark:text-white">Email :</strong> alexandre.damman@etu.univ-littoral.fr</li>
                <li><strong class="text-gray-900 dark:text-white">Téléphone :</strong> +33 7 66 21 56 55</li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Hébergement</h2>
              <p class="text-gray-600 dark:text-gray-400">
                Le site est hébergé par :
              </p>
              <ul class="list-none space-y-2 text-gray-600 dark:text-gray-400">
                <li><strong class="text-gray-900 dark:text-white">Hébergeur :</strong> local host</li>
                <li><strong class="text-gray-900 dark:text-white">Adresse :</strong> local host</li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Propriété intellectuelle</h2>
              <p class="text-gray-600 dark:text-gray-400">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p class="text-gray-600 dark:text-gray-400 mt-4">
                La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu'il soit est formellement interdite 
                sauf autorisation expresse du directeur de la publication.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Protection des données personnelles</h2>
              <p class="text-gray-600 dark:text-gray-400">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
              </p>
              <p class="text-gray-600 dark:text-gray-400 mt-4">
                Pour exercer ce droit, vous pouvez nous contacter à l'adresse suivante : alexandre.damman@etu.univ-littoral.fr
              </p>
              <p class="text-gray-600 dark:text-gray-400 mt-4">
                Pour plus d'informations, consultez notre <router-link to="/privacy" class="text-primary-600 dark:text-primary-400 hover:underline">Politique de confidentialité</router-link>.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Cookies</h2>
              <p class="text-gray-600 dark:text-gray-400">
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. 
                Ces cookies ne collectent aucune donnée personnelle et ne nécessitent pas de consentement préalable.
              </p>
              <p class="text-gray-600 dark:text-gray-400 mt-4">
                Nous n'utilisons pas de cookies de tracking ou de publicité tierce.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Liens hypertextes</h2>
              <p class="text-gray-600 dark:text-gray-400">
                Le site peut contenir des liens hypertextes vers d'autres sites. 
                L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Limitation de responsabilité</h2>
              <p class="text-gray-600 dark:text-gray-400">
                L'éditeur s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site.
              </p>
              <p class="text-gray-600 dark:text-gray-400 mt-4">
                Toutefois, l'éditeur ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
            </div>

            <div class="pt-6 border-t border-gray-200 dark:border-gray-700">
              <p class="text-sm text-gray-500 dark:text-gray-500">
                Dernière mise à jour : {{ currentDate }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const currentDate = new Date().toLocaleDateString('fr-FR', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})
</script>
