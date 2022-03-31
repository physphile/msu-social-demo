import axios from "axios";
import {API_URL} from "@/data/CONSTANTS";

export default {
    methods: {
        async user_edit(user) {
            let promise = {
                err: '',
                success: false,
            }

            const request = {
                first_name: String,
                // last_name: user.last_name ? user.last_name : null,
                last_name: String,
                middle_name: String,
                token: localStorage.getItem('token'),
                birthdate: String,
                contact_phone: String
            }

            user.first_name ? request.first_name = user.first_name : {}
            user.last_name ? request.last_name = user.last_name : {}
            user.middle_name ? request.middle_name = user.middle_name : {}
            user.birthdate ? request.birthdate = user.birthdate : {}
            user.contact_phone ? request.contact_phone = user.contact_phone : {}

            try {
                const response = await axios.post(API_URL + 'user_edit', JSON.stringify(request))

                const data = response.data

                if (data.response) {
                    promise.success = true

                    this.$store.commit('setUser', this.user)

                    localStorage.setItem('user', JSON.stringify(this.user))

                    this.changingUpdate(this.user)
                } else {
                    promise.err = data.error.description
                }
            } catch (err) {
                promise.err = err
            }

            return promise
        },

        parsePhone(str) {
            if (str.substring(0, 1) === '+') {
                return str.substring(1, str.length - 1);
            }
        }
    }
}