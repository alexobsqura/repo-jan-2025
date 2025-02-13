pipeline {
    tools {
        nodejs 'nodejs'
    }
    agent any
    environment {
        registry = "774305586623.dkr.ecr.us-east-1.amazonaws.com/test-repo-1"
    }

    stages {
        
        stage('Building the project') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t repo-jan-2025-api .'
            }
        }
        
        stage('Tag Docker Image') {
            steps {
                sh 'docker tag repo-jan-2025-api:latest 774305586623.dkr.ecr.us-east-1.amazonaws.com/test-repo-1:$BUILD_NUMBER'
            }
        }

        stage('Pushing to ECR') {
        steps{  
            script {
                    sh 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 774305586623.dkr.ecr.us-east-1.amazonaws.com/test-repo-1'
                    sh 'docker push 774305586623.dkr.ecr.us-east-1.amazonaws.com/test-repo-1:$BUILD_NUMBER'
            }
            }
      }
    }
}
