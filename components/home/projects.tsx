import { projects } from "@/constants"
import Project from "../project"

export default function Projects() {
    return (
        <section>
            <p className="mb-4">{"Here are highlights of my recent projects"}</p>

            <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                {projects.map((project) => (
                    <Project key={project.title} project={project} />
                ))}
            </div>
        </section>
    )
}
