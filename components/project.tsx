import Image from "next/image"
import { IProject } from "@/types"
import { FC } from "react"

const Project: FC<{ project: IProject }> = ({ project: { title, description, img, link } }) => {
    return (
        <div className="border border-gray-300 rounded-[10px] bg-white overflow-hidden flex flex-col p-2 pb-4 gap-4">
            <div
                className="relative w-full rounded-[4px] overflow-hidden"
                style={{ aspectRatio: "41.9 / 23" }}
            >
                <Image
                    src={img?.src || "/placeholder-image.png"}
                    alt={img?.alt || "Project Image"}
                    style={{ objectFit: "contain" }}
                    fill
                />
            </div>
            <div className="">
                <h3 className=" text-gray-800 mb-2 font-semibold">{title}</h3>
                <p className=" text-sm font-normal text-slate-500">{description}</p>
            </div>
        </div>
    )
}

export default Project
