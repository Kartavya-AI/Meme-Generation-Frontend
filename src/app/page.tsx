"use client";

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
import reportIllustration from "../../public/images/markus-spiske-XrIfY_4cK1w-unsplash.jpg";
import openIcon from "../../public/images/share (1).png";
import profile from "../../public/images/profile-user.png";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import { useEffect, useState } from "react";
import axios from "axios";

const videoReviews = [
    { videoUrl: "https://res.cloudinary.com/dmoipkzuf/video/upload/v1754218288/jiop0jm3fanSSnGH_q0g4ho.mp4" },
    { videoUrl: "https://res.cloudinary.com/dmoipkzuf/video/upload/v1754218289/pRK2wPltuKvNNRx0_nhyyol.mp4" },
    { videoUrl: "https://res.cloudinary.com/dmoipkzuf/video/upload/v1754218291/Xo9CPCLsLNQZrPke_cdgctn.mp4" },
    { videoUrl: "https://res.cloudinary.com/dmoipkzuf/video/upload/v1754218291/DtZE6aL8Ckb3FbdW_i39zgj.mp4" },
    { videoUrl: "https://res.cloudinary.com/dmoipkzuf/video/upload/v1754218292/FssB7K6-fLi2J6AA_ijgnyl.mp4" },
    { videoUrl: "https://res.cloudinary.com/dmoipkzuf/video/upload/v1754218293/hnIx9q0QttgnXsf8_p6ehem.mp4" },
];

const VideoCard = ({ videoUrl }: { videoUrl: string }) => {
    return (
        <div
            className={cn(
                "relative h-40 w-64 overflow-hidden bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white p-2 rounded-lg ",
            )}
        >
            <video
                src={videoUrl}
                className="h-full w-full object-cover rounded-sm"
                autoPlay
                muted
                loop
                playsInline
            />
        </div>
    );
};


const reviews = [
    {
        name: "Riya Kapoor",
        username: "@riya_creator",
        body: "This app makes meme creation effortless! I clipped a scene, added text, and exported a video meme for Instagram in minutes.",
    },
    {
        name: "Aditya Singh",
        username: "@aditya_influencer",
        body: "The templates are amazing. I used them to launch a trending meme challenge — my engagement skyrocketed on TikTok!",
    },
    {
        name: "Megha Patel",
        username: "@megha_memelover",
        body: "I love how I can drag and drop stickers, emojis, and GIFs. The deep-fried effects made my memes go viral in group chats.",
    },
    {
        name: "Kunal Sharma",
        username: "@kunal_brandmanager",
        body: "As a marketer, this tool is gold. We created funny branded memes in HD, perfectly optimized for Instagram stories and reels.",
    },
    {
        name: "Sneha Iyer",
        username: "@sneha_student",
        body: "I used to edit memes manually, but this app does it all — trim, crop, captions, filters, everything in one place!",
    },
    {
        name: "Arjun Desai",
        username: "@arjun_gamer",
        body: "The ability to export in GIF and MP4 with perfect aspect ratios is awesome. I share memes with my friends on WhatsApp daily now.",
    },
];

const firstRow = videoReviews.slice(0, reviews.length / 2);
const secondRow = videoReviews.slice(reviews.length / 2);

const firstRowForReviews = reviews.slice(0, reviews.length / 2);
const secondRowForReviews = reviews.slice(reviews.length / 2);

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

const API = "https://youtube-agent-977121587860.asia-south1.run.app";

const steps = [
    {
        title: "Step 1: Paste Your Blog Link or Text",
        description:
            "Enter your blog URL or paste the article content directly into the app.",
    },
    {
        title: "Step 2: AI Turns Blog into Script",
        description:
            "Our AI reads your blog, picks key points, and converts them into a short, snappy meme script.",
    },
    {
        title: "Step 3: Auto-Select Clip & Add Meme Text",
        description:
            "The app matches your script with the perfect movie or trending clip and overlays catchy meme text.",
    },
    {
        title: "Step 4: Customize Your Meme",
        description:
            "Tweak the text, add stickers, emojis, effects, and adjust the clip speed or filters for extra impact.",
    },
    {
        title: "Step 5: Export & Share",
        description:
            "Download in MP4 or GIF with social-ready sizes, then share instantly on Instagram, TikTok, or WhatsApp.",
    },
];

