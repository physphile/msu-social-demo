<template>
  <form @submit.prevent @submit="submit">
    <calc-input-group :label="'Панисонат'" style="margin-bottom: 30px;">
      <irdom-select
          raised
          :options="hotels"
          style="width: 671px;"
          v-model="hotel"
      >Выберите пансионат
      </irdom-select>
    </calc-input-group>

    <!--TODO: интервальный выбор даты с помощью выпадающего календаря-->
    <div class="wrapper">
      <calc-input-group :label="'Заезд'">
        <irdom-input
            :type="'date'"
            raised
            style="width: 200px; margin-right: 17px;"
            v-model="arrivalDate"
        />
      </calc-input-group>
      <calc-input-group :label="'Выезд'">
        <irdom-input
            :type="'date'"
            raised
            style="width: 200px; margin-right: 17px;"
            v-model="departureDate"
        />
      </calc-input-group>
      <calc-input-group :label="'Гостей'">
        <irdom-select
            :options="guestsOptions"
            raised
            style="width: 121px"
            v-model="guests"
        >Введите число гостей
        </irdom-select>
      </calc-input-group>
    </div>
    <irdom-color-btn type="submit" style="margin-top: 40px;">Забронировать</irdom-color-btn>
  </form>


</template>

<script>
import calcInputGroup from '@/components/main-components/calc-input-group'

export default {
  name: "booking-calculator",
  components: {
    calcInputGroup
  },
  mounted() {
    const today = new Date()
    const year = today.getFullYear().toString()
    let month = (today.getMonth() + 1).toString()
    if (month.length === 1) {
      month = '0' + month
    }
    let day = today.getDate().toString()
    if (day.length === 1) {
        day = '0' + day
    }

    this.arrivalDate = year + '-' + month + '-' + day
  },
  data() {
    return {
      hotels: [
        "Красновидово", "Буревестник", "Университетский", "Солнечный"
      ],
      guestsOptions: ['1', '2', '3', '4'],
      hotel: "Красновидово",
      guests: '1',
      arrivalDate: '',
      departureDate: ''
    }
  },
  methods: {
    submit() {
      if (!this.departureDate || !this.arrivalDate) {
        // alert('Укажите даты заезда-выезда')
        this.$store.commit('addMessage', {type: 'info', text: 'Укажите даты заезда и выезда'})
      } else {
        const hotels = this.$store.state.hotels
        const order = {
          hotel: hotels.indexOf(hotels.filter(hotel => hotel.name === this.hotel)[0]),
          arrivalDate: this.arrivalDate,
          departureDate: this.departureDate,
          guests: +this.guests
        }
        this.$store.commit('setOrder', order)
        this.$router.push('booking2')
      }
    }
  }
}
</script>

<style scoped>
</style>