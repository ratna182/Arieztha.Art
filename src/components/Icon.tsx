"use client";

import {
  Book,
  Receipt,
  Stamp,
  Coffee,
  Files,
  IdentificationCard,
  Gift,
  FadersHorizontal,
  CalendarBlank,
  Tag,
  Plus,
  Star,
  Clock,
  Palette,
  WhatsappLogo,
  type Icon,
} from "@phosphor-icons/react";

const ICONS: Record<string, Icon> = {
  book: Book,
  receipt: Receipt,
  stamp: Stamp,
  mug: Coffee,
  documents: Files,
  card: IdentificationCard,
  gift: Gift,
  signage: FadersHorizontal,
  calendar: CalendarBlank,
  sticker: Tag,
  plus: Plus,
  star: Star,
  clock: Clock,
  palette: Palette,
  whatsapp: WhatsappLogo,
};

export default function Icon({
  name,
  className,
  weight = "duotone",
}: {
  name: string;
  className?: string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}) {
  const Cmp = ICONS[name] ?? Tag;
  return <Cmp className={className} weight={weight} />;
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return <WhatsappLogo className={className} weight="fill" />;
}
