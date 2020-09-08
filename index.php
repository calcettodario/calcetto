<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css.css">

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"> 

<div class="container" onmouseup="drop(event)" onmousedown="drag(event)">
	<div  class="container img_container">
		<div class="logo_span"></div>
		<div id="logo" class="logo"></div>
	</div>
	<h1>Rione di Merate</h1>
	<h5>Riunione Sacramentale del <span id="giornoSacramentale"></span></h5>
	<div> 
		<div class="input_container">
			<label for="name">Famiglia</label><input type="text" id="name" name="name">
		  	<div>
		  		<label for="quantity">Numero</label><input type="number" id="quantity" name="quantity" min="1">
		  		<img src="up.png" id="up" onclick="increaseNumber(true)">
		  		<img src="up.png" id="down" onclick="increaseNumber(false)">
		  	</div>
		  	<div>
		  		<label for="daCasa">da Casa</label>
		  		<label class="switch" onclick="changeLabel()">
	  				<input id="daCasa" name="daCasa"type="checkbox">
	 				<span class="slider round"></span>
	 			</label>
 			</div>
		  	

		</div>
		<p>
		<div onclick="book()" href="#" id="prenota" class="btn btn-primary"> Prenota posto in Chiesa</div>
	</div>

	<div id="availability" class="availabilty" >
		<ul id="booked_list"></ul>
		<ul id="booked_list_home"></ul>
		</p>
		Posti prenotati in chiesa:
		<span id="current"></span> /
		<span id="limit"></span><br>
		Partecipazione da casa: <span id="pDaCasa">0</span>
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
		<span id="annunci">L’accesso ai locali della Chiesa dovrà essere contingentato e rispettare quanto richiesto dalle
							normative per i luoghi pubblici in emergenza Covid.<br> Questo significa che:
							<ul>
								<li>In chiesa potranno accedere un massimo di 35 persone.</li>
								<li>Per poter entrare bisogna avere mascherina e guanti.</li>
								<li>All’ingresso verrà misurata la temperatura.</li>
								<li>All’interno della Chiesa non si potrà fare assembramenti e si dovrà mantenere le distanze.</li>
								<li>In cappella le sedie saranno distanziate. le persone dello stesso gruppo famigliare potranno stare vicine.</li>
							</ul>
							
							Vi preghiamo di arrivare in Chiesa con almeno 10 minuti di anticipo, in modo da avere il tempo di
							gestire l’accoglienza ed iniziare in orario la riunione. ☻</span>
	</div>
</div>

<div class="alert alert-success fade" id="book_success" role="alert">
 La tua prenotazione &egrave; andata a buon fine.
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
<script type="text/javascript" src="jQuery.js"></script>
<script type="text/javascript" src="js.js"></script>

