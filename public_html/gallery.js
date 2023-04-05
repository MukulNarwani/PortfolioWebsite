// console.log("http://localhost:8080/uploaded/")



async function getPhotos(){

	const photos= await fetch('/image-list', method={
		method:'GET',
		mode:'no-cors',
	}).then((response)=>(response.json()
								.then((str)=>(JSON.parse(str))))
			.then((photos)=>(displayphotos(photos))))
}

function displayphotos(photo_list){
	i =1;
	for (var photo of photo_list){			
		
			// console.log( photo)
			parentDiv=document.getElementsByClassName('column')
			// console.log(parentDiv[i%3])
			img_tag=document.createElement('img')
			gallery=document.getElementById('gallery')
			img_tag.src='uploaded/' + photo
			parentDiv[i%3].appendChild(img_tag)
			// gallery.appendChild(parentDiv)
			i++;
		}
}	


getPhotos()