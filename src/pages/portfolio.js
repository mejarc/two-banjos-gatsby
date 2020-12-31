/* eslint-disable */
import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h2>Portfolio</h2>
    <p>Some details on a few of the sites and applications I've worked on.</p>

    <section className="carousel" aria-label="Gallery">
      <ol className="carousel-viewport">
        <li className="carousel-slide" id="slide1">
          <h3>Cambria Center for the Arts</h3>
          <p>
            A work in progress: front-end components for a vibrant, busy arts
            center's Web site, serving up announcements, ticket sales, gallery
            images, and event calendars.
          </p>

          <div className="carousel-snapper">
            <a className="carousel-next" href="#slide3">
              Next
            </a>
          </div>
        </li>

        <li className="carousel-slide" id="slide3">
          <h3>Auto-not</h3>
          <p>
            Irritated into action by HTML5's <code>autoplay</code> attribute on
            <code> video</code> elements, I built a Chrome browser extension to
            zap these videos from a web page.
          </p>
          <div className="carousel-snapper">
            <a className="carousel-prev" href="#slide1">
              Previous
            </a>
            <a className="carousel-next" href="#slide4">
              Next
            </a>
          </div>
        </li>
        <li className="carousel-slide" id="slide4">
          <h3>GE Global Research</h3>
          <p>
            Wrangled an ornery herd of Grunt scripts, Bower packages, and
            Twitter Bootstrap forks into the{" "}
            <a href="http://www.creativebloq.com/netmag/using-bootstrap-complex-design-systems-7133781">
              Industrial Internet Design System (IIDS)
            </a>
            , a framework of browser-side components for Java and .NET
            developers to use in their applications.
          </p>
          <div className="carousel-snapper">
            <a className="carousel-prev" href="#slide3">
              Previous
            </a>
            <a className="carousel-next" href="#slide5">
              Next
            </a>
          </div>
        </li>
        <li className="carousel-slide" id="slide5">
          <h3>Fresh Step</h3>
          <p>
            Was handed a few debugging issues on a catchy, consumer-oriented
            site with lots of HTML5/CSS3/jQuery doodads. My bigger task:
            maintaining focus while proofreading Web copy about desirable
            properties in cat litter.
          </p>
          <div className="carousel-snapper">
            <a className="carousel-prev" href="#slide4">
              Previous
            </a>
            <a className="carousel-next" href="#slide6">
              Next
            </a>
          </div>
        </li>
        <li className="carousel-slide" id="slide6">
          <h3>Smartleaf</h3>
          <p>
            I created interface elements for a remarkably abstruse application
            for some obscure form of investing you and I will probably never
            make. Really gained appreciation for what genius user interface
            designers like Gino Lee can do with such difficult requirements.
          </p>
          <div className="carousel-snapper">
            <a className="carousel-prev" href="#slide5">
              Previous
            </a>
            <a className="carousel-next" href="#slide7">
              Next
            </a>
          </div>
        </li>
        <li className="carousel-slide" id="slide7">
          <h3>TripIt</h3>
          <p>
            Joined two other developers and the two company founders at one big
            table; found this to be a really productive and satisfying setup.
            Lots of quick changes to Symfony (PHP) templates in CSS and YUI
            JavaScript modules.
          </p>
          <div className="carousel-snapper">
            <a className="carousel-prev" href="#slide6">
              Previous
            </a>
            <a className="carousel-next" href="#slide8">
              Next
            </a>
          </div>
        </li>
        <li className="carousel-slide" id="slide8">
          <h3>Vox Blog Themes</h3>
          <p>
            Sigh. This was a great project: to separate markup and design so
            completely that a user could change her blog theme with the click of
            one button. We were clobbered by Facebook.
          </p>
          <div className="carousel-snapper">
            <a className="carousel-prev" href="#slide7">
              Previous
            </a>
            <a className="carousel-next" href="#slide9">
              Next
            </a>
          </div>
        </li>
        <li className="carousel-slide" id="slide9">
          <h3>Errands On The Way</h3>
          <p>
            I joined Jason, Christine, and Ryan in a very satisfying week of
            test-driven development, on a mobile-first Rails application helping
            the user find places to fulfill her errands along a given route.
          </p>
          <div className="carousel-snapper">
            <a className="carousel-prev" href="#slide8">
              Previous
            </a>
            <a className="carousel-next" href="#slide10">
              Next
            </a>
          </div>
        </li>

        <li className="carousel-slide" id="slide10">
          <h3>The Addis Group</h3>
          <p>
            Designed and built a content management system (CMS) to enable this
            award-winning branding agency to update its redeveloped Web site
            with high-quality images and content.
          </p>
          <div className="carousel-snapper">
            <a className="carousel-prev" href="#slide9">
              Previous
            </a>
            <a className="carousel-next" href="#slide11">
              Next
            </a>
          </div>
        </li>
        <li className="carousel-slide" id="slide11">
          <h3>City of Houston</h3>
          <p>
            Served all visitors to the redesigned site for the 4th largest city
            in the U.S. with fully accessible (Section 508/WCAG AA) markup and
            CSS.
          </p>
          <div className="carousel-snapper">
            <a className="carousel-prev" href="#slide10">
              Previous
            </a>
            <a className="carousel-next" href="#slide1">
              Next
            </a>
          </div>
        </li>
      </ol>
    </section>
  </Layout>
)
