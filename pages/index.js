import { useState } from "react";




function Home() {

    const [step, setStep] = useState(0)

    switch (step) {
        case 0:
            return (

                <>
                    <h1>Ta preparada para uma grande aventura?</h1>

                    <div>
                        <button onClick={() => setStep(1)}>Sim</button>
                        <button onClick={() => alert("Tente novamente!")}>Não</button>
                    </div>

                </>
            )

        case 1:
            return (
                <>
                    <h1>Qual seu animal favorito?</h1>

                    <div>
                        <button onClick={() => alert("Tente novamente!")}>🐶</button>
                        <button onClick={() => setStep(2)}>🐈</button>
                    </div>

                </>
            )
        case 2:
            return (
                <>
                    <h1>Já sonhou em voar?</h1>

                    <div>
                        <button onClick={() => alert("Tente novamente!")}>NÃO</button>
                        <button onClick={() => setStep(3)}>SIM</button>
                    </div>

                </>
            )

        case 3:
            return (
                <>
                    <h1>Preparada para voar?</h1>

                    <div>
                        <button onClick={() => alert("Tente novamente!")}>NÃO</button>
                        <button onClick={() => setStep(4)}>SIM</button>
                    </div>

                </>
            )

        case 4:
            return (
                <>
                    <h1>Então vamos voar!!!!</h1>

                    <h1>Parabénsssss!! 🎉🎉🎉🎉🎉🎉🎉🎉🎉</h1>
                    <h3>Você acabou de ganhar um pulo no .....</h3>


                    <iframe width="420" height="315"
                        src="https://www.youtube.com/embed/--4q9oZ0UTs?autoplay=1">
                    </iframe>

                </>
            )


        default:
            break;

    }

}

export default Home;