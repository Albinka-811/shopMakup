<script>
export default {
  name: "AppFooter"
}
</script>

<template>
  <footer class="footer">
    <div class="footer-nav">
      <nav class="footer-nav-help">
        HELP
        <ul class="footer-nav-help-list">
          <li class="footer-nav-help-list-items">
            <a class="footer-nav-help-list-items__link" href="#">Delivery & returns</a>
          </li>
          <li class="footer-nav-help-list-items">
            <a class="footer-nav-help-list-items__link" href="#">FAQ</a>
          </li>
          <li class="footer-nav-help-list-items">
            <a class="footer-nav-help-list-items__link" href="#">Track order</a>
          </li>
          <li class="footer-nav-help-list-items">
            <a class="footer-nav-help-list-items__link" href="#">Contacts</a>
          </li>
          <li class="footer-nav-help-list-items">
            <a class="footer-nav-help-list-items__link" href="#">Blog</a>
          </li>
        </ul>
      </nav>
      <nav class="footer-nav-shop">
        SHOP
        <ul class="footer-nav-shop-list">
          <li class="footer-nav-shop-list-items">
            <a class="footer-nav-shop-list-items__link" href="#">New arrivals</a>
          </li>
          <li class="footer-nav-shop-list-items">
            <a class="footer-nav-shop-list-items__link" href="#">Trending now</a>
          </li>
          <li class="footer-nav-shop-list-items">
            <a class="footer-nav-shop-list-items__link" href="#">Sales</a>
          </li>
          <li class="footer-nav-shop-list-items">
            <a class="footer-nav-shop-list-items__link" href="#">Brands</a>
          </li>
        </ul>
      </nav>
      <nav class="footer-nav-data">
        GET IN TOUCH
        <ul class="footer-nav-data-list">
          <li class="footer-nav-data-list-items">
            Call:
            <a class="footer-nav-data-list-items__link" href="tel: 4055550128">(405) 555-0128</a>
          </li>
          <li class="footer-nav-data-list-items">
            Email:
            <a class="footer-nav-data-list-items__link"
               href="mailto: hello@createx.com">hello@createx.com</a>
          </li>
        </ul>
        <ul class="footer-nav-data-social">
          <li class="footer-nav-data-social-items">
            <a class="footer-nav-data-social-items-links" href="https://uk-ua.facebook.com/">
              <img class="footer-nav-data-social-items-links__name" src="../assets/icons/facebook.png">
            </a>
          </li>
          <li class="footer-nav-data-social-items">
            <a class="footer-nav-data-social-items-links" href="https://www.instagram.com/">
              <img class="footer-nav-data-social-items-links__name" src="../assets/icons/instagramW.png">
            </a>
          </li>
          <li class="footer-nav-data-social-items">
            <a class="footer-nav-data-social-items-links" href="https://twitter.com/">
              <img class="footer-nav-data-social-items-links__name" src="../assets/icons/twitter.png">
            </a>
          </li>
          <li class="footer-nav-data-social-items">
            <a class="footer-nav-data-social-items-links" href="https://www.youtube.com/">
              <img class="footer-nav-data-social-items-links__name" src="../assets/icons/youTube.png">
            </a>
          </li>
          <li class="footer-nav-data-social-items">
            <a class="footer-nav-data-social-items-links" href="https://ru.pinterest.com/">
              <img class="footer-nav-data-social-items-links__name" src="../assets/icons/pinterest.png">
            </a>
          </li>
        </ul>
      </nav>
      <nav class="footer-nav-app">
        DOWNLOAD OUR APP
        <ul class="footer-nav-app-list">
          <li class="footer-nav-app-list-items">
            <a class="footer-nav-app-list-items-links" href="https://www.apple.com/">
              <img class="footer-nav-app-list-items-links__name" src="../assets/icons/app-store.png">
            </a>
          </li>
          <li class="footer-nav-app-list-items">
            <a class="footer-nav-app-list-items-links" href="https://play.google.com/">
              <img class="footer-nav-app-list-items-links__name" src="../assets/icons/google-play.png">
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="footer-bottom">
                <span class="footer-bottom-left">
                    © All rights reserved. Made with
                    <img class="footer-bottom-left__like" src="../assets/icons/likeG.png">
                    by Createx Studio
                </span>
      <span class="footer-bottom__right">
                    Go to top
                </span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: block;
  background: black;

  &-nav {
    display: flex;
    margin: 0 auto;
    width: 1230px;
    padding: 60px 0 40px;

    &-help, &-shop, &-data, &-app {
      font-family: $fontLato;
      font-weight: 700;
      font-size: $fontSizeXS;
      color: $white;
      margin-right: 150px;

      &:last-child {
        margin-right: 0;
      }

      &-list {
        list-style: none;
        padding: 0;
        margin: 12px 0 0;

        &-items {
          margin-bottom: 4px;

          &:last-child {
            margin-bottom: 0;
          }

          &__link {
            text-decoration: none;
            font-family: $fontLato;
            font-weight: 400;
            font-size: $fontSizeXS;
            color: $white;
            opacity: 0.6;
          }
        }
      }
    }

    &-data {
      &-list {
        &-items {
          text-decoration: none;
          font-family: $fontLato;
          font-weight: 400;
          font-size: $fontSizeXS;
          color: $white;
        }
      }

      &-social {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 24px 0 0;

        &-items {
          margin-right: 12px;

          &:last-child {
            margin-right: 0;
          }

          &-links {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            background: rgb(255, 255, 255, 0.12);
          }
        }
      }
    }

    &-app {
      &-list {
        display: flex;
        margin-top: 24px;

        &-items {
          margin: 0 20px 0 0;

          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }

  &-bottom {
    display: flex;
    padding: 24px 0 32px;
    justify-content: space-between;
    margin: 0 auto;
    width: 1230px;

    &-left {
      display: flex;
      align-items: center;
      margin-right: 876px;
      font-family: $fontLato;
      font-weight: 400;
      font-size: 12px;
      color: $white;

      &__like {
        margin: 0 4px;
      }
    }

    &__right {
      font-family: $fontLato;
      font-weight: 700;
      font-size: $fontSizeXS;
      color: $white;
    }
  }
}
</style>
