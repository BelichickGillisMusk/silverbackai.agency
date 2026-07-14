const PROXY_ENDPOINT = '/api/generate-content';

interface GenerateContentRequest {
  model: string;
  contents: unknown;
  config?: unknown;
}

interface GenerateContentResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
        inlineData?: { mimeType: string; data: string };
      }>;
    };
  }>;
  error?: { message: string };
}

export async function generateContent(
  params: GenerateContentRequest
): Promise<GenerateContentResponse> {
  const response = await fetch(PROXY_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Gemini proxy error (${response.status}): ${errorBody}`);
  }

  return response.json();
}

export function getTextFromResponse(response: GenerateContentResponse): string {
  for (const candidate of response.candidates || []) {
    for (const part of candidate.content?.parts || []) {
      if (part.text) return part.text;
    }
  }
  return '';
}

export function getImageFromResponse(response: GenerateContentResponse): string | null {
  for (const candidate of response.candidates || []) {
    for (const part of candidate.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
  }
  return null;
}
