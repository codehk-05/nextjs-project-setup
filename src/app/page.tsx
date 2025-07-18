"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const teamPositions = [
  {
    title: "Software Engineer",
    description: "Build scalable applications and innovative solutions using modern technologies",
    formUrl: "https://forms.gle/abc123xyz"
  },
  {
    title: "Robotics Engineer",
    description: "Design and develop cutting-edge robotic systems and automation solutions",
    formUrl: "https://forms.gle/def456uvw"
  },
  {
    title: "AI/ML Engineer",
    description: "Create intelligent systems and machine learning models for real-world applications",
    formUrl: "https://forms.gle/ghi789rst"
  },
  {
    title: "DevOps Engineer",
    description: "Manage infrastructure and deployment pipelines for scalable systems",
    formUrl: "https://forms.gle/jkl012mno"
  },
  {
    title: "UI/UX Designer",
    description: "Craft exceptional user experiences and interfaces for our products",
    formUrl: "https://forms.gle/pqr345stu"
  },
  {
    title: "Data Scientist",
    description: "Analyze data and extract meaningful insights to drive business decisions",
    formUrl: "https://forms.gle/vwx678yza"
  },
  {
    title: "Cybersecurity Specialist",
    description: "Protect systems and ensure security compliance across all platforms",
    formUrl: "https://forms.gle/bcd901efg"
  },
  {
    title: "Product Manager",
    description: "Lead product strategy and coordinate cross-functional teams",
    formUrl: "https://forms.gle/hij234klm"
  }
]

export default function REDQBITLanding() {
  const [hoveredPosition, setHoveredPosition] = useState<string | null>(null)

  const handleApplyClick = (formUrl: string) => {
    console.log('Opening form:', formUrl)
    window.open(formUrl, '_blank', 'noopener,noreferrer')
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-900/30 to-gray-800/30 border border-red-800/50 rounded-lg">
              <span className="text-red-400 font-semibold tracking-wider">
                WELCOME TO THE FUTURE OF TECHNOLOGY
              </span>
            </div>
          </div>
          
          <div className="mb-4 flex flex-col items-center">
            <img 
              src="/RED4-Photoroom1.png" 
              alt="REDQBIT Logo" 
              className="h-40 md:h-48 w-auto"
            />
            <div className="text-base text-gray-500 tracking-[0.3em] mt-2">
              INNOVATION • TECHNOLOGY • ROBOTICS
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Pioneering the convergence of Information Technology and Robotics to build tomorrow's solutions today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-900 hover:bg-red-800 text-white px-8 py-6 text-lg"
              onClick={() => scrollToSection('team-section')}
            >
              Join Our Team
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg"
              onClick={() => scrollToSection('about-section')}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About REDQBIT
            </h2>
            <Separator className="w-24 mx-auto bg-red-900 mb-6" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're not just another tech company. We're architects of the future, building bridges between 
              information technology and robotics to create solutions that transform industries and improve lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-lg">
                  To build a diverse team of exceptional tech professionals who push the boundaries 
                  of what's possible in IT and robotics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-lg">
                  To be the leading force in creating intelligent, automated solutions that 
                  revolutionize how businesses operate and people live.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-lg">
                  Innovation, collaboration, and excellence drive everything we do. We believe 
                  in building technology that serves humanity.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team-section" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Join Our Team
            </h2>
            <Separator className="w-24 mx-auto bg-red-900 mb-6" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're looking for passionate individuals who want to shape the future of technology. 
              Explore our open positions and become part of something extraordinary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamPositions.map((position, index) => (
              <Card 
                key={index}
                className={`bg-gray-900 border-gray-800 transition-all duration-300 cursor-pointer
                  ${hoveredPosition === position.title ? 'transform -translate-y-2 shadow-2xl shadow-red-900/20' : ''}`}
                onMouseEnter={() => setHoveredPosition(position.title)}
                onMouseLeave={() => setHoveredPosition(null)}
                onClick={() => handleApplyClick(position.formUrl)}
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl">{position.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 mb-4">
                    {position.description}
                  </CardDescription>
                  <Button 
                    className="w-full bg-red-900 hover:bg-red-800 text-white"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleApplyClick(position.formUrl)
                    }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Don't see a position that matches your skills? We're always looking for exceptional talent.
            </p>
            <Button 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => handleApplyClick("https://forms.gle/general-form")}
            >
              General Application
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4 flex flex-col items-center">
            <img 
              src="/RED4-Photoroom1.png" 
              alt="REDQBIT Logo" 
              className="h-20 md:h-24 w-auto"
            />
            <div className="text-sm text-gray-500 tracking-[0.2em] mt-1">
              INNOVATION • TECHNOLOGY • ROBOTICS
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Building the future, one innovation at a time.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <span>© 2025 REDQBIT. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
