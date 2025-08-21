"use client";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { marked } from "marked"; // render markdown
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

interface ReportResponse {
    report_id: string;
    topic: string;
    report_type: string;
    content: string;
    generated_at: string;
    word_count: number;
    status: string;
}

const REPORT_TYPES = [
    "Comprehensive Analysis",
    "Strategic Report",
    "Market Analysis",
    "Technical Report",
    "Business Plan",
    "Research Report",
];

export default function ReportGeneratorPage() {
    const [topic, setTopic] = useState("");
    const [reportType, setReportType] = useState(REPORT_TYPES[0]);
    const [length, setLength] = useState(5);
    const [includeCharts, setIncludeCharts] = useState(false);
    const [includeSources, setIncludeSources] = useState(false);
    const [useCrew, setUseCrew] = useState(false);

    const [result, setResult] = useState<ReportResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const reportRef = useRef<HTMLDivElement>(null);
    const [parsed, setParsed] = useState("");

    const API_URL =
        "https://researcher-977121587860.asia-south1.run.app";

    useEffect(() => {
        if (result?.content) {
            const html = marked.parse(result.content) as string;
            setParsed(html);
        }
    }, [result]);

    /** Generate Report */
    const handleGenerateReport = async () => {
        if (!topic.trim()) {
            setError("Please provide a report topic.");
            return;
        }

        setLoading(true);
        setError("");
        setResult(null);

        try {
            const endpoint = useCrew
                ? `${API_URL}/generate-report-crew`
                : `${API_URL}/generate-report`;

            const res = await axios.post<ReportResponse>(endpoint, {
                topic,
                report_type: reportType,
                length,
                include_charts: includeCharts,
                include_sources: includeSources,
                use_crew: useCrew,
            });

            setResult(res.data);
        } catch (err) {
            console.error(err);
            setError("Error connecting to the report generation API.");
        } finally {
            setLoading(false);
        }
    };

    /** Copy */
    const handleCopy = () => {
        if (result?.content) {
            navigator.clipboard.writeText(result.content);
        }
    };

    /** Download as .md */
    const handleDownload = () => {
        if (result?.content) {
            const blob = new Blob([result.content], {
                type: "text/plain;charset=utf-8",
            });
            saveAs(blob, `${result.topic.replace(/\s+/g, "_")}.md`);
        }
    };

    /** Download as PDF */
    const handleDownloadPDF = async () => {
        if (reportRef.current) {
            const canvas = await html2canvas(reportRef.current, { scale: 2 });
            const imgData = canvas.toDataURL("image/png");

            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${result?.topic.replace(/\s+/g, "_")}_report.pdf`);
        }
    };

    return (
        <div className="bg-zinc-100 min-h-screen">
            <InteractiveGridPattern
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[20%] h-[100%] skew-y-12 pointer-events-none"
                )}
            />

            <div className="max-w-5xl mx-auto p-6 pt-16 space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
                    📊 AI Report Generator
                </h1>
                <p className="text-gray-600">
                    Generate a professional, detailed report on any topic using AI.
                </p>

                {/* Input Form */}
                <div className="grid grid-cols-1 gap-4 mt-8">
                    <input
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="p-3 shadow-md inset-shadow-2xs inset-shadow-white bg-zinc-100 shadow-zinc-500 rounded-lg"
                        placeholder="Enter your topic (e.g. child labour in India)"
                    />

                    {/* Report Type */}
                    <select
                        value={reportType}
                        onChange={(e) => setReportType(e.target.value)}
                        className="p-3 shadow-md inset-shadow-2xs inset-shadow-white bg-zinc-100 shadow-zinc-500 rounded-lg"
                    >
                        {REPORT_TYPES.map((type) => (
                            <option key={type}>{type}</option>
                        ))}
                    </select>

                    <label className="flex items-center gap-2">
                        Length:
                        <input
                            type="number"
                            min={1}
                            max={10}
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            className="p-2 w-20 shadow-md inset-shadow-2xs inset-shadow-white bg-zinc-100 shadow-zinc-500 rounded-lg"
                        />
                    </label>

                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="cursor-pointer"
                            checked={includeCharts}
                            onChange={(e) => setIncludeCharts(e.target.checked)}
                        />
                        Include Charts
                    </label>

                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="cursor-pointer"
                            checked={includeSources}
                            onChange={(e) => setIncludeSources(e.target.checked)}
                        />
                        Include Sources
                    </label>

                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="cursor-pointer"
                            checked={useCrew}
                            onChange={(e) => setUseCrew(e.target.checked)}
                        />
                        Use CrewAI
                    </label>
                </div>

                {/* Generate Button */}
                <div className="mt-6">
                    <button
                        onClick={handleGenerateReport}
                        disabled={loading}
                        className="shadow-md inset-shadow-2xs inset-shadow-white bg-zinc-100 shadow-zinc-500 rounded-lg px-6 py-3 hover:shadow-lg cursor-pointer"
                    >
                        {loading ? "Generating..." : "Generate Report"}
                    </button>
                </div>

                {error && <p className="text-red-500 font-medium">{error}</p>}

                {/* Output */}
                {result && (
                    <div
                        ref={reportRef}
                        className="mt-8 p-6 shadow-md inset-shadow-2xs inset-shadow-white bg-zinc-100 shadow-zinc-500 rounded-lg space-y-4"
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            📄 Generated Report — {result.topic}
                        </h2>

                        {/* Render Markdown */}
                        <div
                            className="text-sm md:text-base text-black leading-relaxed space-y-3"
                            dangerouslySetInnerHTML={{ __html: parsed }}
                        />

                        {/* Actions */}
                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={handleCopy}
                                className="px-4 py-2 shadow-md inset-shadow-2xs inset-shadow-white bg-zinc-100 shadow-zinc-500 rounded-lg hover:shadow-lg"
                            >
                                📋 Copy
                            </button>
                            <button
                                onClick={handleDownload}
                                className="px-4 py-2 shadow-md inset-shadow-2xs inset-shadow-white bg-zinc-100 shadow-zinc-500 rounded-lg hover:shadow-lg"
                            >
                                ⬇️ Download .md
                            </button>
                            <button
                                onClick={handleDownloadPDF}
                                className="px-4 py-2 shadow-md inset-shadow-2xs inset-shadow-white bg-zinc-100 shadow-zinc-500 rounded-lg hover:shadow-lg"
                            >
                                📄 Download PDF
                            </button>
                        </div>

                        <p className="text-xs text-gray-500 mt-2">
                            Word count: {result.word_count} • Generated at{" "}
                            {new Date(result.generated_at).toLocaleString()}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
