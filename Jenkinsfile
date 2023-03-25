node(""){
    
stage('1.initiation'){
sh "echo electron-secure-defaults application"
}
stage('2.GitClone'){
sh "echo Git clone begins"
sh "echo cloning into jenkins"
git credentialsId: 'Github-Cred1', url: 'https://github.com/jennifermhaiki/electron-secure-defaults.git'
git 'https://github.com/jennifermhaiki/electron-secure-defaults.git'
}
stage('3.Build'){
env.NODEJS_HOME = "${tool 'NodeJS'}"
env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
sh "echo build package"
sh "npm install"
}
stage('4.Test'){
env.NODEJS_HOME = "${tool 'NodeJS'}"
env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
sh "echo The following command tests that your simple Node.js application renders satisfactorily"
sh "npm run"
}
stage ('5.Email Notification') {
always {
emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
}
}
}