export default function Home() {
    const userId = "newuser6";
    const [connected, setConnected] = useState(false);
    const [jobId, setJobId] = useState<string | null>(null);

    const [watchUrl, setWatchUrl] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const [topic, setTopic] = useState("");
    const [subTopic, setSubTopic] = useState("");

    const [blogUrl, setBlogUrl] = useState("");
    const [status, setStatus] = useState("");
    const [videoUrl, setVideoUrl] = useState("");

    const startMemeGeneration = async () => {
        try {
            setStatus("running");

            const res = await axios.post(
                "https://meme-977121587860.asia-south1.run.app/generate_meme/",
                { blog_url: blogUrl },
                { headers: { "Content-Type": "application/json" } }
            );

            console.log(res);

            const data = res.data;

            if (data.job_id && data.status_url) {
                pollStatus(data.status_url);
            } else {
                throw new Error("No job_id returned");
            }
        } catch (err) {
            setStatus("error");

            if (axios.isAxiosError(err)) {
                if (err.response) {
                    console.error(
                        "Server error:",
                        err.response.status,
                        err.response.data
                    );
                } else if (err.request) {
                    console.error("No response from server:", err.request);
                } else {
                    console.error("Request setup error:", err.message);
                }
            } else {
                console.error("Unexpected error:", err);
            }
        }
    };

    const pollStatus = (statusUrl: string) => {
        const interval = setInterval(async () => {
            try {
                const res = await axios.get(
                    `https://meme-977121587860.asia-south1.run.app${statusUrl}`
                );

                const data = res.data;
                console.log(data);

                if (data.status === "complete") {
                    clearInterval(interval);
                    setStatus("done");
                    setVideoUrl(data.video_url);
                } else if (data.status === "error") {
                    clearInterval(interval);
                    setStatus("error");
                }
            } catch (err) {
                clearInterval(interval);
                setStatus("error");

                if (axios.isAxiosError(err)) {
                    if (err.response) {
                        console.error(
                            "Polling server error:",
                            err.response.status,
                            err.response.data
                        );
                    } else if (err.request) {
                        console.error("Polling network error: No response");
                    } else {
                        console.error(
                            "Polling request setup error:",
                            err.message
                        );
                    }
                } else {
                    console.error("Unexpected polling error:", err);
                }
            }
        }, 3000);
    };

    useEffect(() => {
        if (!jobId || status !== "running") return;

        const intervalId = setInterval(async () => {
            try {
                const { data } = await axios.get(
                    `${API}/video/agent-job/${jobId}/status`
                );
                console.log("Polling response:", data);

                if (data.status === "failed") {
                    setStatus("error");
                    clearInterval(intervalId);
                    return;
                }

                if (data.status === "completed" && data.watch_url) {
                    setWatchUrl(data.watch_url);
                    setStatus("done");
                    clearInterval(intervalId);
                } else {
                    // keep polling until watch_url appears
                    setStatus("running");
                }
            } catch (err) {
                console.error("Polling failed:", err);
                setStatus("error");
                clearInterval(intervalId);
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, [jobId, status]);
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
                        🎬
                    </h1>

                    <div className="text-sm font-light px-3 text-zinc-600">
                        <AuroraText>Meme Creation App for Creators</AuroraText>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-5xl z-20 md:text-7xl font-bold tracking-tight leading-tight text-primary mb-6">
                    Create <AuroraText>Viral Video Memes</AuroraText> in Minutes
                </h1>

                {/* Subheading */}
                <TextAnimate
                    animation="slideUp"
                    by="word"
                    className="text-lg z-20 md:text-xl text-muted-foreground max-w-2xl mb-8"
                >
                    Import clips, add meme-style text, drop in stickers, apply
                    effects, and export in HD. From TikTok trends to Instagram
                    reels, make share-worthy memes effortlessly.
                </TextAnimate>

                {/* CTA */}
                <div className="z-20">
                    <Link
                        href="#memeCreateSection"
                        className="rounded-full px-4 py-2 text-xl hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md flex items-center gap-2"
                    >
                        <span>Start Creating Memes</span>
                        <div className="rounded-full h-9 w-9 flex justify-center items-center hover:shadow-lg cursor-pointer text-zinc-600 bg-zinc-100 shadow-zinc-500 shadow-md">
                            <Image
                                src={openIcon}
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

             <section className="pt-10 lg:pt-24 pb-10 px-4 md:px-36 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    AI-Generated Meme Video Samples
                </h2>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((item, index) => (
                            <VideoCard key={index} videoUrl={item.videoUrl} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRow.map((item, index) => (
                            <VideoCard key={index} videoUrl={item.videoUrl} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 " />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 " />
                </div>
            </section>

            <section id="memeCreateSection" className="flex mt-10 gap-8 flex-col md:flex-row items-center justify-between px-4 md:px-36 py-12">
                {/* Left Column - Text + Form */}
                <div className="md:w-1/2 text-center md:text-left space-y-4 order-2 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">
                        Turn{" "}
                        <AuroraText>Blogs into Viral Meme Videos</AuroraText>{" "}
                        Instantly
                    </h2>

                    <TextAnimate
                        animation="slideUp"
                        by="word"
                        className="text-muted-foreground text-lg max-w-2xl mb-6"
                    >
                        Paste your blog link, and our AI Meme Creator will
                        transform it into a fun, engaging meme-style video
                        optimized for TikTok, Instagram, and WhatsApp.
                    </TextAnimate>

                    {/* Input */}
                    <div className="space-y-2">
                        <input
                            type="text"
                            value={blogUrl}
                            onChange={(e) => setBlogUrl(e.target.value)}
                            placeholder="https://your-blog-link.com"
                            className=" px-4 py-2 rounded-lg w-full bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white"
                        />
                    </div>

                    {/* CTA Button */}
                    <div className="mt-4">
                        <button
                            onClick={startMemeGeneration}
                            className="w-60 bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white py-2 rounded-lg"
                            disabled={status === "running" || !blogUrl}
                        >
                            {status === "running"
                                ? "Generating..."
                                : "Generate Meme Video"}
                        </button>
                    </div>

                    {/* Status Messages */}
                    {status === "running" && (
                        <p className="text-green-800 mt-2">
                            Creating your meme magic...
                        </p>
                    )}

                    {status === "done" && videoUrl && (
                        <div className="space-y-3 mt-4">
                            <p className="text-green-600 font-semibold">
                                Meme Video Ready!
                            </p>
                            <a
                                href={videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white px-4 rounded-lg hover:shadow-lg py-2"
                            >
                                Watch in browser
                            </a>
                            <a
                                href={videoUrl}
                                download="meme-video.mp4"
                                className="bg-zinc-100  shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white px-4 rounded-lg hover:shadow-lg py-2 ml-2"
                            >
                                Download MP4
                            </a>
                        </div>
                    )}

                    {status === "error" && (
                        <p className="text-red-800 mt-2">
                            An error occurred. Please try again.
                        </p>
                    )}
                </div>

                {/* Right Column - Video Preview */}
                <div className=" mt-10 md:mt-0 order-1 md:order-2 flex bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white p-2 rounded-2xl justify-center">
                    {status === "done" && videoUrl ? (
                        <video
                            src={videoUrl}
                            className="w-72 h-[500px] object-cover rounded-lg shadow-lg"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    ) : (
                        <div className="w-full h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                            <p className="text-gray-500 px-5">
                                Your generated meme video will appear here
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <section className="mt-20 mx-4 md:mx-36">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRowForReviews.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]">
                        {secondRowForReviews.map((review) => (
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
                            1. What is the Meme Creation App for Creators?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                It&apos;s a powerful and fun app that lets you
                                create viral video memes using movie clips or
                                your own footage. Add text, effects, stickers,
                                and export instantly for social media.
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
                                Import a clip from movies or your gallery, trim
                                or crop it, then add meme-style text, emojis,
                                stickers, or filters. Export as MP4 or GIF in
                                optimized sizes for Instagram, TikTok, or
                                WhatsApp.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-3"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-2"
                    >
                        <AccordionTrigger>
                            3. Can I customize my memes?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes! You can adjust text, drag-and-drop stickers
                                or GIFs, apply filters, change video speed, and
                                choose from ready-made templates or create your
                                own layout.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-4"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-2"
                    >
                        <AccordionTrigger>
                            4. What formats can I export in?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                You can export in MP4 or GIF formats with HD
                                resolution. Watermark options are also available
                                depending on your preference.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-5"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-2"
                    >
                        <AccordionTrigger>
                            5. Is it optimized for social media?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Absolutely! The app supports popular aspect
                                ratios and formats tailored for Instagram,
                                TikTok, and WhatsApp so your memes look perfect
                                anywhere.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-6"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-2"
                    >
                        <AccordionTrigger>
                            6. Who can use this app?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Creators, influencers, brands, and even friends
                                who want to make fun, personalized memes.
                                Perfect for viral campaigns, challenges, or just
                                sharing laughs in group chats.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-7"
                        className="bg-zinc-100 shadow-zinc-500 shadow-md inset-shadow-2xs inset-shadow-white rounded-2xl px-5 my-2"
                    >
                        <AccordionTrigger>
                            7. Do I need internet to use it?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                No auto-uploads — your content stays private.
                                You can create memes offline and only
                                share/export them when you&apos;re ready.
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
                                Core features are free. Premium features like
                                advanced effects, HD export without watermark,
                                and access to exclusive templates may require a
                                subscription.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}
