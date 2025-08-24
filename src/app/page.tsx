import {
  Header,
  About,
  Stack,
  Experience,
  Projects,
  Contact,
  Footer,
  Navbar,
  Education
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-8" style={{
        backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        backgroundSize: '15px 15px',
        backgroundAttachment: 'fixed'
      }}></div>

      <section className="w-full border-t border-b border-gray-200 ">
        <div className="max-w-2xl mx-auto border-l border-r border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="h-52 flex items-center justify-center" style={{
                backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
                backgroundSize: '15px 15px',
                backgroundAttachment: 'fixed'}}>
                <img src="/main.png" alt="PJ" className="w-6/12 h-42 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      
      <div className="h-8" style={{
        backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        backgroundSize: '15px 15px',
        backgroundAttachment: 'fixed'
      }}></div>


      {/* Header Section */}
      <section className="w-full border-t border-b border-gray-200 bg-white">
        <div className="max-w-2xl mx-auto border-l border-r border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-1">
            <Header />
          </div>
        </div>
      </section>

      {/* Spacer with dotted background */}
      <div className="h-8" style={{
        backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        backgroundSize: '15px 15px',
        backgroundAttachment: 'fixed'
      }}></div>

      {/* Experience Section */}
      <section id="experience" className="w-full border-t border-b border-gray-200 bg-white">
        <div className="max-w-2xl mx-auto border-l border-r border-gray-200">
          <div className="max-w-4xl mx-auto px-8 py-12">
            <Experience />
          </div>
        </div>
      </section>

      {/* Spacer with dotted background */}
      <div className="h-8" style={{
        backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        backgroundSize: '15px 15px',
        backgroundAttachment: 'fixed'
      }}></div>

       {/* Stack Section */}
      <section id="stack" className="w-full border-t border-b border-gray-200 bg-white">
        <div className="max-w-2xl mx-auto border-l border-r border-gray-200">
          <div className="max-w-4xl mx-auto px-8 py-12">
            <Stack />
          </div>
        </div>
      </section>

      {/* Spacer with dotted background */}
      <div className="h-8" style={{
        backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        backgroundSize: '15px 15px',
        backgroundAttachment: 'fixed'
      }}></div>

      {/* Projects Section */}
      <section id="projects" className="w-full border-t border-b border-gray-200 bg-white">
        <div className="max-w-2xl mx-auto border-l border-r border-gray-200">
          <div className="max-w-4xl mx-auto px-8 py-12">
            <Projects />
          </div>
        </div>
      </section>

      {/* Spacer with dotted background */}
      <div className="h-8" style={{
        backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        backgroundSize: '15px 15px',
        backgroundAttachment: 'fixed'
      }}></div>

      {/* About Section */}
      <section className="w-full border-t border-b border-gray-200 bg-white">
        <div className="max-w-2xl mx-auto border-l border-r border-gray-200">
          <div className="max-w-4xl mx-auto px-8 py-12">
            <About />
          </div>
        </div>
      </section>

      {/* Spacer with dotted background */}
      <div className="h-8" style={{
        backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        backgroundSize: '15px 15px',
        backgroundAttachment: 'fixed'
      }}></div>


    {/* Education Section */}
      <section id="education" className="w-full border-t border-b border-gray-200 bg-white">
        <div className="max-w-2xl mx-auto border-l border-r border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-1">
            <Education />
          </div>
        </div>
      </section>

      {/* Spacer with dotted background */}
      <div className="h-8" style={{
        backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        backgroundSize: '15px 15px',
        backgroundAttachment: 'fixed'
      }}></div>


      {/* Contact Section */}
      <section id="contact" className="w-full border-t border-b border-gray-200 bg-white">
        <div className="max-w-2xl mx-auto border-l border-r border-gray-200">
          <div className="max-w-4xl mx-auto px-8 py-12">
            <Contact />
          </div>
        </div>
      </section>

      {/* Spacer with dotted background */}
      <div className="h-8" style={{
        backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
        backgroundSize: '15px 15px',
        backgroundAttachment: 'fixed'
      }}></div>

      {/* Footer Section */}
      <section className="w-full border-t border-b border-gray-200 bg-white">
        <div className="max-w-2xl mx-auto border-l border-r border-gray-200">
          <div className="max-w-4xl mx-auto px-8 py-12">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
