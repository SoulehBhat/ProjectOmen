import { Link } from "react-router-dom"
import React from 'react'

const ComponentName = () => {
  return (
    <>
    <div className="head">
                <Link to="/">Main</Link>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <br></br>
                <h1>This is the Contact Page!</h1>
            </div>

    <div style={styles.container}>
      <div style={styles.glassCard}>
        <span style={styles.badge}>NEW</span>

        <h1 style={styles.title}>
          Build. <span style={styles.gradientText}>Create.</span> Shine.
        </h1>

        <p style={styles.subtitle}>
          A beautiful React component with modern UI vibes.
        </p>

        <div style={styles.actions}>
          <button style={styles.primaryBtn}>Get Started</button>
          <button style={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>
    </div>
    </>
  )
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background:
      'radial-gradient(circle at top left, #6366f1, #020617)',
  },
  glassCard: {
    backdropFilter: 'blur(16px)',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '24px',
    padding: '3rem',
    width: '380px',
    color: '#fff',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.2)',
    boxShadow: '0 0 40px rgba(99,102,241,0.6)',
  },
  badge: {
    display: 'inline-block',
    marginBottom: '1rem',
    padding: '6px 14px',
    borderRadius: '999px',
    background: 'linear-gradient(90deg, #22d3ee, #6366f1)',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '1px',
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: '800',
    marginBottom: '1rem',
  },
  gradientText: {
    background: 'linear-gradient(90deg, #22d3ee, #a855f7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1rem',
    opacity: 0.85,
    marginBottom: '2rem',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  primaryBtn: {
    padding: '12px 22px',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(90deg, #6366f1, #a855f7)',
    color: '#fff',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(99,102,241,0.6)',
  },
  secondaryBtn: {
    padding: '12px 22px',
    borderRadius: '12px',
    background: 'transparent',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.4)',
    cursor: 'pointer',
  },
}

export default ComponentName
