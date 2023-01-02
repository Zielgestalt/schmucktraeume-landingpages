<template>
  <footer class="section" data-theme="dark">
    <div class="container text-flow is-flow-8">
      <div class="grid">
        <div class="column text-flow">
          <img src="/images/logo.png" width="240" height="54" />
          <p>Ihr Onlineshop für exquisite Schmuckstücke und meisterhafte Juwelen seit 2002.</p>
        </div>

        <div class="column text-flow">
          <h3>Unternehmen</h3>

          <nav class="navbar-footer">
            <ul>
              <li v-for="(item, index) in navbarCompany" :key="`navbar-footer-${index}`">
                <NuxtLink :to="item.link" target="_blank">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <div class="column text-flow">
          <h3>Service</h3>

          <nav class="navbar-footer">
            <ul>
              <li v-for="(item, index) in navbarService" :key="`navbar-footer-${index}`">
                <NuxtLink :to="item.link" target="_blank">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <div class="column text-flow">
          <h3>Information</h3>

          <nav class="navbar-footer">
            <ul>
              <li v-for="(item, index) in navbarInfo" :key="`navbar-footer-${index}`">
                <NuxtLink :to="item.link" target="_blank">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="grid">
        <div class="column">
          © {{ new Date().getFullYear() }} by Schmuckträume.com
        </div>
        <div class="column"></div>
        <div class="comumn">
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const menuOpen = ref(false);
  const navbarCompany = [
        {
          title: 'Wir über uns',
          link: 'https://schmucktraeume.com/de/content/wir-ueber-uns',
        },
        {
          title: 'Kunden über uns',
          link: 'https://schmucktraeume.com/de/content/kunden-ueber-uns',
        },
        {
          title: 'Impressum',
          link: 'https://schmucktraeume.com/de/content/impressum',
        },
        {
          title: 'Kontakt',
          link: 'https://schmucktraeume.com/de/content/schmucktraeume-auf-mass',
        },
      ]
  
  const navbarService = [
        {
          title: 'Widerrufsrecht',
          link: 'https://schmucktraeume.com/de/content/widerrufsrecht',
        },
        {
          title: 'Datenschutz',
          link: 'https://schmucktraeume.com/de/content/datenschutz',
        },
        {
          title: 'Zahlung und Versand',
          link: 'https://schmucktraeume.com/de/content/zahlung-und-versand',
        },
        {
          title: 'AGB',
          link: 'https://schmucktraeume.com/de/content/agb',
        },
      ]

  const navbarInfo = [
        {
          title: 'FAQ',
          link: 'https://schmucktraeume.com/de/content/faq',
        },
        {
          title: 'Schmuckträume verschenken',
          link: 'https://schmucktraeume.com/de/content/schmucktraeume-verschenken',
        },
        {
          title: 'Ringrößen',
          link: 'https://schmucktraeume.com/de/content/ringgroessen',
        },
      ]
</script>

<style lang="scss" scoped>
  @import "assets/scss/variables/variables";
  footer {
    --link: var(--clr-white);
    --link-hover: var(--clr-white-hover);

    background-color: var(--clr-grey-0);
    padding: var(--size-8) var(--size-5);
    margin-top: 12rem;
    position: relative;
    font-size: 1rem;

    @if map-get($breakpoints, "lg") {
      @media (min-width: map-get($breakpoints, "lg")) {
        padding: var(--size-11) var(--size-5);
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 56rem;
      background: var(--gradient-bg);
      bottom: 100%;
      transform: scaleY(-1);
    }

    .grid {
      display: grid;
      gap: var(--size-9);
      grid-template-columns: 1fr;

      @media (min-width: map-get($breakpoints, "lg")) {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .logo {
      max-width: 8rem;
    }

    h3 {
      text-transform: uppercase;
      font-weight: var(--fw-9);
      letter-spacing: 0.05em;
    }

    .navbar-footer,
    .external-links {
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }
    }

    .navbar-footer {
      ul {
        li {
          a {
            position: relative;
            display: block;
            padding-left: 1.5rem;
            text-decoration: none;
            padding: 0.35rem 0 0.35rem 1.5rem;

            &::before {
              border-color: inherit;
              border-bottom-style: solid;
              border-bottom-width: 2px;
              border-right-style: solid;
              border-right-width: 2px;
              content: '';
              display: inline-block;
              height: 0.5rem;
              left: 0;
              position: absolute;
              top: 0.75rem;
              width: 0.5rem;
              transform: rotate(315deg);
              transition: left var(--transition);
            }

            &:hover {
              &::before {
                left: 0.25rem;
              }
            }
          }
          
        }
      }
    }

    .external-links {
      ul {
        li {
          border-bottom: 1px solid var(--clr-grey-5);

          a {
            display: block;
            text-decoration: none;
            padding: 1rem 0;

            > span {
              display: block;
            }

            .date {
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
</style>