import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './Header'
import { Hero } from './Hero'
import { ProjectGrid } from './ProjectGrid'
import { About } from './About'
import { Contact } from './Contact'
import { Footer } from './Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ProjectGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  </StrictMode>,
)
