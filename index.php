<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css.css">

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> 

<div class="container" onmouseup="drop(event)" onmousedown="drag(event)">
	<div  class="container img_container">
		<div class="logo_span"></div>
	</div>
	<h1>Prenotazioni Calcetto</h1>
	<h5>Prenotazioni per il giorno <span id="giornoCalcetto"></span></h5>
	<div> 
		<div class="input_container">
			<label for="name">Nome</label><input type="text" id="name" name="name">
		  	<div class="hide">
		  		<label for="quantity">Numero</label><input type="number" id="quantity" name="quantity" min="1">
		  		<img src="up.png" id="up" onclick="increaseNumber(true)">
		  		<img src="up.png" id="down" onclick="increaseNumber(false)">
		  	</div>
		  	<div class="hide">
		  		<label for="daCasa">da Casa</label>
		  		<label class="switch" onclick="changeLabel()">
	  				<input id="daCasa" name="daCasa"type="checkbox">
	 				<span class="slider round"></span>
	 			</label>
 			</div>
		  	

		</div>
		<p>
		<div onclick="book()" href="#" id="prenota" class="btn btn-primary"> Prenota posto</div>
	</div>

	<div id="availability" class="availabilty" >
		<ul id="booked_list"></ul>
		<ul id="booked_list_home"></ul>
		</p>
		Posti prenotati:
		<span id="current"></span> /
		<span id="limit"></span><br>
		<span id="pDaCasa" class="hide">0</span>
	</div>

	<p class="annunci-container">
  		<a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Guarda primo annuncio</a>
  		<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Guarda secondo annuncio</button>
 		<button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Guarda entrambi gli annunci</button>
	</p>
	<div class="row">
  		<div class="col">
    		<div class="collapse multi-collapse" id="multiCollapseExample1">
      			<div class="card card-body">
        			Miraccomando ricordate di mantenere le distanze di sicurezza e non dimenticatevi la mascherina a casa che senn&ograve; &egrave; un casino!
      			</div>
    		</div>
  		</div>
  		<div class="col">
    		<div class="collapse multi-collapse" id="multiCollapseExample2">
      			<div class="card card-body">
      				Se portate i biscotti ricordate di condividermeli grazie
      			</div>
    		</div>
  		</div>
	</div>

</div>



<div class="jumbotron jumbotron-fluid blue" onmousedown="drag(event)">
	<div class="container">
		<span id="annunci">Fate i bravi e ricordatevi che falciare gli amici non &egrave; sportivo.... <br>Ma pu&ograve; far vincere delle partite!</span>
	</div>
</div>

<div class="alert alert-success fade" id="book_success" role="alert">
 La tua prenotazione &egrave; andata a buon fine.
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <ul id="admin_list"></ul>
      </div>
      <div class="modal-footer">
      	<button type="button" class="btn btn-delete btn-danger" onclick="confirmDeletion()">Cancella Tutto</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Chiudi</button>
        <button type="button" class="btn btn-primary" onclick="saveChanges()">Salva</button>
      </div>
    </div>
  </div>
</div>


<script type="text/javascript" src="jQuery.js"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

<script type="text/javascript" src="js.js"></script>

