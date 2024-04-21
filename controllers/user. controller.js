const db = require('../models');
const User = db.user

const UserController = {

    createUser: async (req, res) => {
        try {
            // Création de cinq commentaires fictifs
            const referenceATM = "ATM1"
            const referenceATM2 = "ATM2"
            const referenceATM3 = "ATM3"

            const commentsData = [
                { comments: "Non seulement ils ont amélioré l'air, mais ils nous ont aussi expliqué comment maintenir une bonne qualité. Très apprécié de comprendre le processus.", reference: referenceATM },
                { comments: "Une intervention efficace et empathique, avec une mention spéciale pour Christine, dont le soutien a été crucial. Votre aide a été inestimable pour notre famille.", reference: referenceATM },
                { comments: "Un grand merci!", reference: referenceATM },
                { comments: "Merci pour votre travail rapide et votre soutien chaleureux. Thierry, votre approche personnalisée et votre attention ont vraiment fait la différence.", reference: referenceATM },
                { comments: "Dans une période aussi éprouvante, l'équipe a été notre lueur d'espoir. Christine a fait preuve d'une grande compassion et d'un professionnalisme hors pair. Infiniment reconnaissants!", reference: referenceATM },
                { comments: "⭐️⭐️⭐️⭐️⭐️", reference: referenceATM },
                { comments: "Une équipe dévouée et compétente, avec un merci spécial à Thierry pour son accompagnement et son soutien inestimables après l'incendie. Votre travail a vraiment fait la différence.", reference: referenceATM },
                { comments: "⭐️⭐️⭐️⭐️⭐️", reference: referenceATM2 },
                { comments: "Intervention impeccable d'ADS dans une situation inédite pour nous. Efficacité et professionnalisme ont été clés.", reference: referenceATM2 },
                { comments: "Dans un moment pareil, vous avez été d'un grand soutien. Merci", reference: referenceATM2 },
                { comments: "Un énorme merci pour votre travail après notre inondation. Notre garage est encore plus beau qu'avant!", reference: referenceATM2 },
                { comments: "️⭐️⭐️⭐️⭐️", reference: referenceATM2 },
                { comments: "Jamais nous n'aurions pensé traverser un tel sinistre, mais l'équipe d'ADS a été notre guide avec une humanité et un savoir-faire exceptionnels.", reference: referenceATM2 },
                { comments: "Super boulot sur le nettoyage de notre chambre, de vrais pro", reference: referenceATM2 },
                { comments: "Suite à une inondation, nous avons été redirigé chez ADS. N’ayant jamais eu affaire à ce genre de cas, je ne savais pas comment m’y prendre. Emelyne a été notre guide et notre soutien durant cette épreuve. Je la remercie encore pour son dévouement et son professionnalisme.", reference: referenceATM2 },
                { comments: "⭐️⭐️⭐️⭐️⭐️", reference: referenceATM2 },
                { comments: "Ils connaissaient clairement leur métier. Après l'incendie, ils ont expliqué tout ce qu'ils allaient faire et ont répondu à toutes nos questions. Rassurant de voir des experts à l'œuvre.", reference: referenceATM2 },
                { comments: "Extraordinaire travail de remise en état! Merci à Alexis pour son écoute et sa capacité à redonner vie à notre espace après les dégâts.", reference: referenceATM3 },
                { comments: "Notre maison est maintenant plus belle qu'avant. Votre travail minutieux et votre sens du détail nous ont énormément touchés.", reference: referenceATM3 },
                { comments: "⭐️⭐️⭐️⭐️⭐️", reference: referenceATM3 },
                { comments: "Une intervention rapide et méticuleuse. Notre maison a été nettoyée et restaurée avec grand soin.", reference: referenceATM3 },
                { comments: "On peut enfin réutiliser notre cheminée sans problème! Merci!", reference: referenceATM3 },
                { comments: "Un boulot de dingue pour nettoyer après l'incendie. La maison est nickel, on ne dirait même pas qu'il y a eu un feu!", reference: referenceATM3 },
                { comments: "L'air est tellement plus frais maintenant. Mersi pour cette transformation!", reference: referenceATM3 },
                { comments: "Votre capacité à effacer les traces de l'incendie est stupéfiante. Merci pour votre travail minutieux.", reference: referenceATM3 },
                { comments: "L'amélioration de la qualité de l'air dans notre maison après votre intervention est palpable. Un grand merci à Laurie pour ses conseils et son expertise.", reference: referenceATM3 },
                { comments: "Respirer un air sain à nouveau dans notre maison est un soulagement. Merci pour votre travail exceptionnel.", reference: referenceATM3 },
                { comments: "Top! Merci Ingrid pour votre devouement", reference: referenceATM3 }
            ];

            // Insérer chaque commentaire dans la base de données
            for (const commentData of commentsData) {
                const truncatedComments = commentData.comments.substring(0, 255);
                await User.create({ comments: truncatedComments, reference: commentData.reference });
                console.log(`Commentaire inséré : ${commentData.comments}`);
            }

            console.log("Tous les commentaires ont été insérés avec succès.");
        } catch (error) {
            console.error("Erreur lors de l'insertion des commentaires :", error);
        }
    },
    createUserOrLogin: async (req, res) => {
        try {
            const { firstName, lastName, reference } = req.body
            console.log(firstName)
            console.log(lastName)
            console.log(reference)
            const commenUser = await User.findOne({ where: { reference: reference, firstName: null, lastName: null } });

            if (commenUser) {
                commenUser.firstName = firstName
                commenUser.lastName = lastName
                await commenUser.save();
            }

            res.status(200).json({ commenUser });
        } catch (error) {
            console.error("Erreur lors de l'authentification ou de la création de l'utilisateur :", error);
            res.status(500).json({ message: "Erreur lors de l'authentification ou de la création de l'utilisateur." });
        }
    },
    createComments: async (req, res) => {
        try {
            const { comments, reference } = req.body
            const commenUser = await User.create({ reference: reference, comments: comments });
            res.status(200).json({ commenUser });
        } catch (error) {
            console.error("Erreur lors de l'ajout du produit", error);
            res.status(500).json({ message: "Erreur lors de l'ajout du produit" });
        }
    },

};

module.exports = UserController;