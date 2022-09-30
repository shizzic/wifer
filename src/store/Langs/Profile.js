import { defineStore } from "pinia"

export const ProfileJS = defineStore("Profile", {
    getters: {
        fields() {
            return {
                en: {
                    "title": "Enter",
                    "text": "Hello there! If you want the best sugar on web, than welcome aboard :)"
                },
                ru: {
                    "title": "Вход",
                    "text": "Кулити, если ты хочешь лучший опыт знакомств в инете, тогда присаживайся к столу :)"
                },
                de: {
                    "title": "Eintreten",
                    "text": "Hallo! Wenn Sie den besten Zucker im Internet wollen, dann willkommen an Bord :)"
                },
                fr: {
                    "title": "Entrer",
                    "text": "Bonjour! Si vous voulez le meilleur sucre sur le web, alors bienvenue à bord :)"
                },
                es: {
                    "title": "Ingresar",
                    "text": "¡Hola! Si quieres el mejor azúcar en la web, bienvenido a bordo :)"
                },
                zh: {
                    "title": "进入",
                    "text": "你好呀！如果您想要网络上最好的糖，欢迎加入 :)"
                },
            }
        },
        errors() {
            return {
                en: {
                    "int": "Id must contain only integers",
                    "server": "Something occured to a server. Try again"
                },
                ru: {
                    "int": "Индификатор должен состоять только из цифр",
                    "server": "Что-то случилось с сервером. Попробуйте снова"
                },
                de: {
                    "int": "ID darf nur Ganzzahlen enthalten",
                    "server": "Auf einem Server ist etwas passiert. Versuchen Sie es nochmal"
                },
                fr: {
                    "int": "L'identifiant ne doit contenir que des entiers",
                    "server": "Quelque chose est arrivé à un serveur. Réessayer"
                },
                es: {
                    "int": "El ID debe contener solo números enteros",
                    "server": "Algo le ocurrió a un servidor. Intentar otra vez"
                },
                zh: {
                    "int": "Id 必须只包含整数",
                    "server": "服务器发生了一些事情。再试一次"
                },
            }
        },
        response() {
            return {
                en: "User doesn't exist or has been banned",
                ru: "Пользователь не существует или был забанен",
                de: "Benutzer existiert nicht oder wurde gesperrt",
                fr: "L'utilisateur n'existe pas ou a été banni",
                es: "El usuario no existe o ha sido prohibido",
                zh: "用户不存在或已被禁止",
            }
        },
        success() {
            return {
                en: "You signed in. Enjoy yourself :)",
                ru: "Вы вошли. Развлекайтесь :)",
                de: "Du hast dich angemeldet. Viel Spaß :)",
                fr: "Vous vous êtes connecté. Amusez-vous bien :)",
                es: "Has iniciado sesión. Diviértete :)",
                zh: "您已登录。尽情享受吧 :)",
            }
        },
        cropper() {
            return {
                en: {
                    "upload": "Upload",
                    "public": "Public",
                    "private": "Private",
                    "cancel": "Cancel",
                    "max_size": "Max size of image is 3 MB",
                    "max_image": "You can have up to 20 images",
                    "error": "Something occured to the server, try again",
                    "success": "Image was added)"
                },
                ru: {
                    "upload": "Загрузить",
                    "public": "Публичная",
                    "private": "Приватная",
                    "cancel": "Отменить",
                    "max_image": "Вы можете иметь до 20 фоток",
                    "max_size": "Максимальный размер фотки 3 мб",
                    "error": "Что-то случилось с сервером, попробуйте снова",
                    "success": "Фотка добавлена)"
                },
                de: {
                    "upload": "Hochladen",
                    "public": "Öffentlichkeit",
                    "private": "Privatgelände",
                    "cancel": "Absagen",
                    "max_size": "Die maximale Bildgröße beträgt 3 MB",
                    "max_image": "Sie können bis zu 20 Bilder haben",
                    "error": "Auf dem Server ist ein Fehler aufgetreten. Versuchen Sie es erneut",
                    "success": "Bild wurde hinzugefügt)"
                },
                fr: {
                    "upload": "Télécharger",
                    "public": "Public",
                    "private": "Privé",
                    "cancel": "Annuler",
                    "max_size": "La taille maximale de l'image est de 3 Mo",
                    "max_image": "Vous pouvez avoir jusqu'à 20 images",
                    "error": "Quelque chose s'est produit sur le serveur, réessayez",
                    "success": "L'image a été ajoutée)"
                },
                es: {
                    "upload": "Subir",
                    "public": "Público",
                    "private": "Privada",
                    "cancel": "Cancelar",
                    "max_size": "El tamaño máximo de la imagen es de 3 MB",
                    "max_image": "Puedes tener hasta 20 imágenes.",
                    "error": "Algo le ocurrió al servidor, inténtalo de nuevo",
                    "success": "Se agregó la imagen)"
                },
                zh: {
                    "upload": "上传",
                    "public": "上市",
                    "private": "私人的",
                    "cancel": "取消",
                    "max_size": "图像的最大大小为 3 MB",
                    "max_image": "您最多可以拥有 20 张图片",
                    "error": "服务器出现问题，重试",
                    "success": "图片已添加 )"
                },
            }
        }
    }
})