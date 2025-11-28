import { Card, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import { Tag } from "lucide-react";

type ContentCardProps = {
    description: string
    icon?: React.ReactElement
    children: React.ReactNode
}

export default function ContainerCards({ description, icon, children }: ContentCardProps) {
    return (
        <>
            <Card
                className={clsx(
                    "w-full",
                    "mx-auto",
                    "min-w-[300px]",
                    "sm:max-w-sm",
                    "md:max-w-md",
                    "lg:max-w-4xl",
                    "px-4",
                    "mt-8"
                )}
            >
                <CardTitle className="text-lg font-bold flex gap-2 items-center">{icon} {description}</CardTitle>
                <Card
                    className={clsx(
                        "grid",
                        "grid-cols-2",
                        "gap-4",
                        "px-2",
                        "md:grid-cols-3",
                        "lg:grid-cols-4",
                        "shadow-transparent",
                        "border-0",
                        "px-0"
                    )}
                >                   
                    {children}
                </Card>
            </Card>
        </>
    )
}