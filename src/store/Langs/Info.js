import { defineStore } from "pinia"

export const InfoJS = defineStore("Info", {
    getters: {
        keys() {
            return {
                en: {
                    premium: "Premium",
                    templates: "Templates",
                    locations: "Locations",
                    username: "Username",
                    title: "Your title",
                    sex: "Sex",
                    age: "Age",
                    height: "Height (cm)",
                    weight: "Weight (kg)",
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
                    prefer: "Prefer",
                    images: "Photos"
                },
                ru: {
                    premium: "Премиум",
                    templates: "Шаблоны",
                    locations: "Местоположения",
                    username: "Ник",
                    title: "Ваша надпись",
                    sex: "Пол",
                    age: "Возраст",
                    height: "Рост (см)",
                    weight: "Вес (кг)",
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
                    prefer: "Предпочитаю",
                    images: "Фотки"
                },
                de: {
                    premium: "Prämie",
                    templates: "Vorlagen",
                    locations: "Standorte",
                    username: "Nutzername",
                    title: "Dein Titel",
                    sex: "Sex",
                    age: "Das Alter",
                    height: "Höhe (cm)",
                    weight: "Gewicht (kg)",
                    country: "Land",
                    city: "Stadt",
                    body: "Körpertyp",
                    smokes: "Rauch",
                    drinks: "Getränk",
                    ethnicity: "Ethnizität",
                    income: "Jahreseinkommen $",
                    industry: "Industrie",
                    search: "Suchen",
                    children: "Kinder",
                    about: "Um",
                    prefer: "Vorziehen",
                    images: "Fotos"
                },
                fr: {
                    premium: "Prime",
                    templates: "Modèles",
                    locations: "Emplacements",
                    username: "Nom d'utilisateur",
                    title: "Votre titre",
                    sex: "Sexe",
                    age: "Âge",
                    height: "Hauteur (cm)",
                    weight: "Poids (kg)",
                    country: "Pays",
                    city: "Ville",
                    body: "Type de corps",
                    smokes: "Fumée",
                    drinks: "Boisson",
                    ethnicity: "Origine ethnique",
                    income: "Revenu annuel $",
                    industry: "Industrie",
                    search: "En cherchant",
                    children: "Enfants",
                    about: "À propos de",
                    prefer: "Préfère",
                    images: "Photos"
                },
                es: {
                    premium: "De primera calidad",
                    templates: "Plantillas",
                    locations: "Ubicaciones",
                    username: "Nombre de usuario",
                    title: "Tu título",
                    sex: "Sexo",
                    age: "Años",
                    height: "Altura (cm)",
                    weight: "Peso (kg)",
                    country: "País",
                    city: "Ciudad",
                    body: "Tipo de cuerpo",
                    smokes: "Fumar",
                    drinks: "Beber",
                    ethnicity: "Etnicidad",
                    income: "Ingreso anual $",
                    industry: "Industria",
                    search: "Buscando",
                    children: "Niños",
                    about: "Sobre",
                    prefer: "Preferir",
                    images: "Fotos"
                },
            }
        },
        values() {
            return {
                en: {
                    premium: {
                        0: "Doesn't have",
                        1: "Have"
                    },
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
                        3: "Construction",
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
                        10: "Investor"
                    },
                    prefer: {
                        1: "Women",
                        2: "Men",
                        3: "Both"
                    }
                },
                ru: {
                    premium: {
                        0: "Нет",
                        1: "Есть"
                    },
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
                        10: "Ивестора"
                    },
                    prefer: {
                        1: "Женщин",
                        2: "Мужчин",
                        3: "Всех"
                    }
                },
                de: {
                    premium: {
                        0: "Hat nicht",
                        1: "Haben"
                    },
                    sex: {
                        1: "Mann",
                        2: "Frau"
                    },
                    body: {
                        1: "Schlank",
                        2: "Sportlich",
                        3: "Durchschnitt",
                        4: "Kurvig",
                        5: "Ein paar Pfunde mehr",
                        6: "Übergewicht",
                        7: "Sonstiges"
                    },
                    smokes: {
                        1: "Nein",
                        2: "Manchmal",
                        3: "Ja"
                    },
                    drinks: {
                        1: "Nein",
                        2: "Manchmal",
                        3: "Ja"
                    },
                    ethnicity: {
                        1: "Asiatisch",
                        2: "Schwarz",
                        3: "Latein",
                        4: "indisch",
                        5: "Naher Osten",
                        6: "Amerikanischer Ureinwohner",
                        7: "Weiß",
                        8: "Gemischt",
                        9: "Sonstiges"
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
                        3: "Konstruktion",
                        4: "Banken",
                        5: "Kunst und Design",
                        6: "Ausbildung",
                        7: "Essen",
                        8: "Maschinenbau",
                        9: "Gesundheitspflege",
                        10: "Regierung",
                        11: "Medien",
                        12: "Selbstständiger",
                        13: "Sport",
                        14: "Verkauf",
                        15: "Gesetz",
                        16: "Geschäft",
                        17: "Sonstiges"
                    },
                    search: {
                        1: "Beziehungen",
                        2: "Die Ehe",
                        3: "Einmal Sex",
                        4: "Langfristiger Sex",
                        5: "Freund/Freundin",
                        6: "Reisen",
                        7: "Fetisch",
                        8: "Platonische Liebe",
                        9: "Keine Ahnung",
                        10: "Investor/Investorin"
                    },
                    prefer: {
                        1: "Frauen",
                        2: "Männer",
                        3: "Beide"
                    }
                },
                fr: {
                    premium: {
                        0: "N'a pas",
                        1: "Ont"
                    },
                    sex: {
                        1: "Homme",
                        2: "Femme"
                    },
                    body: {
                        1: "Mince",
                        2: "Athlétique",
                        3: "Moyen",
                        4: "Courbé",
                        5: "Quelques kilos en trop",
                        6: "En surpoids",
                        7: "Autre"
                    },
                    smokes: {
                        1: "Non",
                        2: "Quelquefois",
                        3: "Oui"
                    },
                    drinks: {
                        1: "Non",
                        2: "Quelquefois",
                        3: "Oui"
                    },
                    ethnicity: {
                        1: "Asiatique",
                        2: "Noir/Noire",
                        3: "Latin/Latine",
                        4: "Indien/Indienne",
                        5: "Moyen-Orient",
                        6: "Américain de naissance",
                        7: "Blanc/Blanche",
                        8: "Mixte",
                        9: "Autre"
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
                        2: "Commercialisation",
                        3: "Construction",
                        4: "Banques",
                        5: "Art et désign",
                        6: "Éducation",
                        7: "Aliments",
                        8: "Ingénierie",
                        9: "Soins de santé",
                        10: "Gouvernement",
                        11: "Médias",
                        12: "Travailleur indépendant",
                        13: "Sport",
                        14: "Ventes",
                        15: "Droit",
                        16: "Entreprise",
                        17: "Autre"
                    },
                    search: {
                        1: "Des relations",
                        2: "Mariage",
                        3: "Sexe unique",
                        4: "Sexe à long terme",
                        5: "Ami/Amie",
                        6: "Voyager",
                        7: "Fétiche",
                        8: "Amour platonique",
                        9: "Je ne sais pas",
                        10: "Investisseur/Investisseuse"
                    },
                    prefer: {
                        1: "Femmes",
                        2: "Hommes",
                        3: "Tous les deux"
                    }
                },
                es: {
                    premium: {
                        0: "No tiene",
                        1: "Tener"
                    },
                    sex: {
                        1: "Hombre",
                        2: "Mujer"
                    },
                    body: {
                        1: "Delgado",
                        2: "Atlético",
                        3: "Promedio",
                        4: "Con curvas",
                        5: "Unas libras extras",
                        6: "Exceso de peso",
                        7: "Otro"
                    },
                    smokes: {
                        1: "No",
                        2: "Algunas veces",
                        3: "Sí"
                    },
                    drinks: {
                        1: "No",
                        2: "Algunas veces",
                        3: "Sí"
                    },
                    ethnicity: {
                        1: "Asiático/Asiático",
                        2: "Negra/Negro",
                        3: "Latino/Latina",
                        4: "Indio/India",
                        5: "Medio este",
                        6: "Nativo americano",
                        7: "Blanco/Blanca",
                        8: "Mezclado/Mezclada",
                        9: "Otro/Otra"
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
                        3: "Construcción",
                        4: "Bancos",
                        5: "Arte y Diseño",
                        6: "Educación",
                        7: "Alimento",
                        8: "Ingeniería",
                        9: "Cuidado de la salud",
                        10: "Gobierno",
                        11: "Medios de comunicación",
                        12: "Trabajadores por cuenta propia",
                        13: "Deporte",
                        14: "Ventas",
                        15: "Ley",
                        16: "Negocio",
                        17: "Otra"
                    },
                    search: {
                        1: "Relaciones",
                        2: "Matrimonio",
                        3: "Sexo de una sola vez",
                        4: "Sexo a largo plazo",
                        5: "Amigo/Amiga",
                        6: "Viaje",
                        7: "Fetiche",
                        8: "Amor platonico",
                        9: "No sé",
                        10: "Inversor/Inversora"
                    },
                    prefer: {
                        1: "Mujeres",
                        2: "Hombres",
                        3: "Hombres"
                    }
                },
            }
        },

        about() {
            return {
                en: "This section han't filled yet",
                ru: "Это блок пока-что не заполнен",
                de: "Dieser Abschnitt ist noch nicht gefüllt",
                fr: "Cette section n'est pas encore remplie",
                es: "Esta sección aún no se ha llenado",
            }
        }
    }
})