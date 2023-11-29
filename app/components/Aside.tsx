import { Button } from "@/components/ui/button";

export default function Aside() {
    return (
        <div className="w-1/6">
            <a href="/admin/course"></a>
            <Button variant={"ghost"}>
                <Button> Listar Curso </Button>
                </Button>
                
                
            <a href="/admin/course/new">Cadastrar Curso</a>

        </div>
    )
}