import { Controller } from 'stimulus'

class HelloController extends Controller {
    connect(){
        console.log("Hola desde Stimulus")

        this.element.innerHTML = "Hola mundo"
    }
}

export default HelloController