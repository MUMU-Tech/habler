import { FileText, Github, Play, Link as LinkIcon, Users, MessageSquare, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { useState } from "react"

interface Author {
  name: string
  affiliation: string
  url?: string
  isCorresponding?: boolean
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
  { name: "Jiangong Li", affiliation: "China Agricultural University", url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6014726", isCorresponding: true },
  { name: "Xiangfang Tang", affiliation: "Chinese Academy of Agricultural Sciences", url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=4907651", isCorresponding: true },
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
  const [commentName, setCommentName] = useState("")
  const [commentText, setCommentText] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCommentSubmit = async () => {
    if (!commentName.trim() || !commentText.trim()) {
      alert("Please enter your name and comment")
      return
    }

    setIsSubmitting(true)
    try {
      // 通过 mailto 打开邮件客户端发送评论
      window.location.href = `mailto:ai4as@caas.cn?subject=HABLer User Comment from ${encodeURIComponent(commentName)}&body=${encodeURIComponent(commentText)}`

      setCommentName("")
      setCommentText("")
    } catch (error) {
      console.error("Failed to submit comment:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-base">
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
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm"
          >
            {authors.map((author, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center gap-1">
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
                  {author.isCorresponding && (
                    <Badge variant="outline" className="text-xs">*corresponding author</Badge>
                  )}
                </div>
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
              Animal behavior annotation was critical for precision livestock management but was challenged by inconsistency of behavioral labeling, limited dataset quality, and expensive annotation processes. To overcome these issues, this study introduced the <strong>Humanoid Animal Behavior Labeler (HABLer)</strong>, integrated computer vision models, multimodal behavior recognition models, quantitative behavior metrics, and expert-driven corrections that formed a novel AI-assistant annotation workflow to save time and improve result consistency in animal behavior labeling task.
            </p>
            <p>
              To demonstrate the capability of HABLer, three short surveillance video samples featuring pigs and cattle were discussed in this study. The results indicated that an animal behavior expert with HABLer saved up to an average of <strong>65.7% manual time</strong> compared to traditional labeling workflow. HABLer achieved an average Mean over Frames (MoF) of <strong>0.8720</strong> and Intersection over Union (IoU) of <strong>0.9351</strong> at the initial round of annotation across three short posture annotation experiments, costing only <strong>11% to 22%</strong> of the manual annotation.
            </p>
            <p>
              In a 125-minute pig posture labeling task, HABLer helped save <strong>60% of annotation time</strong> and achieved an overall average of <strong>94% accuracy</strong> on the initial prediction of pigs' postures. This research demonstrated HABLer's general capabilities and extensive potentials in performing complex behavioral labeling tasks with respect to the limited examples in this research and opened the HABLer for all practitioners for promoting generative-AI applications in precision livestock farming (<a href="http://www.ai4as.cn/Tool/HABLER" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.ai4as.cn/Tool/HABLER</a>). Future improvement of the HABLer would enhance the robustness by extending its current capability across animal species and beyond animal postures through updating high performance computer vision algorithms and up-to-date VLMs. This pioneering approach represented a significant advancement in intelligent animal behavioral labeling, supporting scalable and reliable ethological applications for enlightening livestock welfare and management in the livestock production industry.
            </p>
          </div>
        </motion.section>

        <Separator />

        {/* Collaboration */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-foreground">Collaboration</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-lg border">
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-primary mt-1" />
              <div className="text-base leading-relaxed text-foreground">
                <p className="mb-3">
                  <strong>We aim to build a mutual platform with state-of-the-art models and outstanding achievements.</strong> If you are willing to integrate your animal detection, segmentation, and behavior recognition models into HABLer, please contact us at:
                </p>
                <a href="mailto:ai4as@caas.cn" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                  ai4as@caas.cn
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <Separator />

        {/* Demo Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
        </motion.section>

        <Separator />

        {/* Demo Videos */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-foreground">Demo Videos</h2>
          <div className="grid gap-4">
            <div className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-card/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Sheep group in pens</h4>
                <p className="text-sm text-muted-foreground">2025-10</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-card/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Dairy Cow in pens</h4>
                <p className="text-sm text-muted-foreground">2025-10</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-card/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Dairy Cow in Laboratory</h4>
                <p className="text-sm text-muted-foreground">2025-04</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-card/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Sow in Single Crate</h4>
                <p className="text-sm text-muted-foreground">2025-04</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-card/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Piglets grouping in pens</h4>
                <p className="text-sm text-muted-foreground">2025-04</p>
              </div>
            </div>
          </div>
        </motion.section>

        <Separator />

        {/* Tool Updates */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-foreground">Tool Updates</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-foreground">2025-12 (Upcoming)</h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• New UI features for interactive conversion with large vision-language models</li>
                <li>• Adding Qwen3-VL and DouBao Vision large vision-language models in HABLer</li>
                <li>• Adding posture classification model (YOLOv8) for animal behavior reasoning</li>
                <li>• Updating livestock detection models (re-trained with more data)</li>
              </ul>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-yellow-600" />
                <h3 className="font-semibold text-foreground">2025-10</h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Updating livestock detection and segmentation model from SAM to DAM4SAM</li>
                <li>• Accelerate the analysis processing module by parallel local data pipeline</li>
                <li>• <span className="text-red-600">Bug Fixed</span>: Different frame ratio caused incorrect interaction on ROI Area description</li>
                <li>• <span className="text-red-600">Bug Fixed</span>: Wrong detection results lead to the decrease of wrong number of annotation across the frame</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-green-600" />
                <h3 className="font-semibold text-foreground">2025-05</h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Added multi-language support for Chinese and English interfaces</li>
                <li>• Improved video processing speed by 40% through optimized algorithms</li>
                <li>• Enhanced VLM integration for better behavior recognition accuracy</li>
                <li>• Added batch annotation feature for processing multiple videos simultaneously</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <Separator />

        {/* User Comments */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-foreground">User Comments and Contribution</h2>
          <div className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg border">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-medium text-primary">
                  U1
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-foreground">User 1100101</span>
                    <span className="text-xs text-muted-foreground">2025-11-12</span>
                  </div>
                  <p className="text-sm text-foreground">
                    Comments: 5 tests per day is not enough for practices. We need more daily test quota for our research group.
                  </p>
                </div>
              </div>
            </div>

            {/* Comment Form */}
            <div className="bg-card p-6 rounded-lg border mt-6">
              <h3 className="font-semibold text-foreground mb-4">Leave a Comment</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-foreground mb-2">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Share your thoughts or feedback..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <Button
                  onClick={handleCommentSubmit}
                  disabled={isSubmitting}
                  className="flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Submit Comment"}
                </Button>
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
