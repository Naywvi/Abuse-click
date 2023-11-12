1 - Déplacer post-push dans ./git/hook
2 - Afin de vérifier un fichier js installer ces dépendances :
npm install eslint --save-dev
npx eslint --init

3 - N'oubliez pas de rendre votre fichier exécutable 
chmod +x .git/hooks/pre-push 