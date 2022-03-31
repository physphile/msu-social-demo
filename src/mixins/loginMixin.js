import axios from "axios";
import {API_URL} from "@/data/CONSTANTS";

export default {
    methods: {
        async login(email, password) {
            let promise = {
                err: '',
                success: false,
                token: ''
            }

            const request = {
                email: email,
                password: password
            }

            try {
                const response = await axios.post(API_URL + 'login', JSON.stringify(request))

                const data = response.data

                if (data.response) {
                    promise.success = true

                    promise.token = data.response.token
                } else {
                    promise.err = data.error.description
                }
            } catch (err) {
                promise.err = err
            }

            return promise
        },

        async loginUser(email, password) {
            const loginPromise = await this.login(email, password)

            if (loginPromise.success) {
                this.email = this.password = ''

                this.close ? this.close() : {}

                localStorage.setItem('token', loginPromise.token)

                this.$store.commit('setAuth', true)

                const userGetPromise = await this.user_get()

                const rolesGetPromise = await this.roles_get()

                if (userGetPromise.success && rolesGetPromise.success) {
                    // alert('Вы успешно авторизованы')
                    this.$store.commit('addMessage', {type: 'success',text: 'Вы успешно авторизованы'})
                } else {
                    // alert(userGetPromise.err + '\n' + rolesGetPromise.err)
                    this.$store.commit('addMessage', {type: 'error', text: userGetPromise.err + '\n' + rolesGetPromise.err})
                }
            } else {
                // alert(loginPromise.err)
                this.$store.commit('addMessage', {type: 'error', text: loginPromise.err})
            }
        }
    }
}