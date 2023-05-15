// console.log("http://localhost:8080/uploaded/")



async function getPapers(){

	const items= await fetch('/paper-list', method={
		method:'GET',
		mode:'no-cors',
	}).then((response)=>(response.json()
								.then((str)=>(JSON.parse(str))))
			.then((items)=>(displayPapers(items))))
}

function displayPapers(paper_list){
    console.log(paper_list)
    i =1;
	for (var paper of paper_list){			
		
			// console.log( photo)
			parentDiv=document.getElementsByClassName("paper-collection")
			// console.log(parentDiv[i%3])
			paper_tag=document.createElement('embed')
            console.log(paper_tag)
			paper_tag.src='uploaded/papers/' + paper

            parentDiv[0].appendChild(paper_tag)
			i++;
		}
    // gallery.appendChild(parentDiv)
}


getPapers()