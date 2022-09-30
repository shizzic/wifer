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
                fr: {
                    text: "Désormais enregistré",
                    users: "utilisateurs"
                },
                es: {
                    text: "Por ahora registrado",
                    users: "usuarios"
                },
                zh: {
                    text: "现已注册",
                    users: "用户"
                },
                ja: {
                    text: "現在登録済み",
                    users: "ユーザー"
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
                fr: {
                    month: "Prime de 30 jours",
                    trial: "Essai pendant 7 jours",
                    try: "Essayer",
                    expires: "Expire dans"
                },
                es: {
                    month: "Prima de 30 días",
                    trial: "Prueba durante 7 días",
                    try: "Probar",
                    expires: "Expira en"
                },
                zh: {
                    month: "30天保费",
                    trial: "试用7天",
                    try: "尝试",
                    expires: "过期日期在"
                },
                ja: {
                    month: "30日間プレミアム",
                    trial: "7日間お試し",
                    try: "試す",
                    expires: "有効期限"
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
                fr: {
                    text: "Juste le meilleur site Web pour la relation Sugar Daddy / Baby",
                    reasons: " par prix, par rapidité, par service"
                },
                es: {
                    text: "Simplemente el mejor sitio web para la relación sugar daddy/bebé",
                    reasons: " por precio, por velocidad, por servicio"
                },
                zh: {
                    text: "只是最好的傍大款/宝贝关系网站",
                    reasons: " 按价格、按速度、按服务"
                },
                ja: {
                    text: "シュガーダディと赤ちゃんの関係に最適なウェブサイト",
                    reasons: " 価格別、速度別、サービス別"
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
                fr: {
                    title: "Chat gratuit",
                    text: "Avec tous ceux qui vous ont donné accès à leur envoyer des SMS sans surcoût :)"
                },
                es: {
                    title: "Chat gratis",
                    text: "Con todos los que te dieron acceso para enviarles mensajes de texto sin prima :)"
                },
                zh: {
                    title: "免费聊天",
                    text: "与所有人一起，谁让您无需付费就可以访问他们的短信:)"
                },
                ja: {
                    title: "無料チャット",
                    text: "プレミアムなしでテキストにアクセスできるようにしてくれたみんなと一緒に:)"
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
                fr: {
                    title: "Recherche mondiale",
                    without: "Vous pouvez rechercher des utilisateurs sans sélectionner de pays",
                    multiple: "Vous pouvez spécifier plusieurs pays et villes pour la recherche"
                },
                es: {
                    title: "Búsqueda mundial",
                    without: "Puede buscar usuarios sin seleccionar el país",
                    multiple: "Puede especificar varios países y ciudades para la búsqueda"
                },
                zh: {
                    title: "全球搜索",
                    without: "您可以在不选择国家/地区的情况下搜索用户",
                    multiple: "您可以指定多个国家和城市进行搜索"
                },
                ja: {
                    title: "世界的な検索",
                    without: "国を選択せず​​にユーザーを検索できます",
                    multiple: "複数の国と都市を指定して検索できます"
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
                fr: {
                    title: "Contactez moi",
                    name: "Nom",
                    email: "E-mail",
                    subject: "Matière",
                    message: "Message",
                    send: "Envoyer"
                },
                es: {
                    title: "Contáctame",
                    name: "Nombre",
                    email: "Email",
                    subject: "Sujeta",
                    message: "Mensaje",
                    send: "Enviar"
                },
                zh: {
                    title: "联络我",
                    name: "姓名",
                    email: "电子邮件",
                    subject: "主题",
                    message: "信息",
                    send: "发送"
                },
                ja: {
                    title: "私に連絡して",
                    name: "名前",
                    email: "Eメール",
                    subject: "主題",
                    message: "メッセージ",
                    send: "送信"
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
                fr: {
                    success: "Votre message m'a été livré avec succès. Je répondrai dès que possible :)",
                    error: "Désolé, quelque chose s'est mal passé. Réessayez plus tard",
                    trial: "Vous avez déjà utilisé votre essai unique. Tu ne peux pas le refaire",
                    trialSuccess: "Vous avez réussi votre période d'essai. Prendre plaisir :)",
                    payError: "Il semble que ce paiement ait déjà été utilisé ou n'existe pas du tout. Vérifiez la politique de remboursement.",
                    payed: "Merci d'avoir acheté ma prime. Prendre plaisir :)"
                },
                es: {
                    success: "Su mensaje fue entregado con éxito a mí. Responderé tan pronto como pueda :)",
                    error: "Lo siento, algo salió mal. Vuelva a intentarlo más tarde",
                    trial: "Ya usaste tu prueba única. no puedes hacerlo de nuevo",
                    trialSuccess: "Obtuvo con éxito su período de prueba. Disfrutar :)",
                    payError: "Parece que este pago ya se usó o no existe en absoluto. Consultar política de devoluciones.",
                    payed: "Gracias por comprar mi prima. Disfrutar :)"
                },
                zh: {
                    success: "您的消息已成功发送给我。我会尽快回复:)",
                    error: "抱歉，出了点问题。稍后再试",
                    trial: "您已经使用了一次性试用版。你不能再这样做了",
                    trialSuccess: "您已成功获得试用期。享受:)",
                    payError: "这笔付款似乎已被使用或根本不存在。检查退款政策。",
                    payed: "感谢您购买我的保费。享受:)"
                },
                ja: {
                    success: "あなたのメッセージは無事に届きました。できるだけ早くお答えします:)",
                    error: "エラーが発生しました。あとでもう一度試してみてください",
                    trial: "すでに 1 回限りの試用版を使用しています。二度とできない",
                    trialSuccess: "試用期間を取得しました。楽しみ :)",
                    payError: "この支払いは既に使用されているか、まったく存在しないようです。返金ポリシーを確認してください。",
                    payed: "私のプレミアムを購入していただきありがとうございます。楽しみ ：）"
                },
            }
        },

        age() {
            return {
                en: "Website only for people who is above 18 years old",
                ru: "Сайт для лиц старше 18-ти лет",
                de: "Website nur für Personen über 18 Jahre",
                fr: "Site réservé aux personnes de plus de 18 ans",
                es: "Sitio web solo para personas mayores de 18 años.",
                zh: "网站仅供 18 岁以上人士使用",
                ja: "18歳以上の方専用サイト",
            }
        }
    }
})