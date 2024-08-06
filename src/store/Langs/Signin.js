import { defineStore } from "pinia"

export const SigninJS = defineStore("Signin", {
    getters: {
        title() {
            return {
                en: {
                    "title": "Enter",
                    "text": "Hi! If you want to find something nice, then come in"
                },
                ru: {
                    "title": "Вход",
                    "text": "Привет! Если ты хочешь найти что-то приятное, тогда заходи"
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
        terms() {
            return {
                en: "I have read and accepted the",
                ru: "Я прочитал/а и принимаю",
                de: "Ich habe die gelesen und akzeptiert",
                fr: "J'ai lu et accepté",
                es: "He leído y acepto el",
                zh: "我已阅读并接受",
                ja: "を読み、同意しました",
            }
        },
        input() {
            return {
                en: "Email",
                ru: "Почта",
                de: "Email",
                fr: "E-mail",
                es: "Email",
                zh: "Email",
                ja: "Email",
            }
        },
        error() {
            return {
                en: {
                    "email": "Field must be an email",
                    "required": "Hey, fill it!"
                },
                ru: {
                    "email": "Введите почту, а не что-то другое",
                    "required": "Заполни поле!"
                },
                de: {
                    "email": "Das Feld muss eine E-Mail sein",
                    "required": "Hey, füll es!"
                },
                fr: {
                    "email": "Le champ doit être un email",
                    "required": "Hé, remplis-le !"
                },
                es: {
                    "email": "El campo debe ser un correo electrónico",
                    "required": "¡Oye, llénalo!"
                },
                zh: {
                    "email": "字段必须是电子邮件",
                    "required": "喂，填!"
                },
                ja: {
                    "email": "ああ。フィールドは電子メールである必要があります",
                    "required": "おい、埋めろ！"
                },
            }
        },
        button() {
            return {
                en: "Sign up or sign in",
                ru: "Зарегаться или войти",
                de: "Melden Sie sich an oder melden Sie sich an",
                fr: "Inscrivez-vous ou connectez-vous",
                es: "Regístrate o inicia sesión",
                zh: "注册或登录",
                ja: "サインアップまたはサインイン",
            }
        },
        response() {
            return {
                en: {
                    wrong_api_token: "Don't try to hack me bro",
                    email_invalid: "Wrong email",
                    email_not_dispatched: "Email with link wasn't sent to you 'cause of some reason. Please, try again",
                    something_went_wrong: "Some error occured on server. Try again and never give up",
                    user_is_banned: "Bro, u have been banned. But don't worry. U can create a new account whenever you like" 
                },
                ru: {
                    wrong_api_token: "Не пытайся хакнуть меня бро",
                    email_invalid: "Это не почта",
                    email_not_dispatched: "Письмо с сылкой не было отправленно на вашу почту по какой-то причине. Пожалуста, попробуйте снова",
                    something_went_wrong: "что-то случилось на сервере. Попробуйте снова",
                    user_is_banned: "Бро, ты был забанен. Но не парься. Я же не запретил тебе заводить новые аккаунты (подмиг, подмиг :D)"
                },
                de: {
                    wrong_api_token: "Versuch nicht, mich zu hacken, Bruder",
                    email_invalid: "Falsche E-mail",
                    email_not_dispatched: "E-Mail mit Link wurde aus irgendeinem Grund nicht an Sie gesendet. Bitte versuche es erneut",
                    something_went_wrong: "Auf dem Server ist ein Fehler aufgetreten. Versuchen Sie es erneut und geben Sie niemals auf",
                    user_is_banned: "Bruder, du wurdest gesperrt. Aber keine Sorge. Du kannst jederzeit ein neues Konto erstellen" 
                },
                fr: {
                    wrong_api_token: "N'essaie pas de me pirater frère",
                    email_invalid: "Mauvaise adresse mail",
                    email_not_dispatched: "L'e-mail avec le lien ne vous a pas été envoyé pour une raison quelconque. Veuillez réessayer",
                    something_went_wrong: "Une erreur s'est produite sur le serveur. Réessayez et n'abandonnez jamais",
                    user_is_banned: "Frère, tu as été banni. Mais ne vous inquiétez pas. Vous pouvez créer un nouveau compte quand vous le souhaitez" 
                },
                es: {
                    wrong_api_token: "No intentes hackearme hermano",
                    email_invalid: "Email incorrecto",
                    email_not_dispatched: "No se le envió el correo electrónico con el enlace por algún motivo. Inténtalo de nuevo",
                    something_went_wrong: "Se produjo algún error en el servidor. Inténtalo de nuevo y nunca te rindas",
                    user_is_banned: "Hermano, te han baneado. Pero no te preocupes. Puedes crear una nueva cuenta cuando quieras" 
                },
                zh: {
                    wrong_api_token: "不要试图破解我兄弟:)",
                    email_invalid: "错误的电子邮件",
                    email_not_dispatched: "由于某种原因，未向您发送带有链接的电子邮件。请再试一次",
                    something_went_wrong: "服务器上发生了一些错误。再试一次，永不放弃",
                    user_is_banned: "兄弟，你被禁言了。但别担心。你可以随时创建一个新帐户:)" 
                },
                ja: {
                    wrong_api_token: "私をハックしようとしないでください:)",
                    email_invalid: "間違ったメール",
                    email_not_dispatched: "なんらかの理由で、リンク付きのメールが送信されませんでした。もう一度やり直してください",
                    something_went_wrong: "サーバーで何らかのエラーが発生しました。もう一度やり直して、決してあきらめないでください",
                    user_is_banned: "ブロ、あなたは禁止されています。しかし、心配しないでください。いつでも新しいアカウントを作成できます:)" 
                },
            }
        },
        success() {
            return {
                en: "You signed in. Enjoy yourself",
                ru: "Вы вошли. Удачи",
                de: "Du hast dich angemeldet. Viel Spaß",
                fr: "Vous vous êtes connecté. Amusez-vous bien",
                es: "Has iniciado sesión. Diviértete",
                zh: "您已登录。尽情享受吧",
                ja: "サインインしました。お楽しみください",
            }
        },
        email() {
            return {
                en: "An email with login link was sent to your typed email. Just follow the link. And check spam box if you don't see an email",
                ru: "Письмо с сылкой было отправленно на указанную вами почту. Просто проследуйте по сылке. И не забудьте чекнуть спам ящик, если не найдете письмо",
                de: "Eine E-Mail mit einem Anmeldelink wurde an Ihre eingegebene E-Mail-Adresse gesendet. Folgen Sie einfach dem Link. Und überprüfen Sie das Spam-Kästchen, wenn Sie keine E-Mail sehen",
                fr: "Un e-mail avec un lien de connexion a été envoyé à votre e-mail saisi. Suivez simplement le lien. Et cochez la case spam si vous ne voyez pas d'e-mail",
                es: "Se envió un correo electrónico con un enlace de inicio de sesión a su correo electrónico escrito. Solo sigue el enlace. Y marque la casilla de correo no deseado si no ve un correo electrónico",
                zh: "一封带有登录链接的电子邮件已发送到您输入的电子邮件。只需点击链接即可。如果您没有看到电子邮件，请检查垃圾邮件框",
                ja: "入力したメールアドレスに、ログインリンクが記載されたメールが送信されました。リンクをたどってください。メールが届かない場合は、迷惑メールボックスを確認してください",
            }
        }
    }
})