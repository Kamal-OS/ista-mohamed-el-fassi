import { fade, RevealOnScroll, zoomIn } from "@/animations";
import Carousel from "@/features/accueil/components/Carousel";
import LinkCards from "@/features/accueil/components/LinkCards";
import Numbers from "@/features/accueil/components/Numbers";
import Offers from "@/features/accueil/components/Offers";
import Outline from "@/features/accueil/components/Outline";
import Partners from "@/features/accueil/components/Partners";
import RecentPosts from "@/features/accueil/components/RecentPosts";
import usePageTitle from "@/hooks/usePageTitle";

const slides = [
  {
    image:
      "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    title: "Slide 1 title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit, est porro enim molestias incidunt iusto ipsum ab temporibus perspiciatis itaque odit quo esse nisi fuga maiores et ex animi repudiandae deleniti dolorem minima ad. Consequatur voluptates unde eum doloremque vitae aperiam possimus veniam. Officiis quasi nulla, unde aliquam non accusantium libero ducimus in similique quibusdam. Vel tempora perferendis iusto eveniet sit velit deleniti molestias consequatur voluptates, quis enim asperiores aliquid temporibus, reiciendis corporis quas? Voluptatem incidunt labore quae qui pariatur autem at hic molestias libero quo, iusto sit, rem cumque. Modi id unde tempora distinctio necessitatibus eveniet non fugiat.",
  },
  {
    image: "https://wallpapercave.com/wp/wp3386769.jpg",
    title: "Slide 2 title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit, est porro enim molestias incidunt iusto ipsum ab temporibus perspiciatis itaque odit quo esse nisi fuga maiores et ex animi repudiandae deleniti dolorem minima ad. Consequatur voluptates unde eum doloremque vitae aperiam possimus veniam. Officiis quasi nulla, unde aliquam non accusantium libero ducimus in similique quibusdam. Vel tempora perferendis iusto eveniet sit velit deleniti molestias consequatur voluptates, quis enim asperiores aliquid temporibus, reiciendis corporis quas? Voluptatem incidunt labore quae qui pariatur autem at hic molestias libero quo, iusto sit, rem cumque. Modi id unde tempora distinctio necessitatibus eveniet non fugiat.",
  },
  {
    image: "https://wallpaperaccess.com/full/809523.jpg",
    title: "Slide 3 title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit, est porro enim molestias incidunt iusto ipsum ab temporibus perspiciatis itaque odit quo esse nisi fuga maiores et ex animi repudiandae deleniti dolorem minima ad. Consequatur voluptates unde eum doloremque vitae aperiam possimus veniam. Officiis quasi nulla, unde aliquam non accusantium libero ducimus in similique quibusdam. Vel tempora perferendis iusto eveniet sit velit deleniti molestias consequatur voluptates, quis enim asperiores aliquid temporibus, reiciendis corporis quas? Voluptatem incidunt labore quae qui pariatur autem at hic molestias libero quo, iusto sit, rem cumque. Modi id unde tempora distinctio necessitatibus eveniet non fugiat.",
  },
  {
    image: "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    title: "Slide 4 title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit, est porro enim molestias incidunt iusto ipsum ab temporibus perspiciatis itaque odit quo esse nisi fuga maiores et ex animi repudiandae deleniti dolorem minima ad. Consequatur voluptates unde eum doloremque vitae aperiam possimus veniam. Officiis quasi nulla, unde aliquam non accusantium libero ducimus in similique quibusdam. Vel tempora perferendis iusto eveniet sit velit deleniti molestias consequatur voluptates, quis enim asperiores aliquid temporibus, reiciendis corporis quas? Voluptatem incidunt labore quae qui pariatur autem at hic molestias libero quo, iusto sit, rem cumque. Modi id unde tempora distinctio necessitatibus eveniet non fugiat.",
  },
];

function Accueil() {
  usePageTitle("Accueil");

  return (
    <div className="mb-28 space-y-24">
      <RevealOnScroll delay={0.5} variant={fade}>
        <Carousel slides={slides} />
      </RevealOnScroll>

      <RevealOnScroll>
        <LinkCards />
      </RevealOnScroll>

      <RevealOnScroll>
        <RecentPosts />
      </RevealOnScroll>

      <RevealOnScroll>
        <Outline />
      </RevealOnScroll>

      <RevealOnScroll variant={fade}>
        <Offers />
      </RevealOnScroll>

      <RevealOnScroll>
        <Numbers />
      </RevealOnScroll>

      <RevealOnScroll variant={zoomIn}>
        <Partners />
      </RevealOnScroll>
    </div>
  );
}

export default Accueil;
