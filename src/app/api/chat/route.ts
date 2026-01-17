import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are an AI assistant for Lakshay Gupta's portfolio website. You answer questions about Lakshay in a friendly, professional manner.

About Lakshay:
- 18-year-old BCA (Bachelor of Computer Applications) student
- Focused on iOS development and AI-driven automation
- Building expertise in the Apple ecosystem (Swift, SwiftUI)
- Interested in the intersection of design and technology
- Student developer passionate about creating innovative apps

Keep responses concise and helpful. If asked something you don't know about Lakshay, politely say you don't have that specific information but offer to help with what you do know.`;

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
