import axios from "axios";
import {API_URL} from "@/data/CONSTANTS";

export default {
    methods: {
        async user_get() {
            let promise = {
                err: '',
                success: false
            }

            const request = {
                token: localStorage.getItem('token')
            }

            try {
                const response =  await axios.post(API_URL + 'user_get', JSON.stringify(request))

                const data = response.data

                if (data.response) {
                    promise.success = true

                    const user = data.response

                    localStorage.setItem('user', JSON.stringify(user))

                    this.$store.commit('setUser', user)
                } else {
                    promise.err = data.error.description
                }
            } catch (err) {
                promise.err = err
            }

            return promise
        }
    }
}