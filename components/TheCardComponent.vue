<template>
  <div class="card-container">
    <div class="card-headline">
      <h2>{{ title }}</h2>
    </div>
    <div class="card-subheadline">
      <h3>
        {{ subtitle }}
      </h3>
    </div>
    <div class="card-image">
      <img src="~/assets/sample-content-image.jpg" alt="" />
    </div>
    <div class="card-properties-panel">
      <div class="card-properties-panel__left-side">
        <div class="card-properties-panel__user-profile">
          <img src="~/assets/sample-avatar.jpg" alt="" />
          <p>{{ username }}</p>
        </div>
      </div>
      <div class="card-properties-panel__right-side">
        <div class="card-properties-panel__thumbs-up">
          <img
            src="~/assets/thumbs-up-icon.svg"
            alt=""
            @click="handleThumbUp"
          />
          <p :class="{ 'thumb-up--active': isThumbedUp }">{{ thumbsUp }}</p>
        </div>
        <div class="card-properties-panel__thumbs-down">
          <img
            src="~/assets/thumbs-down-icon.svg"
            alt=""
            @click="handleThumbDown"
          />
          <p :class="{ 'thumb-down--active': isThumbedDown }">
            {{ thumbsDown }}
          </p>
        </div>
        <a href="#" class="card-properties-panel__comments">
          <img src="~/assets/comments-icon.svg" alt="" />
          <p>{{ comments }}</p>
        </a>
        <img src="~/assets/share-icon.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',

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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

.card-container {
  width: 100vw;
  color: rgba(255, 255, 255, 1);
}

.card-headline {
  background-color: rgba(36, 20, 22, 1);
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  padding: 12px 15px;
  font-size: 16px;
}

.card-subheadline {
  background-color: rgba(71, 71, 71, 1);
  padding: 18px 15px;
}

.card-headline h2 {
  font-size: 18px;
  font-weight: 700;
}

.card-subheadline h3 {
  font-size: 16px;
  font-weight: 400;
}

.card-image {
  background-color: rgb(223, 223, 223);

  display: flex;
  justify-content: center;
  align-items: center;
}

.card-image img {
  width: 100%;
  height: auto;
}

.card-properties-panel {
  display: flex;
  justify-content: space-between;
  background-color: rgba(71, 71, 71, 1);
}

.card-properties-panel__user-profile img {
  margin-right: 15px;
  width: 40px;
  height: auto;
}

.card-properties-panel p {
  font-size: 14px;
}

.card-properties-panel > *,
.card-properties-panel__left-side > *,
.card-properties-panel__right-side > * {
  display: flex;
  align-items: center;
}

.card-properties-panel__right-side > * {
  margin-right: 10px;
  font-weight: 700;
}

.card-properties-panel__right-side img {
  width: 14px;
  height: auto;
  cursor: pointer;
}

.card-properties-panel__right-side > * > * {
  margin-right: 7px;
}

.card-properties-panel__comments:link,
.card-properties-panel__comments:hover,
.card-properties-panel__comments:active,
.card-properties-panel__comments:visited {
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
}

.thumb-up--active {
  color: green;
}

.thumb-down--active {
  color: red;
}

@media (max-width: 360px) {
  .card-properties-panel__user-profile p {
    display: none;
  }
}

@media (min-width: 768px) {
  .card-container {
    width: 600px;
    color: rgba(255, 255, 255, 1);
  }

  .card-properties-panel {
    padding: 10px;
  }

  .card-properties-panel p {
    font-size: 16px;
  }

  .card-properties-panel__right-side > * > * {
    margin-right: 10px;
  }

  .card-properties-panel__right-side img {
    width: 18px;
    height: auto;
  }
}
</style>
