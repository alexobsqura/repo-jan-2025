pipeline {
    tools {
        nodejs 'nodejs'
    }
    agent any
    environment {
        registry = "605134450606.dkr.ecr.eu-north-1.amazonaws.com/alexobsqura/node-app-repo"
    }

    stages {
        
        stage('Building the project') {
            steps {
                sh 'npm install'
            }
        }
    }
}
