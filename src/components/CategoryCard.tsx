import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import { lowercase } from "@/lib/utils"

type CategoryCardProps = {
    id: string
    name: string
    imagePath: string
}

export function CategoryCard({
    id,
    name,
    imagePath,
}: CategoryCardProps) {
    return (
        <Card className="flex overflow-hidden flex-col justify-center items-center">
            <div className="relative w-full h-auto aspect-square">
                <Image src={`/categories/${imagePath}`} fill alt={name} className="object-contain p-4" />
            </div>
            <CardHeader>
                <CardTitle className="text-2xl font-mono">{name}</CardTitle>
            </CardHeader>
            <CardFooter>
                <Button asChild size="lg" className="w-full uppercase bg-pink-800 hover:bg-black text-2xl flex flex-col justify-center items-center font-sans mt-2">
                    <Link href={`/categories/${lowercase(name)}`}>see all beatz</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
