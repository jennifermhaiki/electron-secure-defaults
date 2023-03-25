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
emailext (
      subject: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      body: """<p>SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
        <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>""",
      recipientProviders: [[$class: 'DevelopersRecipientProvider']]
    )
}
}
}
