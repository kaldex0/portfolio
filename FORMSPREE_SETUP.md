# Configuration Formspree pour le formulaire de contact

## ✨ Configuration ULTRA SIMPLE (5 minutes)

### Étape 1 : Créer un compte Formspree
1. Allez sur [https://formspree.io/](https://formspree.io/)
2. Cliquez sur **"Get Started"**
3. Créez un compte (gratuit - 50 soumissions/mois)

### Étape 2 : Créer un formulaire
1. Une fois connecté, cliquez sur **"+ New Form"**
2. Donnez un nom à votre formulaire : `Portfolio Contact`
3. Dans **Email**, entrez : `alexandre.damman@etu.univ-littoral.fr`
4. Cliquez sur **"Create Form"**

### Étape 3 : Récupérer l'ID du formulaire
1. Formspree vous donne un endpoint qui ressemble à :
   ```
   https://formspree.io/f/xyzabcde
   ```
2. Notez la partie après `/f/` : **xyzabcde** (c'est votre FORM_ID)

### Étape 4 : Configurer le code
1. Ouvrez le fichier `src/views/Contact.vue`
2. À la ligne 17 environ, remplacez :
   ```typescript
   const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'
   ```
   Par :
   ```typescript
   const formspreeEndpoint = 'https://formspree.io/f/xyzabcde'
   ```
   (en utilisant VOTRE vrai ID)

### Étape 5 : Tester !
1. Allez sur votre page Contact
2. Remplissez le formulaire
3. Envoyez un message de test
4. Vérifiez votre boîte mail `alexandre.damman@etu.univ-littoral.fr` 📧

## 🎉 C'est tout !

Vous recevrez maintenant tous les messages directement dans votre boîte mail universitaire !

## Paramètres optionnels (dans Formspree)

Dans les paramètres de votre formulaire Formspree, vous pouvez :
- Personnaliser l'email de confirmation envoyé à vos visiteurs
- Ajouter une redirection après soumission
- Activer la protection anti-spam (reCAPTCHA)
- Voir les statistiques de soumission

## Avantages de Formspree

✅ Configuration en 5 minutes  
✅ Pas besoin de backend  
✅ Protection anti-spam intégrée  
✅ 50 soumissions/mois gratuites  
✅ Emails reçus directement dans votre boîte  
✅ Possibilité de répondre directement aux expéditeurs  

---

**Besoin d'aide ?** Le support Formspree est très réactif !

