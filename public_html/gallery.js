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
		for (var photo of  photo_list){
			console.log( photo)
			img_tag=document.createElement('img')
			gallery=document.getElementById('gallery')
			img_tag.src='uploaded/' + photo
			gallery.appendChild(img_tag)
		}
}	


getPhotos()