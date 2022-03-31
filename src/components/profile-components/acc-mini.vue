<template>
  <div class="wrapper">
    <!--TODO: при отсутствии аватара, ставить инициалы ИФ-->
    <div
        class="avatar"
        :style="{'background-image': 'url(' + url + ')'}"
        @mouseover="avatarHover = true"
        @mouseleave="avatarHover = false"
    >
      <img src="../../assets/icons/avatr_change.png" alt="" class="avatar-change" v-show="avatarHover">
      <div class="blackout" v-show="avatarHover"></div>
    </div>
    <div class="text">
      <span class="name">{{ parseName() }}</span>
      <span class="status">{{ parseStatus() }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "acc-mini",
  data() {
    return {
      avatarHover: false,
    }
  },
  props: {
    name: {
      type: String,
      default: 'Имя Фамилия'
    },
    status: {
      type: String,
      default: 'Статус неизвестен'
    },
    url: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
    }
  },
  methods: {
    parseName() {
      const user = this.$store.state.user
      const first_name = user.first_name
      const last_name = user.last_name
      if (first_name && last_name) {
        return first_name + ' ' + user.last_name
      } else if (first_name) {
        return first_name
      }
      return 'Имя Фамилия'
    },
    parseStatus() {
      const status = this.$store.state.user.statusMSU
      if (status === 'STUDENT') {
        return 'Студент'
      } else if (status === 'STAFF') {
        return 'Сотрудник'
      } else {
        return 'Статус неизвестен'
      }
    }
  }
}
</script>

<style scoped>
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 23px;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.wrapper {
  flex-direction: row;
}

.text {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  color: #000000;
  margin-bottom: 8px;
}

.status {
  font-size: 16px;
  line-height: 19px;
  color: #858585;
}

.avatar-change {
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.blackout {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
}

.avatar:hover {
  cursor: pointer;
}
</style>