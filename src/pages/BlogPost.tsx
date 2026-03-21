import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Clock, Tag } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="text-accent font-heading font-semibold">← Voltar para o blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article>
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm font-heading mb-8 transition-colors">
              <ArrowLeft size={16} /> Voltar ao blog
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1 text-accent text-xs font-heading font-semibold uppercase tracking-wider">
                <Tag size={12} /> {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-primary-foreground/60 text-xs font-body">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>
            <h1 className="font-heading text-2xl md:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
            <time className="font-body text-primary-foreground/50 text-sm">
              {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            </time>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none font-body text-foreground leading-relaxed">
                {post.content.split("\n\n").map((paragraph, i) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return <h2 key={i} className="font-heading text-xl font-semibold mt-8 mb-4">{paragraph.replace(/\*\*/g, "")}</h2>;
                  }
                  if (paragraph.match(/^\d+\./)) {
                    const items = paragraph.split("\n").filter(Boolean);
                    return (
                      <ol key={i} className="list-decimal pl-6 space-y-2 my-4">
                        {items.map((item, j) => (
                          <li key={j} className="text-muted-foreground">
                            <span dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n").filter(Boolean);
                    return (
                      <ul key={i} className="list-disc pl-6 space-y-2 my-4">
                        {items.map((item, j) => (
                          <li key={j} className="text-muted-foreground">
                            <span dangerouslySetInnerHTML={{ __html: item.replace(/^-\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogPost;
