import { useEffect, useRef } from 'react'
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { projects, type TableauDashboard, type TableauProject } from './data/projects'

type ResourceAction = {
  label: string
  url?: string
  variant: 'primary' | 'secondary'
}

const resourceActions = (project: TableauProject): ResourceAction[] => {
  const actions: ResourceAction[] = [
    {
      label: 'Datasource',
      url: project.datasourceUrl,
      variant: 'secondary',
    },
  ]

  if (project.twbUrl) {
    actions.push({
      label: 'Download TWB',
      url: project.twbUrl,
      variant: 'secondary',
    })
  }

  actions.push({
    label: 'Documentation',
    url: project.documentationUrl,
    variant: 'secondary',
  })

  return actions
}

function TableauScriptEmbed({
  dashboard,
}: {
  dashboard: TableauDashboard
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const scriptEmbed = dashboard.scriptEmbed

  useEffect(() => {
    const container = containerRef.current
    const currentScriptEmbed = dashboard.scriptEmbed

    if (!container || !currentScriptEmbed) {
      return
    }

    const vizElement = container.querySelector('object')

    if (!vizElement) {
      return
    }

    const applySize = () => {
      const objectElement = vizElement as HTMLObjectElement

      if (container.offsetWidth > 500) {
        objectElement.style.width = '100%'
        objectElement.style.height = currentScriptEmbed.desktopHeightRatio
          ? `${container.offsetWidth * currentScriptEmbed.desktopHeightRatio}px`
          : `${currentScriptEmbed.desktopHeight}px`
      } else {
        objectElement.style.width = '100%'
        objectElement.style.height = `${currentScriptEmbed.mobileHeight}px`
      }
    }

    applySize()
    window.addEventListener('resize', applySize)

    const existingScript = document.querySelector(
      'script[src="https://public.tableau.com/javascripts/api/viz_v1.js"]',
    )

    if (!existingScript) {
      const scriptElement = document.createElement('script')
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'
      vizElement.parentNode?.insertBefore(scriptElement, vizElement)
    }

    return () => {
      window.removeEventListener('resize', applySize)
    }
  }, [dashboard.scriptEmbed])

  if (!scriptEmbed) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className="tableau-placeholder"
      id={scriptEmbed.vizId}
      style={{ position: 'relative' }}
    >
      <noscript>
        <a href={dashboard.publicTableauUrl}>
          <img
            alt={dashboard.title}
            src={scriptEmbed.rssImage}
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: 'none' }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value={scriptEmbed.name} />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param name="static_image" value={scriptEmbed.staticImage} />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
      </object>
    </div>
  )
}

function DashboardEmbed({ dashboard }: { dashboard: TableauDashboard }) {
  if (dashboard.embedMode === 'tableau-script') {
    return <TableauScriptEmbed dashboard={dashboard} />
  }

  return (
    <iframe
      className="tableau-frame"
      src={dashboard.tableauUrl}
      title={`${dashboard.subtitle} ${dashboard.title}`}
      loading="lazy"
      allowFullScreen
    />
  )
}

