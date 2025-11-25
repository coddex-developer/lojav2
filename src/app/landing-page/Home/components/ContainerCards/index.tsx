import { Card, CardTitle } from "@/components/ui/card";
import clsx from "clsx";

type ContentCardProps = {
    description: string
    children?: React.ReactNode
}

export default function ContainerCards({ description, children }: ContentCardProps) {
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
                    "px-2",
                    "mt-8",
                    "border-0",
                )}
            >
                <CardTitle>{description}</CardTitle>
                <Card
                    className={clsx(
                        "grid",
                        "grid-cols-2",
                        "gap-2",
                        "px-2",
                        "md:grid-cols-3",
                        "lg:grid-cols-4",
                        "shadow-transparent",
                        "border-transparent",
                        "px-0"
                    )}
                >
                    {children}
                </Card>
            </Card>
        </>
    )
}