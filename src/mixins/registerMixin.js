import axios from "axios";
import {API_URL} from "@/data/CONSTANTS";

export default {
    methods: {
        parsePhone (s) {
            return s.substring(1, 2) + s.substring(4, 7) + s.substring(9, 12) + s.substring(13,15) + s.substring(16,18)
        },

        async register(user) {
            let promise = {
                err: '',
                success: false,
                token: ''
            }

            const request = {
                // last_name: user.last_name,
                first_name: user.first_name,
                // middle_name: user.middle_name,
                // gender: user.gender,
                // birthdate: user.birthdate,
                contact_phone: this.parsePhone(user.contact_phone),
                email: user.email,
                password: user.password
            }

            try {
                const response = await axios.post(API_URL + 'register', JSON.stringify(request))

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

        async registerUser(user) {
            const registerPromise = await this.register(user)

            if (registerPromise.success) {
                this.$store.commit('addMessage', {type: 'success', text: 'Вы успешно зарегестрированы'})

                localStorage.setItem('token', registerPromise.token)

                this.$store.commit('setAuth', true)

                await this.loginUser(user.email, user.password)


            } else {
                this.$store.commit('addMessage', {type: 'error', text: registerPromise.err})
            }
        }

    }
}