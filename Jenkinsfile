pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Initiation'){
            steps{
                sh "echo electron-secure-defaults application"
            }
        }
            
            
        }
        stage('Build') {
            steps {
                sh "echo build package"
                sh 'npm install'
            }
        }
        stage ('Email Notification') {
            steps{
                emailext (
                    subject: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                    body: """<p>SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
                    <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>""",
                    recipientProviders: [[$class: 'DevelopersRecipientProvider']]
                )
                
            }
            
        }
        stage('Vulnerabilities') {
            steps {
                sh "echo The following command tests for vulnerabilities"
        }
               
    }
}
