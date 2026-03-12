import React, { useEffect, useRef } from 'react'

const HeroParticles = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let mouseX = 0
    let mouseY = 0

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Particle system
    const particles = []
    const particleCount = 40

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 3 + 1
        this.opacity = Math.random() * 0.8 + 0.4
      }

      update() {
        // Mouse interaction
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const force = (100 - distance) / 100
          const angle = Math.atan2(dy, dx)
          this.vx -= Math.cos(angle) * force * 0.3
          this.vy -= Math.sin(angle) * force * 0.3
        }

        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1

        // Keep in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))

        // Damping
        this.vx *= 0.99
        this.vy *= 0.99
      }

      draw() {
        // Check if mouse is near
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const isNearMouse = distance < 60

        let radius = this.radius
        let opacity = this.opacity

        if (isNearMouse) {
          const proximity = 1 - (distance / 60)
          radius = this.radius * (1 + proximity * 0.5)
          opacity = Math.min(1, this.opacity * (1 + proximity))
        }

        ctx.beginPath()
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.shadowBlur = 10
        ctx.shadowColor = `rgba(255, 255, 255, ${opacity * 0.5})`
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections with high contrast
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            
            const opacity = 0.9 * (1 - distance / 120)
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 2
            ctx.shadowBlur = 8
            ctx.shadowColor = `rgba(255, 255, 255, ${opacity * 0.8})`
            ctx.stroke()
          }
        })
      })

      // Mouse connections
      particles.forEach(particle => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 80) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(mouseX, mouseY)
          
          const opacity = 1 * (1 - distance / 80)
          ctx.strokeStyle = `rgba(251, 191, 36, ${opacity})`
          ctx.lineWidth = 3
          ctx.shadowBlur = 15
          ctx.shadowColor = `rgba(251, 191, 36, ${opacity})`
          ctx.stroke()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  )
}

export default HeroParticles