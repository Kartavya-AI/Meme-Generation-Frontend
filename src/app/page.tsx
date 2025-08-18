import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import resumeIllustration from "../../public/images/resume-genius-9si2noVCVH8-unsplash.jpg";
import open from "../../public/images/share (1).png";

const reviews = [
    {
        name: "Neha Kapoor",
        username: "@neha_writer",
        body: "The Resume Generator Agent made creating my resume so simple. I just gave my details and it instantly generated a professional, ATS-friendly format.",
    },
    {
        name: "Arjun Malhotra",
        username: "@arjun_jobseeker",
        body: "I loved how it tailored my resume for different roles. The AI suggestions on skills and keywords really boosted my chances of getting shortlisted.",
    },
    {
        name: "Simran Joshi",
        username: "@simran_fresher",
        body: "As a fresher, I struggled with writing resumes. This tool gave me multiple polished templates and highlighted my strengths perfectly.",
    },
    {
        name: "Ravi Deshmukh",
        username: "@ravi_professional",
        body: "For someone with years of experience, it helped me cut down clutter and focus on key achievements. The result looked modern and impactful.",
    },
    {
        name: "Pooja Nair",
        username: "@pooja_consultant",
        body: "I liked how it automatically structured my resume to match industry standards. It even suggested action verbs that made my profile stronger.",
    },
    {
        name: "Karan Patel",
        username: "@karan_careercoach",
        body: "I recommend this to my clients. Instead of wasting time formatting, they can instantly generate tailored resumes and focus on interview prep.",
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
                {/* <Image
                    className="rounded-full"
                    width="32"
                    height="32"
                    alt=""
                    src={profile}
                /> */}
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
        title: "Step 1: Collect User Input",
        description:
            "Gather unstructured resume information from the user (name, experience, education, skills, achievements). Input can be free text or form-based. (API: /generate-resume)",
    },
    {
        title: "Step 2: Parse & Structure Data",
        description:
            "AI extracts key sections like Work Experience, Education, Skills, Projects, and Certifications from the raw input. (API: /parse-resume)",
    },
    {
        title: "Step 3: Generate Resume Draft",
        description:
            "The system converts structured details into a polished resume draft in Markdown format, applying consistent formatting and styling. (API: /generate-resume)",
    },
    {
        title: "Step 4: Customize & Optimize",
        description:
            "User can select templates, adjust tone, highlight achievements, and tailor resumes for specific roles. (API: /optimize-resume)",
    },
    {
        title: "Step 5: Export & Share",
        description:
            "Export the final resume in PDF, DOCX, or Markdown. Integrate with job portals or email directly. (API: /export-resume)",
    },
];

export default function Home() {
    return (
        <main className="mx-auto bg-zinc-100">
            <section className="pt-20 px-4 md:px-36 flex flex-col justify-center items-center text-center">
                {/* Badge */}
                <div className="group mb-5 relative mx-auto flex items-center justify-center rounded-full px-2 py-1.5 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white">
                    <h1 className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-full h-8 w-8 flex justify-center items-center">
                        📄
                    </h1>

                    <div className="text-sm px-3 font-medium text-zinc-600">
                        AI-Powered Resume Generator Agent
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-primary mb-6">
                    Craft Professional Resumes in Seconds with AI
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
                    Generate ATS-friendly, job-specific resumes tailored to your
                    skills and experience. Stand out with well-structured,
                    personalized resumes — built instantly and ready to use.
                </p>

                {/* CTA */}
                <div>
                    <Link
                        href="/resume-generator"
                        className="rounded-full px-4 py-2 text-xl hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md flex items-center gap-2"
                    >
                        <span>Create My Resume</span>
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

            <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
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
                                    {step.title}
                                </h3>
                            </div>
                            <div className="p-0 mt-2">
                                <p className="text-muted-foreground text-sm leading-snug">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex mt-10 gap-8 flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
                {/* Text Section */}
                <div className="md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">
                        Create Professional Resumes in Seconds with AI.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Our AI Resume Generator Agent crafts tailored,
                        ATS-friendly resumes instantly. Enter your details, pick
                        a style, and get a polished resume that highlights your
                        strengths and boosts your chances of landing interviews.
                    </p>
                    <div className="mt-4">
                        <Link href="/resume-generator">
                            <button className="shadow-2xl">
                                <span className="rounded-full px-4 py-2 text-xl hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white">
                                    ● Generate My Resume
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2 flex bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white p-2 rounded-2xl justify-center">
                    <Image
                        src={resumeIllustration} // Replace with illustration relevant to resume creation
                        alt="AI Resume Generator"
                        className="w-full shadow-lg h-full rounded-lg object-cover"
                        width={10}
                        height={10}
                        unoptimized
                    />
                </div>
            </section>

            <section className="mx-4 mt-20 md:mx-36">
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
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            1. What is the Resume Generator Agent?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                It&apos;s an AI-powered tool that transforms raw
                                user input into a polished, professional,
                                ATS-friendly resume. It formats your details,
                                highlights your strengths, and generates a
                                ready-to-use resume instantly.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-2"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            2. How does it work?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Simply enter your career details, skills, and
                                achievements. The AI automatically structures
                                the content, applies professional formatting,
                                and generates a resume in your chosen style.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-3"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            3. Can I customize my resume design?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. You can choose from multiple templates
                                (Modern, Minimal, Creative, Professional) and
                                customize sections like education, work
                                experience, projects, and skills.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-4"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            4. Does it create ATS-friendly resumes?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Absolutely. The generated resumes follow
                                ATS-friendly formatting and keyword
                                optimization, so your application passes through
                                automated hiring systems smoothly.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-5"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            5. Can I generate resumes for different job roles?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. You can create tailored resumes for
                                specific job applications by highlighting
                                role-relevant skills and achievements in just a
                                few clicks.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-6"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            6. Who can benefit from this tool?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Job seekers, students, professionals exploring
                                new roles, freelancers, and even career coaches
                                who need quick, high-quality resume drafts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-7"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            7. Can I export my resume?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes. Resumes can be exported in multiple formats
                                including PDF, DOCX, and Markdown for editing
                                flexibility.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-8"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-1"
                    >
                        <AccordionTrigger>
                            8. Is it free to use?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Core resume generation features are free.
                                Premium features like advanced templates,
                                multi-language support, and export to DOCX may
                                require a subscription.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}
