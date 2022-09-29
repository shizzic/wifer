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
                },
                de: {
                    text: "Mittlerweile angemeldet",
                    users: "Benutzer"
                },
            }
        },
        pay() {
            return {
                en: {
                    month: "30 days premium",
                    trial: "Trial for 7 days",
                    try: "Try",
                    expires: "Expires in"
                },
                ru: {
                    month: "Премиум на 30 дней",
                    trial: "Пробник на 7 дней",
                    try: "Попробовать",
                    expires: "Истекает через"
                },
                de: {
                    month: "30 Tage Prämie",
                    trial: "7 Tage testen",
                    try: "Versuchen",
                    expires: "Läuft ab in"
                },
            }
        },
        luckriza() {
            return {
                en: {
                    text: "Just the best website for sugar daddy/baby relationship",
                    reasons: " by price, by speed, by service"
                },
                ru: {
                    text: "Просто лучший веб-сайт для отношений вида спонсор/содержанка",
                    reasons: " по цене, по скорости, по сервису"
                },
                de: {
                    text: "Einfach die beste Website für die Sugar-Daddy/Baby-Beziehung",
                    reasons: " nach Preis, nach Geschwindigkeit, nach Service"
                },
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
                },
                de: {
                    title: "Kostenloser Chat",
                    text: "Mit allen, die dir Zugriff gegeben haben, um ihnen ohne Premium zu schreiben :)"
                },
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
                },
                de: {
                    title: "Weltweite Suche",
                    without: "Sie können Benutzer ohne Länderauswahl suchen",
                    multiple: "Sie können mehrere Länder und Städte für die Suche angeben"
                },
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
                },
                de: {
                    title: "Kontaktiere mich",
                    name: "Name",
                    email: "Email",
                    subject: "Thema",
                    message: "Nachricht",
                    send: "Senden"
                },
            }
        },

        response() {
            return {
                en: {
                    success: "Your message was successfully delivered to me. I'll answer as soon as i can :)",
                    error: "Sorry, somethin went wrong. Try again later",
                    trial: "You already used your one time trial. You can't do it again",
                    trialSuccess: "You successfully got your trial period. Enjoy :)",
                    payError: "It looks like this payment already was used or doesn't exist at all. Check refund policy.",
                    payed: "Thank you for buying my premium. Enjoy :)"
                },
                ru: {
                    success: "Ваше сообщение было успешно доставленно мне. Я отвечу настолько быстро, на сколько смогу :)",
                    error: "Извините, что-то пошло не так. Попробуйте снова чуть позже",
                    trial: "Вы уже использовали ваш одноразовый пробник. Вы не можете использовать это снова",
                    trialSuccess: "Вы успешно получили свой пробник. Наслаждайтесь :)",
                    payError: "Похоже что эта оплата уже производилась или не существует. Смотрите политику возврата средств.",
                    payed: "Спасибо за покупку моего премиума. Наслаждайся :)"
                },
                de: {
                    success: "Ihre Nachricht wurde mir erfolgreich zugestellt. Ich antworte sobald ich kann :)",
                    error: "Entschuldigung, etwas ist schief gelaufen. Versuchen Sie es später noch einmal",
                    trial: "Sie haben Ihre einmalige Testversion bereits verwendet. Du kannst es nicht noch einmal tun",
                    trialSuccess: "Sie haben Ihre Probezeit erfolgreich erhalten. Genießen :)",
                    payError: "Anscheinend wurde diese Zahlung bereits verwendet oder existiert überhaupt nicht. Überprüfen Sie die Rückerstattungsrichtlinie.",
                    payed: "Vielen Dank für den Kauf meiner Prämie. Genießen :)"
                },
            }
        },

        age() {
            return {
                en: "Website only for people who is above 18 years old",
                ru: "Сайт для лиц старше 18-ти лет",
                de: "Website nur für Personen über 18 Jahre",
            }
        }
    }
})