$(document).ready(function(){

    //Slider
    $(function(){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive:true,
            pager:true
        });
    });

    //Posts
    var posts = [
        {
            title: "Prueba de titulo 1",
            fecha: 'Publicado el dia '+moment().format("dddd")+' del mes '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled's standard dummy text ever since the 1500s"
        },
        {
            title: "Prueba de titulo 2",
            fecha: 'Publicado el dia '+moment().format("dddd")+' del mes '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
        },
        {
            title: "Prueba de titulo 3",
            fecha: 'Publicado el dia '+moment().format("dddd")+' del mes '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
        },
        {
            title: "Prueba de titulo 4",
            fecha: 'Publicado el dia '+moment().format("dddd")+' del mes '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
        },
        {
            title: "Prueba de titulo 5",
            fecha: 'Publicado el dia '+moment().format("dddd")+' del mes '+moment().format("MMMM")+' del año '+moment().format("YYYY"),
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
        }
    ];

    /*
    for(let post in posts){
        console.log(posts[post].title);
            
            var cajaPosts = $('#posts');

            var h2 = document.createElement('H2');
            var span = document.createElement('SPAN');
            var p = document.createElement('p')

            h2.append(posts[post].title);
            span.append(posts[post].fecha);
            p.append(posts[post].content);
            
            cajaPosts.append(h2);
            cajaPosts.append(span);
            cajaPosts.append(p);
    };
    */
   posts.forEach((item,index) =>{
        var cajaContenido = $('#posts');
        var post = `
            <h2>${item.title}</h2>
            <span>${item.fecha}</span>
            <p>${item.content}</p>
            <button id="button">Leer mas</button>
        `
        cajaContenido.append(post);
    });

    //Cambiador de temas
    $('#rojo').click(function(){
        var theme = $('#theme')
        theme.attr("href", "css/red.css");
    });

    $('#verde').click(function(){
        var theme = $('#theme')
        theme.attr("href", "css/green.css");
    });

    $('#azul').click(function(){
        var theme = $('#theme')
        theme.attr("href", "css/blue.css");
    });
    
    //Scroll Automatico
    $('.subir').click(function(e){
    

        $('html','body').animate({
            scrollTop: "300px"
        }, 5000)

    });

    //Validacion del formulario
    var nombreRegis = $('#nombreRegis');
    var apellidoRegis = $('#apellidoRegis');
    var phone = $('#phone');
    var correoRegis = $('#correoRegis');
    var contrasenaRegis = $('#contrasenaRegis');

    
    $('#registracion').submit(function(e){
        e.preventDefault();

        if(isNaN(nombreRegis.val()) && isNaN(apellidoRegis.val()) && phone.val() != "" && correoRegis.val() != "" && contrasenaRegis.val() != ""){
            console.log('true');

            var caja_exito = $('.exito');
            var exito = `
                <p style="color:#00F24F;font-size:22px;text-transform:uppercase">Datos enviados correctamente</p>
            `
            caja_exito.append(exito);

        }else{
              var caja_error = $('.error');
              var error = `
              <p style="color:red;font-size:16px;text-transform:uppercase">Complete todos los campos o ingrese otros datos</p>
              `
              caja_error.append(error);                                                              
        }
    });

    //Sobre mi - Acordeon 
    $(function(){
        $('#accordion').accordion();
    });

    //Secion reloj 
    function mostrarReloj(){
        var today = new Date();
        var hora = today.getHours();
        var minutos = today.getMinutes();
        var segundos = today.getSeconds();

        minutos = checkTime(minutos);
        segundos = checkTime(segundos);

        var agregar =  document.getElementById('txt').innerHTML = hora+":"+minutos+":"+segundos;

    };
    window.onload = function(){
        setInterval(() => {
            mostrarReloj();
        }, 500);
    }
    function checkTime(i){
        if(i<10){
            i="0"+i;
        }

        return i;
    }





   
 




    




 


});
