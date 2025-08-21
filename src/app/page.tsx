import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { AuroraText } from "@/components/magicui/aurora-text";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import reportIllustration from "../../public/images/resume-genius-9si2noVCVH8-unsplash.jpg";
import open from "../../public/images/share (1).png";
import profile from "../../public/images/profile-user.png";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";

const reviews = [
    {
        name: "Ananya Sharma",
        username: "@ananya_researcher",
        body: "The AI Report Generator saved me hours of work. I just uploaded my notes and it structured everything into a professional report instantly.",
    },
    {
        name: "Rohit Verma",
        username: "@rohit_student",
        body: "As a student, I often struggle with formatting reports. This tool made it so easy — clean layout, accurate citations, and ready to submit!",
    },
    {
        name: "Priya Mehta",
        username: "@priya_manager",
        body: "I used it for project documentation, and it organized data into clear sections. The AI summaries were sharp and to the point.",
    },
    {
        name: "Siddharth Rao",
        username: "@siddharth_consultant",
        body: "The best part is customization. I could generate detailed or concise reports based on the audience. It really improved my client presentations.",
    },
    {
        name: "Ishita Kulkarni",
        username: "@ishita_writer",
        body: "Normally, I spend hours editing reports. This generator handled formatting, flow, and even suggested professional headings.",
    },
    {
        name: "Amit Bansal",
        username: "@amit_professor",
        body: "I recommend this to my students. Instead of wasting time on formatting, they can focus on research — the tool handles the structure flawlessly.",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    name,
    username,
    body,
}: {
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={profile}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {username}
                    </p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const steps = [
    {
        title: "Step 1: Enter Report Details",
        description:
            "Provide a topic for your report and select the desired type (e.g., Comprehensive Analysis, Market Report, Research Report). (API: /generate-report)",
    },
    {
        title: "Step 2: Configure Options",
        description:
            "Adjust report length, choose whether to include charts or sources, and optionally enable CrewAI for collaborative generation.",
    },
    {
        title: "Step 3: Generate Draft",
        description:
            "The AI compiles structured sections such as Introduction, Analysis, Insights, and Conclusion into a polished draft. (API: /generate-report or /generate-report-crew)",
    },
    {
        title: "Step 4: Review & Edit",
        description:
            "Preview the generated report, formatted in Markdown. Make edits or refinements as needed before exporting.",
    },
    {
        title: "Step 5: Export & Share",
        description:
            "Download the final report in Markdown or PDF, copy it directly, or integrate it into your workflow. (API: /export-report)",
    },
];

export default function Home() {
    return (
        <main className="mx-auto bg-zinc-100">
            <InteractiveGridPattern
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
            />
            <section className="pt-20 z-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
                {/* Badge */}
                <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-2 py-1.5 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white">
                    <h1 className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-full h-8 w-8 flex justify-center items-center">
                        📊
                    </h1>

                    <div className="text-sm font-light px-3 text-zinc-600">
                        <AuroraText>
                            AI-Powered Report Generator Agent
                        </AuroraText>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-5xl z-20 md:text-7xl font-bold tracking-tight leading-tight text-primary mb-6">
                    Generate <AuroraText>Professional Reports</AuroraText> in
                    Minutes with AI
                </h1>

                {/* Subheading */}
                <TextAnimate
                    animation="slideUp"
                    by="word"
                    className="text-lg z-20 md:text-xl text-muted-foreground max-w-2xl mb-8"
                >
                    Create detailed, structured, and presentation-ready reports
                    on any topic. From market analysis to research papers, our
                    AI organizes your content into polished documents —
                    instantly.
                </TextAnimate>

                {/* CTA */}
                <div className="z-20">
                    <Link
                        href="/report-generator"
                        className="rounded-full px-4 py-2 text-xl hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md flex items-center gap-2"
                    >
                        <span>Generate My Report</span>
                        <div className="rounded-full h-9 w-9 flex justify-center items-center hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md">
                            <Image
                                src={open}
                                alt="open icon"
                                className="h-6 w-6"
                            />
                        </div>
                    </Link>
                </div>
            </section>

            <section className="pt-20 z-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl z-20 md:text-5xl font-bold text-center mb-16">
                    How It Works
                    {/* <AuroraText>How It Works</AuroraText> */}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="px-5 py-4 bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl  min-h-[180px] h-full"
                        >
                            <div className="p-0">
                                <h3 className="text-lg font-semibold text-primary">
                                    {String(step.title)}
                                </h3>
                            </div>
                            <div className="p-0 mt-2">
                                <TextAnimate
                                    animation="slideUp"
                                    by="word"
                                    className="text-muted-foreground text-sm leading-snug"
                                >
                                    {String(step.description)}
                                </TextAnimate>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex mt-10 gap-8 flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">
                        Generate <AuroraText>Insightful Reports</AuroraText> in
                        Seconds with AI.
                    </h2>

                    <TextAnimate
                        animation="slideUp"
                        by="word"
                        className="text-lg z-20 md:text-xl text-muted-foreground max-w-2xl mb-8"
                    >
                        Our AI Report Generator Agent creates professional,
                        well-structured reports instantly. Provide your topic or
                        data, choose a style, and get a clear, polished report
                        that communicates your insights effectively.
                    </TextAnimate>

                    <div className="mt-4">
                        <Link href="/report-generator">
                            <button className="shadow-2xl">
                                <span className="rounded-full px-4 py-2 text-xl hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white">
                                    ● Generate My Report
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white p-2 rounded-2xl justify-center">
                    <Image
                        src={reportIllustration} // Replace with illustration relevant to reports
                        alt="AI Report Generator"
                        className="w-full shadow-lg h-full rounded-lg object-cover"
                        width={10}
                        height={10}
                        unoptimized
                    />
                </div>
            </section>

            <section className="mt-20 mx-4 md:mx-36">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-zinc-100"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-zinc-100"></div>
                </div>
            </section>

            <section className="px-4 md:px-36 mt-20 bg-zinc-100 py-10">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <h1 className="text-4xl mb-5 font-bold">FAQ&apos;S</h1>

                    <AccordionItem
                        value="item-1"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-2"
                    >
                        <AccordionTrigger>
                            1. What is the AI Report Generator Agent?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                It&apos;s an AI-powered tool that transforms
                                your topics or raw data into professional,
                                well-structured reports. It organizes content
                                into sections like Introduction, Analysis, and
                                Conclusion, saving you hours of manual writing.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-2"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-2"
                    >
                        <AccordionTrigger>
                            2. How does it work?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Simply enter a topic or dataset, select your
                                preferred report type (e.g., Market Report,
                                Research Report, Comprehensive Analysis), and
                                adjust length or formatting options. The AI
                                instantly generates a polished draft for you to
                                review and edit.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-3"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-2"
                    >
                        <AccordionTrigger>
                            3. Can I customize the report content?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. You can refine the generated draft, add
                                your own sections, and modify the AI-generated
                                content. You can also enable CrewAI for
                                collaborative report generation when you need
                                deeper insights.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-4"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-2"
                    >
                        <AccordionTrigger>
                            4. What kinds of reports can it generate?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                It can generate Market Reports, Research
                                Reports, Project Summaries, Business Analyses,
                                and more — tailored to your topic and needs.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-5"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-2"
                    >
                        <AccordionTrigger>
                            5. Can it include charts, data, or references?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. You can choose to automatically include
                                charts, statistics, references, or action points
                                depending on your report type and preferences.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-6"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-2"
                    >
                        <AccordionTrigger>
                            6. Who can benefit from this tool?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Students, researchers, business professionals,
                                consultants, managers, and anyone who needs to
                                generate clear, structured reports quickly and
                                effectively.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-7"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-2"
                    >
                        <AccordionTrigger>
                            7. Can I export my reports?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. Reports can be exported in Markdown or PDF
                                formats. You can also copy the content directly
                                for use in other tools or presentations.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-8"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-2"
                    >
                        <AccordionTrigger>
                            8. Is it free to use?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Core report generation features are free.
                                Premium features like advanced formatting,
                                collaborative CrewAI mode, and extended export
                                options may require a subscription.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}
