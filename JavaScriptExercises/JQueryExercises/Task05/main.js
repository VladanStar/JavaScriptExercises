$(document).ready(function(){
			
			
    $("input[name='username']").blur(function(){
        if($(this).val()==""){
            $(this).next().addClass('greska').text("Ovo polje je obavezno!");
        }
        else
            $(this).next().removeClass('greska').text("");
            
    });
    

    $("input[name='email']").blur(function(){
        if($(this).val()==""){
            if(!$(this).next().hasClass('greska'))
                
                $(this).after("<span class='greska'> Ovo polje je obavezno! </span>");
        }
        else
            $(this).next('.greska').remove();
    });
    
    
    $("input[name='sifra1']").keyup(function(){
        if($(this).val().length<=5){
            if(!$(this).next().hasClass('greska'))
                                
                $(this).after("<span class='greska'> kratka šifra! </span>");
            
        }
        else
            $(this).next('.greska').remove();
    });
    
    $("input:checkbox").change(function (){
        
        if($(this).is(':checked')){
            
            $('div').slideDown(1000);
        }
        else{
            
            $('div').slideUp(1000);
        }
        
    });
    
    
    /*
        ako je povratna vrednost rutine false, podaci se nece poslati
        ako je povratna vrednost rutine true, podaci ce biti poslati na obradu
    */
    
    $('form').submit(function(){
    
        var username;
        username=$("input[name='username']").val();
        if(username==""){
            $("#izvestaj").text("Korisničko ime je obavezno!");
            $("input[name='username']").focus();
            return false;
        }
        
        var email;
        email=$("input[name='email']").val();
        if(email==""){
            $("#izvestaj").text("E-mail adresa je obavezna!");
            $("input[name='email']").focus();
            return false;
        }
        
        //regularni izraz za proveru sifre
        var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
        
        if(!email.match(emailRegex)){
            $("#izvestaj").text("Uneta e-mail adresa nije korektna!");
            return false;
            
        }
            
        var s1;
        var s2;
        s1=$("input[name='sifra1']").val();
        s2=$("input[name='sifra2']").val();
        if(s1=="" || s1.length<5 || s2=="" || s1!=s2){
            $("#izvestaj").text("Ponovo popunite polja za šifru!");
            $("input[name='sifra1']").focus();
            return false;
        }

        
        if ($("input:checkbox").is(":checked")){
            var vesti;
            var oblast;
            
            vesti=$("input:radio[name='vesti']:checked").val();
            
            oblast=$("select[name='oblast']").val();
            if(oblast=="--"){
                window.alert("Niste odabrali oblast za vesti!");
                return false;
            }			
        }

        
        
        $("#izvestaj").text("Hvala što ste se prijavili!");
        
        return true; 
    });
    
    
    
});