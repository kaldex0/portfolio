<template>
  <div class="min-h-screen pt-20">
    <!-- Video Hero -->
    <section class="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            BUT en 180 secondes
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Presentation rapide et claire de mon parcours et de mon projet.
          </p>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="section-padding bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="max-w-5xl mx-auto">
          <div class="card p-6 md:p-8">
            <div class="video-frame">
              <video
                class="video-player"
                controls
                preload="metadata"
                aria-label="Video BUT en 180 secondes"
              >
                <source src="/video/BUTen180SEC.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture video.
              </video>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
              Duree : 3 minutes. Si la lecture ne demarre pas, utilisez le bouton plein ecran.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.video-frame {
  width: 100%;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: #0f172a;
}

.video-player {
  width: 100%;
  display: block;
}
</style>
