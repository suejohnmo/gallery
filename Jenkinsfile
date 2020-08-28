pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }   
    stages{
        stage('clone repo'){
            steps{
                git 'https://github.com/suejohnmo/gallery'
            }
        }
        stage('build'){
            steps{
                sh 'npm install'
            }
        }
        stage('Deploy to Heroku') {
            steps {
                withCredentials([usernameColonPassword(credentialsId: 'suejohnmo', variable: 'HEROKU_CREDENTIALS' )]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/gallerysue.git master'
                }
            }
        }
    }
}