import { defineStore } from "pinia"

export const SettingsJS = defineStore("Settings", {
    getters: {
        placeholder() {
            return {
                en: {
                    username: "Your username",
                    title: "To get attention",
                    about: "About yourself and who you seek"
                },
                ru: {
                    username: "Ваш ник",
                    title: "Завлеки чем нибудь",
                    about: "О себе и кто вам нужен"
                },
                de: {
                    username: "Dein Benutzername",
                    title: "Aufmerksamkeit zu bekommen",
                    about: "Über dich selbst und wen du suchst"
                },
                fr: {
                    username: "Votre nom d'utilisateur",
                    title: "Pour attirer l'attention",
                    about: "A propos de vous et de qui vous cherchez"
                },
                es: {
                    username: "Su nombre de usuario",
                    title: "Para llamar la atencion",
                    about: "Sobre ti y a quién buscas"
                },
                zh: {
                    username: "您的用户名",
                    title: "为了引起注意",
                    about: "关于你自己和你寻找的人"
                },
                ja: {
                    username: "あなたのユーザーネーム",
                    title: "注意を引くには",
                    about: "あなた自身とあなたが求める人について"
                },
            }
        },
        blank() {
            return {
                en: "Blank",
                ru: "Пусто",
                de: "Leer",
                fr: "Blanc",
                es: "Vacío",
                zh: "空白的",
                ja: "空欄",
            }
        },
        buttons() {
            return {
                en: {
                    save: "Save",
                    cancel: "Cancel"
                },
                ru: {
                    save: "Сохранить",
                    cancel: "Отменить"
                },
                de: {
                    save: "Speichern",
                    cancel: "Absagen"
                },
                fr: {
                    save: "Sauvegarder",
                    cancel: "Annuler"
                },
                es: {
                    save: "Ahorrar",
                    cancel: "Cancelar"
                },
                zh: {
                    save: "节省",
                    cancel: "取消"
                },
                ja: {
                    save: "保存",
                    cancel: "キャンセル"
                },
            }
        },
        username() {
            return {
                en: {
                    required: "U need some username",
                    space: "U can't use spaces for username",
                    available: "Available",
                    taken: "This username is already used"
                },
                ru: {
                    required: "Вам нужен ник",
                    space: "Вы не можете использовать пробел в нике",
                    available: "Доступен",
                    taken: "Этот ник уже занят"
                },
                de: {
                    required: "Du brauchst einen Benutzernamen",
                    space: "Sie können keine Leerzeichen für den Benutzernamen verwenden",
                    available: "Verfügbar",
                    taken: "Dieser Benutzername wird bereits verwendet"
                },
                fr: {
                    required: "Tu as besoin d'un nom d'utilisateur",
                    space: "Vous ne pouvez pas utiliser d'espaces pour le nom d'utilisateur",
                    available: "Disponible",
                    taken: "Ce nom d'utilisateur est déjà utilisé"
                },
                es: {
                    required: "Necesitas un nombre de usuario",
                    space: "No puedes usar espacios para el nombre de usuario",
                    available: "Disponible",
                    taken: "El nombre de usuario ya esta siendo usado"
                },
                zh: {
                    required: "你需要一些用户名:)",
                    space: "你不能为用户名使用空格",
                    available: "可用的",
                    taken: "此用户名已被使用"
                },
                ja: {
                    required: "ユーザー名が必要です:)",
                    space: "ユーザー名にスペースは使用できません",
                    available: "利用可能",
                    taken: "このユーザー名は既に使用されています"
                },
            }
        },
        response() {
            return {
                en: {
                    validation_failed: "Validation failed",
                    username_already_in_use: "Such username is already used",
                    update_was_not_performed: "Account hasn't changed. Try again"
                },
                ru: {
                    validation_failed: "Валидация провалена",
                    username_already_in_use: "Такой ник уже используется",
                    update_was_not_performed: "Данные не изменились. Попробуйте снова"
                },
                de: {
                    validation_failed: "Überprüfung fehlgeschlagen",
                    username_already_in_use: "Dieser Benutzername wird bereits verwendet",
                    update_was_not_performed: "Konto hat sich nicht geändert. Versuchen Sie es nochmal"
                },
                fr: {
                    validation_failed: "Validation échouée",
                    username_already_in_use: "Ce nom d'utilisateur est déjà utilisé",
                    update_was_not_performed: "Le compte n'a pas changé. Réessayer"
                },
                es: {
                    validation_failed: "Validación fallida",
                    username_already_in_use: "Dicho nombre de usuario ya se utiliza",
                    update_was_not_performed: "La cuenta no ha cambiado. Intentar otra vez"
                },
                zh: {
                    validation_failed: "验证失败",
                    username_already_in_use: "该用户名已被使用",
                    update_was_not_performed: "帐户没有更改。再试一次"
                },
                ja: {
                    validation_failed: "検証に失敗しました",
                    username_already_in_use: "このユーザー名はすでに使用されています",
                    update_was_not_performed: "アカウントは変更されていません。再試行"
                },
            }
        },
        success() {
            return {
                en: "Your info was changed",
                ru: "Ваша инфа была изменена",
                de: "Ihre Daten wurden geändert",
                fr: "Vos informations ont été modifiées",
                es: "Tu información fue cambiada",
                zh: "您的信息已更改",
                ja: "あなたの情報が変更されました",
            }
        }
    }
})