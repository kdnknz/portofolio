import React, { useEffect, useRef } from 'react'

const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let mouseX = 0
    let mouseY = 0
    const mouseTrail = []
    const maxTrailLength = 10

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking with trail
    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // Add to mouse trail
      mouseTrail.push({ x: mouseX, y: mouseY, time: Date.now() })
      
      // Remove old trail points
      while (mouseTrail.length > maxTrailLength) {
        mouseTrail.shift()
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Particle system
    const particles = []
    const particleCount = 60

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.8
        this.vy = (Math.random() - 0.5) * 0.8
        this.radius = Math.random() * 2.5 + 0.5
        this.opacity = Math.random() * 0.4 + 0.2
        this.color = this.getRandomColor()
      }

      getRandomColor() {
        const colors = [
          'rgba(102, 126, 234,',
          'rgba(118, 75, 162,',
          'rgba(240, 147, 251,',
          'rgba(245, 87, 108,',
          'rgba(251, 191, 36,',
          'rgba(255, 255, 255,'
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // Mouse interaction - repulsion effect
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 120) {
          const force = (120 - distance) / 120
          const angle = Math.atan2(dy, dx)
          this.vx -= Math.cos(angle) * force * 0.8
          this.vy -= Math.sin(angle) * force * 0.8
        }

        // Add slight attraction to mouse when far away
        if (distance > 200 && distance < 300) {
          const force = 0.0002
          this.vx += dx * force
          this.vy += dy * force
        }

        this.x += this.vx
        this.y += this.vy

        // Bounce off edges with some randomness
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -0.8
          this.vx += (Math.random() - 0.5) * 0.2
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -0.8
          this.vy += (Math.random() - 0.5) * 0.2
        }

        // Keep particles in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))

        // Damping
        this.vx *= 0.98
        this.vy *= 0.98

        // Add slight random movement
        this.vx += (Math.random() - 0.5) * 0.01
        this.vy += (Math.random() - 0.5) * 0.01
      }

      draw() {
        // Check if mouse is near this particle
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const isNearMouse = distance < 80

        let radius = this.radius
        let opacity = this.opacity
        let shadowBlur = 8

        if (isNearMouse) {
          const proximity = 1 - (distance / 80)
          radius = this.radius * (1 + proximity * 0.8)
          opacity = Math.min(1, this.opacity * (1 + proximity * 2))
          shadowBlur = 20 * (1 + proximity)
        }

        ctx.beginPath()
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2)
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, radius)
        gradient.addColorStop(0, `${this.color} ${opacity})`)
        gradient.addColorStop(0.7, `${this.color} ${opacity * 0.6})`)
        gradient.addColorStop(1, `${this.color} 0)`)
        
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Enhanced glow effect
        ctx.shadowBlur = shadowBlur
        ctx.shadowColor = `${this.color} ${opacity * 0.8})`
        
        // Add extra glow when mouse is near
        if (isNearMouse) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, radius * 1.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(251, 191, 36, ${opacity * 0.2})`
          ctx.fill()
        }
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

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            // Check if mouse is near this line
            const mouseToLine = distanceToLine(mouseX, mouseY, particle.x, particle.y, otherParticle.x, otherParticle.y)
            const isNearMouse = mouseToLine < 50 && distance < 200

            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            
            let opacity = 0.25 * (1 - distance / 150)
            let lineWidth = 1
            let strokeStyle = `rgba(255, 255, 255, ${opacity})`

            // Enhanced effect when mouse is near
            if (isNearMouse) {
              opacity = Math.min(0.6, opacity * 3)
              lineWidth = 2
              const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)
              gradient.addColorStop(0, `rgba(251, 191, 36, ${opacity})`)
              gradient.addColorStop(0.5, `rgba(102, 126, 234, ${opacity})`)
              gradient.addColorStop(1, `rgba(240, 147, 251, ${opacity})`)
              strokeStyle = gradient
              
              // Add glow effect
              ctx.shadowBlur = 15
              ctx.shadowColor = `rgba(251, 191, 36, ${opacity * 0.8})`
            } else {
              ctx.shadowBlur = 0
            }

            ctx.strokeStyle = strokeStyle
            ctx.lineWidth = lineWidth
            ctx.stroke()
          }
        })
      })

      // Draw mouse trail (subtle)
      if (mouseTrail.length > 1) {
        for (let i = 1; i < mouseTrail.length; i++) {
          const current = mouseTrail[i]
          const previous = mouseTrail[i - 1]
          const opacity = (i / mouseTrail.length) * 0.2
          
          ctx.beginPath()
          ctx.moveTo(previous.x, previous.y)
          ctx.lineTo(current.x, current.y)
          ctx.strokeStyle = `rgba(251, 191, 36, ${opacity})`
          ctx.lineWidth = 2 * (i / mouseTrail.length)
          ctx.shadowBlur = 5
          ctx.shadowColor = `rgba(251, 191, 36, ${opacity})`
          ctx.stroke()
        }
      }

      // Draw mouse connections to particles
      particles.forEach(particle => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(mouseX, mouseY)
          
          const opacity = 0.4 * (1 - distance / 100)
          const gradient = ctx.createLinearGradient(particle.x, particle.y, mouseX, mouseY)
          gradient.addColorStop(0, `rgba(102, 126, 234, ${opacity * 0.2})`)
          gradient.addColorStop(0.5, `rgba(251, 191, 36, ${opacity * 0.5})`)
          gradient.addColorStop(1, `rgba(251, 191, 36, ${opacity})`)
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = 1.5
          ctx.shadowBlur = 10
          ctx.shadowColor = `rgba(251, 191, 36, ${opacity * 0.3})`
          ctx.stroke()
        }
      })

      // Draw mouse cursor glow (subtle)
      if (mouseX > 0 && mouseY > 0) {
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 10, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 10)
        gradient.addColorStop(0, 'rgba(251, 191, 36, 0.15)')
        gradient.addColorStop(0.7, 'rgba(251, 191, 36, 0.05)')
        gradient.addColorStop(1, 'rgba(251, 191, 36, 0)')
        ctx.fillStyle = gradient
        ctx.fill()
      }

      // Helper function to calculate distance from point to line
      function distanceToLine(px, py, x1, y1, x2, y2) {
        const A = px - x1
        const B = py - y1
        const C = x2 - x1
        const D = y2 - y1

        const dot = A * C + B * D
        const lenSq = C * C + D * D
        let param = -1
        if (lenSq !== 0) param = dot / lenSq

        let xx, yy

        if (param < 0) {
          xx = x1
          yy = y1
        } else if (param > 1) {
          xx = x2
          yy = y2
        } else {
          xx = x1 + param * C
          yy = y1 + param * D
        }

        const dx = px - xx
        const dy = py - yy
        return Math.sqrt(dx * dx + dy * dy)
      }

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
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        mixBlendMode: 'screen'
      }}
    />
  )
}

export default ParticleBackground