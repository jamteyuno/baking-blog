import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sourdough Baking -  a journey of mindfulness, creativity and deliciousness.
      </h1>
      <p className="mb-4">
        {`In a tiny kitchen corner, amidst flour-dusted countertops and the soft glow of a warm oven, the art of sourdough baking comes to life.`}
      </p>
      <p className="mb-4">
        {`Here at "Bytesize Cafe," every loaf tells a tale of patience and tradition, where flour, water, and wild yeast merge in a slow dance of fermentation. 
        The air is filled with the tangy scent of a young sourdough starter, lovingly nurtured over the months. 

        As hands expertly knead and shape each dough ball, anticipation builds for the moment when crusty, golden-brown loaves emerge, 
        their crackling crusts yielding to reveal a chewy, flavorful crumb within.`}
      </p>
      <p className="mb-4">
        {`
         In this humble kitchen, sourdough isn't just bread—it's a labor of love, a testament to craftsmanship, 
         and a celebration of the simple joy found in the alchemy of flour and time.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
