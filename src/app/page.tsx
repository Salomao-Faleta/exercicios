import { StudentTable } from "@/components/studentTable";
import { students } from "@/data/Students";

function Page() {
    return (
        <div className="container mx-auto">
            <h1 className="text-5xl mb-5">Lista de estudantes</h1>
            <StudentTable students={students}/>
        </div>

    );
}

export default Page;