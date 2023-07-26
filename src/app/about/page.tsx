import MainLayout from '@/components/layouts/MainLayout';
import CardGallery from '@/components/photoGallery/CardGallery';
import Image from 'next/image';

export const metadata = {
  title: 'About - Somay Chauhan',
  description: 'About me - Somay Chauhan',
};

export default function About() {
  return (
    <MainLayout>
      <div className="flex flex-col space-y-16 mx-auto">
        <div className="grid grid-cols-2 gap-14 md:gap-20">
          <div className="col-span-2 md:col-span-1">
            <div className="bg-white dark:bg-neutral-900 p-5 pb-28 m-6 md:m-12 shadow-lg border border-gray-100 dark:border-neutral-800 hover:rotate-0 transition duration-500 -rotate-6 relative">
              <Image
                src="/static/images/avatar.webp"
                height="200"
                width="150"
                priority={true}
                alt="avatar"
                style={{ objectFit: 'contain' }}
                className="smooth-edges flex flex-col w-full aspect-square object-cover h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <p className="text-gray-800 dark:text-slate-200 pb-7 h-full text-6xl font-nothingyoucoulddo">
                  me
                </p>
              </div>
            </div>
          </div>
          <section className="text-center text-base md:text-start mx-3 col-span-2 md:col-span-1 my-auto">
            <div className="block md:hidden">
              <p className="text-3xl font-serif font-bold mb-1">Hello there,</p>
              <p className="text-3xl font-serif font-bold mb-6">
                I'm Somay <span className="animate-wave">👋</span>
              </p>
            </div>
            <p className="hidden md:block text-3xl font-serif font-bold mb-6">
              Hello there, I'm Somay
              <span className="animate-wave">👋</span>
            </p>
            <p className="mb-4 text-sm">
              hailing from a small village right in the lap of the mighty Himalayas, with Shimla
              being our nearest town, a charming place built by the British during their time in
              India. So, picture this: me, surrounded by stunning landscapes, sipping Tea, and
              coding away like a boss.
            </p>
            <p className="mb-4 text-sm">
              You know what blew my mind? The internet! It's like a magical genie that grants you
              the power to work from wherever and whenever you please. So, I thought, "Why be stuck
              in an office cubicle when I can be coding with a view?" I decided to shake things up
              and ditched my boring ol' 9-to-5 job as a web developer. Now, I'm on this wild
              freelancing adventure, taking on projects while enjoying the serenity of my Himalayan
              hideout. Web development meets mountain vibes - the perfect combo!
            </p>
            <p className="mb-4 text-sm">
              If you're wondering how I pull off this nomadic web dev life, well, it's all thanks to
              the Internet. I can connect with clients, collaborate with teams, and build awesome
              websites without even having to leave my cozy little village. So, here's to the
              internet, the ultimate enabler of my freelancing dreams! Cheers!
            </p>
          </section>
        </div>
        <CardGallery />
      </div>
    </MainLayout>
  );
}
