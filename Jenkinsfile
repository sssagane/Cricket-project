pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning repository...'
                // Git clone happens automatically in Jenkins if this is in a Git project
            }
        }

        stage('Build') {
            steps {
                echo 'No build needed for static site.'
            }
        }

        stage('Test') {
            steps {
                echo 'Running basic test...'
                sh 'test -f index.html'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t cricket-website .'
            }
        }

        stage('Stop and Remove Old Container') {
            steps {
                echo 'Cleaning up old container (if exists)...'
                sh '''
                docker stop cricket-container || true
                docker rm cricket-container || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                echo 'Starting new container on port 7777...'
                sh 'docker run -d -p 7777:7777 --name cricket-container cricket-website'
            }
        }
    }
}
