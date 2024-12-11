import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
import Image from "next/image";
import text from "../../../../public/data/text.json";

interface Card {
  id: number;
  name: string;
  image: string;
  type: string;
  description: string;
  description2: string;
  buttons: string[];
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Blog(props: Props) {
  const params = await props.params;
  const currentCard = text.cards.find(
    (card: Card) => card.name === params.slug
  );

  if (!currentCard) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container mx-auto px-4">
      <header>
        <nav className="hidden lg:block">
          <DesktopNavbar />
        </nav>
        <nav>
          <MobileNavbar />
        </nav>
      </header>
      <main className="lg:mt-[70px]">
        <Image
          className="mx-auto mb-5 rounded-lg lg:w-[600px]"
          src={currentCard.image}
          width={400}
          height={400}
          alt="Work related illustration"
          priority
        />
        <h1 className="m-5 text-right text-lg font-semibold">
          {currentCard.title}
        </h1>
      </main>
    </article>
  );
}
