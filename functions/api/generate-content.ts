interface Env {
  GEMINI_API_KEY: string;
}

interface EventContext {
  request: Request;
  env: Env;
}

export async function onRequestPost(context: EventContext): Promise<Response> {
  const { request, env } = context;

  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Server misconfiguration: missing API key' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { model: string; contents: unknown; config?: unknown };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { model, contents, config } = body;
  if (!model || !contents) {
    return new Response(JSON.stringify({ error: 'Missing required fields: model, contents' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const allowedModels = [
    'gemini-2.5-flash-image',
    'gemini-3.1-flash-image-preview',
    'gemini-3-pro-image-preview',
    'gemini-3.1-flash-tts-preview',
    'gemini-3.1-flash-lite-preview',
    'gemini-3.1-pro-preview',
  ];

  if (!allowedModels.includes(model)) {
    return new Response(JSON.stringify({ error: `Model not allowed: ${model}` }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const geminiBody: Record<string, unknown> = { contents };
  if (config) {
    geminiBody.generationConfig = config;
  }

  try {
    const geminiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiBody),
    });

    const data = await geminiResponse.text();

    return new Response(data, {
      status: geminiResponse.status,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Upstream request failed' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
