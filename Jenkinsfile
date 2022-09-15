pipeline {
  agent any
  stages {
    stage("build") {
      steps {
        echo 'building the app'
        script {
          def test = 2+2>3 ? 'cool':'not cool'
          echo test
//         sh 'npm install'
//         sh 'npm build'
      }
    }
    stage("test") {
      steps {
        echo 'Testing the app'
      }
    }
    stage("deploy") {
      steps {
        echo 'Deploying the app'
      }
    }
  }
}
