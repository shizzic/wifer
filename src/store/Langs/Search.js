import { defineStore } from "pinia"

export const SearchJS = defineStore("Search", {
    getters: {
        text() {
            return {
                en: {
                    title: "Profile text",
                    hold: "Text you wanna see from users",
                    full: "Search whole phrase",
                    is: "User filled \"About me\""
                },
                ru: {
                    title: "Текст профиля",
                    hold: "Текст, который вы бы хотели увидеть",
                    full: "Искать по фразе целиком",
                    is: "Юзер заполнил \"Обо мне\""
                },
                de: {
                    title: "Profiltext",
                    hold: "Text, den Sie von Benutzern sehen möchten",
                    full: "Ganzen Satz suchen",
                    is: "Benutzer hat \"Über mich\" ausgefüllt"
                },
                fr: {
                    title: "Texte du profil",
                    hold: "Texte que vous voulez voir des utilisateurs",
                    full: "Rechercher une phrase entière",
                    is: "L'utilisateur a rempli \"À propos de moi\""
                },
                es: {
                    title: "Texto de perfil",
                    hold: "Texto que quieres ver de los usuarios",
                    full: "Buscar frase completa",
                    is: "El usuario completó \"Acerca de mí\""
                },
                zh: {
                    title: "个人资料文本",
                    hold: "您想从用户那里看到的文字",
                    full: "搜索整个短语",
                    is: "用户填写了“关于我”"
                },
                ja: {
                    title: "プロフィールテキスト",
                    hold: "ユーザーから見たいテキスト",
                    full: "フレーズ全体を検索",
                    is: "ユーザーが入力した「私について」"
                },
            }
        },
        images() {
            return {
                en: "User has avatar",
                ru: "Юзер добавил аватарку",
                de: "Benutzer hat Avatar",
                fr: "L'utilisateur a un avatar",
                es: "El usuario tiene avatar",
                zh: "用户有头像",
                ja: "ユーザーはアバターを持っています",
            }
        },
        search() {
            return {
                en: "Search",
                ru: "Поиск",
                de: "Suche",
                fr: "Chercher",
                es: "Búsqueda",
                zh: "搜索",
                ja: "探す",
            }
        },
        clear() {
            return {
                en: "Clear",
                ru: "Отчистить",
                de: "Klar",
                fr: "Dégager",
                es: "Claro",
                zh: "清除",
                ja: "クリア",
            }
        },
        photos() {
            return {
                en: "Photo",
                ru: "Фото",
                de: "Foto",
                fr: "Photo",
                es: "Foto",
                zh: "照片",
                ja: "写真",
            }
        },
        founded() {
            return {
                en: "Founded",
                ru: "Найдено",
                de: "Gegründet",
                fr: "Fondé",
                es: "Fundado",
                zh: "成立",
                ja: "設立",
            }
        },
        sort() {
            return {
                en: {
                    last_time: "Activity",
                    created_at: "Newest"
                },
                ru: {
                    last_time: "Активность",
                    created_at: "Новые"
                },
                de: {
                    last_time: "Aktivität",
                    created_at: "Neueste"
                },
                fr: {
                    last_time: "Activité",
                    created_at: "Le plus récent"
                },
                es: {
                    last_time: "Actividad",
                    created_at: "El mas nuevo"
                },
                zh: {
                    last_time: "活动",
                    created_at: "最新"
                },
                ja: {
                    last_time: "アクティビティ",
                    created_at: "最新"
                },
            }
        },
        template() {
            return {
                en: {
                    input: "Title",
                    hold: "New template",
                    select: "Select template",
                    count: "U can't have more than 10 templates",
                    blank: "Template's title can't be blank"
                },
                ru: {
                    input: "Название",
                    hold: "Новый шаблон",
                    select: "Выбрать шаблон",
                    count: "Вы не можете иметь больше 10 шаблонов",
                    blank: "Название шаблона не может быть пустым"
                },
                de: {
                    input: "Titel",
                    hold: "Neue Vorlage",
                    select: "Vorlage auswählen",
                    count: "Sie können nicht mehr als 10 Vorlagen haben",
                    blank: "Der Titel der Vorlage darf nicht leer sein"
                },
                fr: {
                    input: "Titre",
                    hold: "Nouveau modèle",
                    select: "Sélectionnez le modèle",
                    count: "Vous ne pouvez pas avoir plus de 10 modèles",
                    blank: "Le titre du modèle ne peut pas être vide"
                },
                es: {
                    input: "Título",
                    hold: "Nueva plantilla",
                    select: "Seleccionar plantilla",
                    count: "No puedes tener más de 10 plantillas.",
                    blank: "El título de la plantilla no puede estar en blanco"
                },
                zh: {
                    input: "标题",
                    hold: "新模板",
                    select: "选择模板",
                    count: "你不能有超过 10 个模板",
                    blank: "模板标题不能为空"
                },
                ja: {
                    input: "題名",
                    hold: "新しいテンプレート",
                    select: "テンプレートを選択",
                    count: "テンプレートは 10 個までです",
                    blank: "テンプレートのタイトルを空白にすることはできません"
                },
            }
        }
    }
})