import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListCourse() {
    async function deleteCourse(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from courses where id=${id}`
        revalidatePath("/admin/course")
    }
    const { rows } = await sql`SELECT * from courses`;
    return (
        <div>
            <h1 className="text-center text-white">Lista de Cursos</h1>

            <table>
                <thead>
                    <tr> <td>Título do Curso</td> <td>Descrição</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((course) => {
                            return (
                                <tr key={course.id}><td>{course.title}</td> <td>{course.description}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={course.id}/>   
                                    <button formAction={deleteCourse}>Excluir</button>
                                    </form>
                                
                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}