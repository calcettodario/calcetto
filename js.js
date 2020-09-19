var nMassimoPrenotazioni = 16;
var nCorrentePersone = 0;
var curr = document.getElementById("current");
var limit = document.getElementById("limit");
var quantity = document.getElementById("quantity");
var pDaCasa = document.getElementById("pDaCasa");
var dragEvent = "";
var CORS = "https://cors-anywhere.herokuapp.com/";
var loadedData="\n";
var timesClicked = 0;


window.onload = function(e) {
	
	curr.innerHTML = nCorrentePersone;
	limit.innerHTML = nMassimoPrenotazioni;
	var d = new Date();
	var giorno=d.addDays(8-d.getDay());
	var myDateString = ("0"+giorno.getDate()).slice(-2)+"/"+("0"+(giorno.getMonth()+1)).slice(-2);
	document.getElementById("giornoCalcetto").innerHTML=myDateString;

	loadData(false);
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

increaseNumber = function(isUp){
	quantity=document.getElementById("quantity");

	if(isUp){
		if(parseInt(quantity.value))
		{
			quantity.value= parseInt(quantity.value)+1;
		}
		else{
			quantity.value= 1
		}
		
	}else{
		if(parseInt(quantity.value))
		{
			quantity.value = parseInt(quantity.value)-1;
			if(quantity.value==0) quantity.value=1;
		}
		else{
			quantity.value = 1
		}
	}
}

changeLabel = function(){
	document.getElementById("prenota").innerHTML = document.getElementById("daCasa").checked ? "Prenota da Casa " : "Prenota posto in Chiesa";
}
book = function(){
	var nome = document.getElementById("name");
	var fromHome = document.getElementById("daCasa");
	var quantita = 1;
	var pDaCasa = document.getElementById("pDaCasa");

	if(validInputs(nome.value,quantita)){
		var json = JSON.stringify({'famiglia': nome.value})

		var uploadURL ="https://api.github.com/repos/calcettodario/calcetto/contents/data.txt";
		var newData = atob(loadedData.content)+"\n"+json;
		$.ajax({
		 	type: "PUT",
		 	url: uploadURL,
		  	contentType: "application/json",
		  	dataType: "json",
		  	headers: {
		  		    "accept": "application/vnd.github.v3+json",
				    "Authorization": "Basic bWFsYWdvbml1czo0NjJhMjZjZjA3ZTMxMTU5NzkyMzFmNjkzNjIxOTk4NzdmYmQ3ODAx",
				    "Content-Type": "application/json",
				},
		  	data: JSON.stringify({
    			"message": nome.value+" just subscribed",
    			"content": btoa(newData),
    			"sha": loadedData.sha
		    }),
		  
		})
		  .done(function( msg ) {
		    console.log( "Data Saved: " + json );
		    document.getElementById("book_success").classList.remove("fade");
          	setTimeout(function(){ loadData(true);}, 1500);
		  });



		/*jQuery.ajax({
	    type: "POST",
	    url: 'book.php',
	    dataType: 'json',
	    data: {functionname: 'book', arguments: json},

	    success: function (obj, textstatus) {
	                  if( !('error' in obj) ) {
	                      yourVariable = obj.result;
	                      loadData();
	                  }
	                  else {
	                      console.log(obj.error);
	                  }
	            }
		});*/

		nome.value=null;
	}
	
}

drag = function(event){
	dragEvent = event.target;
}

drop = function(event){
	if(event.target.id=="logo"){
		if(dragEvent.id=="availability"){
			var json = "{}";
			jQuery.ajax({
		    type: "POST",
		    url: 'book.php',
		    dataType: 'json',
		    data: {functionname: 'delete-all', arguments: json},

		    success: function (obj, textstatus) {
		                  if( !('error' in obj) ) {
		                      yourVariable = obj.result;
		                      loadData(true);
		                  }
		                  else {
		                      console.log(obj.error);
		                  }
		            }
			});
			return;
		}
	}
	if(event.target.it="logo"){
		timesClicked += 1;
		if(timesClicked==10){
			$("#exampleModal").modal();
			var list = data.split(/\r?\n/);
	      	var li = null;
	      	var lista = null;
	      	var jsonRow = null;
	      	var div = null;
	      	var checkbox = null;
	      	var index = 0;
	      	var lista = document.getElementById('admin_list');
	      	lista.innerHTML = "";
			for(row of list){
	      		if(row==""){
	      			continue;
	      		}
	      		jsonRow = JSON.parse(row);

	      		//init row
	      		div = document.createElement("div");
	      		div.classList.add("row");
	      		//init checkbox
	      		checkbox = document.createElement('input');
				checkbox.type = "checkbox";
				checkbox.name = "name_"+jsonRow.famiglia;
				checkbox.value = "famiglia_"+jsonRow.famiglia;
				checkbox.id = "checkBox_"+jsonRow.famiglia;
				checkbox.checked = jsonRow.pagato;
				checkbox.jsonRow = jsonRow;
				checkbox.classList.add("col-6");
				checkbox.index=index;
				checkbox.addEventListener("change", function(){
					console.log(this.jsonRow);
					document.getElementById("admin_list").getElementsByTagName("li")[this.index].innerHTML = "Nome: "+this.jsonRow.famiglia+ " ha pagato: " + (this.checked ? "si" : "no");
				})
	      		
	      		//init li
	      		li = document.createElement("li");
	      		li.classList.add("col-6");
	      		li.id=jsonRow.famiglia;
	      		li.pagato = jsonRow.pagato ? "si" : "no";
	      		li.innerHTML = "Nome: "+jsonRow.famiglia+ " ha pagato: " + (jsonRow.pagato ? "si" : "no");

				div.appendChild(li);
				div.appendChild(checkbox);
				lista.appendChild(div);
				index++;
	      	}
			timesClicked=0;
		}
	}
	if(event.target.id=="annunci-container"){
		if(dragEvent.id=="availability"){
			var annuncio = prompt("Please enter your name:", "Sostituiscimi con il tuo annuncio");
			var msg="";
			if (person == null || person == "") {
			    msg = "User cancelled the prompt.";
			} else {
			    var json = annuncio;
				jQuery.ajax({
			    type: "POST",
			    url: 'book.php',
			    dataType: 'json',
			    data: {functionname: 'delete-all', arguments: json},

			    success: function (obj, textstatus) {
			                  if( !('error' in obj) ) {
			                      yourVariable = obj.result;
			                      document.getElementById("book_success").classList.remove("fade");
			                      loadData(true);
			                      setTimeout(function(){ document.getElementById("book_success").classList.add("fade"); }, 3000);
			                      
			                  }
			                  else {
			                      console.log(obj.error);
			                  }
			            }
				});
			}
		}
	}
	dragEvent = "";
}

loadData = function(forceReload){
	
	var json = "{}";
	jQuery.ajax({
    type: "GET",
    url: "https://api.github.com/repos/calcettodario/calcetto/contents/data.txt",
    dataType: 'json',
    success: function (obj, textstatus) {
      	if( !('error' in obj) ) {
	      	loadedData=obj;
	      	data = atob(obj.content);
	      	if(data === false){
	      		return;
	      	}
	      	// fill the table accordingly
	      	var list = data.split(/\r?\n/);
	      	var li = null;
	      	var lista = null;
	      	jsonRow = null;
	      	var div = null;
	      	var span = null;

	      	cleanLocalLists();
	      	for(row of list){
	      		if(row==""){
	      			continue;
	      		}

	      		jsonRow = JSON.parse(row);

	      		div = document.createElement("div");
	      		div.className="row "+(jsonRow.pagato ? "pagato" : "");

	      		span = document.createElement("span");
	      		span.classList.add("col-6");
	      		span.innerHTML = (jsonRow.pagato ? "Ha pagato": "Non ha ancora pagato");
	      		li = document.createElement("li");
	      		li.classList.add("col-6");
	      		li.id=jsonRow.famiglia;
	      		li.innerHTML = "Nome: "+jsonRow.famiglia;
				lista = document.getElementById('booked_list');
				curr.innerHTML = (parseInt(curr.innerHTML)+1);
				div.appendChild(li);
				div.appendChild(span);
				lista.appendChild(div);
	      	}
			
      	}
      	else {
          		console.log(obj.error);
  			}
  			if(forceReload) reload();  //distruggi la cache yeah
        }

	});

	
}

reload = function (){
	window.location.search = "v=" + Math.random();
}

cleanLocalLists = function(){
	document.getElementById("booked_list").innerHTML="";
	document.getElementById("booked_list_home").innerHTML="";
  	curr.innerHTML="0";
  	pDaCasa.innerHTML="0";
}

validInputs = function(nome,quantita){
	var ret = true;
	if(nome === ""){
		alert("perfavore inserire un nome");
		return false;
	}
	if(parseInt(curr.innerHTML)+quantita > nMassimoPrenotazioni){
		alert("Impossibile prenotare!! Il numero massimo di prenotazioni '"+nMassimoPrenotazioni+"' è stato superato");
		return false;
	}
	var churchList = document.getElementById("booked_list").children;
	for(var i=0; i< churchList.length;i++){
		if(churchList[i].id === nome){
			alert("Nome gia inserito! Perfavore scegliere un altro nome");
			ret= false;
			return;
		}
	}

	var homeList = document.getElementById("booked_list_home").children;
	for(var i=0; i< homeList.length;i++){
		if(homeList[i].id === nome){
			alert("Nome gia inserito! Perfavore scegliere un altro nome");
			ret = false;
			return;

		}
	}
	return ret;
}

deleteRecords = function(){
	var uploadURL = "https://api.github.com/repos/calcettodario/calcetto/contents/data.txt";
	var newData = "\n";
	$.ajax({
		type: "PUT",
		url: uploadURL,
		contentType: "application/json",
		dataType: "json",
		headers: {
			    "accept": "application/vnd.github.v3+json",
			    "Authorization": "Basic bWFsYWdvbml1czo0NjJhMjZjZjA3ZTMxMTU5NzkyMzFmNjkzNjIxOTk4NzdmYmQ3ODAx",
			    "Content-Type": "application/json",
			},
		data: JSON.stringify({
		"message": "records were cleared",
		"content": btoa(newData),
		"sha": loadedData.sha
	    }),

	})
	  .done(function( msg ) {
	    console.log( "Data Cleared! ");
	    loadData();
	  });
	
}

saveChanges = function(){
	console.log("salva");

	var rows = document.getElementById("admin_list").getElementsByTagName("div");
	var content="\n";
	for (var i = 0 ; i < rows.length; i++) {
		content += "\n"+JSON.stringify({'famiglia': rows[i].children[0].id,'pagato': rows[i].children[1].checked});
	}
		var uploadURL ="https://api.github.com/repos/calcettodario/calcetto/contents/data.txt";
		var newData = content;
		$.ajax({
		 	type: "PUT",
		 	url: uploadURL,
		  	contentType: "application/json",
		  	dataType: "json",
		  	headers: {
		  		    "accept": "application/vnd.github.v3+json",
				    "Authorization": "Basic bWFsYWdvbml1czo0NjJhMjZjZjA3ZTMxMTU5NzkyMzFmNjkzNjIxOTk4NzdmYmQ3ODAx",
				    "Content-Type": "application/json",
				},
		  	data: JSON.stringify({
    			"message": "payment changes",
    			"content": btoa(newData),
    			"sha": loadedData.sha
		    }),
		  
		})
		  .done(function( msg ) {
		    document.getElementById("book_success").classList.remove("fade");
          	setTimeout(function(){ loadData(true);}, 1500);
		  });
}

deleteRecords = function(){
	if(confirm("premere ok per cancellare tutti dalla lista")){
		deleteRecords();
	};
}
