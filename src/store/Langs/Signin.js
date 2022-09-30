import { defineStore } from "pinia"

export const SigninJS = defineStore("Signin", {
    getters: {
        title() {
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
                ja: {
                    "title": "入る",
                    "text": "こんにちは！ウェブ上で最高のシュガーが必要な場合は、ようこそ :)"
                },
            }
        },
        terms() {
            return {
                en: "I have read and accepted the",
                ru: "Я прочитал/а и принимаю данные",
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
                    "email": "A-a-a. Field must be an email",
                    "required": "Hey, fill it!"
                },
                ru: {
                    "password": "Не, не, не. Введи почту, а не что то другое",
                    "required": "Хей, заполни поле!"
                },
                de: {
                    "email": "A-a-a. Das Feld muss eine E-Mail sein",
                    "required": "Hey, füll es!"
                },
                fr: {
                    "email": "A-a-a. Le champ doit être un email",
                    "required": "Hé, remplis-le !"
                },
                es: {
                    "email": "A-a-a. El campo debe ser un correo electrónico",
                    "required": "¡Oye, llénalo!"
                },
                zh: {
                    "email": "啊啊啊。字段必须是电子邮件",
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
                    0: "Don't try to hack me bro :)",
                    1: "Wrong email",
                    2: "Email with link wasn't sent to you 'cause of some reason. Please, try again",
                    3: "Some error occured on server. Try again and never give up",
                    4: "Bro, u have been banned. But don't worry. U can create a new account whenever you like :)" 
                },
                ru: {
                    0: "Не пытайся хакнуть меня бро :)",
                    1: "Это не почта",
                    2: "Письмо с сылкой не было отправленно на вашу почту по какой-то причине. Пожалуста, попробуйте снова",
                    3: "Че то на сервере бахнуло. Попробуй снова и не здавайся",
                    4: "Бро, ты был забанен. Но не парься. Я же не запретил тебе заводить новые аккаунты (подмиг, подмиг :D)"
                },
                de: {
                    0: "Versuch nicht, mich zu hacken, Bruder :)",
                    1: "Falsche E-mail",
                    2: "E-Mail mit Link wurde aus irgendeinem Grund nicht an Sie gesendet. Bitte versuche es erneut",
                    3: "Auf dem Server ist ein Fehler aufgetreten. Versuchen Sie es erneut und geben Sie niemals auf",
                    4: "Bruder, du wurdest gesperrt. Aber keine Sorge. Du kannst jederzeit ein neues Konto erstellen :)" 
                },
                fr: {
                    0: "N'essaie pas de me pirater frère :)",
                    1: "Mauvaise adresse mail",
                    2: "L'e-mail avec le lien ne vous a pas été envoyé pour une raison quelconque. Veuillez réessayer",
                    3: "Une erreur s'est produite sur le serveur. Réessayez et n'abandonnez jamais",
                    4: "Frère, tu as été banni. Mais ne vous inquiétez pas. Vous pouvez créer un nouveau compte quand vous le souhaitez :)" 
                },
                es: {
                    0: "No intentes hackearme hermano :)",
                    1: "Email incorrecto",
                    2: "No se le envió el correo electrónico con el enlace por algún motivo. Inténtalo de nuevo",
                    3: "Se produjo algún error en el servidor. Inténtalo de nuevo y nunca te rindas",
                    4: "Hermano, te han baneado. Pero no te preocupes. Puedes crear una nueva cuenta cuando quieras :)" 
                },
                zh: {
                    0: "不要试图破解我兄弟:)",
                    1: "错误的电子邮件",
                    2: "由于某种原因，未向您发送带有链接的电子邮件。请再试一次",
                    3: "服务器上发生了一些错误。再试一次，永不放弃",
                    4: "兄弟，你被禁言了。但别担心。你可以随时创建一个新帐户:)" 
                },
                ja: {
                    0: "私をハックしようとしないでください:)",
                    1: "間違ったメール",
                    2: "なんらかの理由で、リンク付きのメールが送信されませんでした。もう一度やり直してください",
                    3: "サーバーで何らかのエラーが発生しました。もう一度やり直して、決してあきらめないでください",
                    4: "ブロ、あなたは禁止されています。しかし、心配しないでください。いつでも新しいアカウントを作成できます:)" 
                },
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
                ja: "サインインしました。お楽しみください :)",
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