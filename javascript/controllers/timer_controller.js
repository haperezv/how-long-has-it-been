import { Controller } from 'stimulus'

export default class extends Controller {
    static values = {
        initialDate: String
    }

    connect(){
        this.initialDateValue = new Date()

        setInterval(() => {
         // Esta funcion se ejecuta cada segundo
         let message  = this.distanceTimeWords(
            this.initialDateValue,
            new Date()
         )

         this.element.querySelector(".message").innerHTML = message
        }, 1000)
    }

    distanceTimeWords(fechaUno, fechaDos){
        fechaUno = Date.parse(fechaUno)
        fechaDos = Date.parse(fechaDos)

        let seconds = Math.floor(( fechaDos - fechaUno) / 1000)   
        let minutes = Math.floor(seconds / 60)
        
        if (minutes === 0 ) return `Hace ${seconds} segundos`
        if(minutes === 60) return `Hace ${minutes} minuto`
        if(minutes < 60) return `Hace ${minutes} minutos`
        if(minutes < 2800) return `Hace ${Math.floor(minutes / 60)}  horas`

    }
}