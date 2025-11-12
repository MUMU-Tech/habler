import { FileText, Github, ExternalLink, Play, Link as LinkIcon, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

interface Author {
  name: string
  affiliation: string
  url?: string
}

interface ProjectLink {
  label: string
  url: string
  icon: React.ReactNode
  description: string
}

const authors: Author[] = [
  { name: "Mengting Zhou", affiliation: "Affiliation not provided to SSRN", url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6066341" },
  { name: "Siling Zhou", affiliation: "China Agricultural University", url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=7747371" },
  { name: "Benhai Xiong", affiliation: "Chinese Academy of Agricultural Sciences", url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=5668427" },
  { name: "Ryan N. Dilger", affiliation: "University of Illinois at Urbana-Champaign", url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6286841" },
  { name: "Zimu Li", affiliation: "University of Illinois at Urbana-Champaign", url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=7747372" },
  { name: "Isabella C.F.S. Condotta", affiliation: "University of Illinois at Urbana-Champaign", url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6286840" },
  { name: "Jiangong Li", affiliation: "China Agricultural University", url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6014726" },
  { name: "Xiangfang Tang", affiliation: "Chinese Academy of Agricultural Sciences", url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=4907651" },
]

// Academic project links following standard research paper format
const links: ProjectLink[] = [
  {
    label: "Paper",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5334337",
    icon: <FileText className="w-4 h-4" />,
    description: "Read the full paper on SSRN"
  },
  {
    label: "Code",
    url: "https://github.com/yourusername/habler", // TODO: 替换为实际的 GitHub 链接
    icon: <Github className="w-4 h-4" />,
    description: "View source code on GitHub"
  },
  {
    label: "Demo",
    url: "http://www.ai4as.cn/Tool/HABLER",
    icon: <Play className="w-4 h-4" />,
    description: "Try the interactive demo"
  },
  {
    label: "DOI",
    url: "https://dx.doi.org/10.2139/ssrn.5334337",
    icon: <LinkIcon className="w-4 h-4" />,
    description: "Persistent identifier"
  },
]

const tags = [
  "Precision Livestock Farming",
  "Vision-Language Models",
  "Computer Vision",
  "LLM",
  "Multimodal Recognition"
]

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* Header */}
        <header className="space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-3">
              Humanoid Animal Behavior Labeler
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              An Interactive Annotation Agent to Accelerate Ethological Applications in Precision Management of Animals Using Large Vision-Language Models
            </p>
          </motion.div>

          {/* Venue & Year */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <Badge variant="secondary">SSRN Preprint</Badge>
            <span>•</span>
            <span>Posted: July 1, 2025</span>
          </motion.div>

          {/* Authors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
          >
            {authors.map((author, idx) => (
              <div key={idx} className="text-center">
                {author.url ? (
                  <a
                    href={author.url}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {author.name}
                  </a>
                ) : (
                  <span className="text-foreground font-medium">{author.name}</span>
                )}
                <div className="text-xs text-muted-foreground">{author.affiliation}</div>
              </div>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {links.map((link, idx) => (
              <Button key={idx} variant="outline" asChild>
                <a href={link.url} className="gap-2" target="_blank" rel="noopener noreferrer">
                  {link.icon}
                  {link.label}
                </a>
              </Button>
            ))}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {tags.map((tag, idx) => (
              <Badge key={idx} variant="outline">
                {tag}
              </Badge>
            ))}
          </motion.div>
        </header>

        <Separator />

        {/* Abstract */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-foreground">Abstract</h2>
          <div className="text-base leading-relaxed text-muted-foreground space-y-4">
            <p>
              Animal behavior annotation is critical for precision livestock management but is challenged by the inconsistency of behavioral labeling, limited dataset quality, and expensive annotation processes. To overcome these issues, this study introduces the <strong>Humanoid Animal Behavior Labeler (HABLer)</strong>, an interactive annotation agent combining traditional computer vision techniques with large vision-language models (VLMs) for accelerating animal behavior annotations.
            </p>
            <p>
              HABLer integrates quantitative behavior metrics, multimodal behavior recognition, and expert-driven corrections through a structured annotation workflow, enhancing the efficiency and consistency of labeling animal behaviors. To demonstrate the efficacy of HABLer, three short surveillance video samples featuring pigs and cattle were discussed in this study.
            </p>
            <p>
              The results indicated that an animal behavior expert with HABLer <strong>saved up to 65.7% of reviewing time</strong> compared to manual labeling. HABLer achieved an average Mean over Frames (MoF) of <strong>0.8720</strong> and Intersection over Union (IoU) of <strong>0.9351</strong> at the initial round of annotation across three short posture annotation experiments, costing around 11% to 22% of the manual annotation.
            </p>
            <p>
              In a 125-minute pig posture labeling task, HABLer helped save <strong>60% of annotation time</strong> and achieved an overall average of <strong>94% accuracy</strong> on the initial prediction of pigs' postures. This pioneering approach represents a significant advancement in intelligent animal behavioral labeling, supporting scalable and reliable ethological applications for improved livestock welfare and management.
            </p>
          </div>
        </motion.section>

        <Separator />

        {/* Key Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-foreground">Key Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 p-6 rounded-xl border"
            >
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">65.7%</div>
              <div className="text-sm text-foreground">Time saved in reviewing compared to manual labeling</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 p-6 rounded-xl border"
            >
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">94%</div>
              <div className="text-sm text-foreground">Overall accuracy on initial prediction of pig postures</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950 dark:to-teal-950 p-6 rounded-xl border"
            >
              <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">60%</div>
              <div className="text-sm text-foreground">Annotation time saved in 125-minute pig posture task</div>
            </motion.div>
          </div>
        </motion.section>

        <Separator />

        {/* Demo Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-foreground">Interactive Demo</h2>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center group cursor-pointer border"
            onClick={() => window.open('http://www.ai4as.cn/Tool/HABLER', '_blank')}
          >
            <div className="text-center space-y-4">
              <div className="bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md w-24 h-24 mx-auto group-hover:scale-110 transition-transform">
                <div className="flex items-center justify-center bg-gradient-to-b from-primary/30 to-primary shadow-md rounded-full w-16 h-16">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Try HABLer Live</h3>
                <p className="text-sm text-muted-foreground">
                  Experience the interactive annotation agent with your own animal behavior videos
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-lg border bg-card">
              <h4 className="font-semibold text-foreground mb-2">Pig Behavior Tracking</h4>
              <p className="text-sm text-muted-foreground">
                Automated annotation of pig postures including standing, sitting, and lying behaviors with high accuracy and consistency.
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h4 className="font-semibold text-foreground mb-2">Cattle Monitoring</h4>
              <p className="text-sm text-muted-foreground">
                Efficient labeling of cattle behaviors for precision livestock management and welfare applications.
              </p>
            </div>
          </div>
        </motion.section>

        <Separator />

        {/* Release Plan / TODO */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-foreground">Release Plan</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
              <div className="mt-0.5">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground">Paper Release</div>
                <div className="text-sm text-muted-foreground">Published on SSRN - Available for download</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
              <div className="mt-0.5">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground">Demo Release</div>
                <div className="text-sm text-muted-foreground">Interactive annotation tool available at ai4as.cn</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border bg-card/50">
              <div className="mt-0.5">
                <div className="w-5 h-5 rounded-full border-2 border-yellow-500 flex items-center justify-center text-yellow-500 text-xs">○</div>
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground">Code Release</div>
                <div className="text-sm text-muted-foreground">Source code and models - Coming soon on GitHub</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border bg-card/50">
              <div className="mt-0.5">
                <div className="w-5 h-5 rounded-full border-2 border-yellow-500 flex items-center justify-center text-yellow-500 text-xs">○</div>
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground">Dataset Release</div>
                <div className="text-sm text-muted-foreground">Annotated animal behavior dataset - In preparation</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border bg-card/50">
              <div className="mt-0.5">
                <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-400 text-xs">○</div>
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground">Video Tutorial</div>
                <div className="text-sm text-muted-foreground">Usage guide and demonstration video - Planned</div>
              </div>
            </div>
          </div>
        </motion.section>

        <Separator />

        {/* Citation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-foreground">Citation</h2>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`@article{zhou2025habler,
  title={Humanoid Animal Behavior Labeler: An Interactive Annotation Agent to Accelerate
         Ethological Applications in Precision Management of Animals Using Large Vision-Language Models},
  author={Zhou, Mengting and Zhou, Siling and Xiong, Benhai and Dilger, Ryan N. and Li, Zimu
          and Condotta, Isabella C.F.S. and Li, Jiangong and Tang, Xiangfang},
  journal={SSRN Electronic Journal},
  year={2025},
  doi={10.2139/ssrn.5334337}
}`}
          </pre>
        </motion.section>

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm pt-8 border-t">
          <p>
            HABLer is open for all practitioners to promote generative-AI applications in precision livestock farming.
          </p>
          <p className="mt-2">
            For questions and collaboration, please visit the{" "}
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5334337"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              SSRN page
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
