export default function NewCourse() {
    async function saveCourse(){
        "use server"
        console.log("Acessou a função")
    }
    return (
        <div>
            <h1 className="text-white text-center text-4xl">Cadastrar Cursos</h1>
            <form>
                <input type="text" name="title" placeholder="Digite o Título do Curso"/><br/><br/>
                <input type="text" name="description" placeholder="Digite a Descriçao do curso"/> <br/><br/>
                <input type="text" name="url" placeholder="Digite a url da imagem" /><br/><br/>
                <button formAction={saveCourse} className="text-white">Salvar</button>
            </form>

        </div>

    )
}