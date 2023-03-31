const Contact = () => {
    return (
        <section className="py-16" id="contact">
          <div className="container mx-auto gap-2">
            <h2 className="ff-heading text-6xl">Contact Us</h2>
            <ul className="flex gap-10 mb-2">
              <li className="flex text-xs items-center gap-1"><pre className="font-bold text-sm">Phone Number</pre>: <a className="hover:text-red-600" href="tel: +358409323040">+358 40 932 3040</a></li>
              <li className="flex text-xs items-center gap-1"><pre className="font-bold text-sm">Email</pre>:<a className="hover:text-red-600" href="mailto: markkucustoms@gmail.com">markkucustoms@gmail.com</a></li>
              <li className="flex text-xs items-center gap-1"><pre className="font-bold text-sm">Instagram</pre>:<a className="hover:text-red-600" href="https://www.instagram.com/markku.customs/" target="_blank">@markku.customs</a></li>
            </ul>
            <img className="contact-image" src="/display-dummy-picture.jpeg" alt="" />
          </div>
        </section>
    )
}

export default Contact