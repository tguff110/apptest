node {
	def app
	stage('Cloning Git') {
	checkout scm
	}
	stage('Build-and-Tag') {
	
	app = docker.build("tguff110/juice")
	}

	stage('Post-to-dockerhub') {
	
	
	docker.withRegistry('https://registry.hub.docker.com', 'docker_creds') {
		app.push("latest")
                 
		} 

	}
 
	stage('Pull-image-server') {
	

	sh "docker-compose down"
	sh "docker-compose up -d" 

	}

	
}
