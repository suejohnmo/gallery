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
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/obscure-stream-99804.git master'
                }
            }
        }
    }
}