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
