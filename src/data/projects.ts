export type ProjectStatus = 'Live' | 'Live'

export type EmbedMode = 'iframe' | 'tableau-script'
export type DashboardTheme = 'copper' | 'marine' | 'clay' | 'forest'

export type TableauDashboard = {
  slug: string
  title: string
  subtitle: string
  description: string
  publicTableauUrl: string
  tableauUrl: string
  categoryLabel: string
  theme: DashboardTheme
  embedMode?: EmbedMode
  scriptEmbed?: {
    vizId: string
    name: string
    staticImage: string
    rssImage: string
    desktopHeight: number
    mobileHeight: number
    desktopHeightRatio?: number
  }
}

export type TableauProject = {
  slug: string
  title: string
  subtitle: string
  description: string
  datasourceUrl?: string
  twbUrl?: string
  documentationUrl?: string
  category: string
  status: ProjectStatus
  coverLabel: string
  dashboards: TableauDashboard[]
}

const withEmbedParams = (url: string) => {
  const embedUrl = new URL(url)
  embedUrl.searchParams.set(':showVizHome', 'no')
  embedUrl.searchParams.set(':embed', 'yes')
  embedUrl.searchParams.set(':toolbar', 'bottom')
  return embedUrl.toString()
}

export const projects: TableauProject[] = [
  {
    slug: 'tableau-assignment-1',
    title: 'Global Happiness Insights',
    subtitle: 'Tableau',
    description:
      'An interactive data visualization dashboard analyzing global happiness trends and their relationship with key socio-economic factors such as education, gender equality, and digital connectivity, enabling data-driven insights into national well-being.',
    category: 'Project',
    status: 'Live',
    coverLabel: 'Assignment 1',
    datasourceUrl:
      'https://drive.google.com/drive/folders/18evNkxiDC9AbCvPSpNZ7D5mpw6bhVxYi?usp=share_link',
    documentationUrl: '/docs/aditya-kamath-tableau-assignment-1-1.pdf',
    twbUrl:
      'https://drive.google.com/file/d/13nr-7Mpp2Qm-e7lOohM6TIvoCgw0Xod9/view?usp=sharing',
    dashboards: [
      {
        slug: 'assignment-1-dashboard-1',
        title: 'Global distribution and factor relationships',
        subtitle: 'Happiness score geography and socio-economic correlations',
        description:
          'This dashboard shows the global distribution of happiness scores and the relationships between happiness, years of schooling, internet usage, and gender inequality.',
        publicTableauUrl:
          'https://public.tableau.com/app/profile/aditya.suresh.kamath/viz/TableauAssignment1_17745752024720/Dashboard1',
        tableauUrl: withEmbedParams(
          'https://public.tableau.com/app/profile/aditya.suresh.kamath/viz/TableauAssignment1_17745752024720/Dashboard1',
        ),
        categoryLabel: 'Assignment dashboard',
        theme: 'copper',
        embedMode: 'tableau-script',
        scriptEmbed: {
          vizId: 'viz1774586047542',
          name: 'TableauAssignment1_17745752024720/Dashboard1',
          staticImage:
            'https://public.tableau.com/static/images/Ta/TableauAssignment1_17745752024720/Dashboard1/1.png',
          rssImage:
            'https://public.tableau.com/static/images/Ta/TableauAssignment1_17745752024720/Dashboard1/1_rss.png',
          desktopHeight: 827,
          mobileHeight: 1227,
        },
      },
      {
        slug: 'assignment-1-dashboard-2',
        title: 'Country ranking and tourism comparison',
        subtitle: 'Inbound tourism and comparative happiness views',
        description:
          'This dashboard compares country-level happiness scores with international inbound tourism using ranked lists, bar charts, and grouped views for low and high scoring countries.',
        publicTableauUrl:
          'https://public.tableau.com/app/profile/aditya.suresh.kamath/viz/TableauAssignment1_17745752024720/Dashboard2',
        tableauUrl: withEmbedParams(
          'https://public.tableau.com/app/profile/aditya.suresh.kamath/viz/TableauAssignment1_17745752024720/Dashboard2',
        ),
        categoryLabel: 'Assignment dashboard',
        theme: 'marine',
        embedMode: 'tableau-script',
        scriptEmbed: {
          vizId: 'viz1774586343680',
          name: 'TableauAssignment1_17745752024720/Dashboard2',
          staticImage:
            'https://public.tableau.com/static/images/Ta/TableauAssignment1_17745752024720/Dashboard2/1.png',
          rssImage:
            'https://public.tableau.com/static/images/Ta/TableauAssignment1_17745752024720/Dashboard2/1_rss.png',
          desktopHeight: 827,
          mobileHeight: 1427,
        },
      },
    ],
  },
  {
    slug: 'tableau-assignment-2',
    title: 'Sales vs Target Performance Analysis',
    subtitle: 'Tableau',
    description:
      'An interactive sales performance dashboard comparing actual sales against predefined targets across time, geography, and product dimensions to highlight trends, underperformance, and business opportunities.',
    category: 'Project',
    status: 'Live',
    coverLabel: 'Assignment 2',
    datasourceUrl:
      'https://drive.google.com/drive/folders/1_XH20DXRTRv-oALQjNpT55_p1RUbre6M?usp=sharing',
    documentationUrl: '/docs/sales-vs-target-performance-analysis.pdf',
    twbUrl:
      'https://drive.google.com/file/d/1XVC8IoOrMGiAoZbpchfrXt9HszpwhQVL/view?usp=sharing',
    dashboards: [
      {
        slug: 'assignment-2-dashboard-1',
        title: 'Sales vs target performance dashboard',
        subtitle: 'Actual versus target performance across five linked views',
        description:
          'This dashboard evaluates whether sales targets are being achieved across multiple dimensions, using integrated visualizations and filters to surface trends, strong-performing segments, and underperformance.',
        publicTableauUrl:
          'https://public.tableau.com/app/profile/aditya.suresh.kamath/viz/Tableauassignment2_17745767567540/Dashboard1',
        tableauUrl: withEmbedParams(
          'https://public.tableau.com/app/profile/aditya.suresh.kamath/viz/Tableauassignment2_17745767567540/Dashboard1',
        ),
        categoryLabel: 'Assignment dashboard',
        theme: 'clay',
        embedMode: 'tableau-script',
        scriptEmbed: {
          vizId: 'viz1774613830410',
          name: 'Tableauassignment2_17745767567540/Dashboard1',
          staticImage:
            'https://public.tableau.com/static/images/Ta/Tableauassignment2_17745767567540/Dashboard1/1.png',
          rssImage:
            'https://public.tableau.com/static/images/Ta/Tableauassignment2_17745767567540/Dashboard1/1_rss.png',
          desktopHeight: 0,
          mobileHeight: 1877,
          desktopHeightRatio: 0.75,
        },
      },
    ],
  },
  {
    slug: 'eda-2-1',
    title: 'Exploratory Data Analysis on Citi Bike Data',
    subtitle: 'Tableau',
    description:
      'An exploratory Tableau dashboard examining Citi Bike trip history patterns to surface usage trends, rider behavior, and operational insights from the public system dataset.',
    category: 'Project',
    status: 'Live',
    coverLabel: 'EDA',
    datasourceUrl: 'https://citibikenyc.com/system-data',
    documentationUrl: '/docs/exploratory-data-analysis-on-citi-bike-data.pdf',
    dashboards: [
      {
        slug: 'eda-2-dashboard-2',
        title: 'Citi Bike trip history dashboard',
        subtitle: 'Trip trends, rider patterns, and system-level exploration',
        description:
          'This dashboard explores Citi Bike trip history data to reveal trends in ridership, trip behavior, and network usage through an interactive exploratory analysis view.',
        publicTableauUrl:
          'https://public.tableau.com/app/profile/aditya.kamath7829/viz/EDA2_1/Dashboard2',
        tableauUrl: withEmbedParams(
          'https://public.tableau.com/app/profile/aditya.kamath7829/viz/EDA2_1/Dashboard2',
        ),
        categoryLabel: 'EDA dashboard',
        theme: 'forest',
        embedMode: 'tableau-script',
        scriptEmbed: {
          vizId: 'viz1774614477145',
          name: 'EDA2_1/Dashboard2',
          staticImage:
            'https://public.tableau.com/static/images/ED/EDA2_1/Dashboard2/1.png',
          rssImage:
            'https://public.tableau.com/static/images/ED/EDA2_1/Dashboard2/1_rss.png',
          desktopHeight: 0,
          mobileHeight: 2577,
          desktopHeightRatio: 0.75,
        },
      },
    ],
  },
]
