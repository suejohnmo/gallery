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
    }
}