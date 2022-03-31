import {API_URL} from "@/data/CONSTANTS";
import axios from "axios";

export default {
    methods: {
        async role_edit(thisUser) {
            let promise = {
                err: 0,
                success: false
            }

            const request = {
                token: localStorage.getItem('token'),
                role_name: String,
                role_id: Number,
                course: String,
                faculty: String,
                division_code: 0,
                work: String,
                cathedra: String,
                post: String
            }

            if (thisUser.statusMSU) {
                const roles = this.$store.state.user.roles ? this.$store.state.user.roles : []

                request.role_id = roles[roles.length - 1].role_id

                request.role_name = thisUser.statusMSU
            }
            // thisUser.course ? request.course = thisUser.course : {}
            // thisUser.faculty ? request.faculty = thisUser.faculty : {}
            // thisUser.work ? request.work = thisUser.work : {}
            // thisUser.cathedra ? request.cathedra = thisUser.cathedra : {}
            // thisUser.post ? request.post = thisUser.post : {}


            try {
                const response = await axios.post(API_URL + 'role_edit', JSON.stringify(request))

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