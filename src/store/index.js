import {createStore} from "vuex";

export default createStore({
    state: {
        isAuth: false,
        user: {
            last_name: "",
            first_name: "",
            middle_name: "",
            gender: "",
            birthdate: "",
            contact_phone: "+7 ",
            email: "",
            faculty: "",
            course: "",
            uin: "",
            statusMSU: "",
            work: "",
            cathedra: "",
            post: "",
            roles: []
        },
        order: {
            hotel: null,
            arrivalDate: '',
            departureDate: '',
            guests: null,
            rooms: []
        },
        messages: [],
        msgs_count: 0,
        hotels: [
            {
                title: "Пансионат",
                name: "Солнечный",
                caption: "Республика Абхазия, село Амжвахус",
                location: 'Абхазия',
                imgURL: require("../assets/solnechnyi.jpg"),
                rooms: '',
                beds: ''
            },
            {
                title: "Пансионат",
                name: "Университетский",
                caption: "Московская область, д. Волково",
                location: 'Московская область',
                imgURL: require("../assets/universitetskiy.jpg"),
                rooms: '',
                beds: ''
            },
            {
                title: "Пансионат",
                name: "Буревестник",
                caption: "Краснодарский край, Сочи",
                location: 'Сочи',
                imgURL: require("../assets/burevestnik.jpg"),
                rooms: '',
                beds: ''
            },
            {
                title: "Дом отдыха",
                name: "Красновидово",
                caption: "Московская область",
                location: 'Московская область',
                imgURL: require("../assets/krasnovidovo.png"),
                rooms: '',
                beds: ''
            },
        ],
    },
    getters: {
        user(state) {
            let user = state.user
            return {
                last_name: user.last_name ? user.last_name : '',
                first_name: user.first_name ? user.first_name : '',
                middle_name: user.middle_name ? user.middle_name : '',
                gender: user.gender ? user.gender : '',
                birthdate: user.birthdate ? user.birthdate : '',
                contact_phone: user.contact_phone ? user.contact_phone : '',
                email: user.email ? user.email : '',
                faculty: user.faculty ? user.faculty : '',
                course: user.course ? user.course : '',
                uin: user.uin ? user.uin : '',
                statusMSU: user.statusMSU ? user.statusMSU : '',
                work: user.work ? user.work : '',
                cathedra: user.cathedra ? user.cathedra : '',
                post: user.post ? user.post : '',
            }
        }
    },
    mutations: {
        setAuth(state, newAuth) {
            state.isAuth = newAuth
        },
        setUser(state, user) {
            state.user.last_name = user.last_name
            state.user.first_name = user.first_name
            state.user.middle_name = user.middle_name
            state.user.gender = user.gender
            state.user.birthdate = user.birthdate
            state.user.contact_phone = user.contact_phone
            state.user.email = user.email
            state.user.faculty = user.faculty
            state.user.course = user.course
            state.user.uin = user.uin
            state.user.statusMSU = user.statusMSU
            state.user.work = user.work
            state.user.cathedra = user.cathedra
            state.user.post = user.post
        },
        deleteUser(state) {
            state.user.last_name = ""
            state.user.first_name = ""
            state.user.middle_name = ""
            state.user.gender = ""
            state.user.birthdate = ""
            state.user.contact_phone = "+7 "
            state.user.email = ""
            state.user.faculty = ""
            state.user.course = ""
            state.user.uin = ""
            state.user.statusMSU = ""
            state.user.work = ""
            state.user.cathedra = ""
            state.user.post = ""
        },
        setStatus(state, status) {
            state.user.statusMSU = status
        },
        setRoles(state, roles) {
            state.user.roles = roles
        },
        setOrder(state, order) {
            typeof order.hotel !== 'undefined' ? state.order.hotel = order.hotel : {}
            typeof order.arrivalDate !== 'undefined' ? state.order.arrivalDate = order.arrivalDate : {}
            typeof order.departureDate !== 'undefined' ? state.order.departureDate = order.departureDate : {}
            typeof order.guests !== 'undefined' ? state.order.guests = order.guests : {}
            typeof order.rooms !== 'undefined' ? state.order.rooms = order.rooms : {}
        },
        setRoomCount(state, roomCount) {
            state.temp.rooms.push(roomCount)
        },
        setHotel(state, hotel) {
            state.order.hotel = hotel;
        },
        addMessage(state, message) {
            message.id = state.msgs_count
            state.messages.push(message)
            this.commit('increment_msgs_count')
        },
        increment_msgs_count(state) {
            ++state.msgs_count
        },
        deleteMessage(state, id) {``
            state.messages = state.messages.filter(m => m.id !== id)
        }

    },
    actions: {},
    modules: {}
})