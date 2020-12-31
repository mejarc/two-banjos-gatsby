/* eslint-disable */
import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
  
    <h2>Portfolio</h2>
    <p>Some details on a few of the sites and applications I've worked on.</p>
    <details> 
        <summary>
          Cambria Center for the Arts
        </summary>
     <p>
          A work in progress: front-end components for a vibrant, busy arts
          center's Web site, serving up announcements, ticket sales, gallery
          images, and event calendars.
        </p>
      </details>
      <details>
        <summary>
          Auto-not
        </summary>
        <p>
          Irritated into action by HTML5's <code>autoplay</code> attribute on
          <code> video</code> elements, I built a Chrome browser extension to
          zap these videos from a web page.
        </p>
      </details>
      <details>
        <summary>
          GE Global Research
        </summary>
        <p>
          Wrangled an ornery herd of Grunt scripts, Bower packages, and Twitter
          Bootstrap forks into the{" "}
          <a href="http://www.creativebloq.com/netmag/using-bootstrap-complex-design-systems-7133781">
            Industrial Internet Design System (IIDS)
          </a>
          , a framework of browser-side components for Java and .NET developers
          to use in their applications.
        </p>
      </details>
      <details>
        <summary>
          Fresh Step
        </summary>
        <p>
          Was handed a few debugging issues on a catchy, consumer-oriented site
          with lots of HTML5/CSS3/jQuery doodads. My bigger task: maintaining
          focus while proofreading Web copy about desirable properties in cat
          litter.
        </p>
      </details>
      <details>
        <summary>
          Smartleaf
        </summary>
        <p>
          I created interface elements for a remarkably abstruse application for
          some obscure form of investing you and I will probably never make.
          Really gained appreciation for what genius user interface designers
          like Gino Lee can do with such difficult requirements.
        </p>
       
      </details>
      <details>
        <summary>
          TripIt
        </summary>
        <p>
          Joined two other developers and the two company founders at one big
          table; found this to be a really productive and satisfying setup. Lots
          of quick changes to Symfony (PHP) templates in CSS and YUI JavaScript
          modules.
        </p>
      </details>
      <details>
        <summary>
          Vox Blog Themes
        </summary>
        <p>
          Sigh. This was a great project: to separate markup and design so
          completely that a user could change her blog theme with the click of
          one button. We were clobbered by Facebook.
        </p>
      </details>
      <details>
        <summary>
          Errands On The Way
        </summary>
        <p>
          I joined Jason, Christine, and Ryan in a very satisfying week of
          test-driven development, on a mobile-first Rails application helping
          the user find places to fulfill her errands along a given route.
        </p>
      </details>

      <details>
        <summary>
          The Addis Group
        </summary>
        <p>
          I designed, planned, and built a content management system (CMS) in
          PHP to enable this award-winning branding agency to update its
          redeveloped Web site with high-quality images and content.
        </p>
      </details>
      <details>
        <summary>
          City of Houston
        </summary>
        <p>
          Served all visitors to the redesigned site for the 4th largest city in
          the U.S. with fully accessible (Section 508/WCAG AA) markup and CSS.
        </p>
      </details>
  </Layout>
)
