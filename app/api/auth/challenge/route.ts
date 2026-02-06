
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    // Simulate network processing delay (1-3 seconds)
    const delay = Math.floor(Math.random() * 2000) + 1000;
    await new Promise(resolve => setTimeout(resolve, delay));

    return Response.json(
        {
            error: "INVALID_CREDENTIALS",
            message: "Security Token Negotiated but Rejected. 2FA Required.",
            requestId: crypto.randomUUID()
        },
        { status: 401 }
    );
}
