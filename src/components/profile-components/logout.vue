<template>
  <div class="wrap">
    <div class="to-profile" @click="$router.push('/profile')">
      <img :src="url" alt="" class="avatar">
      <span class="name">{{ parseName() }}</span>
    </div>
    <img src="../../assets/icons/acc_logout.png" alt="" style="cursor: pointer" @click="logout">
  </div>
</template>

<script>
export default {
  name: "logout",
  props: {
    url: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
    }
  },
  methods: {
    logout() {
      localStorage.setItem('token', '')
      localStorage.setItem('user', '')
      this.$store.commit('setAuth', false)
      this.$store.commit('deleteUser')
      this.$router.push('/')
      this.$store.commit('addMessage', {type: 'info', text: 'Вы успешно вышли из аккаунта'})
    },
    parseName() {
      const user = this.$store.state.user
      if (user.first_name && user.last_name) {
        return user.first_name + " " + user.last_name.substring(0, 1) + '.'
      } else if (user.first_name) {
        return user.first_name
      }
      return 'Имя Ф.'

    }
  }
}
</script>

<style scoped>
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
}

.name {
  font-size: 16px;
  line-height: 19px;
  color: black;
  margin-right: 24px;
  cursor: pointer;
}

.wrap {
  align-items: center;
  display: flex;
}

.to-profile {
  display: flex;
  align-items: center;
  cursor: pointer;
}

</style>