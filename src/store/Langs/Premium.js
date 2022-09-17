import { defineStore } from "pinia"

export const PremiumJS = defineStore("Premium", {
    getters: {
        quantity() {
            return {
                en: {
                    text: "By now registred",
                    users: "users"
                },
                ru: {
                    text: "К этому моменту зарегано",
                    users: "пользователей"
                }
            }
        },
        pay() {
            return {
                en: {
                    month: "1 month premium",
                    not: "Buy",
                    expand: "Extend",
                    expires: "Expires in"
                },
                ru: {
                    month: "Премиум на 1 месяц",
                    not: "Купить",
                    expand: "Продлить",
                    expires: "Истекает через"
                }
            }
        },
        luckriza() {
            return {
                en: {
                    text: "Just the best website for sugar daddy/baby relationship",
                    reasons: "by price, by speed, by service"
                },
                ru: {
                    text: "Просто лучший веб-сайт для отношений вида спонсор/содержанка",
                    reasons: "по цене, по скорости, по сервису"
                }
            }
        },
        freeChat() {
            return {
                en: {
                    title: "Free chat",
                    text: "With everyone, who gave you access to text them without premium :)"
                },
                ru: {
                    title: "Бесплатный чат",
                    text: "Со всеми, кто дал вам доступ на переписку без премиума :)"
                }
            }
        },
        worldWide() {
            return {
                en: {
                    title: "Worldwide search",
                    without: "You can search users without country selecting",
                    multiple: "You can specify multiple countries and cities for search"
                },
                ru: {
                    title: "Мировой поиск",
                    without: "Вы можете искать пользователей без выбора страны",
                    multiple: "Вы можете выбрать несколько стран/городов для поиска"
                }
            }
        },
        contact() {
            return {
                en: {
                    title: "Contact me",
                    name: "Name",
                    email: "Email",
                    subject: "Subject",
                    message: "Message",
                    send: "Send"
                },
                ru: {
                    title: "Написать мне",
                    name: "Имя",
                    email: "Почта",
                    subject: "Тема",
                    message: "Сообщение",
                    send: "Отправить"
                }
            }
        },

        response() {
            return {
                en: {
                    success: "Your message was successfully delivered to me. I'll answer as soon as i can :)",
                    error: "Sorry, somethin went wrong. Try again later"
                },
                ru: {
                    success: "Ваше сообщение было успешно доставленно мне. Я отвечу настолько быстро, на сколько смогу :)",
                    error: "Извините, что-то пошло не так. Попробуйте снова чуть позже"
                }
            }
        },

        age() {
            return {
                en: "Website only for people who is above 18 years old",
                ru: "Сайт для лиц старше 18-ти лет"
            }
        }
    }
})