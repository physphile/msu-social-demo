import {API_URL} from "@/data/CONSTANTS";
import axios from "axios";

export default {
    methods: {
        async roles_get() {
            let promise = {
                err: '',
                success: false,
                roles: []
            }

            const request = {
                token: localStorage.getItem('token')
            }

            try {
                const response = await axios.post(API_URL + 'roles_get', JSON.stringify(request))

                const data = response.data

                if (data.response) {
                    promise.success = true

                    const roles = data.response.roles

                    promise.roles = roles

                    const user = JSON.parse(localStorage.getItem('user'))

                    const role = roles[roles.length - 1].role_name

                    user.statusMSU = role

                    localStorage.setItem('user', JSON.stringify(user))

                    this.$store.commit('setStatus', role)

                    this.$store.commit('setRoles', roles)
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
