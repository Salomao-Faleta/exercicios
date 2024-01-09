import { Student } from "@/types/Students"

type Props = {
    students: Student[];
}

export function StudentTable({ students }:Props){
    return(
        <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="border-bottom border-gray-600 bg-gray-600 text-white">
                    <th className="p-3">Name</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Grade 1</th>
                    <th className="p-3">Grade 2</th>
                    <th className="p-3">FInal Grade</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    )
}