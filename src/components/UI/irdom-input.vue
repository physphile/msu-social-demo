<template>
  <div class="input-wrapper">
    <input
        v-model="value"
        :type="type"
        :class="{date: type === 'date', 'raised': raised}"
        :placeholder="placeholder"
        @input="updateInput"
        ref='phone'
    >
    <div class="error-container">
      <transition enter-active-class="animate__animated animate__fadeInDown"
                  leave-active-class="animate__animated animate__fadeOut">
        <p class="error" v-if="isError">
          {{ error }}
        </p>
      </transition>
    </div>


  </div>
</template>

<script>
export default {
  name: "irdom-input",
  data() {
    return {
      url: "../../assets/icons/calendar.png",
      value: this.modelValue
    }
  },

  mounted() {
    document.addEventListener('keydown', this.validation)
  },

  computed: {
    isError() {
      return this.error !== ''
    },

    last() {
      return this.value[this.value.length - 1]
    },

    error() {
      const s = this.modelValue
      if (s.length !== 0) {
        if (this.type === 'password') {
          if (s.length < 8 && s.length > 0) {
            return 'Пароль должен содержать не менее 8 символов'
          }

          let isCapitalExists = false

          let isNumberExists = false

          for (let i = 0; i < s.length; ++i) {
            const isCapital = s[i] === s[i].toUpperCase()

            const isLetter = this.isLetter(s[i])

            const isNumber = this.isNumber(s[i])

            const isAcceptable = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTYVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ".includes(s[i])

            const isCyrillic = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".includes(s[i])

            if (isCyrillic) {
              return 'Буквы кириллицы запрещены'
            }

            if (!isAcceptable) {
              return 'Введенный пароль содержит недопустимые символы'
            }

            if (isLetter && isCapital) {
              isCapitalExists = true
            }

            if (isNumber) {
              isNumberExists = true
            }
          }

          if (!isNumberExists) {
            return 'Пароль должен содержать хотя бы одну цифру'
          }

          if (!isCapitalExists) {
            return 'Пароль должен содержать хотя бы одну заглавную букву'
          }

          return ''
        }

        if (this.type === 'name') {
          for (let i = 0; i < s.length; ++i) {
            const isCyrillic = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ ".includes(s[i])

            if (!isCyrillic) {
              return 'Имя может состоять только из букв кириллицы'
            }
          }
        }

        if (this.type === 'email') {
          let isAt = false

          for (let i = 0; i < s.length; ++i) {
            const isAcceptable = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTYVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ".includes(s[i])

            if (!isAcceptable) {
              return 'Введенный адрес содержит недопустимые символы'
            }

            if (s[i] === '@') {
              isAt = true
            }

          }

          if (!isAt) {
            return 'Адрес должен содержать знак @'
          } else if (s[s.length - 1] === '@') {
            return 'Введите часть адреса после символа @'
          }

          return ''
        }
      }

      return ''
    }

  },

  props: {
    modelValue: {
      type: String,
    },
    type: {
      type: String,
      default: 'text'
    },
    raised: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
  },

  methods: {
    isNumber(c) {
      if (c === ' ') return false
      return !isNaN(c)
    },

    isLetter(c) {
      return (/[a-zA-Z]/).test(c)
    },

    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },

    validation(e) {
      const code = e.code

      const isOnInput = e.path[0] === this.$refs.phone

      const isBackspace = code === 'Backspace'

      const isPhone = this.type === 'phone'

      const isOnlyCountryCodeRemain = this.value === '+7 '

      const isKeyNumber =
          code === 'Digit0' ||
          code === 'Digit1' ||
          code === 'Digit2' ||
          code === 'Digit3' ||
          code === 'Digit4' ||
          code === 'Digit5' ||
          code === 'Digit6' ||
          code === 'Digit7' ||
          code === 'Digit8' ||
          code === 'Digit9'

      if (isOnInput && isPhone) {
        if (!isBackspace && this.value.length === 18) {
          e.preventDefault()
        }

        if (isBackspace && isOnlyCountryCodeRemain || !(isKeyNumber || isBackspace)) {
          e.preventDefault()
        }

        if (isBackspace && !this.isNumber(this.last) && !isOnlyCountryCodeRemain) {
          e.preventDefault()
          while (!this.isNumber(this.last)) {
            if (this.last === ')') {
              const i = this.value.indexOf('(')

              this.value = this.value.substring(0, i) + this.value.substring(i + 1)
            }
            this.value = this.pop(this.value)
          }
          this.value = this.pop(this.value)
        }
      }
    },

    pop(s) {
      return s.substring(0, s.length - 1)
    }

  },

  watch: {
    value(val, old) {
      if ((val.length > old.length) && this.type === 'phone') {
        if (val.length === 6) {
          this.value = val.substring(0, 3) + '(' + val.substring(3) + ') '
        } else if (val.length === 12 || val.length === 15) {
          this.value += '-'
        }
      }

      this.$emit('update:modelValue', val)
    },

    error() {
      this.$emit('error', this.error, this.type)
    }
  }
}
</script>

<style scoped>
input {
  height: 46px;
  padding: 12px 28px;
  font-size: 16px;
  line-height: 140.52%;
  /* or 22px */
  /* lightgray */
  border: 1px solid #E3E3E3;
  border-radius: 8px;
  color: black;
  transition: box-shadow .2s;
}

input:focus {
  border: 1px solid #3D62BB;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}

.date {
  background: url('../../assets/icons/calendar.png') no-repeat right white;

}

.raised {
  box-shadow: 0 4px 21px rgba(0, 0, 0, 0.07);
  border-radius: 50px;
  color: black;
  border: none;
}

.raised:hover {
  box-shadow: 0 5px 21px rgba(0, 0, 0, 0.15);
}

input:disabled {
  background-color: white;
  color: black;
}

.raised:hover {
  box-shadow: 0 5px 21px rgba(0, 0, 0, 0.15);
}

.raised:focus {
  box-shadow: 0 4.5px 25px -4px rgba(125, 163, 253, 0.4);
}

.error {
  color: orange;
  font-size: 13px;
  width: 200%;
}

.error-container {
  height: 13px;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 4px;
}

.animate__animated.animate__shakeX {
  --animate-duration: .5s;
}


</style>