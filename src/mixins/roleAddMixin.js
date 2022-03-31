import {API_URL} from "@/data/CONSTANTS";
import axios from "axios";

export default {
    methods: {
        async role_add(thisUser) {
            let promise = {
                err: 0,
                success: false
            }

            const request = {
                token: localStorage.getItem('token'),
                role_name: thisUser.statusMSU ? thisUser.statusMSU : "OTHER",
                course: thisUser.course,
                faculty: thisUser.faculty,
                division_code: 0,
                work: thisUser.work,
                cathedra: thisUser.cathedra,
                post: thisUser.post
            }

            try {
                const response = await axios.post(API_URL + 'role_add', JSON.stringify(request))

                const data = response.data

                if (data.response) {
                    promise.success = true

                    this.$store.commit('setStatus', status)

                    const user = JSON.parse(localStorage.getItem('user'))

                    user.statusMSU = thisUser.statusMSU

                    user.faculty = thisUser.faculty

                    localStorage.setItem('user', JSON.stringify(user))
                } else {
                    promise.err = data.error.code
                }
            } catch (err) {
                promise.err = err
            }

            return promise
        },
    }
}