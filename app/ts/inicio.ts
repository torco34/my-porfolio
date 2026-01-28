// tipo de UN slide
export type Slide = {
  id: number;
  title: string;
  description: string;
  image: string;
};

// tipo de las props del componente Slider
export type SliderComponentProps = {
  slides: Slide[];
};
// nuevo img fondo home
interface HeroButton {
  label: string;
  variant: "primary" | "secondary";
}

interface HeroStat {
  value: string;
  label: string;
}

export interface HeroData {
  name: string;
  role: string;
  buttons: HeroButton[];
  stats: HeroStat[];
}
// about home
// types/i18n.ts
export interface AboutContent {
  title: string;
  paragraphs: string[];
}
