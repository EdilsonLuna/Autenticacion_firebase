const btnDescargarExcel = document.getElementById('btnDescargarExcel');
btnDescargarExcel.addEventListener('click',async(e)=>{
        try {
            //fetch al api
            const response = await fetch('http://localhost:4000/api/downloadExcel');
            const blob = await response.blob();

            // Crear un enlace para el archivo
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Empeños.xlsx'); // Nombre del archivo a descargar
            document.body.appendChild(link);

            // Simular clic en el enlace para iniciar la descarga
            link.click();

            // Limpiar el objeto URL creado
            window.URL.revokeObjectURL(url);
            
        } catch (error) {
            console.log("Ha ocurrido un error en la consulta al api");
            console.error(error);
        }
    }
)