function DashboardSection({
  dashboard,
}: {
  dashboard: TableauDashboard
}) {
  return (
    <section className={`dashboard-showcase dashboard-showcase--${dashboard.theme}`}>
      <div className="dashboard-showcase-header">
        <div className="dashboard-heading-card">
          <p className="eyebrow">{dashboard.categoryLabel}</p>
          <h2>{dashboard.title}</h2>
          <p className="dashboard-kicker">{dashboard.subtitle}</p>
          <p className="dashboard-summary">{dashboard.description}</p>
          <a
            className="button-link primary-button dashboard-open-button"
            href={dashboard.publicTableauUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open {dashboard.title} in Tableau
          </a>
        </div>
      </div>

      <div className="embed-panel dashboard-embed-panel">
        <DashboardEmbed dashboard={dashboard} />
      </div>
    </section>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
  )
}

function HomePage() {
  const navigate = useNavigate()

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>Aditya Kamath</h1>
          <p className="hero-role">
            Data &amp; Analytics Engineer | Tableau | Machine Learning | Cloud
          </p>
          <p className="hero-text">
            I design and build data-driven solutions that transform raw data
            into actionable insights. With experience in scalable data
            pipelines, machine learning systems, and interactive dashboards, I
            focus on delivering high-impact analytics for real-world
            decision-making.
          </p>
          <p className="hero-text hero-text-secondary">
            My work spans end-to-end data workflows from data preparation and
            modeling to visualization and deployment, ensuring both technical
            robustness and business clarity.
          </p>
        </div>
        <div className="hero-panel">
          <p>What I Bring</p>
          <ul className="hero-skill-list">
            <li>Advanced Tableau Dashboard Development</li>
            <li>Power BI</li>
            <li>Data Visualization & Storytelling</li>
            <li>Data Preparation (Cleaning, Shaping, Pivoting)</li>
            <li>SQL for Data Extraction & Transformation</li>
            <li>Python for Data Analysis & Automation</li>
            <li>ETL Pipeline Design & Optimization</li>
            <li>Exploratory Data Analysis (EDA)</li>
            <li>Interactive Dashboard Design</li>
          </ul>
          <a
            className="button-link primary-button hero-resume-button"
            href="https://drive.google.com/file/d/1hi27HSv_7dvDQhLHeNQDjtFK5ylQEcmG/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="section-header">
        <div>
          <p className="eyebrow">Projects</p>
          <h2>Tableau dashboards</h2>
        </div>
        <p className="section-copy">
          Every card opens a dedicated project view with an embedded dashboard
          and supporting action buttons.
        </p>
      </section>

      <section className="project-grid">
        {projects.map((project) => (
          <article
            className="project-card project-card-clickable"
            key={project.slug}
            onClick={() => navigate(`/projects/${project.slug}`)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate(`/projects/${project.slug}`)
              }
            }}
            role="link"
            tabIndex={0}
          >
            <div className="cover-badge">{project.coverLabel}</div>
            <div className="project-card-body">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.status}</span>
                <span>{project.dashboards.length} dashboards</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p>{project.description}</p>
            </div>
            <div className="project-card-footer">
              <Link
                className="button-link primary-button"
                to={`/projects/${project.slug}`}
                onClick={(event) => event.stopPropagation()}
              >
                View project
              </Link>
              <span className="project-card-note">
                {project.dashboards.length === 1 ? 'Single dashboard view' : 'Multi-dashboard view'}
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((entry) => entry.slug === slug)

  if (!project) {
    return (
      <main className="page-shell detail-page">
        <Link className="back-link" to="/">
          Back to projects
        </Link>
        <section className="missing-state">
          <p className="eyebrow">Project not found</p>
          <h1>This dashboard entry does not exist.</h1>
        </section>
      </main>
    )
  }

  return (
    <main className="page-shell detail-page">
      <Link className="back-link" to="/">
        Back to projects
      </Link>

      <section className="detail-hero">
        <div className="detail-copy">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="detail-subtitle">{project.subtitle}</p>
          <p className="detail-description">{project.description}</p>
          <div className="action-row detail-action-row">
            {resourceActions(project).map((action) =>
              action.url ? (
                <a
                  key={action.label}
                  className={`button-link ${action.variant === 'primary' ? 'primary-button' : 'secondary-button'}`}
                  href={action.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {action.label}
                </a>
              ) : (
                <button
                  key={action.label}
                  className="button-link disabled-button"
                  type="button"
                  disabled
                >
                  {action.label} • Coming soon
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="dashboard-stack">
        {project.dashboards.map((dashboard, index) => (
          <DashboardSection key={dashboard.slug} dashboard={dashboard} />
        ))}
      </section>
    </main>
  )
}

export default App
