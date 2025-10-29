import { defineStore } from "pinia"

export const ProfileJS = defineStore("Profile", {
    getters: {
        fields() {
            return {
                en: {
                    "title": "Enter",
                    "text": "Hi! If you want to find something nice, then come in"
                },
                ru: {
                    "title": "Вход",
                    "text": "Привет! Если ты хочешь найти кого-то, тогда заходи"
                },
                de: {
                    "title": "Eintreten",
                    "text": "Hallo! Wenn du etwas Schönes finden möchtest, dann komm rein"
                },
                fr: {
                    "title": "Entrer",
                    "text": "Salut ! Si tu veux trouver quelque chose de sympa, alors viens"
                },
                es: {
                    "title": "Ingresar",
                    "text": "Hola! Si quieres encontrar algo lindo, entra"
                },
                zh: {
                    "title": "进入",
                    "text": "嗨！如果你想找到好东西，那就进来吧"
                },
                ja: {
                    "title": "入る",
                    "text": "こんにちは！何かいいものを見つけたいなら、ぜひお越しください"
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
                ja: {
                    "int": "ID には整数のみを含める必要があります",
                    "server": "サーバーに何かが発生しました。再試行"
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
                ja: "ユーザーが存在しないか,禁止されています",
            }
        },
        success() {
            return {
                en: "You signed in",
                ru: "Вы вошли",
                de: "Du hast dich angemeldet",
                fr: "Vous vous êtes connecté",
                es: "Has iniciado sesión",
                zh: "您已登录",
                ja: "サインインしました",
            }
        },
        cropper() {
            return {
                en: {
                    "upload": "Upload",
                    "public": "Public",
                    "private": "Private",
                    "cancel": "Cancel",
                    "max_size": "Max size of image is 20 MB. Excess: ",
                    "max_image": "You can have up to 20 images",
                    "error": "Something occured to the server, try again",
                    "success": "Image was added",
                    avatar_must_be: "Nothing to replace the avatar with",
                },
                ru: {
                    "upload": "Загрузить",
                    "public": "Публичная",
                    "private": "Приватная",
                    "cancel": "Отменить",
                    "max_image": "Вы можете иметь до 20 фоток. Избыток: ",
                    "max_size": "Максимальный размер фотки 20 мб",
                    "error": "Что-то случилось с сервером, попробуйте снова",
                    "success": "Фотка добавлена",
                    avatar_must_be: "Нечем заменить аватарку",
                },
                de: {
                    "upload": "Hochladen",
                    "public": "Öffentlichkeit",
                    "private": "Privatgelände",
                    "cancel": "Absagen",
                    "max_image": "Sie können bis zu 20 Bilder haben. Überschuss: ",
                    "max_size": "Die maximale Bildgröße beträgt 20 MB",
                    "error": "Auf dem Server ist ein Fehler aufgetreten. Versuchen Sie es erneut",
                    "success": "Bild wurde hinzugefügt",
                    avatar_must_be: "Nichts, womit man den Avatar ersetzen könnte",
                },
                fr: {
                    "upload": "Télécharger",
                    "public": "Public",
                    "private": "Privé",
                    "cancel": "Annuler",
                    "max_size": "La taille maximale de l'image est de 20 Mo. Excès: ",
                    "max_image": "Vous pouvez avoir jusqu'à 20 images",
                    "error": "Quelque chose s'est produit sur le serveur, réessayez",
                    "success": "L'image a été ajoutée",
                    avatar_must_be: "Rien pour remplacer l'avatar",
                },
                es: {
                    "upload": "Subir",
                    "public": "Público",
                    "private": "Privada",
                    "cancel": "Cancelar",
                    "max_size": "El tamaño máximo de la imagen es de 20 MB",
                    "max_image": "Puedes tener hasta 20 imágenes. Exceso: ",
                    "error": "Algo le ocurrió al servidor, inténtalo de nuevo",
                    "success": "Se agregó la imagen",
                    avatar_must_be: "Nada con lo que reemplazar el avatar.",
                },
                zh: {
                    "upload": "上传",
                    "public": "上市",
                    "private": "私人的",
                    "cancel": "取消",
                    "max_image": "您最多可以拥有 20 张图片. 過量的: ",
                    "max_size": "图像的最大大小为 20 MB",
                    "error": "服务器出现问题，重试",
                    "success": "图片已添加",
                    avatar_must_be: "没有什么可以代替头像的",
                },
                ja: {
                    "upload": "アップロード",
                    "public": "公衆",
                    "private": "プライベート",
                    "cancel": "キャンセル",
                    "max_image": "最大 20 枚の画像を保持できます. 過剰: ",
                    "max_size": "画像の最大サイズは 20 MB です",
                    "error": "サーバーで問題が発生しました。もう一度お試しください",
                    "success": "画像追加しました",
                    avatar_must_be: "アバターに代わるものはありません",
                },
            }
        },

        popover() {
            return {
                en: {
                    premium: 'Premium status',
                    deactivate: 'Put account to sleep',
                    settings: 'Settings',
                    logout: 'Logout',
                    chat: 'Write a message',
                    like: 'Like a profile',
                    access: 'Allow the profile to send you messages',
                    private: 'Allow the profile to view your hidden photos',
                    note: 'Your profile note',
                    add: 'Add new photo'
                },
                ru: {
                    premium: 'Статус премиума',
                    deactivate: 'Усыпить аккаунт',
                    settings: 'Настройки',
                    logout: 'Выход',
                    chat: 'Написать сообщение',
                    like: 'Лайкнуть профиль',
                    access: 'Разрешить профилю отправлять вам сообщения',
                    private: 'Разрешить профилю смотреть ваши скрытые фото',
                    note: 'Ваша заметка о профиле',
                    add: 'Добавить новое фото'
                },
                de: {
                    premium: "Premium status",
                    deactivate: "Konto in den Ruhezustand versetzen",
                    settings: "Einstellungen",
                    logout: "Abmelden",
                    chat: "Nachricht schreiben",
                    like: "Profil liken",
                    access: "Profil erlauben, dir Nachrichten zu senden",
                    private: "Profil erlauben, deine versteckten Fotos anzuzeigen",
                    note: 'Deine Profilnotiz',
                    add: 'Neues Foto hinzufügen'
                },
                fr: {
                    premium: 'Statut Premium',
                    deactivate: 'Mettre le compte en veille',
                    settings: 'Paramètres',
                    logout: 'Se déconnecter',
                    chat: 'Écrire un message',
                    like: 'Aimer un profil',
                    access: 'Autoriser le profil à vous envoyer des messages',
                    private: 'Autoriser le profil à voir vos photos cachées',
                    note: 'Votre note de profil',
                    add: 'Ajouter une nouvelle photo'
                },
                es: {
                    premium: 'Estado Premium',
                    desactivate: 'Poner la cuenta en modo de suspensión',
                    settings: 'Configuración',
                    logout: 'Cerrar sesión',
                    chat: 'Escribir un mensaje',
                    like: 'Dar me gusta a un perfil',
                    access: 'Permitir que el perfil te envíe mensajes',
                    private: 'Permitir que el perfil vea tus fotos ocultas',
                    note: 'Tu nota de perfil',
                    add: 'Añadir nueva foto'
                },
                zh: {
                    premium: '高级状态',
                    deactivate: '将帐户置于休眠状态',
                    settings: '设置',
                    logout: '注销',
                    chat: '写消息',
                    like: '喜欢个人资料',
                    access: '允许个人资料向您发送消息',
                    private: '允许个人资料查看您的隐藏照片',
                    note: '您的个人资料注释',
                    add: '添加新照片'
                },
                ja: {
                    premium: 'プレミアムステータス',
                    deactivate: 'アカウントをスリープ状態にする',
                    settings: '設定',
                    logout: 'ログアウト',
                    chat: 'メッセージを書く',
                    like: 'プロフィールにいいねする',
                    access: 'プロフィールがあなたにメッセージを送信することを許可する',
                    private: 'プロフィールがあなたの非表示の写真を見ることを許可する',
                    note: 'あなたのプロフィールメモ',
                    add: '新しい写真を追加する'
                },
            }
        },
    }
})