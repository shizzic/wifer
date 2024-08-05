import { defineStore } from "pinia"

export const ModalJS = defineStore("Modal", {
    getters: {
        text() {
            return {
                deactivate: {
                    en: [
                        "1. After deactivateing, your profile won't be showing in public search.",
                        "2. All your data will be saved.",
                        "3. I won't bother you anymore with emails (until next login :D)",
                        "4. Just re-login and you'll see all your information again"
                    ],
                    ru: [
                        "1. После деактивации вы не будете отображаться в общем поиске.",
                        "2. Вся ваша инфа будет сохраненна.",
                        "3. Я больше не побеспокою вас имейлами (до следующего логина :D)",
                        "4. Просто перелогиньтесь и вы увидите всю вашу информацию снова"
                    ],
                    de: [
                        "1. Nach der Deaktivierung wird Ihr Profil nicht in der öffentlichen Suche angezeigt.",
                        "2. Alle Ihre Daten werden gespeichert.",
                        "3. Ich werde dich nicht mehr mit E-Mails belästigen (bis zum nächsten Login :D)",
                        "4. Melden Sie sich einfach erneut an und Sie sehen wieder alle Ihre Informationen"
                    ],
                    fr: [
                        "1. Après la désactivation, votre profil ne s'affichera pas dans la recherche publique.",
                        "2. Toutes vos données seront enregistrées.",
                        "3. Je ne vous embêterai plus avec les emails (jusqu'à la prochaine connexion :D)",
                        "4. Connectez-vous à nouveau et vous verrez à nouveau toutes vos informations"
                    ],
                    es: [
                        "1. Después de la desactivación, su perfil no se mostrará en la búsqueda pública.",
                        "2. Todos sus datos serán guardados.",
                        "3. No te molestaré más con los correos electrónicos (hasta el próximo inicio de sesión: D)",
                        "4. Simplemente vuelva a iniciar sesión y verá toda su información nuevamente"
                    ],
                    zh: [
                        "1. 停用后，您的个人资料将不会显示在公开搜索中。",
                        "2. 您的所有数据都将被保存。",
                        "3. 我不会再用电子邮件打扰你了（直到下次登录 :D)",
                        "4. 只需重新登录，您就会再次看到所有信息"
                    ],
                    ja: [
                        "1. 非アクティブ化すると、あなたのプロフィールは公開検索に表示されなくなります。",
                        "2. すべてのデータが保存されます。",
                        "3. もうメールであなたを悩ませることはありません (次のログインまで:D)",
                        "4. 再ログインするだけで、すべての情報が再び表示されます:)"
                    ],
                },
                logout: {
                    en: ["Are you sure you wanna logout?"],
                    ru: ["Уверенны, что хотите выйти?"],
                    de: ["Möchten Sie sich wirklich abmelden?"],
                    fr: ["Voulez-vous vraiment vous déconnecter?"],
                    es: ["¿Estás seguro de que quieres cerrar sesión?"],
                    zh: ["你确定要退出吗？"],
                    ja: ["本当にログアウトしますか?"],
                },
                chat: {
                    en: [
                        "1. You need to buy premium for chatting with users",
                        "2. Or maybe you have an access from this user directly",
                        "3. You ask me, how will i get an access if i can't write it to her/him?",
                        "4. Just give an access from you to her/him and than, you'll get attention"
                    ],
                    ru: [
                        "1. Тебе нужно купить премиум, чтобы чатится",
                        "2. Или иметь доступ на переписку от этого юзера напрямую",
                        "3. Ты спросишь, как я получу доступ от нее/его, если я не могу написать ей/ему?",
                        "4. Просто дай доступ на чат от самого себя и тогда (может быть), ты привлечешь внимание"
                    ],
                    de: [
                        "1. Sie müssen Premium kaufen, um mit Benutzern zu chatten",
                        "2. Oder vielleicht haben Sie direkt einen Zugriff von diesem Benutzer",
                        "3. Du fragst mich, wie bekomme ich einen Zugang, wenn ich ihn ihr/ihm nicht schreiben kann?",
                        "4. Gib ihr/ihm einfach einen Zugang von dir und dann bekommst du Aufmerksamkeit"
                    ],
                    fr: [
                        "1. Vous devez acheter une prime pour discuter avec les utilisateurs",
                        "2. Ou peut-être avez-vous directement accès à cet utilisateur",
                        "3. Vous me demandez, comment vais-je obtenir un accès si je ne peux pas lui écrire?",
                        "4. Donnez juste un accès de vous à elle/lui et vous attirerez l'attention"
                    ],
                    es: [
                        "1. Necesitas comprar premium para chatear con usuarios",
                        "2. O tal vez tenga un acceso de este usuario directamente",
                        "3. Me preguntas, ¿cómo obtendré un acceso si no puedo escribirle?",
                        "4. Solo dale un acceso de ti a él/ella y entonces, obtendrás atención"
                    ],
                    zh: [
                        "1. 您需要购买高级版才能与用户聊天",
                        "2. 或者，也许您可​​以直接从该用户获得访问权限",
                        "3. 你问我，如果我不能写给她/他，我将如何获得访问权限?",
                        "4. 只需让您访问她/他，然后，您就会受到关注:)"
                    ],
                    ja: [
                        "1. ユーザーとチャットするにはプレミアムを購入する必要があります",
                        "2. または、このユーザーから直接アクセスできる可能性があります",
                        "3. あなたは私に尋ねます、私が彼女/彼にそれを書くことができない場合、どうすればアクセスできますか?",
                        "4. あなたから彼女/彼にアクセスを与えるだけで、あなたは注目を集めるでしょう:)"
                    ],
                },
                private: {
                    en: [
                        "1. You need an access for private photos from this user",
                        "2. You can ask for this access directly in chat"
                    ],
                    ru: [
                        "1. Тебе нужен доступ на просмотр приватных фоток от этого юзера",
                        "2. Ты можешь попросить доступ напрямую в чате"
                    ],
                    de: [
                        "1. Sie benötigen einen Zugang für private Fotos von diesem Benutzer",
                        "2. Diesen Zugang können Sie direkt im Chat anfordern"
                    ],
                    fr: [
                        "1. Vous avez besoin d'un accès pour les photos privées de cet utilisateur",
                        "2. Vous pouvez demander cet accès directement dans le chat"
                    ],
                    es: [
                        "1. Necesitas un acceso para fotos privadas de este usuario",
                        "2. Puedes solicitar este acceso directamente en el chat"
                    ],
                    zh: [
                        "1. 您需要访问此用户的私人照片",
                        "2. 您可以直接在聊天中请求此访问权限"
                    ],
                    ja: [
                        "1. このユーザーからのプライベート写真へのアクセスが必要です",
                        "2. このアクセス権はチャットで直接要求できます"
                    ],
                }
            }
        },
        success() {
            return {
                deactivate: {
                    en: "Your account was successfully deactivated. Looking forward of your returning",
                    ru: "Аккаунт успешно деактивирован. Жду твоего возвращения",
                    de: "Ihr Konto wurde erfolgreich deaktiviert. Ich freue mich auf Ihre Rückkehr",
                    fr: "Votre compte a été désactivé avec succès. Dans l'attente de votre retour",
                    es: "Su cuenta fue desactivada con éxito. Esperando su regreso",
                    zh: "您的帐户已成功停用。期待你的归来:)",
                    ja: "あなたのアカウントは正常に無効化されました。あなたの帰りを楽しみにしています:)",
                },
                logout: {
                    en: "You've logouted. I hope u got what u wanted",
                    ru: "Вы вышли. Надеюсь классно провели время",
                    de: "Sie haben sich abgemeldet. Ich hoffe du hast was du wolltest",
                    fr: "Vous êtes déconnecté. J'espère que tu as eu ce que tu voulais",
                    es: "Ha cerrado sesión. Espero que hayas conseguido lo que querías",
                    zh: "您已注销。我希望你得到你想要的:)",
                    ja: "ログアウトしました。私はあなたが望んでいたものを手に入れたことを願っています:)",
                }
            }
        },
        add() {
            return {
                like: {
                    en: "You added this user to your favorites",
                    ru: "Вы добавили юзера в избранные",
                    de: "Sie haben diesen Benutzer zu Ihren Favoriten hinzugefügt",
                    fr: "Vous avez ajouté cet utilisateur à vos favoris",
                    es: "Has añadido este usuario a tus favoritos.",
                    zh: "您已将此用户添加到收藏夹",
                    ja: "このユーザーをお気に入りに追加しました",
                },
                private: {
                    en: "You gave an access to your private photos",
                    ru: "Вы дали доступ к свои приватным фоткам",
                    de: "Sie haben Zugriff auf Ihre privaten Fotos gewährt",
                    fr: "Vous avez donné accès à vos photos privées",
                    es: "Has dado acceso a tus fotos privadas.",
                    zh: "您授予了访问您私人照片的权限",
                    ja: "プライベート写真へのアクセスを許可しました",
                },
                access: {
                    en: "You gave an access to text you and see last messages for this user",
                    ru: "Вы дали доступ на переписку с вами этому юзеру",
                    de: "Sie haben Zugriff auf Textnachrichten und die Anzeige der letzten Nachrichten für diesen Benutzer gewährt",
                    fr: "Vous avez donné un accès au SMS et voir les derniers messages de cet utilisateur",
                    es: "Le diste acceso para enviarte mensajes de texto y ver los últimos mensajes de este usuario",
                    zh: "您授予了对您发短信和查看此用户的最新消息的权限",
                    ja: "あなたはテキスト メッセージへのアクセスを許可し、このユーザーの最後のメッセージを表示します",
                }
            }
        },
        delete() {
            return {
                like: {
                    en: "You deleted this user from your favorites",
                    ru: "Вы удалили юзера из избранных",
                    de: "Sie haben diesen Benutzer aus Ihren Favoriten gelöscht",
                    fr: "Vous avez supprimé cet utilisateur de vos favoris",
                    es: "Borraste a este usuario de tus favoritos",
                    zh: "您从收藏夹中删除了此用户",
                    ja: "このユーザーをお気に入りから削除しました",
                },
                private: {
                    en: "You took away an access for your photos",
                    ru: "Вы забрали доступ к своим приватным фоткам",
                    de: "Du hast einen Zugang für deine Fotos weggenommen",
                    fr: "Vous avez enlevé un accès pour vos photos",
                    es: "Le quitaste un acceso a tus fotos",
                    zh: "您取消了对照片的访问权限",
                    ja: "写真へのアクセス権を奪いました",
                },
                access: {
                    en: "Now, this user can't text you and see your last messages",
                    ru: "Теперь этот юзер не может вам написать, а так же не может видеть все, что было написанно до этого",
                    de: "Jetzt kann dieser Benutzer Ihnen keine SMS schreiben und Ihre letzten Nachrichten sehen",
                    fr: "Maintenant, cet utilisateur ne peut pas vous envoyer de SMS et voir vos derniers messages",
                    es: "Ahora, este usuario no puede enviarte mensajes de texto y ver tus últimos mensajes.",
                    zh: "现在，此用户无法向您发送短信并查看您的最后一条消息",
                    ja: "現在、このユーザーはあなたにテキスト メッセージを送信したり、最後のメッセージを表示したりすることはできません",
                }
            }
        },
        submit() {
            return {
                en: "Submit",
                ru: "Подтвердить",
                de: "Einreichen",
                fr: "Soumettre",
                es: "Enviar",
                zh: "提交",
                ja: "送信",
            }
        },
        cancel() {
            return {
                en: "Cancel",
                ru: "Отменить",
                de: "Absagen",
                fr: "Annuler",
                es: "Cancelar",
                zh: "取消",
                ja: "キャンセル",
            }
        },
        save() {
            return {
                en: "Save",
                ru: "Сохранить",
                de: "Speichern",
                fr: "sauvegarder",
                es: "Ahorrar",
                zh: "节省",
                ja: "保存",
            }
        }
    }
})