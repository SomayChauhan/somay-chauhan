import SubGallery from '@/components/photoGallery/SubGallery';

export default function Home({}) {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      <main>
        {/* <div className="mx-auto grid py-12">
          <div className="pb-2">
            <h1 className="bg-gradient-to-r from-titleg1 to-titleg2 bg-clip-text py-4 text-center font-serif text-5xl font-bold text-transparent md:text-6xl">
              {'title'}
            </h1>
            <p className="text-center text-2xl font-bold text-accent">{'year'}</p>
          </div>

          <div className="py mx-auto">
            <p className="prose prose-2xl text-center text-gray-50">{'content'}</p>
          </div>
        </div> */}

        <div className="grid grid-flow-row grid-cols-1 items-center justify-items-center gap-32 p-8 md:p-32">
          <SubGallery />;
        </div>
      </main>
    </>
  );
}
