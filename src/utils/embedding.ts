import hashString from "./hashing";

function chunkText(text: string, chunkSize: number, overlap: number): string[] {

    if (overlap >= chunkSize) {
        throw new Error("overlap must be lower than chunkSize");
    }

    let chunks = []

    for (let i = 0; i < text.length; i = i + (chunkSize - overlap)) {

        let end = i + chunkSize;

        let chunk = text.slice(i, end);

        chunks.push(chunk);
    }

    return chunks;
}

export default async function embedText(text: string, chunkSize: number, overlap: number, ai: Ai) {

    const chunks = chunkText(text, chunkSize, overlap);

    const modelResp = await ai.run(
        "@cf/baai/bge-base-en-v1.5",
        {
            text: chunks
        }
    )

    if (!("data" in modelResp) || !modelResp.data) {
        throw new Error("Invalid model response")
    }

    return await Promise.all(modelResp.data.map(async (chunk, i) => {
        return {
            id: await hashString(chunks[i]),
            values: chunk
        }
    }))
}