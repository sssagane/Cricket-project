pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning repository...'
                // Git clone happens automatically if Jenkins is using Pipeline from SCM
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

        stage('Build Docker Image (Local)') {
            steps {
                echo 'Building Docker image on Jenkins server...'
                sh 'docker build -t cricket-website .'
            }
        }

        stage('Stop and Remove Old Container (Local)') {
            steps {
                echo 'Cleaning up local container (optional)...'
                sh '''
                docker stop cricket-container || true
                docker rm cricket-container || true
                '''
            }
        }

        stage('Remote Deploy to Server 1') {
            steps {
                echo 'Deploying to Server 1 (172.31.4.110)...'
                sh '''
                ssh -o StrictHostKeyChecking=no ubuntu@172.31.4.110 << 'ENDSSH'
                    # Navigate to the project directory or clone if it doesn't exist
                    cd ~/cricket-website || git clone https://github.com/sssagane/Cricket-project.git cricket-website && cd cricket-website

                    # Pull the latest changes
                    git pull origin main

                    # Rebuild and restart the container
                    docker stop cricket-container || true
                    docker rm cricket-container || true
                    docker build -t cricket-website .
                    docker run -d -p 7777:7777 --name cricket-container cricket-website
                ENDSSH
                '''
            }
        }
    }
}
