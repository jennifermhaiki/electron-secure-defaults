const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://localhost:9000/account/security',
    token : "sqa_3fb45a4f900680f2145e60eead5c182f6211ba61",
    options: {
      'sonar.projectName': 'My App',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': 'src',
      'sonar.tests': 'test'
    }
  },
  () => process.exit()
)
