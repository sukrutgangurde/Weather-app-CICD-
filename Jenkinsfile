pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/sukrutgangurde/Weather-app-CICD-.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t weather-app:v1 .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker run -d -p 5173:5173 weather-app:v1'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
