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
              <iframe
                class="video-embed"
                src="https://www.youtube.com/embed/bnWgvc55WkU"
                title="BUT en 180 secondes"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
              Duree : 3 minutes. Lecture via YouTube.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.video-frame {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: #0f172a;
}

.video-embed {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
</style>
