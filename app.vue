<template>
  <div id="top">
    <LayoutNavbar />
    <LayoutHero :hero="hero" />

    <ProductCardsHero :products="productsHero" />

    <LayoutHr />

    <section>
      <div class="container text-flow is-flow-10">
        <div class="headings section-heading">
          <h2 class="heading-2">Schwarze Diamanten</h2>
            <p>Schwarze Diamanten verzaubern vor allem durch ihr geheimnisvolles Funkeln. Im Zusammenspiel mit feinsten weißen Brillanten entsteht kontrastreiche Brillanz, die garantiert viele Blicke auf sich zieht. Das klare Zusammenspiel aus Schwarz und Weiß verleiht jedem Stück eine ganz besondere Note.</p>
        </div>
      

        <div class="grid-copy-image">
          <div class="copy text-flow is-flow-9 is-observed onvisible-fade-left" style="padding-top: 2rem; padding-bottom: 2rem;">
            <div class="text-flow">
              <h3 class="heading-3">Kontrastreiches Funkeln</h3>
              <p>Schwarze Diamanten verzaubern vor allem durch ihr geheimnisvolles Funkeln. Im Zusammenspiel mit feinsten weißen Brillanten entsteht kontrastreiche Brillanz, die garantiert viele Blicke auf sich zieht. Das klare Zusammenspiel aus Schwarz und Weiß verleiht jedem Stück eine ganz besondere Note.</p>
            </div>
            <div class="text-flow">
              <h3 class="heading-3">Ein Statement auf den zweiten Blick</h3>
              <p>Diamant Schmuck sehen Sie überall, doch schwarze Diamanten trägt wahrlich nicht Jede. Mit schwarzen Diamanten setzen Sie ein Statement, das nicht zu laut und doch markant ist.</p>
            </div>
            <div class="text-flow">
              <h3 class="heading-3">Moderner Chic für jeden Anlass</h3>
              <p>Schmuck mit schwarzen Diamanten wirkt stets modern. In unseren Designs setzen wir gerne auf klare Konturen ohne viel Schnickschnack. So können Sie Ihr Schmuckstück mit schwarzen Diamanten sowohl im Büro als auch in der Freizeit, aber natürlich ebenso zu eleganten Anlässen tragen. In der Schublade wird es also garantiert nicht bleiben. </p>
            </div>
          </div>

          <div class="content-image is-relative has-background is-observed onvisible-fade-right is-staggered-1">
            <img src="/images/schwarze-diamanten/schwarze-diamanten-content-01.jpg" height="590" width="680" alt="Schwarze Diamanten" class="is-background" lazyload />
          </div>
        </div>

        <div class="spacer no-flow is-hidden-mobile">&nbsp;</div>

        <div class="grid-copy-image image-left is-observed onvisible-fade-left is-staggered-1">
          <div class="content-image is-relative has-background">
            <img src="/images/schwarze-diamanten/schwarze-diamanten-content-02.jpg" height="590" width="680" alt="Schwarze Diamanten" class="is-background" lazyload />
          </div>

          <div class="copy text-flow is-flow-7 is-observed onvisible-fade-right">
            <div class="text-flow">
              <h3 class="heading-3">Einfach zu kombinieren</h3>
              <p>Zu schwarzen Diamanten passt nur schwarze Kleidung? Im Gegenteil! Gerade unsere Schwarz-Weiß-Designs passen mühelos zu jeder Garderobe. Im Gegensatz zu farbintensivem Edelstein Schmuck, der vielleicht nicht zu jedem Kleidungsstück passt, können Sie schwarze Diamanten mit nahezu allen Farben tragen. </p>
            </div>
            <div class="text-flow">
              <h3 class="heading-3">Preislich attraktiv</h3>
              <p>Diamanten haben ihren Preis. Das gilt auch für schwarze Diamanten. Nichtsdestotrotz sind schwarze Diamanten pro Karat deutlich günstiger als ihre weißen bis farblosen Kollegen. So können Sie sich auch ein hochkarätiges Schmuckstück gönnen, das mit weißen Diamanten ein Vielfaches des Preises kosten würde.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <LayoutHr />

    <section>
      <div class="container">
        <ProductCardFeatured :product="productFeatured" class="is-observed onvisible-fade-up" />
      </div>
    </section>

    <LayoutHr />

    <LayoutKnowhow />

    <ProductGallery />

    <section>
      <div class="container text-flow is-flow-10">
        <div class="headings section-heading">
          <h2 class="heading-2">Über uns</h2>
            <p>Es gibt viele Wege, Stil zu beweisen. Einige der schönsten finden Sie bei uns auf Schmucktraeume.com - und das schon seit 20 Jahren, dabei stets und ausschließlich online. </p>
        </div>
      

        <div class="grid-2">
          <div class="copy text-flow is-flow-7 is-observed onvisible-fade-right">
            <p>Bereits im Jahr 2002 gegründet, zählen wir zu den Pionieren der Luxus-orientierten E-Commerce Landschaft. Dabei fühlen wir uns als Familien-Unternehmen mit Sitz nahe München von Beginn an vor allem einem Gedanken verpflichtet: Individualität. Schmuck von der Stange werden Sie bei uns nicht finden. Im Mittelpunkt stehen dagegen besonders ungewöhnliche Designs, die man gewiss nicht an jeder Ecke zu sehen bekommt. Mit viel Liebe zum Detail designt, entstehen unter Verwendung ausschließlich feinster Diamanten, Edelsteine und Perlen wahre Lieblingsstücke, die so einzigartig sind wie die Frau, die sie trägt. Jedes Schmuckstück wird von unseren erfahrenen Goldschmiede Meistern und Steinfassern auf höchstem Niveau gefertigt – Qualität, die man nicht nur sieht, sondern auch fühlt. Und weil Schmuckkauf vor allem eine Vertrauensfrage ist, müssen Sie bei uns keinesfalls auf den Service verzichten, den Sie „offline“ bei Ihrem Juwelier gewohnt sind. Wir beraten Sie in allen Belangen gerne – persönlich, kompetent und ganz individuell. </p>
          </div>

          <div class="content-image is-relative has-background is-rounded  is-observed onvisible-fade-left is-staggered-1">
            <img src="/images/ueber-uns.jpg" height="700" width="500" alt="Jennifer Pyka" class="is-background" lazyload />
          </div>
        </div>

        <div class="testimonials text-flow is-flow-9">
          <h3 class="heading-4">Das sagen unsere Kunden:</h3>
          <div class="grid-3">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial is-observed onvisible-fade-up" :class="`is-staggered-${index}`">
              {{ testimonial }}
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <LayoutHr />

    <section>
      <div class="container text-flow is-flow-10">
        <div class="headings section-heading">
          <h2 class="heading-2">Sonderanfertigungen – Ihr Schmucktraum auf Maß</h2>
            <p>Sie suchen schon ewig nach einem ganz bestimmten Schmuckstück, werden allerdings nirgendwo fündig? Sie haben genaue Vorstellungen, aber keine Möglichkeit, aus Ihren Ideen brillante Wirklichkeit werden zu lassen? Dann sind Sie bei uns an der richtigen Adresse.</p>
        </div>
      

        <div class="grid-2">
          <div class="copy text-flow is-flow-7 is-observed onvisible-fade-left">
            <p>Im Rahmen unseres exklusiven Concierges Services fertigen wir für unsere Kunden bereits seit vielen Jahren regelmäßig Schmuckstücke auf Maß an. Dank unseres Jahrzehnte lang gewachsenen, internationalen Netzwerks aus exzellenten Edelstein-, Perlen- und Diamanten-Händlern sowie der engen Zusammenarbeit mit unseren erfahrenen Goldschmiede Meistern und Edelsteinfassern können wir für Sie nahezu jeden Sonderwunsch in die Tat umsetzen. Neugierig geworden? Dann kontaktieren Sie uns doch einfach gerne und lassen uns mehr über Ihren ganz persönlichen Schmucktraum wissen.</p>
          </div>

          <div class="content-image is-relative has-background is-rounded  is-observed onvisible-fade-right is-staggered-1">
            <img src="/images/massanfertigungen.jpg" height="700" width="500" alt="Jennifer Pyka" class="is-background" lazyload />
          </div>
        </div>

        <p style="text-align: center;"><a class="button cta has-icon is-primary" href="https://schmucktraeume.com/de/content/schmucktraeume-auf-mass" target="_blank"><SvgDiamond /><span class="is-hidden-mobile">Jetzt </span>Sonderanfertigung anfragen</a></p>
        
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
  const hero = {
    image: '/images/schwarze-diamanten/schwarze-diamanten-hero.jpg',
    overline: 'Schwarze Diamanten',
    headline: 'Geheimnisvolles Funkeln, kontrastreiche Brillanz',
    copy: 'Das Leben ist zu kurz für 0815. Unsere von Hand in Gold gefertigten Schmuckstücke mit schwarzen Diamanten sind wie gemacht für Frauen, die gerne markante Akzente setzen und auf einen Touch Extravaganz nicht verzichten wollen. Ob stattlicher Pavé Ring, opulenter Armreif oder klassischer Ohrschmuck - unsere breit gefächerte Kollektion an hochwertigem Schmuck mit schwarzen Diamanten hält für jeden Geschmack das passende Lieblings-Juwel bereit.',
    cta: {
      text: '„Black Diamond“ Kollektion',
      url: '#',
      icon: 'diamond',
    }
  }

  const productsHero = [
    {
      sku: 'swr13',
      title: 'Stattlicher schwarze Diamanten Ring im Zick-Zack-Design',
      price: 3630.00,
      url: 'https://schmucktraeume.com/de/swr-13#/26-ringgr%C3%B6%C3%9Fe-ringgr%C3%B6%C3%9Fe_46',
    },
    {
      sku: 'swo115',
      title: 'Zeitlose Ohrringe mit schwarzen Diamanten',
      price: 3388.00,
      url: 'https://schmucktraeume.com/de/zeitlose-ohrringe-mit-schwarzen-diamanten',
    },
    {
      sku: 'kreuz21',
      title: 'Edler Kreuz-in-Kreuz Anhänger mit schwarzen Diamanten',
      price: 3328.00,
      url: 'https://schmucktraeume.com/de/kreuz-21',
    }
  ]

  const productFeatured = {
    sku: 'arm69',
    title: 'Attraktives Tennis Armband mit schwarzen Diamanten',
    description: 'Zeitlose Linien treffen auf einen Touch Extravaganz: Unser Tennis Armband mit schwarzen Diamanten und weißen Brillanten verzaubert durch dezente Eleganz und kontrastreiches Funkeln.',
    price: 4800.00,
    url: 'https://schmucktraeume.com/de/arm-69',
  }

  const testimonials = [
    'DIE beste Adresse im Internet in Sachen Schmuck/Preis/Leistung/Spitzenqualität',
    'Die Bilder laden zum Träumen ein, ABER die Originale sind dann sensationell.',
    'Stilvoller kann man diese Juwelen nicht abwickeln, wahrer Luxus, immer wieder.',
    'Ich kann jedem empfehlen, der auf der Suche nach etwas Besonderem ist, sich an Frau Pyka zu wenden. Man spürt direkt, dass man mit einer erfahrenen Juwelierin zusammenarbeitet, die ihren vollen Fokus auf das Detail sowie die langjährige Zufriedenheit und Freude am Schmuckstück der Kundin legt. Mein nächstes Projekt habe ich bereits geplant und freue mich auf die nächste Zusammenarbeit!',
    'Frau Pyka, die Inhaberin, ist eine echte Ausnahme-Juwelierin. Kompetent, geduldig und überaus freundlich und herzlich! Die Beratung war jedes Mal auf den Punkt. Das muss man erstmal schaffen, wenn man dem Kunden nicht direkt gegenüber sitzt.',
    '„Ich kam mit dem Wunsch nach einer Sonderanfertigung auf Frau Pyka zu, und dies war nicht nur problemlos möglich, sondern ist sogar schöner geworden, als ich es mir eigentlich vorgestellt hatte. Man merkt einfach, dass hier mit Feingefühl, jahrelanger Erfahrung und Einfühlungsvermögen der Wunsch des Kunden optimal an seine Bedürfnisse angepasst wird.'
  ]

  onMounted(() => {
    const sections = document.querySelectorAll('.is-observed')
    const options = {
      threshold: 0.1
    }
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
        }
      })
    }, options)
    sections.forEach(section => {
      observer.observe(section)
    })
  })
</script>
