const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click',(e)=>{
    e.preventDefault();
    const useremail = document.getElementById('txtemail').value || null;
    const userpassword = document.getElementById('txtpassword').value || null;
    if(useremail == null || userpassword == null){
        alert("compruebe todos los datos");
    }else{
        //Se consume el api para validar los datos en firebase 
        //construccion del json con la informacion del usuario
        const userInfo = {
            "password": userpassword,
            "email": useremail
        }
        //cuerpo de la peticion
        const requestOptions = {
            method : "POST",
            headers : {
                'Content-type': 'application/json'
            },
            body : JSON.stringify(userInfo) 
        }

        try {
            //fetch al api
            fetch('http://localhost:4000/api/loginUser',requestOptions)
                .then(response => response.json())
                .then(data =>{
                    if(data.status != "ok"){
                        if(data.message.code == "auth/invalid-credential"){
                            alert("Correo o contraseña incorrectas. Intente nuevamente");
                        }
                    }else{
                        window.location.href="../html/descargarExcel.html"
                    }
                })
                .catch(error =>{
                    console.log("Ha ocurrido un error",error);
                })
        } catch (error) {
            console.log("Ha ocurrido un error en la consulta al api");
            console.log(error);
        }

        
    }
})