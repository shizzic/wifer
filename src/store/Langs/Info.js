import { defineStore } from "pinia"

export const InfoJS = defineStore("Info", {
    getters: {
        keys() {
            return {
                en: {
                    templates: "Templates",
                    locations: "Locations",
                    username: "Username",
                    title: "Your title",
                    sex: "Sex",
                    age: "Age",
                    height: "Height",
                    weight: "Weight",
                    country: "Country",
                    city: "City",
                    body: "Body's type",
                    smokes: "Smoke",
                    drinks: "Drink",
                    ethnicity: "Ethnicity",
                    income: "Annual income $",
                    industry: "Industry",
                    search: "Seeking",
                    children: "Children",
                    about: "About",
                    prefer: "Prefer"
                },
                ru: {
                    templates: "Шаблоны",
                    locations: "Местоположения",
                    username: "Ник",
                    title: "Ваша надпись",
                    sex: "Пол",
                    age: "Возраст",
                    height: "Рост",
                    weight: "Вес",
                    country: "Страна",
                    city: "Город",
                    body: "Тип тела",
                    smokes: "Курение",
                    drinks: "Алкоголь",
                    ethnicity: "Этнос",
                    income: "Годовой доход $",
                    industry: "Сфера деятельности",
                    search: "Ищет",
                    children: "Дети",
                    about: "Об",
                    prefer: "Предпочитаю"
                }
            }
        },
        values() {
            return {
                en: {
                    sex: {
                        1: "Man",
                        2: "Woman"
                    },
                    body: {
                        1: "Slim",
                        2: "Athletic",
                        3: "Average",
                        4: "Curvy",
                        5: "A fewextra pounds",
                        6: "Overweight",
                        7: "Other"
                    },
                    smokes: {
                        1: "No",
                        2: "Sometimes",
                        3: "Yes"
                    },
                    drinks: {
                        1: "No",
                        2: "Sometimes",
                        3: "Yes"
                    },
                    ethnicity: {
                        1: "Asian",
                        2: "Black",
                        3: "Latin",
                        4: "Indian",
                        5: "Middle eastern",
                        6: "Native American",
                        7: "White",
                        8: "Mixed",
                        9: "Other"
                    },
                    income: {
                        1: "10 000 - 25 000",
                        2: "25 000 - 50 000",
                        3: "50 000 - 75 000",
                        4: "75 000 - 100 000",
                        5: "100 000 - 150 000",
                        6: "150 000 - 200 000",
                        7: "200 000 - 250 000",
                        8: "250 000 - 300 000",
                        9: "300 000 - 350 000",
                        10: "350 000 - 400 000",
                        11: "400 000 - 500 000",
                        12: "More than 500 000"
                    },
                    industry: {
                        1: "IT",
                        2: "Marketing",
                        3: "Constuction",
                        4: "Banks",
                        5: "Art and design",
                        6: "Education",
                        7: "Food",
                        8: "Engineering",
                        9: "Healthcare",
                        10: "Government",
                        11: "Media",
                        12: "Self-employed",
                        13: "Sport",
                        14: "Sales",
                        15: "Law",
                        16: "Business",
                        17: "Other"
                    },
                    search: {
                        1: "Relationships",
                        2: "Marriage",
                        3: "One time sex",
                        4: "Long term sex",
                        5: "Friend",
                        6: "Travel",
                        7: "Fetish",
                        8: "Platonic love",
                        9: "Dunno",
                        10: "Other"
                    },
                    prefer: {
                        1: "Women",
                        2: "Men",
                        3: "Both"
                    }
                },
                ru: {
                    sex: {
                        1: "Мужчина",
                        2: "Женщина"
                    },
                    body: {
                        1: "Худая/ой",
                        2: "Атлетичная/ый",
                        3: "Средняя/ий",
                        4: "Пышная/ый",
                        5: "Немного лишнего веса",
                        6: "Лишний вес",
                        7: "Другое"
                    },
                    smokes: {
                        1: "Нет",
                        2: "Иногда",
                        3: "Да"
                    },
                    drinks: {
                        1: "Нет",
                        2: "Иногда",
                        3: "Да"
                    },
                    ethnicity: {
                        1: "Азиатский",
                        2: "Черный",
                        3: "Латинский",
                        4: "Индусский",
                        5: "Арабский",
                        6: "Коренной американец",
                        7: "Белый",
                        8: "Смешанный",
                        9: "Другой"
                    },
                    income: {
                        1: "10 000 - 25 000",
                        2: "25 000 - 50 000",
                        3: "50 000 - 75 000",
                        4: "75 000 - 100 000",
                        5: "100 000 - 150 000",
                        6: "150 000 - 200 000",
                        7: "200 000 - 250 000",
                        8: "250 000 - 300 000",
                        9: "300 000 - 350 000",
                        10: "350 000 - 400 000",
                        11: "400 000 - 500 000",
                        12: "More than 500 000"
                    },
                    industry: {
                        1: "IT",
                        2: "Маркетинг",
                        3: "Строительство",
                        4: "Банки",
                        5: "Искусство и дизайн",
                        6: "Образование",
                        7: "Еда",
                        8: "Инжинирия",
                        9: "Здоровье",
                        10: "Правительство",
                        11: "Медиа",
                        12: "Самозанятый",
                        13: "Спорт",
                        14: "Продажи",
                        15: "Законодательство",
                        16: "Бизнес",
                        17: "Другое"
                    },
                    search: {
                        1: "Отношения",
                        2: "Брак",
                        3: "Секс на разок",
                        4: "Содержание",
                        5: "Друга",
                        6: "Путешествие",
                        7: "Фетиш",
                        8: "Платоническая любовь",
                        9: "Не знаю",
                        10: "Другое"
                    },
                    prefer: {
                        1: "Женщин",
                        2: "Мужчин",
                        3: "Всех"
                    }
                }
            }
        },

        about() {
            return {
                en: "This section han't filled yet",
                ru: "Это блок пока-что не заполнен"
            }
        }
    }
})