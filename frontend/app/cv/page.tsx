import type { Metadata } from "next"
import { CvDocument } from "@/components/cv-document"

export const metadata: Metadata = {
  title: "CV — Tomas Silva",
  description: "Curriculum vitae d'Tomas Silva, développeur web.",
}

export default function CvPage() {
  return <CvDocument />
}
