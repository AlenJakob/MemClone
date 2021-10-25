<template>
  <div class="card-container">
    <div class="card-headline__container">
      <h2 class="card-headline">{{ title }}</h2>
    </div>
    <div class="card-subheadline__container">
      <h3 class="card-subheadline">{{ subtitle }}</h3>
    </div>
    <div class="card-image__container">
      <img
        class="card-image"
        src="~/assets/img/SampleContentImage.jpg"
        alt=""
      />
    </div>
    <div class="card-properties-panel">
      <div class="card-properties-panel__aside">
        <img
          src="~/assets/img/SampleAvatar.jpg"
          class="card-properties-panel__user-image"
          alt=""
        />
        <p
          class="
            card-properties-panel__user-name
            card-properties-panel__aside-description
          "
        >
          {{ username }}
        </p>
      </div>
      <div class="card-properties-panel__aside">
        <div
          class="
            card-properties-panel__thumbs-up card-properties-panel__aside-inner
          "
        >
          <img
            src="~/assets/img/IconThumbsUp.svg"
            class="card-properties-panel__icon"
            alt=""
            @click="handleThumbUp"
          />
          <p
            :class="{
              'thumb-up--active': isThumbedUp,
              'card-properties-panel__description': true,
            }"
          >
            {{ thumbsUp }}
          </p>
        </div>
        <div
          class="
            card-properties-panel__thumbs-down
            card-properties-panel__aside-inner
          "
        >
          <img
            class="card-properties-panel__icon"
            src="~/assets/img/IconThumbsDown.svg"
            alt=""
            @click="handleThumbDown"
          />
          <p
            :class="{
              'thumb-down--active': isThumbedDown,
              'card-properties-panel__description': true,
            }"
          >
            {{ thumbsDown }}
          </p>
        </div>
        <a
          href="#"
          class="
            card-properties-panel__comments card-properties-panel__aside-inner
          "
        >
          <img
            src="~/assets/img/IconComments.svg"
            class="card-properties-panel__icon"
            alt=""
          />
          <p class="card-properties-panel__description">{{ comments }}</p>
        </a>
        <img
          src="~/assets/img/IconShare.svg"
          class="card-properties-panel__icon"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Lorem ipsum dolor sit amet',
      subtitle:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim itaque',
      thumbsUp: 21,
      thumbsDown: 37,
      comments: 50,
      username: 'SampleName',

      // that will be gathered from API in the future
      isThumbedUp: false,
      isThumbedDown: false
    }
  },

  methods: {
    handleThumbUp () {
      if (this.isThumbedUp) {
        this.thumbsUp -= 1
        this.isThumbedUp = false
        return
      }

      if (this.isThumbedDown) {
        this.thumbsDown -= 1
      }

      this.isThumbedDown = false
      this.isThumbedUp = true
      this.thumbsUp += 1
    },

    handleThumbDown () {
      if (this.isThumbedDown) {
        this.thumbsDown -= 1
        this.isThumbedDown = false
        return
      }

      if (this.isThumbedUp) {
        this.thumbsUp -= 1
      }

      this.isThumbedDown = true
      this.isThumbedUp = false
      this.thumbsDown += 1
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

* {
  font-family: "Roboto", sans-serif;
}

.card-container {
  width: 100vw;
  color: rgba(255, 255, 255, 1);
}

.card-headline__container {
  background-color: $c-dark-gray;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  padding: 12px 15px;
  font-size: 16px;
}

.card-subheadline__container {
  background-color: $c-gray;
  padding: 18px 15px;
}

.card-headline {
  font-size: 18px;
  font-weight: 700;
}

.card-subheadline {
  font-size: 16px;
  font-weight: 400;
}

.card-image__container {
  background-color: $c-light-gray;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-properties-panel {
  display: flex;
  justify-content: space-between;
  background-color: $c-gray;
}

.card-properties-panel__user-image {
  margin-right: 15px;
  width: 40px;
  height: auto;
}

.card-properties-panel__user-name {
  display: none;
}

.card-properties-panel__aside-description {
  font-size: 14px;
}

.card-properties-panel__aside {
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-weight: 700;
}

.card-properties-panel__icon {
  width: 14px;
  margin-right: 5px;
  height: auto;
  cursor: pointer;
}

.card-properties-panel__aside-inner {
  display: flex;
  margin-right: 15px;
}

.card-properties-panel__comments:link,
.card-properties-panel__comments:hover,
.card-properties-panel__comments:active,
.card-properties-panel__comments:visited {
  text-decoration: none;
  color: $c-white;
}

.thumb-up--active {
  color: green;
}

.thumb-down--active {
  color: red;
}

@include mobile-up {
  .card-properties-panel__user-name {
    display: initial;
  }
}

@include tablet-up {
  .card-container {
    width: 600px;
    color: $c-white;
  }

  .card-properties-panel {
    padding: 10px;
  }

  .card-properties-panel__aside {
    font-size: 16px;
  }

  .card-properties-panel__icon {
    width: 18px;
    margin-right: 9px;
  }
}
</style>
