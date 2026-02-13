import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { nome, cnpj, whatsapp, email, consent } = req.body;

  if (!cnpj || typeof cnpj !== "string") {
    return res.status(400).json({ error: "CNPJ is required" });
  }

  try {
    // upsert by cnpj to avoid duplicates
    const lead = await prisma.lead.upsert({
      where: { cnpj },
      update: { nome: nome || undefined, whatsapp: whatsapp || undefined, email: email || undefined, consent: !!consent },
      create: { nome: nome || undefined, cnpj, whatsapp: whatsapp || undefined, email: email || undefined, consent: !!consent },
    });

    return res.status(200).json({ ok: true, lead });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Unable to save lead" });
  }
}


