import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "./BlogPage";

function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    React.useEffect(() => {
      navigate("/blog");
    }, [navigate]);
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900/50 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            JD
          </Link>
          <Link
            to="/blog"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </nav>

      {/* Blog Post Content */}
      <article className="container mx-auto px-4 pt-32 pb-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              {post.title}
            </h1>
            <div className="flex justify-center gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden mb-12 shadow-lg shadow-blue-500/20">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none leading-relaxed mx-auto">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </motion.div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default BlogPostPage;
