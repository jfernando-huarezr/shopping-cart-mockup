const About = () => {
  return (
    <section className="h-full bg-white">
      <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
            We didn&apos;t reinvent the wheel
          </h2>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eos
            nam quam asperiores atque praesentium doloribus nobis officia
            impedit facere quisquam repellat quod at nemo blanditiis quasi vel
            alias a, quos eveniet vero exercitationem quas earum sed! Doloribus
            itaque eveniet maxime aspernatur, adipisci aliquid iste officia non
            explicabo iusto vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            dolores perferendis pariatur soluta iusto doloremque nam tempore
            sunt fugit deleniti!
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full rounded-lg lg:mt-10"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  )
}

export default About
