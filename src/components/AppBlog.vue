<script>
export default {
  name: "AppBlog"
}
</script>

<template>
  <div class="blog">
    <div class="blog-header">
      <h2 class="blog-header__name">Fashion blog</h2>
      <button class="blog-header__open">View blog</button>
    </div>
    <div class="blog-content">
      <div class="blog-content-info">
        <img class="blog-content-info__img" src="../assets/images/blog-img9.png">
        <h5 class="blog-content-info__title">Bag Trends for Summer 2023</h5>
        <div class="blog-content-info-meta">
          <span class="blog-content-info-meta__name">Fashion</span>
          <img src="../assets/icons/lineS.png">
          <span class="blog-content-info-meta__date">August 24, 2023</span>
          <img src="../assets/icons/lineS.png">
          <span class="blog-content-info-meta-comments">
                            <img class="blog-content-info-meta-comments__chat" src="../assets/icons/chat.png">
                            No comments
                        </span>
        </div>
        <p class="blog-content-info__text">
          Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt <br> aliquet sit
          vel,
          venenatis nulla. Integer bibendum turpis convallis...
        </p>
      </div>
      <div class="blog-content-info">
        <img class="blog-content-info__img" src="../assets/images/blog-img10.png">
        <h5 class="blog-content-info__title">Top 10 of This Season’s Hottest Sneakers</h5>
        <div class="blog-content-info-meta">
          <span class="blog-content-info-meta__name">Lifestyle</span>
          <img src="../assets/icons/lineS.png">
          <span class="blog-content-info-meta__date">July 16, 2023</span>
          <img src="../assets/icons/lineS.png">
          <span class="blog-content-info-meta-comments">
                            <img class="blog-content-info-meta-comments__chat" src="../assets/icons/chat.png">
                            4 comments
                        </span>
        </div>
        <p class="blog-content-info__text">
          Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat <br> vitae
          scelerisque.
          Rhoncus augue faucibus maecenas lacus...
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog {
  margin-bottom: 120px;

  &-header {
    display: flex;
    justify-content: space-between;
    padding: 0 345px;
    margin-bottom: 60px;

    &__name {
      font-family: $fontLato;
      font-weight: 900;
      font-size: $fontSizeXXL;
      color: $black;
      margin: 0;
    }

    &__open{
      border: 1px solid $primary;
      border-radius: 4px;
      padding: 13px 33px;
      background-color: transparent;
      outline: none;
      font-family: $fontLato;
      font-weight: 700;
      font-size: 14px;
      color: $primary;
    }
  }

  &-content {
    display: flex;
    justify-content: center;

    &-info {
      margin-right: 30px;

      &:last-child {
        margin-right: 0;
      }

      &__img {
        margin-bottom: 24px;
      }

      &__title {
        font-family: $fontLato;
        font-weight: 700;
        font-size: $fontSizeS;
        color: $black;
        margin: 0 0 12px;
        padding: 0 24px;
      }

      &-meta {
        padding: 0 24px;
        margin-bottom: 16px;

        &__name, &__date {
          font-family: $fontLato;
          font-weight: 400;
          font-size: 14px;
          color: #787A80;
          margin-right: 12px;
        }

        &__date {
          margin-left: 12px;
        }

        &-comments {
          font-family: $fontLato;
          font-weight: 400;
          font-size: 14px;
          color: #787A80;
          margin-left: 12px;

          &__chat {
            margin-right: 8px;
          }
        }
      }

      &__text {
        margin: 0;
        padding: 0 24px 21px;
        font-family: $fontLato;
        font-weight: 400;
        font-size: $fontSizeXS;
        color: $lightBlack;
      }
    }
  }
}
</style>
