pipeline {
    agent {
        docker {
            image 'node:latest'
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
        stage('Build'){
            steps {
                sh "echo build package"
                sh 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                sh 'chmod +x ./jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh ' chmod +x ./jenkins/scripts/kill.sh'
            }
        }        
        stage('Email Notification'){
            steps{
                emailext (
                    subject: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                    body: """<p>SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
                    <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>""",
                    to: "jennifermhaiki@gmail.com"
                )
                
            }
            
        }
        stage ('OWASP Dependency-Check Vulnerabilities') {
            steps {
                sh "mkdir -p build/owasp"
                dependencycheck additionalArguments: '--project plastinforme --scan ./ --data /home/jenkins/security/owasp-nvd/ --out build/owasp/dependency-check-report.xml --format XML', odcInstallation: 'OWASP-DC'
                dependencyCheckPublisher pattern: 'build/owasp/dependency-check-report.xml'
            }
        }     
    }
}

