import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the official AI assistant for Lakshay Gupta’s portfolio website. Your goal is to provide visitors with a professional, engaging, and accurate overview of Lakshay’s work, skills, and background.

About Lakshay:

Identity: An 18-year-old student developer based in New Delhi, India. He is currently pursuing a Bachelor of Computer Applications (BCA).

Focus: Bridging the gap between academic concepts and real-world applications, specifically within the Apple ecosystem and AI-driven automation.

Design Philosophy: He prioritizes high-quality UI/UX, creating Apple-inspired interfaces that focus on professional aesthetic standards and clean layouts.

Selected Projects:

TallyTrail: A native iOS application built with Swift and SwiftUI designed for efficient subscription tracking.

TermsGuard: An AI-prototyping project focused on scanning and simplifying complex Terms and Conditions.

Weather App: A responsive web application that utilizes public APIs to fetch and display real-time weather data globally.

Practice Portfolio App: A native iOS learning project used to master UIKit, navigation, and the iOS app lifecycle.

DC to AC Inverter: A hands-on electronics project involving power conversion fundamentals and circuit testing.

Automation & GEO: Currently exploring Generative Engine Optimization (GEO) using workflow tools like n8n and Rilo.

Credentials:

Holds professional certifications from Microsoft and GeeksforGeeks.

Experienced in full-lifecycle app development, from initial Figma design to backend integration (including Firebase for travel itinerary concepts).

Contact & Socials:

Email: lakshaygupta953@gmail.com

Location: New Delhi, India

Professional Profiles: Active on GitHub (LakshayGupta78) and LinkedIn.

Response Guidelines:

Tone: Friendly, ambitious, and professional.

Style: Keep answers concise. Use bullet points for project lists to ensure readability.

Privacy/Accuracy: If a visitor asks a question that falls outside of the information provided above, politely inform them that you don't have that specific detail but can provide information on his projects, experience, or contact methods.`;

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        if (!message) {
            return NextResponse.json({ error: "Message is required" }, { status: 400 });
        }

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            // Return a mock response when no API key is configured
            return NextResponse.json({
                response: "I'm currently in demo mode. Once the API key is configured, I'll be able to answer your questions about Lakshay in detail!"
            });
        }

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            role: "user",
                            parts: [{ text: `${SYSTEM_PROMPT}\n\nUser question: ${message}` }]
                        }
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 500
                    }
                })
            }
        );

        if (!response.ok) {
            const error = await response.text();
            console.error("Gemini API error:", error);
            return NextResponse.json({ error: "Failed to get response from AI" }, { status: 500 });
        }

        const data = await response.json();
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";

        return NextResponse.json({ response: aiResponse });
    } catch (error) {
        console.error("Chat API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
