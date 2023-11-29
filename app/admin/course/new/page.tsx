import UploadButton from "@/app/components/UploadButton";
import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";

export const revalidate = 0

export default function NewCourse({
  searchParams,
}: {
  searchParams?: {
    url?: string;
  };
}) {

  const urlImage = searchParams?.url || '';

  async function saveCourse(formData: FormData) {
    "use server"
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    await sql`INSERT INTO courses (title, description,url) VALUES(${title}, ${description}, ${urlImage})`
    console.log("Acessou a função")
  }
  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="Digite o Título do Curso" /><br /><br />
        <input type="text" name="description" placeholder="Digite a Descriçao do curso" /> <br /><br />
        <br />
        <UploadButton /> <br />
        <button formAction={saveCourse} className="text-black">Salvar</button>
      </form>
    </div>

  )
}