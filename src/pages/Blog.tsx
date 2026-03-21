import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { blogPosts } from "@/data/blogPosts";
import { Clock, Tag } from "lucide-react";

const Blog = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            Insights práticos sobre cibersegurança, conformidade e proteção de dados para empresas brasileiras.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block p-8 rounded-lg bg-card border border-border hover:shadow-lg hover:shadow-accent/5 transition-all hover:border-accent/20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1 text-accent text-xs font-heading font-semibold uppercase tracking-wider">
                      <Tag size={12} /> {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground text-xs font-body">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading font-semibold text-xl mb-3 group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <time className="font-body text-muted-foreground/60 text-xs">
                    {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                  </time>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
