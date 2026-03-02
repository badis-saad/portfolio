export interface Project {
  title: string
  description: string
  image?: string
  teamSize: number
  type: string
  technologies: string[]
  extraImages?: string[]
  detailedDescription?: string
  technicalDetails?: string
  learned?: string
  sources?: string[]
  featured?: boolean
  order: number
}
